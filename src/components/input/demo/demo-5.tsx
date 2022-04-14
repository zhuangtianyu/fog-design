import React from 'react';
import Input from '@components/input';
import Icon from '@components/icon';

const Demo = () => (
  <>
    <Input
      placeholder="Please input"
      disabled
    />
    <Input
      placeholder="Please input"
      prefix={<Icon type="email" />}
      suffix="@163.com"
      disabled
    />
  </>
);

export default Demo;
