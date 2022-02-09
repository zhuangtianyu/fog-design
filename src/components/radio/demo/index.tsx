import React, { useState } from 'react';
import Radio from '@components/radio';
import Switch from '@components/switch';
import './index.less';

const { Group, Button } = Radio;

const RadioDemo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [groupDisabled, setGroupDisabled] = useState<boolean>(false);
  const [outlineDisabled, setOutlineDisabled] = useState<boolean>(false);
  const [solidDisabled, setSolidDisabled] = useState<boolean>(false);

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
      <Group defaultValue="Cola" disabled={groupDisabled}>
        <Radio value="Cola" key="Cola">Cola</Radio>
        <Radio value="Pepsi" key="Pepsi" disabled>Pepsi</Radio>
        <Radio value="Fanta" key="Fanta">Fanta</Radio>
        <Radio value="Sprite" key="Sprite">Sprite</Radio>
      </Group>
      <Switch checked={groupDisabled} onChange={setGroupDisabled} />
      <h3>Button Group</h3>
      <p>
        <code>buttonStyle="outline"</code>
      </p>
      <Group defaultValue="Cola" disabled={outlineDisabled}>
        <Button value="Cola" key="Cola">Cola</Button>
        <Button value="Pepsi" key="Pepsi" disabled>Pepsi</Button>
        <Button value="Fanta" key="Fanta">Fanta</Button>
        <Button value="Sprite" key="Sprite">Sprite</Button>
      </Group>
      <Switch checked={outlineDisabled} onChange={setOutlineDisabled} />
      <p>
        <code>buttonStyle="solid"</code>
      </p>
      <Group defaultValue="Cola" buttonStyle="solid" disabled={solidDisabled}>
        <Button value="Cola" key="Cola">Cola</Button>
        <Button value="Pepsi" key="Pepsi" disabled>Pepsi</Button>
        <Button value="Fanta" key="Fanta">Fanta</Button>
        <Button value="Sprite" key="Sprite">Sprite</Button>
      </Group>
      <Switch checked={solidDisabled} onChange={setSolidDisabled} />
    </div>
  );
};

export default RadioDemo;
