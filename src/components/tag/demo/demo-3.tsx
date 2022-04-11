import React, { useEffect } from 'react';
import Tag from '@components/tag';
import Icon from '@components/icon';
import Message from '@components/message';

const Demo = () => {
  const handleClose = () => Message.success({ content: 'Tag closed!' });

  useEffect(() => Message.destroyAll, []);

  return (
    <>
      <Tag closable onClose={handleClose}>
        <Icon type="copy" />
        React
      </Tag>
      <Tag closable onClose={handleClose}>
        <Icon type="exchange" />
        Vue
      </Tag>
      <Tag>
        <Icon type="check" />
        Angular
      </Tag>
    </>
  );
};

export default Demo;
