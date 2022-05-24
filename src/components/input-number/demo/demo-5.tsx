import React from 'react';
import InputNumber from '@components/input-number';

const Demo = () => (
  <>
    <p>Set min value to 0 and max value to 10.</p>
    <InputNumber placeholder="Please input" min={0} max={10} />
  </>
);

export default Demo;
