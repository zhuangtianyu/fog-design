import React from 'react';
import Button from '@components/button';
import './index.less';

const ButtonDemo = () => {

  return (
    <div className="button-demo">
      <h1>button-demo</h1>
      <Button onClick={() => console.log('clicked')}>
        Primary
      </Button>
    </div>
  );
};

export default ButtonDemo;
