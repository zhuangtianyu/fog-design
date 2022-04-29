import * as React from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Icon from '@components/icon';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string | null;

export interface OptionProps {
  /** --skip */
  className?: string;
  label?: string;
  value?: ValueType;
  /** --skip */
  active?: boolean;
  /** --skip */
  picking?: boolean;
  disabled?: boolean;
  /** --skip */
  multiple?: boolean;
  children?: React.ReactNode,
  [propName: string]: any;
}

export const Option: React.FC<OptionProps> = props => {
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
      {children || label}
      {multiple && active && (
        <Icon
          className={`${prefix}-select-option__check`}
          type="check"
        />
      )}
    </div>
  );
};

Option.defaultProps = {};

export default Option;
