import * as React from 'react';
import namespace from '@namespace';
import { renderChildren } from '../../utils';
import './index.less';

export type ValueType = number | string | null | any;

export interface MenuItemGroupProps {
  label: string;
  value?: ValueType;
  children: React.ReactElement | React.ReactElement[];
  /** --skip */
  floorIndex?: number;
}

const { prefix } = namespace;

export const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  const {
    label,
    value,
    children,
    floorIndex,
  } = props;

  return (
    <div className={`${prefix}-menu-item-group`} key={value}>
      <div
        className={`${prefix}-menu-item-group__label`}
        style={{ paddingLeft: floorIndex * 24 - 12 }}
      >
        {label}
      </div>
      <div className={`${prefix}-menu__group-content`}>
        {renderChildren(children, floorIndex)}
      </div>
    </div>
  );
};

MenuItemGroup.defaultProps = {
  floorIndex: 1,
};

export default MenuItemGroup;
