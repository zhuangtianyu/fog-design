import React from 'react';
import Breadcrumb from '@components/breadcrumb';
import Message from '@components/message';
import Icon from '@components/icon';

const Demo = () => (
  <>
    <Breadcrumb separator={<Icon type="double-right" />}>
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
    <Breadcrumb
      style={{ marginTop: 8 }}
      separator={<Icon type="double-right" />}
    >
      <Breadcrumb.Item>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item
        href="https://github.com/zhuangtianyu"
        target="_blank"
        separator={<Icon type="right" />}
      >
        App
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => Message.info({ content: 'Memory clicked!' })}>
        Memory
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);

export default Demo;
