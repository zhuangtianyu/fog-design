import fs from 'fs';
import path from 'path';
import * as docgen from 'react-docgen-typescript';

const { parse } = docgen.withDefaultConfig({
  propFilter: prop => {
    if (!prop.parent) return true;

    return !prop.parent.fileName.includes('node_modules/@types/react');
  },
});

const parsed = parse(path.resolve('src/components/button/index.tsx'));

const result = JSON.stringify(parsed, null, 2);

fs.writeFileSync(path.resolve(__dirname, './result.json'), result);
