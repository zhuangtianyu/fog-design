import fs from 'fs';
import path from 'path';
import * as docgen from 'react-docgen-typescript';
import { PropItem } from 'react-docgen-typescript';

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

const renderComponentDoc = componentName => {
  const [component] = parse(path.resolve(`src/components/${componentName}/index.tsx`));

  if (component) {
    const { props } = component;

    const getPropType = (prop: PropItem) => {
      const { name, value } = prop.type;

      if (name === 'enum' && Array.isArray(value)) {
        const values = value.map(item => item.value.replace(/[\\"]/g, ''));

        return `\`${values.join(' | ')}\``;
      }

      return name;
    };

    const getPropDefaultValue = (prop: PropItem) => {
      const { defaultValue } = prop;

      if (defaultValue === null) return '-';

      return defaultValue.value;
    };

    const propsRows = Object.values(props).map(prop => {
      const name = prop.name;
      const type = getPropType(prop);
      const defaultValue = getPropDefaultValue(prop);
      const description = prop.description || '-';

      return `| ${name} | ${type} | ${defaultValue} | ${description} |`;
    });

    const md =
      `## ${component.displayName}\n\n` +
      `${component.description}\n\n` +
      '| Property | Type | Default | Description |\n' +
      '| :- | :- | :- | :- |\n' +
      propsRows.join('\n');

    fs.writeFileSync(path.resolve(__dirname, `${componentName}-doc.md`), md);
  }
};

renderComponentDoc('button');
