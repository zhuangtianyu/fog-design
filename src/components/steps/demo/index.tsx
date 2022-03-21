import React from 'react';
import Steps from '@components/steps';
import './index.less';

const steps = [
  {
    value: 1,
    title: 'Title',
    description: 'Description',
  },
  {
    value: 2,
    title: 'Title',
    description: 'Description',
  },
  {
    value: 3,
    title: 'Title',
    description: 'Description',
  },
  {
    value: 4,
    title: 'Title',
    description: 'Description',
  },
];

const StepsDemo = () => {

  return (
    <div className="steps-demo">
      <h2>Steps</h2>
      <h3>Basic Usage</h3>
      <Steps defaultValue={3} steps={steps} />
    </div>
  );
};

export default StepsDemo;
