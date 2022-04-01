import * as React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import namespace from '@namespace';
import Transition from '@components/transition';
import Icon from '@components/icon';
import { setRafTimeout, cancelRafTimeout } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export interface MessageProps  {
  /** --skip */
  className?: string;
  icon?: React.ReactNode;
  content?: React.ReactChild;
}

export interface MessageMethodProps extends MessageProps {
  visible?: boolean;
  duration?: number;
}

export interface MessageReference {
  destroy: () => void;
}

export interface MessageTypes extends React.FC<MessageProps> {
  info: (props: MessageMethodProps) => MessageReference;
  error: (props: MessageMethodProps) => MessageReference;
  warning: (props: MessageMethodProps) => MessageReference;
  success: (props: MessageMethodProps) => MessageReference;
  destroyAll: () => void;
}

const InfoIcon = () => <Icon type="info-circle-fill" color="var(--fog-primary-color)" />;
const ErrorIcon = () => <Icon type="close-circle-fill" color="var(--fog-danger-color)" />;
const WarningIcon = () => <Icon type="sigh-circle-fill" color="var(--fog-warning-color)" />;
const SuccessIcon = () => <Icon type="success-circle-fill" color="var(--fog-success-color)" />;

export const Message: MessageTypes = props => {
  const { className, icon, content } = props;

  return (
    <div className={classnames(`${prefix}-message`, className)}>
      {icon && (
        <div className={`${prefix}-message__icon`}>
          {icon}
        </div>
      )}
      <div className={`${prefix}-message__content`}>
        {content}
      </div>
    </div>
  );
};

Message.defaultProps = {
  icon: <InfoIcon />,
};

let referenceList = [];

const mountRoot = document.createElement('div');

mountRoot.style.position = 'fixed';
mountRoot.style.top = '0px';
mountRoot.style.left = '0px';
mountRoot.style.right = '0px';
mountRoot.style.zIndex = '10';
mountRoot.style.pointerEvents = 'none';

document.body.appendChild(mountRoot);

Message.info = (props: MessageMethodProps) => {
  const messageItemRoot = document.createElement('div');

  messageItemRoot.style.textAlign = 'center';
  mountRoot.appendChild(messageItemRoot);

  let closeTimer;

  const renderMessage = (props: MessageMethodProps) => {
    const {
      visible = true,
      duration = 3000,
      ...messageProps
    } = props;

    if (visible) {
      if (duration !== 0) {
        closeTimer = setRafTimeout(closeHandler, duration);
      }
    } else {
      cancelRafTimeout(closeTimer);
    }

    ReactDOM.render(
      <Transition
        visible={visible}
        beforeEnter={`${prefix}-message--before-enter`}
        entering={`${prefix}-message--entering`}
        entered={`${prefix}-message--entered`}
        leaving={`${prefix}-message--leaving`}
        onLeft={() => {
          ReactDOM.unmountComponentAtNode(messageItemRoot);
          mountRoot.contains(messageItemRoot) && mountRoot.removeChild(messageItemRoot);
        }}
      >
        <Message {...messageProps} />
      </Transition>,
      messageItemRoot,
    );
  };

  const closeHandler = () => {
    renderMessage({ ...props, visible: false });
    referenceList = referenceList.filter(item => item !== reference);
  };

  renderMessage(props);

  const reference = { destroy: closeHandler };

  referenceList.push(reference);

  return reference;
};

Message.error = props => Message.info({ icon: <ErrorIcon />, ...props });
Message.warning = props => Message.info({ icon: <WarningIcon />, ...props });
Message.success = props => Message.info({ icon: <SuccessIcon />, ...props });

Message.destroyAll = () => {
  while (referenceList.length) {
    const reference = referenceList.pop();

    reference.destroy();
  }
};

export default Message;
