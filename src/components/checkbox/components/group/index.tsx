import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Checkbox from '@components/checkbox';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export interface CheckboxGroupProps {
  className?: string;
  value?: ValueType[];
  defaultValue?: ValueType[];
  disabled?: boolean;
  children?: React.ReactElement[];
  onChange?: (value: ValueType[]) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = props => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    children: childrenFromProps,
    disabled,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const handleCheckboxChange = event => {
    const nextValueUnsorted = event.target.checked
      ? [...value, event.target.value]
      : value.filter(item => item !== event.target.value);

    const nextValue = values.filter(item => nextValueUnsorted.includes(item));

    onChange(nextValue);
  };

  const children = useMemo(() => {
    const childrenParsed = [];

    React.Children.forEach(childrenFromProps as React.ReactElement[], item => {
      if (item.type === Checkbox) {
        childrenParsed.push(React.cloneElement(item, {
          checked: value.includes(item.props.value),
          disabled: item.props.disabled || disabled,
          onChange: handleCheckboxChange,
        }));
      }
    });

    return childrenParsed;
  }, [childrenFromProps, value]);

  const values = useMemo(() => children.map(item => item.props.value), [children]);

  return (
    <div className={classnames(`${prefix}-checkbox-group`, className)}>
      {children}
    </div>
  );
};

CheckboxGroup.defaultProps = {};

export default CheckboxGroup;
