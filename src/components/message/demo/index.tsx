import React, { useEffect, useRef } from 'react';
import Message, { MessageReference } from '@components/message';
import Button from '@components/button';
import './index.less';

const MessageDemo = () => {
  const manualRef = useRef<MessageReference>(null);

  useEffect(() => {
    return () => {
      Message.destroyAll();
      manualRef.current = null;
    };
  }, []);

  return (
    <div className="message-demo">
      <h2>Message</h2>
      <h3>Basic Usage</h3>
      <Button onClick={() => Message.info({ content: 'Basic usage' })}>
        Click me
      </Button>
      <h3>Method</h3>
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
      <h3>Customized Icon</h3>
      <Button
        onClick={() => Message.info({
          icon: '🍷',
          content: 'Hot drinks and cold days',
        })}
      >
        Emoji
      </Button>
      <Button
        onClick={() => Message.info({
          icon: null,
          content: 'No icon makes me look so cool',
        })}
      >
        Without icon
      </Button>
      <h3>Manual Close</h3>
      <Button
        onClick={() => {
          if (!manualRef.current) {
            manualRef.current = Message.info({
              icon: '🌊',
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
      <h3>DestroyAll</h3>
      <p>Destroy all references at some time, e.g. a route change happens.</p>
      <Button
        onClick={() => {
          Message.info({
            icon: '🌙',
            content: 'The signal disappears into the night',
          });
        }}
      >
        Click me
      </Button>
      <Button
        onClick={() => {
          Message.destroyAll();
          manualRef.current = null;
        }}
      >
        DestroyAll
      </Button>
    </div>
  );
};

export default MessageDemo;
