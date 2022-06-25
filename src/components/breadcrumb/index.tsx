import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Item from './components/item';
import './index.less';

const { prefix } = namespace;

export interface BreadcrumbProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  separator?: React.ReactNode;
  children?: React.ReactChild[];
}

export interface BreadcrumbTypes extends React.FC<BreadcrumbProps> {
  Item: typeof Item;
}

export const Breadcrumb: BreadcrumbTypes = props => {
  const {
    className,
    style,
    separator: separatorFromProps,
    children: childrenFromProps,
  } = props;

  const children = useMemo(() => {
    const children = [];

    const separator = (
      <div className={`${prefix}-breadcrumb__separator`}>
        {separatorFromProps}
      </div>
    );

    React.Children.forEach(childrenFromProps, (child, index) => {
      if ((child as React.ReactElement).type === Item) {
        children.push(child);
        children.push(React.cloneElement(separator, { key: index }));
      }
    });

    return children.slice(0, -1);
  }, [childrenFromProps, separatorFromProps]);

  return (
    <div
      className={classnames(`${prefix}-breadcrumb`, className)}
      style={style}
    >
      {children}
    </div>
  );
};

Breadcrumb.Item = Item;

Breadcrumb.defaultProps = {
  separator: '/',
};

export default Breadcrumb;
