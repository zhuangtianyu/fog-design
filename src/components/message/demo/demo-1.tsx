import React from 'react';
import Message from '@components/message';
import Button from '@components/button';

const Demo = () => {

  return (
    <Button onClick={() => Message.info({ content: 'Basic usage' })}>
      Click me
    </Button>
  );
};

export default Demo;
