import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.radio;

const RadioDemo = () => {

  return (
    <div className="radio-demo">
      <LinkHeader>Radio</LinkHeader>
      <p>Radio is used to select unique value.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Disabled"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Group"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Button Group"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <h2>API</h2>
      <h3>Radio</h3>
      <Table columns={apiColumns} data={apiRows.default} />
      <h3>Radio.Group</h3>
      <Table columns={apiColumns} data={apiRows.group} />
      <h3>Radio.Button</h3>
      <Table columns={apiColumns} data={apiRows.button} />
    </div>
  );
};

export default RadioDemo;
