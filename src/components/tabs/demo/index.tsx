import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.tabs;

const TabsDemo = () => {

  return (
    <div className="tabs-demo">
      <LinkHeader>Tabs</LinkHeader>
      <p>Tabs is used to display a set of navigation options.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default TabsDemo;
