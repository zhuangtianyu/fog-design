import * as React from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import './index.less';

const { prefix } = namespace;

export interface ButtonGroupProps {
  className?: string;
  children?: React.ReactElement[];
}

export const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const { className, children } = props;

  return (
    <div className={classnames(`${prefix}-button-group`, className)}>
      {children}
    </div>
  );
};

export default ButtonGroup;
