import React, { useState } from 'react';
import Drawer from '@components/drawer';
import Button from '@components/button';
import Radio from '@components/radio';
import { kebabCaseToPascalCase } from '@utils/index';
import './index.less';

const placements = ['top', 'right', 'bottom', 'left'];

const DrawerContent = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="drawer-content">
      <p>Clicked {count} times, state preserved.</p>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
};

const DrawerDemo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleForPlacement, setVisibleForPlacement] = useState<boolean>(false);
  const [placement, setPlacement] = useState<string>(placements[1]);

  return (
    <div className="drawer-demo">
      <h2>Drawer</h2>
      <h3>Basic Usage</h3>
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
      <h3>Placement</h3>
      <Radio.Group
        value={placement}
        onChange={event => setPlacement(event.target.value)}
      >
        {placements.map(item => (
          <Radio value={item} key={item}>
            {kebabCaseToPascalCase(item)}
          </Radio>
        ))}
      </Radio.Group>
      <Button onClick={() => setVisibleForPlacement(true)}>
        Open
      </Button>
      <Drawer
        title="Basic Usage"
        visible={visibleForPlacement}
        placement={placement}
        onClose={() => setVisibleForPlacement(false)}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default DrawerDemo;
