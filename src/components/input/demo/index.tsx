import React from 'react';
import Input from '@components/input';
import './index.less';

const InputDemo = () => {

  return (
    <div className="input-demo">
      <h2>Input</h2>
      <h3>Basic Usage</h3>
      <Input placeholder="Please input" />
      <h3>Disabled</h3>
      <Input placeholder="Please input" disabled />
      <h3>ReadOnly</h3>
      <Input placeholder="Please Input" readOnly />
      <h3>Password</h3>
      <Input placeholder="Please Input" type="password" defaultValue="12345678" />
    </div>
  );
};

export default InputDemo;
