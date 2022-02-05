import React from 'react';
import SubMenu from './components/submenu';
import MenuItemGroup from './components/menu-item-group';
import MenuItem from './components/menu-item';

export const MenuContext = React.createContext(null);

export const renderChildren = (children, floorIndex = 1) => {
  const childrenEnhanced = [];

  React.Children.forEach(children, item => {
    const childComponents = [SubMenu, MenuItemGroup, MenuItem];

    if (childComponents.includes(item.type)) {
      childrenEnhanced.push(React.cloneElement(item, {
        floorIndex,
        value: item.props.value ?? item.key,
      }));
    }
  });

  return childrenEnhanced;
};
