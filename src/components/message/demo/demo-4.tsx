import React, { useEffect, useRef } from 'react';
import Message, { MessageReference } from '@components/message';
import Button from '@components/button';

const Demo = () => {
  const manualRef = useRef<MessageReference>(null);

  useEffect(() => {
    return () => {
      if (manualRef.current) {
        manualRef.current.destroy();
        manualRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          if (!manualRef.current) {
            manualRef.current = Message.info({
              content: 'The waves lapping the shore endlessly',
              duration: 0,
            });
          }
        }}
      >
        Open
      </Button>
      <Button
        onClick={() => {
          if (manualRef.current) {
            manualRef.current.destroy();
            manualRef.current = null;
          }
        }}
      >
        Close
      </Button>
    </>
  );
};

export default Demo;
