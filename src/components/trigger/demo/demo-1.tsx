import React from 'react';
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

  return (
    <Trigger popup={popup}>
      <Button>Click me</Button>
    </Trigger>
  );
};

export default Demo;
