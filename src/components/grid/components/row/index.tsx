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
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
  children?: React.ReactElement | React.ReactElement[];
}

export const Row: React.FC<RowProps> = props => {
  const {
    className,
    style: styleFromProps,
    gutter,
    align,
    justify,
    children,
  } = props;

  const cols = useMemo(() => {
    const childrenFiltered = [];

    React.Children.forEach(children, (item: React.ReactElement) => {
      if (item && item.type === Col) {
        childrenFiltered.push(item);
      }
    });

    return childrenFiltered.map(item => ({ ...item.props, gutter }));
  }, [children, gutter]);

  const style = useMemo(() => {
    let payload: React.CSSProperties = {};

    if (typeof gutter === 'number' && gutter > 0) {
      payload = {
        ...payload,
        marginLeft: -0.5 * gutter,
        marginRight: -0.5 * gutter,
      };
    }

    if (typeof align === 'string') {
      payload = {
        ...payload,
        alignItems: align,
      };
    }

    if (typeof justify === 'string') {
      payload = {
        ...payload,
        justifyContent: justify,
      };
    }

    return { ...styleFromProps, ...payload };
  }, [styleFromProps, gutter, align, justify]);

  return (
    <div
      className={classnames(`${prefix}-row`, className)}
      style={style}
    >
      {cols.map((item, index) => (
        <Col key={index} {...item}>
          {item.children}
        </Col>
      ))}
    </div>
  );
};

export default Row;
