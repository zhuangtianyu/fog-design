import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import SubMenu, { SubMenuProps } from './components/submenu';
import MenuItemGroup, { MenuItemGroupProps } from './components/menu-item-group';
import MenuItem, { MenuItemProps } from './components/menu-item';
import { MenuContext, renderChildren } from './utils';
import './index.less';

export {
  SubMenuProps,
  MenuItemGroupProps,
  MenuItemProps,
};

export type ValueType = number | string | null | any;

export interface MenuProps  {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: (value: ValueType) => void;
  opens?: ValueType[];
  defaultOpens?: ValueType[];
  onOpenChange?: (opens: ValueType[]) => void;
  children: React.ReactElement | React.ReactElement[];
}

export interface MenuTypes extends React.FC<MenuProps> {
  SubMenu: typeof SubMenu;
  ItemGroup: typeof MenuItemGroup;
  Item: typeof MenuItem;
}

const { prefix } = namespace;

export const Menu: MenuTypes = props => {
  const {
    className,
    style,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    opens: opensFromProps,
    defaultOpens: defaultOpensFromProps,
    onOpenChange: onOpenChangeFromProps,
    children,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const { value: opens = [], onChange: onOpenChange } = useControlled({
    value: opensFromProps,
    defaultValue: defaultOpensFromProps,
    onChange: onOpenChangeFromProps,
  });

  const context = {
    value,
    onChange,
    opens,
    onOpenChange,
  };

  return (
    <div
      className={classnames(`${prefix}-menu`, className)}
      style={style}
    >
      <MenuContext.Provider value={context}>
        {renderChildren(children)}
      </MenuContext.Provider>
    </div>
  );
};

Menu.defaultProps = {};

Menu.SubMenu = SubMenu;
Menu.ItemGroup = MenuItemGroup;
Menu.Item = MenuItem;

export default Menu;
