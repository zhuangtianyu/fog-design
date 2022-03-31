import React from 'react';
import Input from '@components/input';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Input
        placeholder="Please input"
        suffix={<Icon type="edit" />}
      />
      <Input
        placeholder="Please input"
        suffix="@163.com"
      />
    </>
  );
};

export default Demo;
