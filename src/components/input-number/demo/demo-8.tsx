import React from 'react';
import InputNumber from '@components/input-number';

const Demo = () => (
  <>
    <p>Set showControl to false, then the control will never show.</p>
    <InputNumber placeholder="Please input" showControl={false} />
    <InputNumber placeholder="Please input" prefix="$" showControl={false} />
    <InputNumber
      placeholder="Please input"
      prefix="$"
      suffix="/L"
      showControl={false}
    />
  </>
);

export default Demo;
