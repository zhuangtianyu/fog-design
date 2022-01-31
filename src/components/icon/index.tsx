import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { TYPE_PATH_MAP } from './constants';
import './index.less';

const { prefix } = namespace;

interface IconProps {
  className?: string;
  type: keyof typeof TYPE_PATH_MAP;
  size?: number | string;
  color?: string;
  [propName: string]: any;
}

const Icon: React.FC<IconProps> = props => {
  const { className, type, size, color } = props;

  return (
    <div
      className={classnames(`${prefix}-icon`, className)}
      style={{ fontSize: size, color }}
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

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
};

export default Icon;
