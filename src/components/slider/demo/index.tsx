import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import LinkHeader from '@layouts/link-header';
import Demo from '@layouts/demo';
import Demo1 from './demo-1';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.slider;

const SliderDemo = () => {

  return (
    <div className="slider-demo">
      <LinkHeader>Slider</LinkHeader>
      <p>Slider is used to display data in slide way.</p>
      <h2>Demo</h2>
      <Demo
        title="Basic Usage"
        content={<Demo1 />}
        code={demos['demo-1']}
      />
      <h2>API</h2>
      <Table columns={apiColumns} data={apiRows.default} />
    </div>
  );
};

export default SliderDemo;
