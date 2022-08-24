import React from 'react';
import Tooltip from '@components/tooltip';

const Demo = () => (
  <>
    <Tooltip content="Tooltip content.">
      Hover me
    </Tooltip>
    <Tooltip content="Tooltip content.">
      <span style={{ marginLeft: 12, marginRight: 12 }}>
        Hover me
      </span>
    </Tooltip>
    <Tooltip content="Tooltip content.">
      Hover me
    </Tooltip>
  </>
);

export default Demo;
