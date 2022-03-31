import React from 'react';
import Input from '@components/input';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Input
        placeholder="Please input"
        prefix={<Icon type="email" />}
      />
      <Input
        placeholder="Please input"
        prefix="https://"
      />
    </>
  );
};

export default Demo;
