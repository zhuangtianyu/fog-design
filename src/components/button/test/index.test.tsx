import React from 'react';
import Button from '../index';
import { mount } from 'enzyme';

describe('button', () => {
  it('should render correct children', () => {
    const wrapper = mount(<Button>button</Button>);

    expect(wrapper.text()).toBe('button');
  });
});
