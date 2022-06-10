import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Icon from '@components/icon';
import Message from '@components/message';
import LinkHeader from '@layouts/link-header';
import { TYPE_PATH_MAP } from '@components/icon/constants';
import './index.less';

const { components, apiColumns } = docsConfig;
const { apiRows } = components.icon;

const IconDemo = () => {
  const handleCopy = type => {
    navigator
      .clipboard
      .writeText(`<Icon type="${type}" />`)
      .then(() => Message.success({ content: 'Code copied' }))
      .catch(() => Message.error({ content: 'Error occurred' }));
  };

  return (
    <div className="icon-demo">
      <LinkHeader>Icon</LinkHeader>
      <p>Icon is pictogram or ideogram, is used to guide interactions.</p>
      <h2>Demo</h2>
      {Object.keys(TYPE_PATH_MAP).map((type: keyof typeof TYPE_PATH_MAP) => (
        <div
          className="icon-demo__item"
          key={type}
          onClick={() => handleCopy(type)}
        >
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
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default IconDemo;
