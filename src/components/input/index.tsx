import * as React from 'react';
import { forwardRef, HTMLAttributes, useState, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import InputWrapper from './components/wrapper';
import TextArea from './components/textarea';
import useControlled from '@hooks/useControlled';
import './index.less';

const prefixClassName = namespace.prefix;

export type InputValue = string | undefined | null;

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** --skip */
  className?: string;
  value?: InputValue;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  clearable?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

export interface InputTypes extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  TextArea: typeof TextArea;
}

export const Input: InputTypes = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    clearable: clearableFromProps,
    placeholder,
    disabled,
    readOnly,
    prefix,
    suffix,
    ...restProps
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    innerValueGetter: event => event.target.value,
  });

  const [focused, setFocused] = useState<boolean>(false);

  const defaultRef = useRef<HTMLInputElement>(null);

  const inputRef = ref as React.RefObject<HTMLInputElement> || defaultRef;

  const clearable = clearableFromProps && value && !disabled && !readOnly;

  const shouldWrap = clearableFromProps || prefix || suffix;

  const handleWrapperClear = () => {
    onChange({ target: { value: '' } });
  };

  const getWrappedInput = InputElement => shouldWrap
    ? <InputWrapper
        focused={focused}
        disabled={disabled}
        readOnly={readOnly}
        clearable={clearable}
        prefix={prefix}
        suffix={suffix}
        onClear={handleWrapperClear}
        onClick={() => inputRef.current.focus()}
        {...restProps}
      >
        {InputElement}
      </InputWrapper>
    : React.cloneElement(InputElement, restProps);

  return getWrappedInput(
    <input
      className={classnames(`${prefixClassName}-input`, className)}
      ref={inputRef}
      value={value || ''}
      disabled={disabled}
      readOnly={readOnly}
      placeholder={placeholder}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={onChange}
    />
  );
}) as InputTypes;

Input.defaultProps = {};

Input.displayName = 'Input';

Input.TextArea = TextArea;

export default Input;
