import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Radio from '@components/radio';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export type ButtonStyle = 'outline' | 'solid';

export interface RadioButtonProps {
  /** --skip */
  className?: string;
  value?: ValueType;
  checked?: boolean;
  disabled?: boolean;
  buttonStyle?: ButtonStyle;
  children?: React.ReactChild;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const RadioButton: React.FC<RadioButtonProps> = props => {
  const {
    className,
    value,
    checked,
    disabled,
    buttonStyle,
    children,
    onClick,
  } = props;

  return (
    <Radio
      className={`${prefix}-radio-button-wrapper`}
      value={value}
      checked={checked}
      disabled={disabled}
      onClick={onClick}
    >
      <div
        className={classnames(className, {
          [`${prefix}-radio-button`]: true,
          [`${prefix}-radio-button--checked`]: checked,
          [`${prefix}-radio-button--disabled`]: disabled,
          [`${prefix}-radio-button--${buttonStyle}`]: checked && !disabled && buttonStyle,
        })}
      >
        {children}
      </div>
    </Radio>
  );
};

RadioButton.defaultProps = {
  buttonStyle: 'outline',
};

export default RadioButton;
