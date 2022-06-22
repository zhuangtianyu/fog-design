import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

export interface BreadcrumbItemProps {
  /** --skip */
  className?: string;
  children?: React.ReactChild;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = props => {
  const {
    className,
    children,
    onClick,
  } = props;

  return (
    <div
      className={classnames(className, `${prefix}-breadcrumb-item`)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BreadcrumbItem;
