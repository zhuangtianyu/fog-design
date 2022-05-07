import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

export interface ColProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  /** --skip */
  gutter?: number;
  span?: number;
  children?: React.ReactElement;
}

export const Col: React.FC<ColProps> = props => {
  const {
    className,
    style: styleFromProps,
    gutter,
    span,
    children,
  } = props;

  const style = useMemo(() =>
    typeof gutter === 'number' && gutter > 0
      ? {
          ...styleFromProps,
          paddingLeft: 0.5 * gutter,
          paddingRight: 0.5 * gutter,
        }
      : styleFromProps
  , [styleFromProps, gutter]);

  return (
    <div
      className={classnames(className, {
        [`${prefix}-col`]: true,
        [`${prefix}-col--${span}`]: span,
      })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Col;
