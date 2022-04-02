import React, { useState } from 'react';
import Radio from '@components/radio';
import Switch from '@components/switch';

const { Group } = Radio;

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Group defaultValue="Cola" disabled={disabled}>
        <Radio value="Cola" key="Cola">Cola</Radio>
        <Radio value="Pepsi" key="Pepsi" disabled>Pepsi</Radio>
        <Radio value="Fanta" key="Fanta">Fanta</Radio>
        <Radio value="Sprite" key="Sprite">Sprite</Radio>
      </Group>
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
