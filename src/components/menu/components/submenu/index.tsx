import * as React from 'react';
import { useState, useLayoutEffect, useRef, useMemo, useContext } from 'react';
import namespace from '@namespace';
import Icon from '@components/icon';
import { MenuContext, renderChildren } from '../../utils';
import './index.less';

export type ValueType = number | string | null | any;

export interface SubMenuProps {
  label: string;
  value?: ValueType;
  children: React.ReactElement | React.ReactElement[];
  /** --skip */
  floorIndex?: number;
}

const { prefix } = namespace;

export const SubMenu: React.FC<SubMenuProps> = props => {
  const {
    label,
    value,
    children,
    floorIndex,
  } = props;

  const { opens, onOpenChange } = useContext(MenuContext);

  const open = useMemo(() => opens.includes(value), [value, opens]);

  const contentRef = useRef<HTMLDivElement>(null);

  const [transitionHeight, setTransitionHeight] = useState<number | string>('auto');

  const transitionDuration = useMemo(() => {
    const duration = Math.ceil(Number(transitionHeight) * 0.1) * 0.01;

    return duration > 0.3 ? 0.3 : duration;
  }, [transitionHeight]);

  const handleTitleClick = () => {
    if (open) {
      onOpenChange(opens.filter(item => item !== value));
    } else {
      onOpenChange([...opens, value]);
    }
  };

  useLayoutEffect(() => {
    if (ResizeObserver && contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { height } = contentRef.current.getBoundingClientRect();

        setTransitionHeight(height);
      });

      resizeObserver.observe(contentRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

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
      <div
        className={`${prefix}-menu-submenu__transition`}
        style={{
          overflow: 'hidden',
          transition: `all ${transitionDuration}s`,
          height: open ? transitionHeight : 0,
        }}
      >
        <div
          className={`${prefix}-menu-submenu__content`}
          ref={contentRef}
        >
          {renderChildren(children, floorIndex + 1)}
        </div>
      </div>
    </div>
  );
};

SubMenu.defaultProps = {
  floorIndex: 1,
};

export default SubMenu;
