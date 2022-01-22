import React, { useState, useMemo, forwardRef } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Input from '@components/input';
import Tag from '@components/tag';
import { OptionProps } from '../option';
import { isFunction } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string | null | any;

export type SelectValueType = ValueType | ValueType[];

export interface SelectionProps {
  className?: string;
  open?: boolean;
  value?: SelectValueType;
  options?: OptionProps[];
  multiple?: boolean;
  disabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  inputValue?: string;
  placeholder?: string;
  onTagDelete?: (optionValue: ValueType) => void;
}

const Selection: React.FC<SelectionProps> = forwardRef<HTMLDivElement, SelectionProps>((props, ref) => {
  const {
    className,
    open,
    value,
    options,
    multiple,
    disabled,
    inputRef,
    inputValue,
    placeholder,
    onTagDelete,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);

  const tags = useMemo(() => {
    if (!multiple) return [];
    if (!Array.isArray(options)) return [];

    return options.filter(item => value.includes(item.value));
  }, [value, options, multiple]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Backspace' && value.length) {
      const lastValue = value[value.length - 1];

      onTagDelete(lastValue);
    }
  };

  return (
    <div
      className={classnames(`${prefix}-selection`, className, {
        [`${prefix}-selection--single`]: !multiple,
        [`${prefix}-selection--multiple`]: multiple,
        [`${prefix}-selection--focused`]: multiple && focused,
        [`${prefix}-selection--open`]: multiple && open,
      })}
      ref={ref}
      onClick={() => multiple && inputRef.current?.focus()}
    >
      {
        !multiple
          ? <Input
              className={`${prefix}-selection__input--single`}
              ref={inputRef}
              value={inputValue}
              placeholder={placeholder}
              disabled={disabled}
              readOnly
            />
          : <>
              {tags.map(tag => (
                <Tag
                  className={`${prefix}-selection__tag`}
                  key={tag.value}
                  closable
                  onClose={event => {
                    event.stopPropagation();
                    isFunction(onTagDelete) && onTagDelete(tag.value);
                  }}
                >
                  {tag.label}
                </Tag>
              ))}
              <Input
                className={`${prefix}-selection__input--multiple`}
                ref={inputRef}
                value=""
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKeyDown}
              />
              {Array.isArray(value) && !value.length && (
                <div className={`${prefix}-selection__placeholder`}>
                  {placeholder}
                </div>
              )}
            </>
      }
    </div>
  );
});

Selection.defaultProps = {};

export default Selection;
