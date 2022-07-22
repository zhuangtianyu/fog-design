import Radio from '@components/radio';
import Checkbox from '@components/checkbox';
import Input from '@components/input';
import InputNumber from '@components/input-number';
import Switch from '@components/switch';
import Select, { SelectProps } from '@components/select';
import DatePicker from '@components/date-picker';
import React from 'react';

type GetFormItemValueGetter = (element: React.ReactElement) => (...args: any) => any;

export const getFormItemValueGetter: GetFormItemValueGetter = element => {
  switch (element.type) {
    case Input:
    case InputNumber:
      return event => event.target.value;
    case Radio:
    case Checkbox:
      return event => event.target.checked;
    case Select:
    case Switch:
    case DatePicker:
    case DatePicker.RangePicker:
    case Radio.Group:
    case Checkbox.Group:
      return nextValue => nextValue;
    default:
      return null;
  }
};

type GetFormItemValueEmpty = (element: React.ReactElement, value: any) => boolean;

export const getFormItemValueEmpty: GetFormItemValueEmpty = (element, value) => {
  const empties = [null, undefined];

  switch (element.type) {
    case Radio:
    case Switch:
    case Checkbox:
    case DatePicker:
    case InputNumber:
    case Radio.Group:
    case Checkbox.Group:
      return empties.includes(value);
    case Input:
      return !value;
    case Select:
      return !(element.props as SelectProps).multiple
        ? empties.includes(value)
        : value.length;
    case DatePicker.RangePicker:
      return value.length;
    default:
      return true;
  }
};
