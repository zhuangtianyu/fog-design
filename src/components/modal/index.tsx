import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import namespace from '@namespace';
import classnames from 'classnames';
import Button, { ButtonProps } from '@components/button';
import Transition from '@components/transition';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

const asyncHandler = (handler, onPending, onFinally) => {
  if (isFunction(handler)) {
    const pending = handler();
    const isPromise = isFunction(pending?.then);

    if (isPromise) {
      isFunction(onPending) && onPending();

      pending.finally(() => {
        isFunction(onFinally) && onFinally();
      });
    } else {
      isFunction(onFinally) && onFinally();
    }
  }
};

interface ModalProps {
  /** --skip */
  className?: string;
  visible?: boolean;
  width?: number;
  title?: React.ReactChild;
  content?: React.ReactChild;
  showClose?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  confirmText?: string;
  cancelLoading?: boolean;
  confirmLoading?: boolean;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
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

export const Modal: ModalTypes = props => {
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
    cancelLoading,
    confirmLoading,
    cancelButtonProps,
    confirmButtonProps,
    escClosable,
    maskClosable,
    unmountNodeAfterLeave,
    onCancel,
    onConfirm,
    afterClose,
  } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  const [innerCancelLoading, setInnerCancelLoading] = useState<boolean>(false);
  const [innerConfirmLoading, setInnerConfirmLoading] = useState<boolean>(false);

  const handleCancel = () => asyncHandler(
    onCancel,
    () => setInnerCancelLoading(true),
    () => setInnerCancelLoading(false),
  );

  const handleConfirm = () => asyncHandler(
    onConfirm,
    () => setInnerConfirmLoading(true),
    () => setInnerConfirmLoading(false),
  );

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
              <Button
                loading={
                  innerCancelLoading ||
                  cancelLoading ||
                  cancelButtonProps?.loading
                }
                onClick={handleCancel}
                {...cancelButtonProps}
              >
                {cancelText}
              </Button>
            )}
            <Button
              type="primary"
              loading={
                innerConfirmLoading ||
                confirmLoading ||
                confirmButtonProps?.loading
              }
              onClick={handleConfirm}
              {...confirmButtonProps}
            >
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
  cancelButtonProps: {},
  confirmButtonProps: {},
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
          asyncHandler(
            isFunction(onCancel) ? onCancel : () => {},
            () => updateHandler({ cancelLoading: true }),
            () => {
              updateHandler({ cancelLoading: false });
              closeHandler();
            }
          );
        }}
        onConfirm={() => {
          asyncHandler(
            isFunction(onConfirm) ? onConfirm : () => {},
            () => updateHandler({ confirmLoading: true }),
            () => {
              updateHandler({ confirmLoading: false });
              closeHandler();
            }
          );
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

  const updateHandler = (payload: ModalProps) => renderModal({ ...lastProps, ...payload });

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
