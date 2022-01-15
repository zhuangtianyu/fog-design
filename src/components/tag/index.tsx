import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { isFunction } from '@utils/index';
import './index.less';

interface TagProps  {
  className?: string;
  closable?: boolean;
  onClose?: () => void;
}

const { prefix } = namespace;

const Tag: React.FC<TagProps> = props => {
  const {
    className,
    closable,
    children,
    onClose,
  } = props;

  return (
    <div className={classnames(`${prefix}-tag`, className)}>
      {children}
      {closable && (
        <div
          className={`${prefix}-tag__close`}
          onClick={() => isFunction(onClose) && onClose()}
        >
          ✕
        </div>
      )}
    </div>
  );
};

export default Tag;
