import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '../../../layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.drawer;

const DrawerDemo = () => {

  return (
    <div className="drawer-demo">
      <h1>Drawer</h1>
      <p>Drawer is used as a popup layer from side of window.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        description="Open drawer on the right side of window."
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Placement"
        description="Open drawer with custom popup placement."
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default DrawerDemo;
