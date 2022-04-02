import React from 'react';
import Steps from '@components/steps';

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

const Demo = () => <Steps defaultValue={3} steps={steps} />;

export default Demo;
