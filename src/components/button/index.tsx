import React from 'react';
import './index.less';

const Button = props => {
  const { children, ...restProps } = props;

  return <button {...restProps}>{children}</button>;
};

export default Button;
