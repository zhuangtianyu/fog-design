import Radio from '@components/radio';
import Checkbox from '@components/checkbox';
import Input from '@components/input';
import InputNumber from '@components/input-number';
import Select from '@components/select';
import Switch from '@components/switch';
import DatePicker from '@components/date-picker';

type GetFormItemValueGetter = (element: React.ReactElement) => (...args: any) => any;

export const getFormItemValueGetter: GetFormItemValueGetter = (element: React.ReactElement) => {
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
