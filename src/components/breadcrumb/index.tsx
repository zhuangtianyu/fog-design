import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Item from './components/item';
import './index.less';

const { prefix } = namespace;

export interface BreadcrumbProps {
  /** --skip */
  className?: string;
  children?: React.ReactChild[];
}

export interface BreadcrumbTypes extends React.FC<BreadcrumbProps> {
  Item: typeof Item;
}

export const Breadcrumb: BreadcrumbTypes = props => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={classnames(className, `${prefix}-breadcrumb`)}>
      {children}
    </div>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
