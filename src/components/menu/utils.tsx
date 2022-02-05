import React from 'react';
import SubMenu from './components/submenu';
import MenuItemGroup from './components/menu-item-group';
import MenuItem from './components/menu-item';

export const MenuContext = React.createContext(null);

export const renderChildren = (list, floorIndex = 1) => list.map(item => {
  const childComponents = [SubMenu, MenuItemGroup, MenuItem];

  if (childComponents.includes(item.type)) {
    return React.cloneElement(item, { floorIndex });
  }

  return null;
});
