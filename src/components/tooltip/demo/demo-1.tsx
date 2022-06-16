import React from 'react';
import Tooltip from '@components/tooltip';

const Demo = () => (
  <Tooltip content="Tooltip content.">
    <span style={{ display: 'inline-block' }}>
      Hover me
    </span>
  </Tooltip>
);

export default Demo;
