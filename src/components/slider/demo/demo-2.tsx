import React from 'react';
import Slider from '@components/slider';
import Message from '@components/message';

const Demo = () => {

  return (
    <>
      <p>{`step={0.05}`}</p>
      <Slider
        step={0.05}
        defaultValue={0.3}
        onChange={value => Message.info({ content: `value changed to ${value}` })}
      />
      <p>{`step={0.1}`}</p>
      <Slider
        step={0.1}
        defaultValue={0.3}
        onChange={value => Message.info({ content: `value changed to ${value}` })}
      />
    </>
  );
};

export default Demo;
