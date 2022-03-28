import React from 'react';
import docsConfig from '@static/docs-config.json';
import Table from '@components/table';
import Input from '@components/input';
import Demo1 from './demo-1';
import Demo2 from './demo-2';
import Demo3 from './demo-3';
import Demo4 from './demo-4';
import Demo5 from './demo-5';
import './index.less';

const { components, apiColumns } = docsConfig;
const { demos, apiRows } = components.button;
const { TextArea } = Input;

const ButtonDemo = () => {

  return (
    <div className="button-demo">
      <h2>Button</h2>
      <h3>Type</h3>
      <Demo1 />
      <TextArea defaultValue={demos['demo-1']} readOnly />
      <h3>Icon</h3>
      <Demo2 />
      <TextArea defaultValue={demos['demo-2']} readOnly />
      <h3>Loading</h3>
      <Demo3 />
      <TextArea defaultValue={demos['demo-3']} readOnly />
      <h3>Disabled</h3>
      <Demo4 />
      <TextArea defaultValue={demos['demo-4']} readOnly />
      <h3>Danger</h3>
      <Demo5 />
      <TextArea defaultValue={demos['demo-5']} readOnly />
      <h3>API</h3>
      <Table columns={apiColumns} data={apiRows} />
    </div>
  );
};

export default ButtonDemo;
