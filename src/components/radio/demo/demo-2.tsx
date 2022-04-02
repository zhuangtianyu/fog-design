import React, { useState } from 'react';
import Radio from '@components/radio';
import Switch from '@components/switch';

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Radio disabled={disabled} checked>Cola</Radio>
      <Radio disabled={disabled}>Fanta</Radio>
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
