import React, { useState } from 'react';
import Drawer from '@components/drawer';
import Button from '@components/button';
import { kebabCaseToPascalCase } from '@utils/index';
import './index.less';

const placements = ['top', 'right', 'bottom', 'left'];

const DrawerDemo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleForPlacement, setVisibleForPlacement] = useState<boolean>(false);
  const [placement, setPlacement] = useState<string>(placements[0]);

  return (
    <div className="drawer-demo">
      <h2>Drawer</h2>
      <h3>Basic Usage</h3>
      <Button onClick={() => setVisible(true)}>
        Open drawer
      </Button>
      <Drawer
        title="Basic Usage"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Drawer Content
      </Drawer>
      <h3>Placement</h3>
      {placements.map(item => (
        <Button
          key={item}
          onClick={() => {
            setPlacement(item);
            setVisibleForPlacement(true);
          }}
        >
          {kebabCaseToPascalCase(item)}
        </Button>
      ))}
      <Drawer
        title="Basic Usage"
        visible={visibleForPlacement}
        placement={placement}
        onClose={() => setVisibleForPlacement(false)}
      >
        Drawer Content
      </Drawer>
    </div>
  );
};

export default DrawerDemo;
