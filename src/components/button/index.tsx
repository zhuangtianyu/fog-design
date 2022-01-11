import React, { forwardRef, HTMLAttributes } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

type ButtonType = 'primary' | 'dashed' | 'link' | 'text';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string;
  type?: ButtonType;
  danger?: boolean;
  disabled?: boolean;
  [propName: string]: any;
}

const { prefix } = namespace;

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
      ref={ref}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
