import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

export interface BreadcrumbItemProps {
  /** --skip */
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => {
  const {
    className,
    children: childrenFromProps,
    onClick,
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

  return (
    <div
      className={classnames(`${prefix}-breadcrumb__item`, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BreadcrumbItem;
