import * as React from 'react';
import { forwardRef, HTMLAttributes, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

export type ButtonType = 'primary' | 'dashed' | 'link' | 'text';

export type ShapeType = 'round' | 'circle';

export type ChildrenType = React.ReactNode | React.ReactElement;

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** --skip */
  className?: string;
  type?: ButtonType;
  shape?: ShapeType;
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children?: ChildrenType | ChildrenType[];
  /** --skip */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  [propName: string]: any;
}

const { prefix } = namespace;

export const Button: React.FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    type,
    shape,
    danger,
    loading,
    disabled,
    children: childrenFromProps,
    onClick,
    ...restProps
  } = props;

  const children = useMemo(() => {
    const wrappedChildren = [];
    const loadingIcon = <Icon className={`${prefix}-button__loading`} key="loading" type="loading" />;
    let loadingIconReplaced = false;

    React.Children.forEach(childrenFromProps, (item, index) => {
      if (['string', 'number'].includes(typeof item)) {
        const wrappedItem = <span key={index}>{item}</span>;

        return wrappedChildren.push(wrappedItem);
      }

      if ((item as React.ReactElement).type === Icon) {
        if (!loading) return wrappedChildren.push(item);

        loadingIconReplaced = true;

        return wrappedChildren.push(loadingIcon);
      }

      wrappedChildren.push(item);
    });

    if (loading && !loadingIconReplaced) {
      wrappedChildren.unshift(loadingIcon);
    }

    return wrappedChildren;
  }, [childrenFromProps, loading]);

  const iconIsolated = useMemo(() => children.length === 1 && children[0].type === Icon, [children]);

  return (
    <button
      className={classnames(`${prefix}-button`, className, {
        [`${prefix}-button--${type}`]: type,
        [`${prefix}-button--${shape}`]: shape,
        [`${prefix}-button--danger`]: danger,
        [`${prefix}-button--loading`]: loading,
        [`${prefix}-button--icon-isolated`]: iconIsolated,
      })}
      ref={ref}
      disabled={disabled}
      onClick={(disabled || loading) ? () => {} : onClick}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
