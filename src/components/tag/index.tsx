import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { isFunction } from '@utils/index';
import './index.less';

interface TagProps  {
  className?: string;
  closable?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  [propName: string]: any;
}

const { prefix } = namespace;

const Tag: React.FC<TagProps> = props => {
  const {
    className,
    closable,
    children,
    onClose,
    ...restProps
  } = props;

  return (
    <div
      className={classnames(`${prefix}-tag`, className)}
      {...restProps}
    >
      {children}
      {closable && (
        <div
          className={`${prefix}-tag__close`}
          onClick={event => isFunction(onClose) && onClose(event)}
        >
          ✕
        </div>
      )}
    </div>
  );
};

export default Tag;
