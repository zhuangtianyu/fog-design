import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.grid;

const GridDemo = () => {

  return (
    <div className="grid-demo">
      <h1>Grid</h1>
      <p>Grid is used to layout elements proportionally.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Gutter"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <h2>API</h2>
      <h3>Row</h3>
      <Table columns={apiColumns} data={apiRows.row} />
      <h3>Col</h3>
      <Table columns={apiColumns} data={apiRows.col} />
    </div>
  );
};

export default GridDemo;
