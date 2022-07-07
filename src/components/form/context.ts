import React from 'react';
import { FormValue, FormLayout } from './index';

export interface FormContextTypes {
  formValue: FormValue;
  layout?: FormLayout;
  labelWidth?: number;
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue: (payload: FormValue) => void;
  getFieldValue: (name: string) => any;
  getFieldsValue: (names: string[]) => FormValue;
}

export const FormContext = React.createContext<FormContextTypes>({} as FormContextTypes);
