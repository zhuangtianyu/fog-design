import React from 'react';
import Tag from '@components/tag';
import './index.less';

const tags = ['React', 'Vue', 'Angular'];

const TagDemo = () => {

  return (
    <div className="tag-demo">
      <h2>Tag</h2>
      <h3>Basic Usage</h3>
      {tags.map(tag => (
        <Tag key={tag}>
          {tag}
        </Tag>
      ))}
      <h3>Closable</h3>
      {tags.map(tag => (
        <Tag key={tag} closable>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagDemo;
