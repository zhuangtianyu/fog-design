import React, { useEffect } from 'react';
import Tag from '@components/tag';
import Message from '@components/message';

const tags = ['React', 'Vue', 'Angular'];

const Demo = () => {
  useEffect(() => Message.destroyAll, []);

  return (
    <>
      {tags.map(tag => (
        <Tag
          key={tag}
          closable
          onClose={() => Message.success({ content: 'Tag closed!' })}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default Demo;
