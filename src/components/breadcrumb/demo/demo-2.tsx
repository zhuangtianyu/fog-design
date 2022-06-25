import React from 'react';
import Breadcrumb from '@components/breadcrumb';
import Icon from '@components/icon';

const Demo = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        App
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Memory
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon
          type="success-circle-fill"
          color="var(--fog-success-color)"
        />
      </Breadcrumb.Item>
    </Breadcrumb>
    <Breadcrumb style={{ marginTop: 8 }}>
      <Breadcrumb.Item>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        App
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Memory
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon type="more" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Data
      </Breadcrumb.Item>
    </Breadcrumb>
  </>
);

export default Demo;
