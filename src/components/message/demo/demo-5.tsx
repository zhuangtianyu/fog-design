import React from 'react';
import Message from '@components/message';
import Button from '@components/button';

const Demo = () => {

  return (
    <>
      <Button
        onClick={() => Message.info({
          content: 'The signal disappears into the night',
        })}
      >
        Click me
      </Button>
      <Button onClick={() => Message.destroyAll()}>
        DestroyAll
      </Button>
    </>
  );
};

export default Demo;
