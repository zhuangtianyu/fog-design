import React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Group from './components/group';
import Button from './components/button';
import useControlled from '@hooks/useControlled';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = string;

export interface RadioProps {
  className?: string;
  value?: ValueType;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  children?: React.ReactChild;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export interface RadioTypes extends React.FC<RadioProps> {
  Group: typeof Group;
  Button: typeof Button;
}

const Radio: RadioTypes = props => {
  const {
    className,
    value,
    checked: checkedFromProps,
    defaultChecked: defaultCheckedFromProps,
    disabled,
    children,
    onClick,
  } = props;

  const { value: checked, onChange } = useControlled({
    value: checkedFromProps,
    defaultValue: defaultCheckedFromProps,
    innerValueGetter: event => event.target.checked,
  });

  return (
    <div className={classnames(className, {
      [`${prefix}-radio`]: true,
      [`${prefix}-radio--checked`]: checked,
      [`${prefix}-radio--disabled`]: disabled,
    })}>
      <label className={`${prefix}-radio__label`}>
        <input
          className={`${prefix}-radio__input`}
          type="radio"
          value={value}
          checked={checked || false}
          onChange={onChange}
          disabled={disabled}
          onClick={event => isFunction(onClick) && onClick(event)}
        />
        <span className={`${prefix}-radio__dot`} />
        <span className={`${prefix}-radio__content`}>
          {children}
        </span>
      </label>
    </div>
  );
};

Radio.defaultProps = {};

Radio.Group = Group;

Radio.Button = Button;

export default Radio;
