import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import Demo6 from './demo-6';
import Demo7 from './demo-7';
import Demo8 from './demo-8';
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
        title="Disabled"
        content={<Demo7 />}
        code={demos['demo-7']}
      />
      <Demo
        title="Range"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <Demo
        title="Enter"
        content={<Demo6 />}
        code={demos['demo-6']}
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
      <Demo
        title="ShowControl"
        content={<Demo8 />}
        code={demos['demo-8']}
      />
      <Demo
        title="KeepControl"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default InputNumberDemo;
