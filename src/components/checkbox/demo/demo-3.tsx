import React, { useState } from 'react';
import Checkbox from '@components/checkbox';
import Switch from '@components/switch';
import './index.less';

const { Group } = Checkbox;

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Group defaultValue={['Cola']} disabled={disabled}>
        <Checkbox value="Cola" key="Cola">Cola</Checkbox>
        <Checkbox value="Pepsi" key="Pepsi" disabled>Pepsi</Checkbox>
        <Checkbox value="Fanta" key="Fanta">Fanta</Checkbox>
        <Checkbox value="Sprite" key="Sprite">Sprite</Checkbox>
      </Group>
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
