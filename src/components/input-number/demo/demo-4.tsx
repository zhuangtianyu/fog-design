import React from 'react';
import InputNumber from '@components/input-number';

const Demo = () => (
  <>
    <p>Set keepControl to false, then the control will only show on hover or focus.</p>
    <InputNumber placeholder="Please input" keepControl={false} />
    <InputNumber placeholder="Please input" prefix="$" keepControl={false} />
    <InputNumber
      placeholder="Please input"
      prefix="$"
      suffix="/L"
      keepControl={false}
    />
  </>
);

export default Demo;
