import React from 'react';
import Select from '@components/select';

const { Option } = Select;

const Demo = () => {

  return (
    <>
      <Select
        style={{ marginRight: 12, marginBottom: 12 }}
        placeholder="Please select"
        defaultValue={0}
        clearable
      >
        <Option value={0}>Coca-Cola</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Sprite</Option>
        <Option value={3}>Fanta Orange</Option>
      </Select>
      <br />
      <Select
        style={{ marginRight: 12 }}
        placeholder="Please select"
        defaultValue={[0, 2]}
        multiple
        clearable
      >
        <Option value={0}>Snow</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Corona</Option>
        <Option value={3}>Budweiser</Option>
        <Option value={4}>Hoegaarden</Option>
      </Select>
    </>
  );
};

export default Demo;
