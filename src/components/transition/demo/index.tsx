import React, { useState } from 'react';
import Button from '@components/button';
import Transition from '@components/transition';
import './index.less';

const TransitionDemo = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div className="transition-demo">
      <h2>Transition</h2>
      <h3>Basic Usage</h3>
      <Button
        style={{ margin: '0 20px 12px 0' }}
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </Button>
      <Transition
        visible={visible}
        timeout={300}
        beforeEnter="beforeEnter"
        entering="entering"
        entered="entered"
        leaving="leaving"
      >
        <div className="box" />
      </Transition>
    </div>
  );
};

export default TransitionDemo;
