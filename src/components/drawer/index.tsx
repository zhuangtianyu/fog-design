import React, { useEffect, useRef, useMemo } from 'react';
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
  width?: number | string;
  height?: number | string;
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

  const direction = useMemo(() => {
    if (['left', 'right'].includes(placement)) return 'horizontal';
    if (['top', 'bottom'].includes(placement)) return 'vertical';

    return undefined;
  }, [placement]);

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
            width: direction === 'horizontal' ? width : 'auto',
            height: direction === 'vertical' ? height : 'auto',
          }}
        >
          {
            typeof title !== 'undefined'
              ? <div className={`${prefix}-drawer__header`}>
                  <div className={`${prefix}-drawer__title`}>
                    {title}
                  </div>
                  {showClose && (
                    <div className={`${prefix}-drawer__close`} onClick={handleClose}>
                      <Icon type="close" size={18} />
                    </div>
                  )}
                </div>
              : showClose && (
                  <div
                    className={classnames(
                      `${prefix}-drawer__close`,
                      `${prefix}-drawer__close--isolated`,
                    )}
                    onClick={handleClose}
                  >
                    <Icon type="close" size={18} />
                  </div>
                )
          }
          <div className={`${prefix}-drawer__body`}>
            {children}
          </div>
        </div>
      </div>
    </Transition>
  );
};

Drawer.defaultProps = {
  width: 300,
  height: 300,
  visible: false,
  placement: 'right',
  showClose: true,
  escClosable: true,
  maskClosable: true,
  unmountNodeAfterLeave: true,
};

export default Drawer;
