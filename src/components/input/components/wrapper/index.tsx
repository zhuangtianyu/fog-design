import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

const prefixClassName = namespace.prefix;

export interface InputWrapperProps {
  className?: string;
  error?: boolean;
  focused?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onClear?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  [propName: string]: any;
}

const InputWrapper: React.FC<InputWrapperProps> = props => {
  const {
    className,
    error,
    focused,
    disabled,
    readOnly,
    clearable,
    children,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    onClear,
    onClick,
    ...restProps
  } = props;

  return (
    <div
      className={classnames(className, {
        [`${prefixClassName}-input-wrapper`]: true,
        [`${prefixClassName}-input-wrapper--error`]: error,
        [`${prefixClassName}-input-wrapper--focused`]: !disabled && focused,
        [`${prefixClassName}-input-wrapper--disabled`]: disabled,
        [`${prefixClassName}-input-wrapper--readOnly`]: readOnly,
      })}
      onClick={onClick}
      {...restProps}
    >
      {addonBefore && (
        <div className={`${prefixClassName}-input-wrapper__before`}>
          {prefix}
        </div>
      )}
      {prefix && (
        <div className={`${prefixClassName}-input-wrapper__prefix`}>
          {prefix}
        </div>
      )}
      {children}
      {clearable && (
        <div
          className={`${prefixClassName}-input-wrapper__clear`}
          onClick={onClear}
        >
          <Icon type="close-circle-fill" />
        </div>
      )}
      {suffix && (
        <div className={`${prefixClassName}-input-wrapper__suffix`}>
          {suffix}
        </div>
      )}
      {addonAfter && (
        <div className={`${prefixClassName}-input-wrapper__after`}>
          {prefix}
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
