import React from 'react';
import { FormLayout } from './index';

export interface FormContextTypes {
  layout?: FormLayout;
  labelWidth?: number;
}

export const FormContext = React.createContext<FormContextTypes>({} as FormContextTypes);
