import React from 'react';
import Steps from '@components/steps';

const steps = [
  {
    value: 1,
    title: 'S1',
    description: 'Harry Potter and the Philosopher\'s Stone.',
  },
  {
    value: 2,
    title: 'S2',
    description: 'Harry Potter and the Chamber of Secrets.',
  },
  {
    value: 3,
    title: 'S3',
    description: 'Harry Potter and the Prisoner of Azkaban.',
  },
];

const Demo = () => <Steps defaultValue={3} steps={steps} vertical />;

export default Demo;
