import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.menu;

const MenuDemo = () => {

  return (
    <div className="menu-demo">
      <h1>Menu</h1>
      <p>Menu is used to display the collection of entries.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <h2>API</h2>
      <h3>Menu</h3>
      <Table columns={apiColumns} data={apiRows.default} />
      <h3>Menu.Item</h3>
      <Table columns={apiColumns} data={apiRows['menu-item']} />
      <h3>Menu.ItemGroup</h3>
      <Table columns={apiColumns} data={apiRows['menu-item-group']} />
      <h3>Menu.SubMenu</h3>
      <Table columns={apiColumns} data={apiRows.submenu} />
    </div>
  );
};

export default MenuDemo;
