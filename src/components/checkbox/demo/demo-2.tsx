import React, { useState } from 'react';
import Checkbox from '@components/checkbox';
import Switch from '@components/switch';
import './index.less';

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Checkbox defaultChecked disabled={disabled}>Cola</Checkbox>
      <Checkbox disabled={disabled}>Fanta</Checkbox>
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
