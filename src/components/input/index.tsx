import React, { forwardRef, HTMLAttributes, useState, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import TextArea from './components/textarea';
import useControlled from '@hooks/useControlled';
import './index.less';

const prefixClassName = namespace.prefix;

export type InputValue = string | undefined | null;

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'prefix'> {
  className?: string;
  value?: InputValue;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  clearable?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

export interface InputTypes extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  TextArea: typeof TextArea;
}

const Input: InputTypes = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    disabled,
    readOnly,
    prefix,
    suffix,
    clearable,
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

  const clearableVisible = clearable && value && !disabled && !readOnly;

  const prefixVisible = prefix;

  const suffixVisible = suffix;

  const shouldWrap = clearableVisible || prefixVisible || suffixVisible;

  const getWrappedInput = InputElement => shouldWrap
    ? <div
        className={classnames({
          [`${prefixClassName}-input-wrapper`]: true,
          [`${prefixClassName}-input-wrapper--focused`]: focused,
          [`${prefixClassName}-input-wrapper--disabled`]: disabled,
          [`${prefixClassName}-input-wrapper--readOnly`]: readOnly,
        })}
        ref={inputRef}
        onClick={() => inputRef.current.focus()}
      >
        {prefix && (
          <div className={`${prefixClassName}-input__prefix`}>
            {prefix}
          </div>
        )}
        {InputElement}
        {clearableVisible && (
          <div
            className={`${prefixClassName}-input__clear`}
            onClick={() => onChange({ target: { value: '' } })}
          >
            <Icon type="close-circle-fill" />
          </div>
        )}
        {suffix && (
          <div className={`${prefixClassName}-input__suffix`}>
            {suffix}
          </div>
        )}
      </div>
    : React.cloneElement(InputElement, { ref: inputRef });

  return getWrappedInput(
    <input
      className={classnames(`${prefixClassName}-input`, className, {
        [`${prefixClassName}-input--clearable`]: clearable,
        [`${prefixClassName}-input--disabled`]: disabled,
      })}
      value={value || ''}
      disabled={disabled}
      readOnly={readOnly}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onChange={onChange}
      {...restProps}
    />
  );
}) as InputTypes;

Input.defaultProps = {};

Input.displayName = 'Input';

Input.TextArea = TextArea;

export default Input;
