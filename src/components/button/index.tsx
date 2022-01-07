import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';
import { prefix } from '@namespace';
import './index.less';

type ButtonType = 'primary' | 'dashed' | 'link' | 'text';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string;
  type?: ButtonType;
  danger?: boolean;
  disabled?: boolean;
  [propName: string]: any;
}

const Button: React.FC<ButtonProps> = props => {
  const {
    className,
    type,
    danger,
    disabled,
    children,
    ...restProps
  } = props;

  return (
    <button
      className={classnames(`${prefix}-button`, className, {
        [`${prefix}-button--${type}`]: type,
        [`${prefix}-button--danger`]: danger,
      })}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
