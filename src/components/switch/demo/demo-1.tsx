import React, { useState } from 'react';
import Switch from '@components/switch';

const Demo = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Switch checked={checked} onChange={setChecked} />
      <Switch checked={checked} disabled />
    </>
  );
};

export default Demo;
