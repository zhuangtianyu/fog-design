import * as React from 'react';
import { forwardRef, HTMLAttributes, useState, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import InputWrapper from '@components/input/components/wrapper';
import Icon from '@components/icon';
import useControlled from '@hooks/useControlled';
import { isNumberLikeText } from '@utils/index';
import '@components/input/index.less';
import './index.less';

const prefixClassName = namespace.prefix;

export type InputNumberValue = string | number | undefined | null;

export interface InputNumberProps extends Omit<HTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** --skip */
  className?: string;
  value?: InputNumberValue;
  disabled?: boolean;
  readOnly?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
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

  const handleChange = event => {
    if (isNumberLikeText(event.target.value)) {
      onChange(event.target.value);
    }
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
        value={value || ''}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={handleChange}
      />
      <div className={`${prefixClassName}-input-number__triggers`}>
        <Icon
          className={`${prefixClassName}-input-number__trigger`}
          type="up"
        />
        <Icon
          className={`${prefixClassName}-input-number__trigger`}
          type="down"
        />
      </div>
    </InputWrapper>
  );
}) as InputNumberTypes;

InputNumber.defaultProps = {};

InputNumber.displayName = 'InputNumber';

export default InputNumber;
