import React, { useContext } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { MenuContext } from '../../utils';
import './index.less';

export type ValueType = number | string | null | any;

export interface MenuItemProps {
  label?: string;
  value?: ValueType;
  children?: React.ReactElement | React.ReactElement[];
  floorIndex?: number;
}

const { prefix } = namespace;

const MenuItem: React.FC<MenuItemProps> = props => {
  const {
    label,
    value,
    children,
    floorIndex,
  } = props;

  const { value: menuValue, onChange } = useContext(MenuContext);

  const handleClick = () => {
    value !== menuValue && onChange(value);
  };

  return (
    <div
      className={classnames({
        [`${prefix}-menu-item`]: true,
        [`${prefix}-menu-item--active`]: value === menuValue,
      })}
      style={{ paddingLeft: floorIndex * 24 }}
      onClick={handleClick}
    >
      {label ?? children}
    </div>
  );
};

MenuItem.defaultProps = {
  floorIndex: 1,
};

export default MenuItem;
