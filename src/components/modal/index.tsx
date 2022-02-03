import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import namespace from '@namespace';
import classnames from 'classnames';
import Button from '@components/button';
import Transition from '@components/transition';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

interface ModalProps {
  className?: string;
  visible?: boolean;
  width?: number;
  title?: React.ReactChild;
  content?: React.ReactChild;
  showClose?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
  escClosable?: boolean;
  maskClosable?: boolean;
  unmountNodeAfterLeave?: boolean;
  onCancel?: () => void;
  onConfirm?: () => Promise<any> | any;
  afterClose?: () => void;
}

interface ModalReference {
  update: (props: ModalProps) => void;
  destroy: () => void;
}

interface ModalTypes extends React.FC<ModalProps> {
  confirm: (props: ModalProps) => ModalReference;
  destroyAll: () => void;
}

const Modal: ModalTypes = props => {
  const {
    className,
    visible,
    width,
    title,
    content,
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
    afterClose,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCancel = () => isFunction(onCancel) && onCancel();

  const handleConfirm = () => isFunction(onConfirm) && onConfirm();

  const handleMaskClick = () => maskClosable && handleCancel();

  useEffect(() => {
    if (visible && escClosable) {
      const handleKeyDown = (event: KeyboardEvent) => {
        event.key === 'Escape' &&
        modalRef.current.contains(document.activeElement) &&
        handleCancel();
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [visible, escClosable]);

  useEffect(() => {
    setTimeout(() => {
      visible && modalRef.current?.focus();
    });
  }, [visible, modalRef.current]);

  return (
    <Transition
      visible={visible}
      timeout={300}
      beforeEnter={`${prefix}-modal--before-enter`}
      entering={`${prefix}-modal--entering`}
      entered={`${prefix}-modal--entered`}
      leaving={`${prefix}-modal--leaving`}
      unmountNodeAfterLeave={unmountNodeAfterLeave}
      onLeft={afterClose}
    >
      <div
        className={classnames(`${prefix}-modal`, className)}
        ref={modalRef}
        tabIndex={-1}
      >
        <div
          className={`${prefix}-modal__mask`}
          onClick={handleMaskClick}
        />
        <div
          className={`${prefix}-modal__content`}
          style={{ width }}
        >
          <div className={`${prefix}-modal__header`}>
            <div className={`${prefix}-modal__title`}>
              {title}
            </div>
            {showClose && (
              <div className={`${prefix}-modal__close`} onClick={handleCancel}>
                <Icon type="close" size={18} />
              </div>
            )}
          </div>
          <div className={`${prefix}-modal__body`}>
            {children || content}
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

let referenceList = [];

Modal.confirm = props => {
  const mountRoot = document.createElement('div');
  let lastProps = props;

  document.body.appendChild(mountRoot);

  const renderModal = props => {
    const {
      visible = true,
      content,
      onCancel,
      onConfirm,
      afterClose,
      ...restProps
    } = props;

    lastProps = props;

    ReactDOM.render(
      <Modal
        visible={visible}
        onCancel={() => {
          isFunction(onCancel) && onCancel();
          closeHandler();
        }}
        onConfirm={() => {
          isFunction(onConfirm) && onConfirm();
          closeHandler();
        }}
        afterClose={() => {
          isFunction(afterClose) && afterClose();
          ReactDOM.unmountComponentAtNode(mountRoot);
          document.body.removeChild(mountRoot);
        }}
        {...restProps}
      >
        {content}
      </Modal>,
      mountRoot,
    );
  };

  const closeHandler = () => {
    renderModal({ ...lastProps, visible: false });
    referenceList = referenceList.filter(item => item !== reference);
  };

  const updateHandler = payload => renderModal({ ...lastProps, ...payload });

  renderModal(props);

  const reference = {
    update: updateHandler,
    destroy: closeHandler,
  };

  referenceList.push(reference);

  return reference;
};

Modal.destroyAll = () => {
  while (referenceList.length) {
    const reference = referenceList.pop();

    reference.destroy();
  }
};

export default Modal;
