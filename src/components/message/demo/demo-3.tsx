import React from 'react';
import Message from '@components/message';
import Button from '@components/button';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Button
        onClick={() => Message.error({
          icon: <Icon type="doubt-circle-fill" color="var(--fog-danger-color)" />,
          content: 'Are you sure?',
        })}
      >
        Doubt
      </Button>
      <Button
        onClick={() => Message.info({
          icon: null,
          content: 'Just no icon',
        })}
      >
        No icon
      </Button>
    </>
  );
};

export default Demo;
