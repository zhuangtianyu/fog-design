import React from 'react';
import Select from '@components/select';

const { Option } = Select;

const Demo = () => {

  return (
    <Select placeholder="Please select" multiple>
      <Option value={0}>Snow</Option>
      <Option value={1} disabled>Pepsi</Option>
      <Option value={2}>Corona</Option>
      <Option value={3}>Budweiser</Option>
      <Option value={4}>Hoegaarden</Option>
    </Select>
  );
};

export default Demo;
