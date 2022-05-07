import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Col from '../col';
import './index.less';

const { prefix } = namespace;

export interface RowProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  gutter?: number;
  children?: React.ReactElement | React.ReactElement[];
}

export const Row: React.FC<RowProps> = props => {
  const {
    className,
    style: styleFromProps,
    gutter,
    children: childrenFromProps,
  } = props;

  const children = useMemo(() => {
    const childrenFiltered = [];

    React.Children.forEach(childrenFromProps as React.ReactElement[], item => {
      if (item.type === Col) {
        childrenFiltered.push(React.cloneElement(item, { gutter }));
      }
    });

    return childrenFiltered;
  }, [childrenFromProps, gutter]);

  const style = useMemo(() =>
    typeof gutter === 'number' && gutter > 0
      ? {
          ...styleFromProps,
          marginLeft: -0.5 * gutter,
          marginRight: -0.5 * gutter,
        }
      : styleFromProps
  , [styleFromProps, gutter]);

  return (
    <div
      className={classnames(`${prefix}-row`, className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Row;
