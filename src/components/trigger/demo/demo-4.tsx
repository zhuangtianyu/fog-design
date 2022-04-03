import React, { useState } from 'react';
import Switch from '@components/switch';
import Trigger from '@components/trigger';
import Input from '@components/input';

const popup = (
  <div style={{ padding: '4px 0' }}>
    {new Array(3).fill(1).map((_, index) => (
      <div style={{ padding: '4px 16px', fontSize: 14, lineHeight: '22px' }} key={index}>
        Popup content injected
      </div>
    ))}
  </div>
);

const { TextArea } = Input;

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Trigger popup={popup} visible={visible}>
        <TextArea
          style={{ width: 320, marginRight: 12 }}
          defaultValue="Resize textarea to update popup position"
        />
      </Trigger>
      <Switch checked={visible} onChange={setVisible} />
    </div>
  );
};

export default Demo;
