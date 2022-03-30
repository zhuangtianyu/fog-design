import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Demo from '../../../layouts/demo';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.checkbox;

const CheckboxDemo = () => {

  return (
    <div className="checkbox-demo">
      <h1>Checkbox</h1>
      <p>Checkbox is used to make choice by toggled.</p>
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
        title="Group"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Indeterminate"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows} />
    </div>
  );
};

export default CheckboxDemo;
