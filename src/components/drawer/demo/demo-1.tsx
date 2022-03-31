import React, { useState } from 'react';
import Drawer from '@components/drawer';
import Button from '@components/button';

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>
        Open
      </Button>
      <Drawer
        title="Basic Usage"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

export default Demo;
