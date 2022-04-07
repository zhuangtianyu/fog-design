import React from 'react';
import Button from '@components/button';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Button type="primary" shape="round">
        Primary
      </Button>
      <Button shape="round">
        Default
      </Button>
      <Button type="dashed" shape="round">
        Dashed
      </Button>
      <Button shape="round">
        <Icon type="search" />
        Search
      </Button>
      <Button shape="circle">
        <Icon type="search" />
      </Button>
      <Button shape="circle">
        F
      </Button>
    </>
  );
};

export default Demo;
