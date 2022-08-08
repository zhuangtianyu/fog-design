import React, { useState } from 'react';
import Switch from '@components/switch';
import Icon from '@components/icon';

const Demo = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Switch checked={checked} onChange={setChecked}>
        {checked ? 'On' : 'Off'}
      </Switch>
      <Switch checked={checked} onChange={setChecked}>
        {checked ? 1 : 0}
      </Switch>
      <Switch checked={checked} onChange={setChecked}>
        {checked ? <Icon type="check" /> : <Icon type="close" />}
      </Switch>
      <Switch checked={checked} onChange={setChecked}>
        Long text
      </Switch>
    </>
  );
};

export default Demo;
