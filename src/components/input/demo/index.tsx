import React from 'react';
import Input from '@components/input';
import Icon from '@components/icon';
import './index.less';

const { TextArea } = Input;

const InputDemo = () => {

  return (
    <div className="input-demo">
      <h2>Input</h2>
      <h3>Basic Usage</h3>
      <Input placeholder="Please input" />
      <h3>Clearable</h3>
      <Input
        placeholder="Please input"
        defaultValue="Your emotion"
        clearable
      />
      <h3>Prefix</h3>
      <Input
        placeholder="Please input"
        prefix={<Icon type="email" />}
      />
      <h3>Suffix</h3>
      <Input
        placeholder="Please input"
        suffix={<Icon type="edit" />}
      />
      <h3>Disabled</h3>
      <Input placeholder="Please input" disabled />
      <h3>ReadOnly</h3>
      <Input placeholder="Please Input" readOnly />
      <h3>Password</h3>
      <Input placeholder="Please Input" type="password" defaultValue="12345678" />
      <h3>TextArea</h3>
      <TextArea placeholder="Please Input" />
    </div>
  );
};

export default InputDemo;
