import React from 'react';
import Button from '@components/button';
import './index.less';

const ButtonDemo = () => {

  return (
    <div className="button-demo">
      <Button type="primary" style={{ marginRight: 8 }}>
        Primary
      </Button>
      <Button>
        Default
      </Button>
    </div>
  );
};

export default ButtonDemo;
