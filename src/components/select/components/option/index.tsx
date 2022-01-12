import React from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
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
          [`${prefix}-select__option`]: true,
          [`${prefix}-select__option--active`]: active,
          [`${prefix}-select__option--picking`]: picking,
          [`${prefix}-select__option--disabled`]: disabled,
          [`${prefix}-select__option--multiple`]: multiple,
        },
        className,
      )}
      {...restProps}
    >
      {children || label}
    </div>
  );
};

Option.defaultProps = {};

export default Option;
