import React, { useState } from 'react';
import Radio from '@components/radio';
import Switch from '@components/switch';
import './index.less';

const { Group } = Radio;

const RadioDemo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [groupDisabled, setGroupDisabled] = useState<boolean>(false);

  return (
    <div className="radio-demo">
      <h2>Radio</h2>
      <h3>Basic Usage</h3>
      <Radio checked>Cola</Radio>
      <Radio>Fanta</Radio>
      <h3>Disabled</h3>
      <Radio disabled={disabled} checked>Cola</Radio>
      <Radio disabled={disabled}>Fanta</Radio>
      <Switch checked={disabled} onChange={setDisabled} />
      <h3>Group</h3>
      <Group defaultValue="Cola">
        <Radio value="Cola" key="Cola">Cola</Radio>
        <Radio value="Fanta" key="Fanta">Fanta</Radio>
        <Radio value="Sprite" key="Sprite">Sprite</Radio>
      </Group>
      <h3>Group Disabled</h3>
      <Group defaultValue="Cola" disabled={groupDisabled}>
        <Radio value="Cola" key="Cola">Cola</Radio>
        <Radio value="Pepsi" key="Pepsi" disabled>Pepsi</Radio>
        <Radio value="Fanta" key="Fanta">Fanta</Radio>
        <Radio value="Sprite" key="Sprite">Sprite</Radio>
      </Group>
      <Switch checked={groupDisabled} onChange={setGroupDisabled} />
    </div>
  );
};

export default RadioDemo;
