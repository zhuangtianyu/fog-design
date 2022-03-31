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

const getApiRows = filePath => {
  const [component] = parse(filePath);

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
    const componentDir = path.resolve(`src/components/${componentName}`);
    const componentPath = path.join(componentDir, './index.tsx');
    const demos = getDemos(componentName);
    const apiRows = { default: getApiRows(componentPath) };
    const subcomponentDir = path.join(componentDir, './components');

    if (fs.existsSync(subcomponentDir)) {
      const subcomponentPayload = {};
      const subcomponentNames = fs.readdirSync(subcomponentDir);

      subcomponentNames.forEach(subcomponentName => {
        subcomponentPath = path.join(subcomponentDir, subcomponentName, './index.tsx');
        subcomponentPayload[subcomponentName] = getApiRows(subcomponentPath);
      });

      Object.assign(apiRows, subcomponentPayload);
    }

    return { ...accumulator, [componentName]: { demos, apiRows } };
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
    const existedString = fs.readFileSync(outputPath).toString();
    const existedJson = JSON.parse(existedString);

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
        const componentsDir = path.resolve('src/components');

        if (filePaths.length === 1 && filePaths[0] === docsConfigPath) return;

        const componentNames =
          filePaths
            .filter(item => !fs.lstatSync(item).isDirectory())
            .filter(item => item.startsWith(componentsDir))
            .map(item => item.replace(`${componentsDir}/`, '').split('/')[0]);

        writeDocsConfig(componentNames);
      }
    });
  }
}

module.exports = DocsParsePlugin;
