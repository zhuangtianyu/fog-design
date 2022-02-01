import React, { useEffect, useRef } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Transition from '@components/transition';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

interface DrawerProps {
  className?: string;
  visible?: boolean;
  width?: number;
  height?: number;
  title?: React.ReactChild;
  placement?: string;
  showClose?: boolean;
  escClosable?: boolean;
  maskClosable?: boolean;
  unmountNodeAfterLeave?: boolean;
  onClose?: () => void;
  afterClose?: () => void;
}

const Drawer: React.FC<DrawerProps> = props => {
  const {
    className,
    visible,
    width,
    height,
    title,
    children,
    placement,
    showClose,
    escClosable,
    maskClosable,
    unmountNodeAfterLeave,
    onClose,
    afterClose,
  } = props;

  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => isFunction(onClose) && onClose();

  const handleMaskClick = () => maskClosable && handleClose();

  useEffect(() => {
    if (visible && escClosable) {
      const handleKeyDown = (event: KeyboardEvent) => {
        event.key === 'Escape' &&
        drawerRef.current.contains(document.activeElement) &&
        handleClose();
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [visible, escClosable]);

  useEffect(() => {
    setTimeout(() => {
      visible && drawerRef.current?.focus();
    });
  }, [visible, drawerRef.current]);

  return (
    <Transition
      visible={visible}
      timeout={300}
      beforeEnter={`${prefix}-drawer--before-enter`}
      entering={`${prefix}-drawer--entering`}
      entered={`${prefix}-drawer--entered`}
      leaving={`${prefix}-drawer--leaving`}
      unmountNodeAfterLeave={unmountNodeAfterLeave}
      onLeft={afterClose}
    >
      <div
        className={classnames(
          className,
          `${prefix}-drawer`,
          `${prefix}-drawer--${placement}`,
        )}
        ref={drawerRef}
        tabIndex={-1}
      >
        <div
          className={`${prefix}-drawer__mask`}
          onClick={handleMaskClick}
        />
        <div
          className={`${prefix}-drawer__content`}
          style={{
            width: ['left', 'right'].includes(placement) ? width : 'auto',
            height: ['top', 'bottom'].includes(placement) ? height : 'auto',
          }}
        >
          <div className={`${prefix}-drawer__header`}>
            <div className={`${prefix}-drawer__title`}>
              {title}
            </div>
            {showClose && (
              <div className={`${prefix}-drawer__close`} onClick={handleClose}>
                <Icon type="close" size={16} />
              </div>
            )}
          </div>
          <div className={`${prefix}-drawer__body`}>
            {children}
          </div>
        </div>
      </div>
    </Transition>
  );
};

Drawer.defaultProps = {
  width: 360,
  height: 300,
  visible: false,
  placement: 'right',
  showClose: true,
  escClosable: true,
  maskClosable: true,
  unmountNodeAfterLeave: true,
};

export default Drawer;
