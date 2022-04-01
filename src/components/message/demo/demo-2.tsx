import React from 'react';
import Message from '@components/message';
import Button from '@components/button';

const Demo = () => {

  return (
    <>
      <Button onClick={() => Message.info({ content: 'Subscribe the news' })}>
        Info
      </Button>
      <Button onClick={() => Message.error({ content: 'Login required' })}>
        Error
      </Button>
      <Button onClick={() => Message.warning({ content: 'Remember password' })}>
        Warning
      </Button>
      <Button onClick={() => Message.success({ content: 'Login success' })}>
        Success
      </Button>
    </>
  );
};

export default Demo;
