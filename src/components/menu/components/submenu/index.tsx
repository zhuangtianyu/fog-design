import React, { useMemo, useContext } from 'react';
import namespace from '@namespace';
import Icon from '@components/icon';
import { MenuContext, renderChildren } from '../../utils';
import './index.less';

export type ValueType = number | string | null | any;

export interface SubMenuProps {
  label: string;
  value: ValueType;
  children: React.ReactElement | React.ReactElement[];
  floorIndex?: number;
}

const { prefix } = namespace;

const SubMenu: React.FC<SubMenuProps> = props => {
  const {
    label,
    value,
    children,
    floorIndex,
  } = props;

  const { opens, onOpenChange } = useContext(MenuContext);

  const open = useMemo(() => opens.includes(value), [value, opens]);

  const handleTitleClick = () => {
    if (open) {
      onOpenChange(opens.filter(item => item !== value));
    } else {
      onOpenChange([...opens, value]);
    }
  };

  return (
    <div className={`${prefix}-menu-submenu`}>
      <div
        className={`${prefix}-menu-submenu__title`}
        style={{ paddingLeft: floorIndex * 24 }}
        onClick={handleTitleClick}
      >
        <div className={`${prefix}-menu-submenu__label`}>
          {label}
        </div>
        <Icon type={open ? 'up' : 'down'} />
      </div>
      {open && (
        <div className={`${prefix}-menu-submenu__content`}>
          {renderChildren([].concat(children), floorIndex + 1)}
        </div>
      )}
    </div>
  );
};

SubMenu.defaultProps = {
  floorIndex: 1,
};

export default SubMenu;
