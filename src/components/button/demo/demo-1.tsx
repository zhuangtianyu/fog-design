import React from 'react';
import Button from '@components/button';

const Demo = () => {

  return (
    <>
      <Button type="primary">
        Primary
      </Button>
      <Button>
        Default
      </Button>
      <Button type="dashed">
        Dashed
      </Button>
      <Button type="link">
        Link
      </Button>
      <Button type="text">
        Text
      </Button>
    </>
  );
};

export default Demo;
