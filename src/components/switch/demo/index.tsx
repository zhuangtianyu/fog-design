import React, { useState } from 'react';
import Switch from '@components/switch';
import './index.less';

const SwitchDemo = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="switch-demo">
      <h2>Switch</h2>
      <h3>Basic Usage</h3>
      <Switch checked={checked} onChange={setChecked} />
      <Switch checked={checked} disabled />
      <h3>Uncontrolled</h3>
      <Switch />
      <Switch defaultChecked />
    </div>
  );
};

export default SwitchDemo;
