import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Item from './components/item';
import { FormContext } from './context';
import './index.less';

export type FormLayout = 'horizontal' | 'vertical';

export interface FormProps  {
  /** --skip */
  className?: string;
  layout?: FormLayout;
  labelWidth?: number;
  children?: React.ReactChild | React.ReactChild[];
}

export interface FormTypes extends React.FC<FormProps> {
  Item: typeof Item;
}

const { prefix } = namespace;

export const Form: FormTypes = props => {
  const {
    className,
    layout,
    labelWidth,
    children,
  } = props;

  return (
    <FormContext.Provider value={{ layout, labelWidth }}>
      <div className={classnames(className, {
        [`${prefix}-form`]: true,
        [`${prefix}-form--${layout}`]: layout,
      })}>
        {children}
      </div>
    </FormContext.Provider>
  );
};

Form.defaultProps = {
  layout: 'horizontal',
  labelWidth: 100,
};

Form.Item = Item;

export default Form;
