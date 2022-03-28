import React from 'react';
import Button from '@components/button';

const Demo = () => {

  return (
    <>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled>
        Default
      </Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="link" disabled>
        Link
      </Button>
      <Button type="text" disabled>
        Text
      </Button>
    </>
  );
};

export default Demo;
