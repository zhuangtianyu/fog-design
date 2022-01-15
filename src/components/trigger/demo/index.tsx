import React, { useState, useRef } from 'react';
import Button from '@components/button';
import Switch from '@components/switch';
import Trigger from '@components/trigger';
import './index.less';

const popup = (
  <div style={{ padding: '4px 0' }}>
    {new Array(3).fill(1).map((item, index) => (
      <div style={{ padding: '4px 16px', fontSize: 14, lineHeight: '22px' }} key={index}>
        popup content
      </div>
    ))}
  </div>
);

const TriggerDemo = () => {
  const [resizableVisible, setResizableVisible] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="trigger-demo">
      <h2>Trigger</h2>
      <h3>Basic Usage</h3>
      <Trigger popup={popup}>
        <Button>Click me</Button>
      </Trigger>
      <h3>Trigger</h3>
      <Trigger popup={popup}>
        <Button>Click me</Button>
      </Trigger>
      <Trigger popup={popup} trigger="hover">
        <Button>Hover me</Button>
      </Trigger>
      <Trigger popup={popup} trigger={['click', 'hover']}>
        <Button>Click or hover me</Button>
      </Trigger>
      <h3>Resizable</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Trigger popup={popup} visible={resizableVisible}>
          <textarea style={{ marginRight: 12 }} />
        </Trigger>
        <Switch
          checked={resizableVisible}
          onChange={setResizableVisible}
        />
      </div>
      <h3>Scroll Container</h3>
      <div
        ref={scrollRef}
        style={{
          position: 'relative',
          height: 300,
          border: '1px solid var(--fog-border-color)',
          overflow: 'auto',
        }}
      >
        <div style={{ padding: 50, width: '150%', height: 500 }}>
          <Trigger
            popup={popup}
            getPopupMountNode={() => scrollRef.current}
          >
            <Button>Click me</Button>
          </Trigger>
          <Trigger
            popup={popup}
            trigger="hover"
            getPopupMountNode={() => scrollRef.current}
          >
            <Button style={{ position: 'absolute', top: 100, left: 200 }}>
              Hover me
            </Button>
          </Trigger>
        </div>
      </div>
    </div>
  );
};

export default TriggerDemo;
