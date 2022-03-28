const fs = require('fs');
const path = require('path');
const docgen = require('react-docgen-typescript');

const { parse } = docgen.withDefaultConfig({
  propFilter: prop => {
    const fromNodeModules =
      prop.parent &&
      prop.parent.fileName.includes('node_modules');

    if (fromNodeModules) return false;
    if (prop.description.includes('--skip')) return false;

    return true;
  },
  shouldExtractLiteralValuesFromEnum: true,
  savePropValueAsString: true,
});

const getApiRows = componentName => {
  const componentPath = path.resolve(`src/components/${componentName}/index.tsx`);
  const [component] = parse(componentPath);

  if (!component) return [];

  const { props } = component;

  const getPropType = prop => {
    const { name, value } = prop.type;

    if (name === 'enum' && Array.isArray(value)) {
      const values = value.map(item => item.value.replace(/[\\"]/g, ''));

      return values.join(' | ');
    }

    return name;
  };

  const getPropDefaultValue = prop => {
    const { defaultValue } = prop;

    if (defaultValue === null) return '-';

    return defaultValue.value;
  };

  return Object.values(props).map(prop => {
    const name = prop.name;
    const type = getPropType(prop);
    const defaultValue = getPropDefaultValue(prop);
    const description = prop.description || '-';

    return { name, type, defaultValue, description };
  });
};

const getDemos = componentName => {
  const demoPath = path.resolve(`src/components/${componentName}/demo`);

  return fs
      .readdirSync(demoPath)
      .filter(filename => filename.startsWith('demo-'))
      .reduce((accumulator, filename) => {
        const name = path.basename(filename, '.tsx');
        const content = fs.readFileSync(path.join(demoPath, filename)).toString();

        return { ...accumulator, [name]: content };
      }, {});
};

const writeDocsConfig = componentNames => {
  componentNames = componentNames || fs.readdirSync(path.resolve('src/components/'));

  const components = componentNames.reduce((accumulator, componentName) => {
    const demos = getDemos(componentName);
    const apiRows = getApiRows(componentName);
    const configItem = { demos, apiRows };

    return { ...accumulator, [componentName]: configItem };
  }, {});

  const apiColumns = [
    { key: 'name', name: 'Property' },
    { key: 'type', name: 'Type' },
    { key: 'defaultValue', name: 'Default' },
    { key: 'description', name: 'Description' },
  ];

  const configJson = { components, apiColumns };
  const configString = JSON.stringify(configJson);

  const outputDir = path.resolve('static');
  const outputPath = path.join(outputDir, 'docs-config.json');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
    fs.writeFileSync(outputPath, configString);
  } else {
    const existedJson = JSON.parse(fs.readFileSync(outputPath).toString());
    const existedString = JSON.stringify(existedJson);

    if (existedString !== configString) {
      const components = { ...existedJson.components, ...configJson.components };

      fs.writeFileSync(outputPath, JSON.stringify({ components, apiColumns }));
    }
  }
};

class DocsParsePlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap('DocsParsePlugin', () => {
      writeDocsConfig();
    });

    compiler.hooks.watchRun.tap('DocsParsePlugin', () => {
      if (compiler.modifiedFiles) {
        const filePaths = Array.from(compiler.modifiedFiles);
        const docsConfigPath = path.resolve('static/docs-config.json');

        if (filePaths.length === 1 && filePaths[0] === docsConfigPath) return;

        const componentNames =
          filePaths
            .filter(item => !fs.lstatSync(item).isDirectory())
            .map(item => item.replace(`${path.resolve('src/components')}/`, '').split('/')[0]);

        writeDocsConfig(componentNames);
      }
    });
  }
}

module.exports = DocsParsePlugin;
