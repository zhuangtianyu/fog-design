import React from 'react';
import Button from '@components/button';
import './index.less';

const ButtonDemo = () => {

  return (
    <div className="button-demo">
      <h2>Button</h2>
      <h3>Type</h3>
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
      <h3>Disabled</h3>
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
      <h3>Danger</h3>
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
    </div>
  );
};

export default ButtonDemo;
