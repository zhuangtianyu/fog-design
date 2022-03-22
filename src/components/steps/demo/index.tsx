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
    title: 'Fanta',
    description: 'Fanta is a brand of fruit-flavored carbonated soft drinks created by Coca-Cola Deutschland under the leadership of German businessman Max Keith.',
  },
  {
    value: 2,
    title: 'Sprite',
    description: 'Sprite is a colorless, lemon and lime-flavored soft drink created by The Coca-Cola Company.',
  },
  {
    value: 3,
    title: 'Aquarius',
    description: 'Aquarius (アクエリアス) is a sports drink manufactured by The Coca-Cola Company.',
  },
  {
    value: 4,
    title: 'Coca-Cola',
    description: 'Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company.',
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
