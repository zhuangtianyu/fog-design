import * as React from 'react';
import { useContext, useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { FormContext } from '../../context';
import './index.less';

const { prefix } = namespace;

export interface FormItemProps {
  /** --skip */
  className?: string;
  label?: React.ReactChild;
  labelWidth?: number;
  children?: React.ReactChild | React.ReactChild[];
}

const FormItem: React.FC<FormItemProps> = props => {
  const {
    className,
    label,
    labelWidth,
    children,
  } = props;

  const formContext = useContext(FormContext);

  const labelStyle = useMemo<React.CSSProperties>(() => {
    if (formContext.layout === 'vertical') return {};

    if (formContext.layout === 'horizontal') return {
      width: labelWidth || formContext.labelWidth,
    }
  }, [formContext.layout, formContext.labelWidth]);

  return (
    <div className={classnames(`${prefix}-form__item`, className)}>
      <div
        className={`${prefix}-form__item-label`}
        style={labelStyle}
      >
        {label}
      </div>
      <div className={`${prefix}-form__item-content`}>
        {children}
      </div>
    </div>
  );
};

export default FormItem;
