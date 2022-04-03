import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.trigger;

const TriggerDemo = () => {

  return (
    <div className="trigger-demo">
      <h1>Trigger</h1>
      <p>Trigger is used to trigger the popup layer.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Trigger"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Placement"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Resizable"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="Scroll Container"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default TriggerDemo;
