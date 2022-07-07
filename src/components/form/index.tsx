import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Item from './components/item';
import { FormContext } from './context';
import './index.less';

const { prefix } = namespace;

export type FormLayout = 'horizontal' | 'vertical';

export interface FormProps  {
  /** --skip */
  className?: string;
  layout?: FormLayout;
  labelWidth?: number;
  initialValues?: FormValue;
  children?: React.ReactChild | React.ReactChild[];
}

export interface FormTypes extends React.FC<FormProps> {
  Item: typeof Item;
}

export type FormValue = Record<string, any>;

export const Form: FormTypes = props => {
  const {
    className,
    layout,
    labelWidth,
    initialValues,
    children,
  } = props;

  const [formValue, setFormValue] = useState<FormValue>(() => initialValues || {});

  const setFieldValue = (name: string, value: any) => {
    setFormValue({ ...formValue, [name]: value });
  };

  const setFieldsValue = (payload: FormValue) => {
    setFormValue({ ...formValue, ...payload });
  };

  const getFieldValue = (name: string) => {
    return formValue[name];
  };

  const getFieldsValue = (names: string[]) => {
    return names.reduce<FormValue>((accumulator: FormValue, name: string) => {
      return { ...accumulator, [name]: formValue[name] };
    }, {});
  };

  return (
    <FormContext.Provider
      value={{
        formValue,
        layout,
        labelWidth,
        setFieldValue,
        setFieldsValue,
        getFieldValue,
        getFieldsValue,
      }}
    >
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
