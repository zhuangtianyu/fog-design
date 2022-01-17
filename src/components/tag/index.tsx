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
      className={classnames(className, {
        [`${prefix}-tag`]: true,
        [`${prefix}-tag--closable`]: closable,
      })}
      {...restProps}
    >
      <div className={`${prefix}-tag__text`}>
        {children}
      </div>
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
