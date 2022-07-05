import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

export interface FormProps  {
  className?: string;
}

const { prefix } = namespace;

export const Form: React.FC<FormProps> = props => {
  const { className } = props;

  return (
    <div className={classnames(`${prefix}-form`, className)}>
      form
    </div>
  );
};

export default Form;
