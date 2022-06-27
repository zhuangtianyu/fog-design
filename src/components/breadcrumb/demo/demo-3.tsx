import React from 'react';
import Breadcrumb from '@components/breadcrumb';
import Message from '@components/message';

const Demo = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="https://github.com/zhuangtianyu" target="_blank">
        App
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => Message.info({ content: 'Memory clicked!' })}>
        Memory
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);

export default Demo;
