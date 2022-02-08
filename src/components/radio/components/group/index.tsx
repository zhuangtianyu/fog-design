import React, { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Radio from '@components/radio';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export interface RadioGroupProps {
  className?: string;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  children?: React.ReactElement[];
}

const RadioGroup: React.FC<RadioGroupProps> = props => {
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
    innerValueGetter: event => event.target.value,
  });

  const handleRadioClick = event => {
    event.target.value !== value && onChange(event);
  };

  const children = useMemo(() => {
    const childrenParsed = [];

    React.Children.forEach(childrenFromProps as React.ReactElement[], item => {
      if (item.type === Radio) {
        childrenParsed.push(React.cloneElement(item, {
          checked: item.props.value === value,
          onClick: handleRadioClick,
          disabled: item.props.disabled || disabled,
        }));
      }
    });

    return childrenParsed;
  }, [childrenFromProps, value]);

  return (
    <div className={classnames(`${prefix}-radio-group`, className)}>
      {children}
    </div>
  );
};

RadioGroup.defaultProps = {};

export default RadioGroup;
