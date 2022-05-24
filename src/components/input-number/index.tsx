import * as React from 'react';
import { forwardRef, HTMLAttributes, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import InputWrapper from '@components/input/components/wrapper';
import Icon from '@components/icon';
import useControlled from '@hooks/useControlled';
import { isNumberLikeText, isNumberText } from '@utils/index';
import '@components/input/index.less';
import './index.less';

const prefixClassName = namespace.prefix;

const getInputTextByValue = value =>
  isNumberText(value)
    ? `${value}`
    : '';

const getValueByInputValue = (inputValue, defaultValue) =>
  inputValue !== '' && !isNaN(Number(inputValue))
    ? Number(inputValue)
    : defaultValue;

export type InputNumberValue = string | number | undefined | null;

export interface InputNumberProps extends Omit<HTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** --skip */
  className?: string;
  value?: InputNumberValue;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  keepControl?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

export type InputNumberTypes = React.ForwardRefExoticComponent<InputNumberProps & React.RefAttributes<HTMLInputElement>>;

export const InputNumber: InputNumberTypes = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    placeholder,
    disabled,
    readOnly,
    prefix,
    suffix,
    min,
    max,
    step,
    keepControl,
    ...restProps
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const [focused, setFocused] = useState<boolean>(false);

  const [entered, setEntered] = useState<boolean>(false);

  const defaultRef = useRef<HTMLInputElement>(null);

  const inputRef = ref as React.RefObject<HTMLInputElement> || defaultRef;

  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    setInputText(getInputTextByValue(value));
  }, [value]);

  const getRangedValue = nextValue => {
    if (typeof min !== 'number' && typeof max !== 'number') return nextValue;
    if (typeof min === 'number' && typeof max !== 'number') return Math.max(min, nextValue);
    if (typeof min !== 'number' && typeof max === 'number') return Math.min(max, nextValue);
    if (min > max) return nextValue;
    if (nextValue < min) return min;
    if (nextValue > max) return max;

    return nextValue;
  };

  const handleInputChange = event => {
    if (isNumberLikeText(event.target.value)) {
      setInputText(event.target.value);
    }
  };

  const handleInputBlur = event => {
    const nextValue = getValueByInputValue(event.target.value, null);
    const nextValueRanged = getRangedValue(nextValue);

    nextValueRanged !== value && onChange(nextValueRanged);

    setInputText(getInputTextByValue(nextValueRanged));
    setFocused(false);
  };

  const handleStepChange = (direction: -1 | 1) => {
    !focused && inputRef.current.focus();

    const nextValue = getValueByInputValue(inputText, 0) + direction * step;
    const nextValueRanged = getRangedValue(nextValue);

    onChange(nextValueRanged);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      handleStepChange(1);
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      handleStepChange(-1);
    }
  };

  return (
    <InputWrapper
      className={classnames(className, {
        [`${prefixClassName}-input-number`]: true,
        [`${prefixClassName}-input-number--focused`]: focused,
        [`${prefixClassName}-input-number--entered`]: entered,
        [`${prefixClassName}-input-number--keep-control`]: keepControl,
      })}
      focused={focused}
      disabled={disabled}
      readOnly={readOnly}
      prefix={prefix}
      suffix={suffix}
      onClick={() => inputRef.current.focus()}
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
      {...restProps}
    >
      <input
        className={`${prefixClassName}-input`}
        ref={inputRef}
        value={inputText}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <div
        className={classnames({
          [`${prefixClassName}-input-number__control`]: true,
          [`${prefixClassName}-input-number__control--border-right`]: suffix,
        })}
      >
        <Icon
          className={`${prefixClassName}-input-number__step`}
          onMouseDown={event => event.preventDefault()}
          onClick={() => handleStepChange(1)}
          type="up"
        />
        <Icon
          className={`${prefixClassName}-input-number__step`}
          onMouseDown={event => event.preventDefault()}
          onClick={() => handleStepChange(-1)}
          type="down"
        />
      </div>
    </InputWrapper>
  );
}) as InputNumberTypes;

InputNumber.defaultProps = {
  step: 1,
  keepControl: true,
};

InputNumber.displayName = 'InputNumber';

export default InputNumber;
