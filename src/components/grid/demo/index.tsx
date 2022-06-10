import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import Demo6 from './demo-6';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.grid;

const GridDemo = () => {

  return (
    <div className="grid-demo">
      <LinkHeader>Grid</LinkHeader>
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
      <Demo
        title="Justify"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Align"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="Offset"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <Demo
        title="Wrap"
        content={<Demo6 />}
        code={demos['demo-6']}
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
