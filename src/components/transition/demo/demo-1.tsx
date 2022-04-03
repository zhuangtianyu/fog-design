import React, { useState } from 'react';
import Button from '@components/button';
import Transition from '@components/transition';
import './demo-1.less';

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <div className="transition-demo-1">
      <Button onClick={() => setVisible(!visible)}>
        Toggle
      </Button>
      <Transition
        visible={visible}
        timeout={300}
        beforeEnter="before-enter"
        entering="entering"
        entered="entered"
        leaving="leaving"
      >
        <div className="box" />
      </Transition>
    </div>
  );
};

export default Demo;
