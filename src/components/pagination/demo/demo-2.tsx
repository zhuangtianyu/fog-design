import React, { useState } from 'react';
import Pagination from '@components/pagination';
import Switch from '@components/switch';

const Demo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Pagination
        style={{ marginRight: 12 }}
        disabled={disabled}
        total={100}
      />
      <Switch checked={disabled} onChange={setDisabled} />
    </>
  );
};

export default Demo;
