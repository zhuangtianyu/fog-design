import * as React from 'react';
import { forwardRef, HTMLAttributes, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

export type ButtonType = 'primary' | 'dashed' | 'link' | 'text';

export type ChildrenType = React.ReactNode | React.ReactElement;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: ButtonType;
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: ChildrenType | ChildrenType[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  [propName: string]: any;
}

const { prefix } = namespace;

const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    type,
    danger,
    loading,
    disabled,
    children: childrenFromProps,
    onClick,
    ...restProps
  } = props;

  const children = useMemo(() => {
    const wrappedChildren = [];

    React.Children.forEach(childrenFromProps, (item, index) => {
      if (['string', 'number'].includes(typeof item)) {
        wrappedChildren.push(<span key={index}>{item}</span>);
      } else if ((item as React.ReactElement).type === Icon) {
        if (!loading) {
          wrappedChildren.push(item);
        }
      } else {
        wrappedChildren.push(item);
      }
    });

    return wrappedChildren;
  }, [childrenFromProps, loading]);

  return (
    <button
      className={classnames(`${prefix}-button`, className, {
        [`${prefix}-button--${type}`]: type,
        [`${prefix}-button--danger`]: danger,
        [`${prefix}-button--loading`]: loading,
      })}
      ref={ref}
      disabled={disabled}
      onClick={(disabled || loading) ? () => {} : onClick}
      {...restProps}
    >
      {loading && (
        <Icon
          className={`${prefix}-button__loading`}
          type="loading"
        />
      )}
      {children}
    </button>
  );
});

export default Button;
