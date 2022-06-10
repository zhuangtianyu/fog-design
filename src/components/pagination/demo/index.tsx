import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.pagination;

const PaginationDemo = () => {

  return (
    <div className="pagination-demo">
      <LinkHeader>Pagination</LinkHeader>
      <p>Pagination displays corresponding data by page and pageSize.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Disabled"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Jumper"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Ellipsis"
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <Demo
        title="Total"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default PaginationDemo;
