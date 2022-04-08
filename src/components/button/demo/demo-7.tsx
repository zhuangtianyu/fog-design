import React from 'react';
import Button from '@components/button';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Button.Group>
        <Button type="primary">
          <Icon type="left" />
        </Button>
        <Button type="primary">
          <Icon type="right" />
        </Button>
      </Button.Group>
      <Button.Group>
        <Button>
          Day
        </Button>
        <Button>
          Night
        </Button>
      </Button.Group>
      <Button.Group>
        <Button shape="round">
          Lighter
        </Button>
        <Button type="primary" shape="round">
          Normal
        </Button>
        <Button shape="round" disabled>
          Bold
        </Button>
        <Button shape="round">
          Bolder
        </Button>
      </Button.Group>
    </>
  );
};

export default Demo;
