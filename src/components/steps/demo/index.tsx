import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.steps;

const StepsDemo = () => {

  return (
    <div className="steps-demo">
      <LinkHeader>Steps</LinkHeader>
      <p>Steps is used to display the current step.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Vertical"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default StepsDemo;
