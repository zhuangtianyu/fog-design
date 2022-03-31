import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { TYPE_PATH_MAP } from './constants';
import './index.less';

const { prefix } = namespace;

export interface IconProps {
  /** --skip */
  className?: string;
  type: keyof typeof TYPE_PATH_MAP;
  size?: number | string;
  color?: string;
  [propName: string]: any;
}

export const Icon: React.FC<IconProps> = props => {
  const { className, type, size, color, ...restProps } = props;

  return (
    <div
      className={classnames(`${prefix}-icon`, className)}
      style={{ fontSize: size, color }}
      {...restProps}
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
      >
        {[].concat(TYPE_PATH_MAP[type]).map((item, index) => (
          <path d={item} key={index} />
        ))}
      </svg>
    </div>
  );
};

Icon.defaultProps = {};

export default Icon;
