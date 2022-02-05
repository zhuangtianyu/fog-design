import React from 'react';
import Menu from '@components/menu';
import './index.less';

const { SubMenu, ItemGroup, Item } = Menu;

const MenuDemo = () => {

  return (
    <div className="menu-demo">
      <h2>Menu</h2>
      <h3>Basic Usage</h3>
      <Menu
        style={{
          width: 240,
          borderRight: '1px solid var(--fog-border-color)',
        }}
        defaultOpens={['Navigation 1', 'Navigation 2', 'SubMenu']}
        defaultValue="Option 1"
      >
        <SubMenu label="Navigation 1" key="Navigation 1">
          <ItemGroup label="Group-1" key="Group-1">
            <Item label="Option 1" key="Option 1" />
            <Item label="Option 2" key="Option 2" />
          </ItemGroup>
          <ItemGroup label="Group-2" key="Group-2">
            <Item label="Option 3" key="Option 3" />
            <Item label="Option 4" key="Option 4" />
          </ItemGroup>
        </SubMenu>
        <SubMenu label="Navigation 2" key="Navigation 2">
          <Item label="Option 5" key="Option 5" />
          <Item label="Option 6" key="Option 6" />
          <SubMenu label="SubMenu" key="SubMenu">
            <Item label="Option 7" key="Option 7" />
            <Item label="Option 8" key="Option 8" />
          </SubMenu>
        </SubMenu>
        <Item label="Option 9" key="Option 9" />
        <Item label="Option 10" key="Option 10" />
      </Menu>
    </div>
  );
};

export default MenuDemo;
