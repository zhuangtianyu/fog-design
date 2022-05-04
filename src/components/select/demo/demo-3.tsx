import React, { useState } from 'react';
import Select from '@components/select';
import Switch from '@components/switch';

const { Option } = Select;

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Select
        placeholder="Please select"
        disabled={disabled}
        style={{ marginRight: 12 }}
      >
        <Option value={0}>Coca-Cola</Option>
        <Option value={1} disabled>Pepsi</Option>
        <Option value={2}>Sprite</Option>
        <Option value={3}>Fanta Orange</Option>
      </Select>
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
