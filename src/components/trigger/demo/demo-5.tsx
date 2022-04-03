import React, { useRef } from 'react';
import Button from '@components/button';
import Trigger from '@components/trigger';

const popup = (
  <div style={{ padding: '4px 0' }}>
    {new Array(3).fill(1).map((_, index) => (
      <div style={{ padding: '4px 16px', fontSize: 14, lineHeight: '22px' }} key={index}>
        Popup content injected
      </div>
    ))}
  </div>
);

const Demo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
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
  );
};

export default Demo;
