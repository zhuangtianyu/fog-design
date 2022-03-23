const fs = require('fs');
const path = require('path');

const writeDocsConfig = () => {
  const componentNames = fs.readdirSync(path.resolve('src/components/'));

  const configJson = componentNames.reduce((accumulator, componentName) => {
    const demoPath = path.resolve(`src/components/${componentName}/demo/index.tsx`);
    const demoContent = fs.readFileSync(demoPath).toString();
    const configItem = { demoContent };

    return { ...accumulator, [componentName]: configItem };
  }, {});

  const config = JSON.stringify(configJson);

  const outputDir = path.resolve('static');
  const outputPath = path.join(outputDir, 'docs-config.json');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
    fs.writeFileSync(outputPath, config);
  } else {
    const existed = fs.readFileSync(outputPath).toString();

    if (existed !== config) {
      fs.writeFileSync(outputPath, config);
    }
  }
};

class DocsParsePlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap('DocsParsePlugin', () => {
      writeDocsConfig();
    });
  }
}

module.exports = DocsParsePlugin;
