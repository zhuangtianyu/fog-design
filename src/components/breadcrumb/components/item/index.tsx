import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export interface BreadcrumbItemProps {
  /** --skip */
  className?: string;
  href?: string;
  separator?: React.ReactNode;
  children?: React.ReactChild | React.ReactChild[];
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  [propName: string]: any;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => {
  const {
    className: classNameFromProps,
    href,
    separator,
    children: childrenFromProps,
    onClick,
    ...restProps
  } = props;

  const children = useMemo(() => {
    const children = [];

    React.Children.forEach(childrenFromProps, (item, index) => {
      if (['string', 'number'].includes(typeof item)) {
        const wrappedItem = <span key={index}>{item}</span>;

        return children.push(wrappedItem);
      }

      children.push(item);
    });

    return children;
  }, [childrenFromProps]);

  return typeof href !== 'string'
    ? <div
        className={classnames(classNameFromProps, {
          [`${prefix}-breadcrumb__item`]: true,
          [`${prefix}-breadcrumb__item--interactive`]: isFunction(onClick),
        })}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </div>
    : <a
        className={classnames(classNameFromProps, {
          [`${prefix}-breadcrumb__item`]: true,
          [`${prefix}-breadcrumb__item--interactive`]: true,
        })}
        href={href}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </a>;
};

export default BreadcrumbItem;
