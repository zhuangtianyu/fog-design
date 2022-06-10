import React from 'react';
import { useLocation } from 'react-router-dom';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

const LinkHeader = props => {
  const { children } = props;
  const { pathname } = useLocation();
  const githubLink = `https://github.com/zhuangtianyu/fog-design/blob/master/src/components${pathname}/index.tsx`;

  return (
    <h1 className={`${prefix}-link-header`}>
      {children}
      <a
        className={`${prefix}-link-header__link`}
        href={githubLink}
        target="_blank"
      >
        <Icon
          className={`${prefix}-link-header__icon`}
          type="github-circle-fill"
        />
      </a>
    </h1>
  );
};

export default LinkHeader;
