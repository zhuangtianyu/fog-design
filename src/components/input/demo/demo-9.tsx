import React, { useEffect } from 'react';
import Input from '@components/input';
import Message from '@components/message';

const Demo = () => {
  useEffect(() => () => Message.destroyAll(), []);

  return (
    <Input
      placeholder="Please Input"
      onEnter={event => {
        Message.info({
          content: `Entered value: ${event.currentTarget.value}`,
        });
      }}
    />
  );
};

export default Demo;
