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

const Demo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [placement, setPlacement] = useState<string>(placements[1]);

  return (
    <>
      <Radio.Group
        style={{ marginRight: 12 }}
        value={placement}
        onChange={setPlacement}
      >
        {placements.map(item => (
          <Radio value={item} key={item}>
            {kebabCaseToPascalCase(item)}
          </Radio>
        ))}
      </Radio.Group>
      <Button onClick={() => setVisible(true)}>
        Open
      </Button>
      <Drawer
        title="Basic Usage"
        visible={visible}
        placement={placement}
        onClose={() => setVisible(false)}
      >
        <DrawerContent />
      </Drawer>
    </>
  );
};

export default Demo;
