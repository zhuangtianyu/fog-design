import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.form;

const FormDemo = () => {

  return (
    <div className="form-demo">
      <LinkHeader>Form</LinkHeader>
      <p>Form is used to submit data.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <h2>API</h2>
      <h3>Form</h3>
      <Table columns={apiColumns} data={apiRows.default} />
      <h3>Form.Item</h3>
      <Table columns={apiColumns} data={apiRows.item} />
    </div>
  );
};

export default FormDemo;
