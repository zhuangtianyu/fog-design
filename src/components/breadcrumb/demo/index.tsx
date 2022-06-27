import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.breadcrumb;

const BreadcrumbDemo = () => {

  return (
    <div className="breadcrumb-demo">
      <LinkHeader>Breadcrumb</LinkHeader>
      <p>Breadcrumb is used to describe routes.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="With Icon"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Interactive"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <h2>API</h2>
      <h3>Breadcrumb</h3>
      <Table columns={apiColumns} data={apiRows.default} />
      <h3>Breadcrumb.Item</h3>
      <Table columns={apiColumns} data={apiRows.item} />
    </div>
  );
};

export default BreadcrumbDemo;
