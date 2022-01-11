import React from 'react';
import Select from '@components/select';
import './index.less';

const { Option } = Select;

const drinks = ['Coca-Cola', 'Sprite', 'Fanta Orange'];

const beers = ['Snow Beer Trekker', 'Corona', 'Budweiser', 'Hoegaarden'];

const SelectDemo = () => {

  return (
    <div className="select-demo">
      <h2>Select</h2>
      <h3>Basic Usage</h3>
      <Select placeholder="Please select">
        {drinks.map(name => (
          <Option key={name} value={name}>
            {name}
          </Option>
        ))}
      </Select>
      <h3>Multiple Mode</h3>
      <Select placeholder="Please select" multiple>
        {beers.map(name => (
          <Option key={name} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectDemo;
