import React, { useState } from 'react';
import Button from '@components/button';
import Icon from '@components/icon';

const Demo = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button
        loading={loading}
        onClick={() => {
          setLoading(true);

          setTimeout(() => setLoading(false), 1000);
        }}
      >
        <Icon type="email" />
        Click me
      </Button>
    </>
  );
};

export default Demo;
