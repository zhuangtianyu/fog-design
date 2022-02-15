import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import './index.less';

const prefixClassName = namespace.prefix;

export interface InputWrapperProps {
  className?: string;
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
}

const InputWrapper: React.FC<InputWrapperProps> = props => {
  const {
    className,
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
  } = props;

  return (
    <div
      className={classnames(className, {
        [`${prefixClassName}-input-wrapper`]: true,
        [`${prefixClassName}-input-wrapper--focused`]: focused,
        [`${prefixClassName}-input-wrapper--disabled`]: disabled,
        [`${prefixClassName}-input-wrapper--readOnly`]: readOnly,
      })}
      onClick={onClick}
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
