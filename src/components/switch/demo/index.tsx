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
const { demos, apiRows } = components.switch;

const SwitchDemo = () => {

  return (
    <div className="switch-demo">
      <LinkHeader>Switch</LinkHeader>
      <p>Switch is used to check or uncheck item.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Uncontrolled"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Loading"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Children"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="CheckedChildren/UncheckedChildren"
        description="Better for children switching in uncontrolled mode."
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default SwitchDemo;
