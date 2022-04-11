import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export interface TagProps  {
  /** --skip */
  className?: string;
  closable?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  [propName: string]: any;
}

export const Tag: React.FC<TagProps> = props => {
  const {
    className,
    closable,
    children: childrenFromProps,
    onClose,
    ...restProps
  } = props;

  const children = useMemo(() => {
    const wrappedChildren = [];

    React.Children.forEach(childrenFromProps, (item, index) => {
      const shouldWrap = ['string', 'number'].includes(typeof item);

      if (shouldWrap) {
        wrappedChildren.push(<span key={index}>{item}</span>);
      } else {
        wrappedChildren.push(item);
      }
    });

    return wrappedChildren;
  }, [childrenFromProps]);

  return (
    <div
      className={classnames(`${prefix}-tag`, className)}
      {...restProps}
    >
      {children}
      {closable && (
        <Icon
          className={`${prefix}-tag__close`}
          type="close"
          size={12}
          onClick={event => isFunction(onClose) && onClose(event)}
        />
      )}
    </div>
  );
};

export default Tag;
