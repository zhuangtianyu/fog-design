import React, { useEffect } from 'react';
import InputNumber from '@components/input-number';
import Message from '@components/message';

const Demo = () => {
  useEffect(() => () => Message.destroyAll(), []);

  return (
    <>
      <p>Set min value to 0 and max value to 10.</p>
      <InputNumber
        placeholder="Please input"
        min={0}
        max={10}
        onEnter={event => {
          Message.info({
            content: `Entered value: ${event.target.value}`,
          });
        }}
      />
    </>
  );
};

export default Demo;
