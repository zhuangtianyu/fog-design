import React, { useState } from 'react';
import Radio from '@components/radio';
import Switch from '@components/switch';
import './index.less';

const { Group, Button } = Radio;

const RadioDemo = () => {
  const [outlineDisabled, setOutlineDisabled] = useState<boolean>(false);
  const [solidDisabled, setSolidDisabled] = useState<boolean>(false);

  return (
    <>
      <p>buttonStyle="outline"</p>
      <Group defaultValue="Cola" disabled={outlineDisabled}>
        <Button value="Cola" key="Cola">Cola</Button>
        <Button value="Pepsi" key="Pepsi" disabled>Pepsi</Button>
        <Button value="Fanta" key="Fanta">Fanta</Button>
        <Button value="Sprite" key="Sprite">Sprite</Button>
      </Group>
      <Switch checked={outlineDisabled} onChange={setOutlineDisabled} />
      <p>buttonStyle="solid"</p>
      <Group defaultValue="Cola" buttonStyle="solid" disabled={solidDisabled}>
        <Button value="Cola" key="Cola">Cola</Button>
        <Button value="Pepsi" key="Pepsi" disabled>Pepsi</Button>
        <Button value="Fanta" key="Fanta">Fanta</Button>
        <Button value="Sprite" key="Sprite">Sprite</Button>
      </Group>
      <Switch checked={solidDisabled} onChange={setSolidDisabled} />
    </>
  );
};

export default RadioDemo;
