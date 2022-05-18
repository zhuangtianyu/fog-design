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
  step?: number;
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
    step,
    ...restProps
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const [focused, setFocused] = useState<boolean>(false);

  const defaultRef = useRef<HTMLInputElement>(null);

  const inputRef = ref as React.RefObject<HTMLInputElement> || defaultRef;

  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    setInputText(getInputTextByValue(value));
  }, [value]);

  const handleInputChange = event => {
    if (isNumberLikeText(event.target.value)) {
      setInputText(event.target.value);
    }
  };

  const handleInputBlur = event => {
    const nextValue = getValueByInputValue(event.target.value, null);

    nextValue !== value && onChange(nextValue);

    setInputText(getInputTextByValue(nextValue));
    setFocused(false);
  };

  const handleStepChange = (direction: -1 | 1) => {
    !focused && inputRef.current.focus();

    const nextValue = getValueByInputValue(inputText, 0) + direction * step;

    onChange(nextValue);
  };

  return (
    <InputWrapper
      focused={focused}
      disabled={disabled}
      readOnly={readOnly}
      prefix={prefix}
      suffix={suffix}
      onClick={() => inputRef.current.focus()}
      {...restProps}
    >
      <input
        className={classnames(
          className,
          `${prefixClassName}-input`,
          `${prefixClassName}-input-number`,
        )}
        ref={inputRef}
        value={inputText}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
      />
      <div
        className={classnames({
          [`${prefixClassName}-input-number__triggers`]: true,
          [`${prefixClassName}-input-number__triggers--border-right`]: suffix,
        })}
      >
        <Icon
          className={`${prefixClassName}-input-number__trigger`}
          onMouseDown={event => event.preventDefault()}
          onClick={() => handleStepChange(1)}
          type="up"
        />
        <Icon
          className={`${prefixClassName}-input-number__trigger`}
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
};

InputNumber.displayName = 'InputNumber';

export default InputNumber;
