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
const { demos, apiRows } = components.message;

const MessageDemo = () => {

  return (
    <div className="message-demo">
      <LinkHeader>Message</LinkHeader>
      <p>Message is used for push message notifications.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <Demo
        title="Method"
        content={<Demo2 />}
        code={demos['demo-2']}
      />
      <Demo
        title="Customized Icon"
        content={<Demo3 />}
        code={demos['demo-3']}
      />
      <Demo
        title="Manual Close"
        content={<Demo4 />}
        code={demos['demo-4']}
      />
      <Demo
        title="DestroyAll"
        description="Destroy all references at some time, e.g. a route change happens."
        content={<Demo5 />}
        code={demos['demo-5']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default MessageDemo;
