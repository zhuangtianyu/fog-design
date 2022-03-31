import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '../../../layouts/demo';
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
const { demos, apiRows } = components.input;

const InputDemo = () => {

  return (
    <div className="input-demo">
      <h1>Input</h1>
      <p>Input is used to type text.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Clearable"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Prefix"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Suffix"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="Disabled"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <Demo
        title="ReadOnly"
        content={<Demo6 />}
        code={demos['demo-6']}
      />
      <Demo
        title="Password"
        content={<Demo7 />}
        code={demos['demo-7']}
      />
      <Demo
        title="TextArea"
        content={<Demo8 />}
        code={demos['demo-8']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default InputDemo;
