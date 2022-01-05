import React from 'react';
import classnames from 'classnames';
import './index.less';

const Button = props => {
  const { children, type, ...restProps } = props;

  return (
    <button
      className={classnames({
        ['button']: true,
        [`button--${type}`]: type,
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
