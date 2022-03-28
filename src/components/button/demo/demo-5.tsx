import React from 'react';
import Button from '@components/button';

const Demo = () => {

  return (
    <>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>
        Default
      </Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="link" danger>
        Link
      </Button>
      <Button type="text" danger>
        Text
      </Button>
    </>
  );
};

export default Demo;
