import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.select;

const SelectDemo = () => {

  return (
    <div className="select-demo">
      <h1>Select</h1>
      <p>Select is used to provide a set of operations.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Multiple Mode"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Disabled"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Clearable"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <h2>API</h2>
      <h3>Select</h3>
      <Table columns={apiColumns} data={apiRows.default} />
      <h3>Option</h3>
      <Table columns={apiColumns} data={apiRows.option} />
    </div>
  );
};

export default SelectDemo;
