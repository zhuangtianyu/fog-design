import React from 'react';
import Icon from '@components/icon';
import { TYPE_PATH_MAP } from '@components/icon/constants';
import './index.less';

const IconDemo = () => {

  return (
    <div className="icon-demo">
      <h2>Icon</h2>
      <h3>Basic Usage</h3>
      {Object.keys(TYPE_PATH_MAP).map((type: keyof typeof TYPE_PATH_MAP) => (
        <div className="icon-demo__item" key={type}>
          <Icon
            className="icon-demo__icon"
            type={type}
            size={24}
          />
          <div className="icon-demo__type">
            {type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconDemo;
