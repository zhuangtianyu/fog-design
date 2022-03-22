import React from 'react';
import Steps from '@components/steps';
import './index.less';

const steps1 = [
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

const steps2 = [
  {
    value: 1,
    title: 'S1',
    description: 'Harry Potter and the Philosopher\'s Stone',
  },
  {
    value: 2,
    title: 'S2',
    description: 'Harry Potter and the Chamber of Secrets',
  },
  {
    value: 3,
    title: 'S3',
    description: 'Harry Potter and the Prisoner of Azkaban',
  },
];

const StepsDemo = () => {

  return (
    <div className="steps-demo">
      <h2>Steps</h2>
      <h3>Basic Usage</h3>
      <Steps defaultValue={3} steps={steps1} />
      <h3>Vertical</h3>
      <Steps defaultValue={3} steps={steps2} vertical />
    </div>
  );
};

export default StepsDemo;
