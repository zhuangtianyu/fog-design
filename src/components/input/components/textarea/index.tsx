import React, { forwardRef, HTMLAttributes } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type TextAreaValue = string | undefined | null;

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value?: TextAreaValue;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  [propName: string]: any;
}

const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    className,
    value,
    defaultValue,
    disabled,
    readOnly,
    onChange,
    ...restProps
  } = props;

  const handleChange = event => {
    isFunction(onChange) && onChange(event);
  };

  return (
    <textarea
      className={classnames(`${prefix}-textarea`, className)}
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      onChange={handleChange}
      {...restProps}
    />
  );
});

TextArea.defaultProps = {};

TextArea.displayName = 'TextArea';

export default TextArea;
