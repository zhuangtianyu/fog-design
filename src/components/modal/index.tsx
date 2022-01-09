import React, { useEffect } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Button from '@components/button';
import Transition from '@components/transition';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

interface ModalProps {
  className?: string;
  visible?: boolean;
  width?: number;
  title?: React.ReactChild,
  showClose?: boolean,
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
  escClosable?: boolean;
  maskClosable?: boolean;
  unmountNodeAfterLeave?: boolean;
  onCancel?: () => void;
  onConfirm?: () => Promise<any> | any;
}

const Modal: React.FC<ModalProps> = props => {
  const {
    className,
    visible,
    width,
    title,
    children,
    showClose,
    showCancel,
    cancelText,
    confirmText,
    escClosable,
    maskClosable,
    unmountNodeAfterLeave,
    onCancel,
    onConfirm,
  } = props;

  const handleCancel = () => isFunction(onCancel) && onCancel();

  const handleConfirm = () => isFunction(onConfirm) && onConfirm();

  const handleMaskClick = () => maskClosable && handleCancel();

  const handleContentClick = event => event.stopPropagation();

  useEffect(() => {
    if (visible && escClosable) {
      const handleKeyDown = (event: KeyboardEvent) => {
        event.key === 'Escape' && handleCancel();
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [visible, escClosable]);

  return (
    <Transition
      visible={visible}
      timeout={300}
      beforeEnter={`${prefix}-modal--before-enter`}
      entering={`${prefix}-modal--entering`}
      entered={`${prefix}-modal--entered`}
      leaving={`${prefix}-modal--leaving`}
      unmountNodeAfterLeave={unmountNodeAfterLeave}
    >
      <div className={classnames(`${prefix}-modal`, className)}>
        <div
          className={`${prefix}-modal__mask`}
          onClick={handleMaskClick}
        >
          <div
            className={`${prefix}-modal__content`}
            style={{ width }}
            onClick={handleContentClick}
          >
            <div className={`${prefix}-modal__header`}>
              <div className={`${prefix}-modal__title`}>
                {title}
              </div>
              {showClose && (
                <div className={`${prefix}-modal__close`} onClick={handleCancel} />
              )}
            </div>
            <div className={`${prefix}-modal__body`}>
              {children}
            </div>
            <div className={`${prefix}-modal__footer`}>
              {showCancel && (
                <Button onClick={handleCancel}>{cancelText}</Button>
              )}
              <Button type="primary" onClick={handleConfirm}>
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

Modal.defaultProps = {
  width: 420,
  visible: false,
  showClose: true,
  showCancel: true,
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  escClosable: true,
  maskClosable: true,
  unmountNodeAfterLeave: true,
};

export default Modal;
