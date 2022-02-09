import React, { useState } from 'react';
import Switch from '@components/switch';
import './index.less';

const SwitchDemo = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingChecked, setLoadingChecked] = useState<boolean>(false);

  const handleLoadingCheckChange = nextChecked => {
    setLoading(true);

    let timer = setTimeout(() => {
      setLoading(false);
      setLoadingChecked(nextChecked);

      timer = null;
    }, 1000);
  };

  return (
    <div className="switch-demo">
      <h2>Switch</h2>
      <h3>Basic Usage</h3>
      <Switch checked={checked} onChange={setChecked} />
      <Switch checked={checked} disabled />
      <h3>Uncontrolled</h3>
      <Switch />
      <Switch defaultChecked />
      <h3>Loading</h3>
      <Switch
        loading={loading}
        checked={loadingChecked}
        onChange={handleLoadingCheckChange}
      />
    </div>
  );
};

export default SwitchDemo;
