import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components['input-number'];

const InputNumberDemo = () => {

  return (
    <div className="input-number-demo">
      <h1>InputNumber</h1>
      <p>InputNumber is used to type numeric text.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Prefix"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Suffix"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default InputNumberDemo;
