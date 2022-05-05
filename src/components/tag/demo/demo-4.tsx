import React from 'react';
import Tag from '@components/tag';
import Icon from '@components/icon';

const Demo = () => {

  return (
    <>
      <Tag closable disabled>
        <Icon type="copy" />
        React
      </Tag>
      <Tag closable disabled>
        <Icon type="exchange" />
        Vue
      </Tag>
      <Tag disabled>
        <Icon type="check" />
        Angular
      </Tag>
    </>
  );
};

export default Demo;
