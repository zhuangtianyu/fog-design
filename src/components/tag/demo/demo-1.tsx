import React from 'react';
import Tag from '@components/tag';

const tags = ['React', 'Vue', 'Angular'];

const Demo = () => {

  return (
    <>
      {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </>
  );
};

export default Demo;
