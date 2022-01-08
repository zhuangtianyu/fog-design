import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import './index.less';

interface SwitchProps  {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const { prefix } = namespace;

const Switch: React.FC<SwitchProps> = props => {
  const {
    className,
    checked: checkedFromProps,
    defaultChecked: defaultCheckedFromProps,
    onChange: onChangeFromProps,
    disabled,
  } = props;

  const { value: checked, onChange } = useControlled({
    value: checkedFromProps,
    defaultValue: defaultCheckedFromProps,
    onChange: onChangeFromProps,
  });

  return (
    <div
      className={classnames(`${prefix}-switch`, className, {
        [`${prefix}-switch--checked`]: checked,
        [`${prefix}-switch--disabled`]: disabled,
      })}
      onClick={() => !disabled && onChange(!checked)}
    >
      <div className={`${prefix}-switch__inner`} />
    </div>
  );
};

export default Switch;
