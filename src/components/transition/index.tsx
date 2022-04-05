import * as React from 'react';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { setRafTimeout, cancelRafTimeout, isFunction } from '@utils/index';

export interface TransitionProps  {
  visible?: boolean;
  timeout?: number;
  unmountNodeAfterLeave?: boolean;
  beforeEnter?: string;
  entering?: string;
  entered?: string;
  leaving?: string;
  children?: React.ReactElement;
  afterLeave?: () => void;
}

export type Stage = 'beforeEnter' | 'entering' | 'entered' | 'leaving';

export const Transition: React.FC<TransitionProps> = props => {
  const {
    visible: visibleFromProps,
    timeout,
    unmountNodeAfterLeave,
    children,
    afterLeave,
  } = props;

  const [stage, setStage] = useState<Stage>('beforeEnter');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timers = [];

    if (visibleFromProps) {
      setVisible(true);
      setStage('beforeEnter');
      timers.push(setRafTimeout(() => {
        setStage('entering');
        timers.push(setRafTimeout(() => {
          setStage('entered');
        }, timeout));
      }, 50)); // delay 50ms for ensure beforeEnter class rendered
    } else {
      setStage('leaving');
      timers.push(setRafTimeout(() => {
        setVisible(false);
        setStage('beforeEnter');
        isFunction(afterLeave) && afterLeave();
      }, timeout));
    }

    return () => timers.forEach(timer => cancelRafTimeout(timer));
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
