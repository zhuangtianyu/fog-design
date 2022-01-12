import React from 'react';
import Select from '@components/select';
import './index.less';

const { Option } = Select;

const SelectDemo = () => {

  return (
    <div className="select-demo">
      <h2>Select</h2>
      <h3>Basic Usage</h3>
      <Select placeholder="Please select">
        <Option value={0}>Coca-Cola</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Sprite</Option>
        <Option value={3}>Fanta Orange</Option>
      </Select>
      <h3>Multiple Mode</h3>
      <Select placeholder="Please select" multiple>
        <Option value={0}>Snow Beer Trekker</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Corona</Option>
        <Option value={3}>Budweiser</Option>
        <Option value={4}>Hoegaarden</Option>
      </Select>
    </div>
  );
};

export default SelectDemo;
