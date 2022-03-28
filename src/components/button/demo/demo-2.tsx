import React from 'react';
import Button from '@components/button';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Button type="primary">
        <Icon type="calendar" />
        Date
      </Button>
      <Button>
        <Icon type="email" />
        Send
      </Button>
      <Button type="dashed">
        Trigger
        <Icon type="down" />
      </Button>
      <Button type="link">
        <Icon type="link" />
        Link
      </Button>
      <Button type="text">
        <Icon type="edit" />
        Edit
      </Button>
    </>
  );
};

export default Demo;
