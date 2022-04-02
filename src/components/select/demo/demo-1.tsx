import React from 'react';
import Select from '@components/select';

const { Option } = Select;

const Demo = () => {

  return (
    <Select placeholder="Please select">
      <Option value={0}>Coca-Cola</Option>
      <Option value={1} disabled>Pepsi</Option>
      <Option value={2}>Sprite</Option>
      <Option value={3}>Fanta Orange</Option>
    </Select>
  );
};

export default Demo;
