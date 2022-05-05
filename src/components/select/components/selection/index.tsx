import React, { useState, useMemo, forwardRef } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Input from '@components/input';
import InputWrapper from '@components/input/components/wrapper';
import Icon from '@components/icon';
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
  clearable?: boolean;
  placeholder?: string;
  onClear?: () => void;
  onTagDelete?: (optionValue: ValueType) => void;
}

const Suffix = ({ clearable, onClear }) =>
  clearable
    ? <Icon
        className={`${prefix}-selection__clear`}
        type="close-circle-fill"
        onClick={onClear}
      />
    : <Icon type="down" />;

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
    clearable: clearableFromProps,
    placeholder,
    onClear,
    onTagDelete,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [entered, setEntered] = useState<boolean>(false);

  const tags = useMemo(() => {
    if (!multiple) return [];
    if (!Array.isArray(options)) return [];

    return options.filter(item => value.includes(item.value));
  }, [value, options, multiple]);

  const isValueNonEmpty = !multiple
    ? value !== null && value !== undefined
    : value.length > 0;

  const clearable = clearableFromProps && !disabled && entered && isValueNonEmpty;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Backspace' && value.length) {
      const lastValue = value[value.length - 1];

      isFunction(onTagDelete) && onTagDelete(lastValue);
    }
  };

  const handleClear = event => {
    !open && event.stopPropagation();
    isFunction(onClear) && onClear();
  };

  return (
    <div
      className={classnames(`${prefix}-selection`, className)}
      ref={ref}
      onClick={() => inputRef.current?.focus()}
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
    >
      {
        !multiple
          ? <Input
              ref={inputRef}
              value={inputValue}
              placeholder={placeholder}
              disabled={disabled}
              suffix={<Suffix clearable={clearable} onClear={handleClear} />}
              readOnly
            />
          : <InputWrapper
              className={`${prefix}-selection__input-wrapper`}
              focused={focused || open}
              disabled={disabled}
              suffix={<Suffix clearable={clearable} onClear={handleClear} />}
            >
              <div className={`${prefix}-selection__content`}>
                {tags.map(tag => (
                  <Tag
                    className={`${prefix}-selection__tag`}
                    key={tag.value}
                    closable
                    disabled={disabled}
                    onClose={event => {
                      event.stopPropagation();
                      isFunction(onTagDelete) && onTagDelete(tag.value);
                    }}
                  >
                    {tag.label}
                  </Tag>
                ))}
                <Input
                  className={`${prefix}-selection__input-cursor`}
                  ref={inputRef}
                  value=""
                  disabled={disabled}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  onKeyDown={handleKeyDown}
                />
                {Array.isArray(value) && !value.length && (
                  <div className={`${prefix}-selection__placeholder`}>
                    {placeholder}
                  </div>
                )}
              </div>
            </InputWrapper>
      }
    </div>
  );
});

Selection.defaultProps = {};

export default Selection;
