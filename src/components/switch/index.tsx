import * as React from 'react';
import { useEffect, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Icon from '@components/icon';
import useControlled from '@hooks/useControlled';
import './index.less';

export interface SwitchProps  {
  /** --skip */
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactChild;
}

const { prefix } = namespace;

export const Switch: React.FC<SwitchProps> = props => {
  const {
    className,
    checked: checkedFromProps,
    defaultChecked: defaultCheckedFromProps,
    onChange: onChangeFromProps,
    disabled,
    loading,
    children,
  } = props;

  const { value: checked, onChange } = useControlled({
    value: checkedFromProps,
    defaultValue: defaultCheckedFromProps,
    onChange: onChangeFromProps,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {

    return () => {
      // loading state will set button to disabled, then body becomes activeElement
      // handle focus switch after loading, to ensure keyboard events respond
      loading && buttonRef.current.focus();
    };
  }, [loading]);

  return (
    <button
      className={classnames(`${prefix}-switch`, className, {
        [`${prefix}-switch--checked`]: checked,
        [`${prefix}-switch--disabled`]: disabled || loading,
      })}
      ref={buttonRef}
      disabled={disabled || loading}
      onClick={() => !disabled && !loading && onChange(!checked)}
    >
      <div className={`${prefix}-switch__inner`}>
        {loading && (
          <Icon
            className={`${prefix}-switch__loading`}
            type="loading"
          />
        )}
      </div>
      {children}
    </button>
  );
};

export default Switch;
