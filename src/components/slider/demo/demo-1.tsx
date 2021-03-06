import React from 'react';
import Slider from '@components/slider';
import Message from '@components/message';

const Demo = () => (
  <Slider
    defaultValue={0.3}
    onChange={value => Message.info({ content: `value changed to ${value}` })}
  />
);

export default Demo;
