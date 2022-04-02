import React, { useState } from 'react';
import Switch from '@components/switch';

const Demo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingChecked, setLoadingChecked] = useState<boolean>(false);

  const handleLoadingCheckChange = nextChecked => {
    setLoading(true);

    let timer = setTimeout(() => {
      setLoading(false);
      setLoadingChecked(nextChecked);

      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Switch
      loading={loading}
      checked={loadingChecked}
      onChange={handleLoadingCheckChange}
    />
  );
};

export default Demo;
