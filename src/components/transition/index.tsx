import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { setRafTimeout } from '@utils/index';

interface TransitionProps  {
  visible?: boolean;
  timeout?: number;
  unmountNodeAfterLeave?: boolean;
  beforeEnter?: string;
  entering?: string;
  entered?: string;
  leaving?: string;
  children?: React.ReactElement;
}

type Stage = 'beforeEnter' | 'entering' | 'entered' | 'leaving';

const Transition: React.FC<TransitionProps> = props => {
  const {
    visible: visibleFromProps,
    timeout,
    unmountNodeAfterLeave,
    children,
  } = props;

  const [stage, setStage] = useState<Stage>('beforeEnter');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (visibleFromProps) {
      setVisible(true);
      setStage('beforeEnter');
      setRafTimeout(() => {
        setStage('entering');
        setRafTimeout(() => {
          setStage('entered');
        }, timeout);
      }, 50); // delay 50ms for ensure beforeEnter class rendered
    } else {
      setStage('leaving');
      setRafTimeout(() => {
        setVisible(false);
        setStage('beforeEnter');
      }, timeout);
    }
  }, [visibleFromProps]);

  if (unmountNodeAfterLeave && !visible) return null;

  return React.cloneElement(React.Children.only(children), {
    className: classnames([children.props.className, {
      [props.beforeEnter]: stage === 'beforeEnter',
      [props.entering]: stage === 'entering',
      [props.entered]: stage === 'entered',
      [props.leaving]: stage === 'leaving',
    }]),
  });
};

Transition.defaultProps = {
  unmountNodeAfterLeave: false,
  timeout: 300,
};

export default Transition;
