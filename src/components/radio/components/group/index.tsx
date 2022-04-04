import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Radio from '@components/radio';
import RadioButton, { ButtonStyle } from '../button';
import useControlled from '@hooks/useControlled';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export interface RadioGroupProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  value?: ValueType;
  defaultValue?: ValueType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  buttonStyle?: ButtonStyle;
  children?: React.ReactElement[];
}

export const RadioGroup: React.FC<RadioGroupProps> = props => {
  const {
    className,
    style,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    children: childrenFromProps,
    disabled,
    buttonStyle,
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
          disabled: item.props.disabled || disabled,
          onClick: event => {
            handleRadioClick(event);
            isFunction(item.props.onClick) && item.props.onClick(event);
          },
        }));
      }
      if (item.type === RadioButton) {
        childrenParsed.push(React.cloneElement(item, {
          checked: item.props.value === value,
          disabled: item.props.disabled || disabled,
          onClick: event => {
            handleRadioClick(event);
            isFunction(item.props.onClick) && item.props.onClick(event);
          },
          buttonStyle,
        }));
      }
    });

    return childrenParsed;
  }, [childrenFromProps, value]);

  return (
    <div
      className={classnames(`${prefix}-radio-group`, className)}
      style={style}
    >
      {children}
    </div>
  );
};

RadioGroup.defaultProps = {
  buttonStyle: 'outline',
};

export default RadioGroup;
