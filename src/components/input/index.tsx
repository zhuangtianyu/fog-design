import React, { forwardRef, HTMLAttributes } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import TextArea from './components/textarea';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type InputValue = string | undefined | null;

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: InputValue;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

export interface InputTypes extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>> {
  TextArea: typeof TextArea;
}

const Input: InputTypes = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    value,
    defaultValue,
    disabled,
    readOnly,
    onChange,
    ...restProps
  } = props;

  const handleChange = event => {
    isFunction(onChange) && onChange(event);
  };

  return (
    <input
      className={classnames(`${prefix}-input`, className)}
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      {...restProps}
    />
  );
}) as InputTypes;

Input.defaultProps = {};

Input.displayName = 'Input';

Input.TextArea = TextArea;

export default Input;