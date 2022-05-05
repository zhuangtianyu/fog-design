import React, { useState } from 'react';
import Select from '@components/select';
import Switch from '@components/switch';

const { Option } = Select;

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabled2, setDisabled2] = useState<boolean>(false);

  return (
    <>
      <Select
        style={{ marginRight: 12, marginBottom: 12 }}
        placeholder="Please select"
        disabled={disabled}
        defaultValue={0}
      >
        <Option value={0}>Coca-Cola</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Sprite</Option>
        <Option value={3}>Fanta Orange</Option>
      </Select>
      <Switch checked={disabled} onChange={setDisabled} />
      <br />
      <Select
        style={{ marginRight: 12 }}
        placeholder="Please select"
        disabled={disabled2}
        defaultValue={[0, 2]}
        multiple
      >
        <Option value={0}>Snow</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Corona</Option>
        <Option value={3}>Budweiser</Option>
        <Option value={4}>Hoegaarden</Option>
      </Select>
      <Switch checked={disabled2} onChange={setDisabled2} />
    </>
  );
};

export default Demo;
