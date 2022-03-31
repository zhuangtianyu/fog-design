import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Group from './components/group';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export interface CheckboxProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  value?: ValueType;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  children?: React.ReactChild;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface CheckboxTypes extends React.FC<CheckboxProps> {
  Group: typeof Group;
}

export const Checkbox: CheckboxTypes = props => {
  const {
    className,
    style,
    value,
    checked: checkedFromProps,
    defaultChecked: defaultCheckedFromProps,
    onChange: onChangeFromProps,
    disabled,
    indeterminate,
    children,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);

  const { value: checked, onChange } = useControlled({
    value: checkedFromProps,
    defaultValue: defaultCheckedFromProps,
    onChange: onChangeFromProps,
    innerValueGetter: event => event.target.checked,
  });

  return (
    <div
      className={classnames(className, {
        [`${prefix}-checkbox`]: true,
        [`${prefix}-checkbox--focused`]: focused,
        [`${prefix}-checkbox--checked`]: checked,
        [`${prefix}-checkbox--disabled`]: disabled,
        [`${prefix}-checkbox--indeterminate`]: indeterminate,
      })}
      style={style}
    >
      <label className={`${prefix}-checkbox__label`}>
        <input
          className={`${prefix}-checkbox__input`}
          type="checkbox"
          value={value}
          checked={checked || false}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className={`${prefix}-checkbox__box`} />
        <span className={`${prefix}-checkbox__content`}>
          {children}
        </span>
      </label>
    </div>
  );
};

Checkbox.Group = Group;

Checkbox.defaultProps = {};

export default Checkbox;
