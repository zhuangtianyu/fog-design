import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '../../../layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.button;

const ButtonDemo = () => {

  return (
    <div className="button-demo">
      <h1>Button</h1>
      <p>Button is used to trigger events, such as click events, etc.</p>
      <h2>Demo</h2>
      <Demo
        title="Type"
        description="Use different type in different scenes."
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Icon"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Loading"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Disabled"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="Danger"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows} />
    </div>
  );
};

export default ButtonDemo;
