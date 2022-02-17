import React from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string | null;

export interface OptionProps {
  className?: string;
  label?: string;
  value?: ValueType;
  active?: boolean;
  picking?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  children?: React.ReactChild,
  [propName: string]: any;
}

const Option: React.FC<OptionProps> = props => {
  const {
    className,
    label,
    active,
    picking,
    disabled,
    multiple,
    children,
    ...restProps
  } = props;

  return (
    <div
      className={classnames(
        {
          [`${prefix}-select-option`]: true,
          [`${prefix}-select-option--active`]: active,
          [`${prefix}-select-option--picking`]: picking,
          [`${prefix}-select-option--disabled`]: disabled,
          [`${prefix}-select-option--multiple`]: multiple,
        },
        className,
      )}
      {...restProps}
    >
      <div className={`${prefix}-select-option__content`}>
        {children || label}
      </div>
      {multiple && active && <Icon type="check" />}
    </div>
  );
};

Option.defaultProps = {};

export default Option;
