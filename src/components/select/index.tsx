import * as React from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Trigger from '@components/trigger';
import Selection from './components/selection';
import Option, { OptionProps } from './components/option';
import useControlled from '@hooks/useControlled';
import { setRafTimeout } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string | null | any;

export type SelectValueType = ValueType | ValueType[];

export interface SelectProps {
  /** --skip */
  className?: string;
  /** --skip */
  style?: React.CSSProperties;
  value?: SelectValueType;
  defaultValue?: SelectValueType;
  onChange?: (value: ValueType) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  options?: OptionProps[];
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  getPopupMountNode?: () => HTMLElement;
}

export interface SelectTypes extends React.FC<SelectProps> {
  Option: typeof Option;
}

export const Select: SelectTypes = props => {
  const {
    className,
    style,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    options: optionsFromProps,
    multiple,
    disabled,
    placeholder,
    getPopupMountNode,
    children,
  } = props;

  const {
    value = multiple ? [] : undefined,
    onChange,
  } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const {
    value: open,
    onChange: onOpenChange,
  } = useControlled({
    value: openFromProps,
    defaultValue: defaultOpenFromProps,
    onChange: onOpenChangeFromProps,
  });

  const [picking, setPicking] = useState<ValueType>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const options = useMemo<OptionProps[]>(() => (
    children
      ? React.Children.map(children, (item: React.ReactElement) => ({
          className: item.props.className,
          label: item.props.label || item.props.children,
          value: item.props.value,
          disabled: item.props.disabled,
          children: item.props.children || item.props.label,
        }))
      : optionsFromProps || []
  ), [children, optionsFromProps]);

  const inputValue = useMemo(() => {
    if (multiple) return null;

    const { label, children } = options.find(item => item.value === value) || {};

    return label || children || value || '';
  }, [value, options, multiple]);

  const isOptionActive = optionValue => multiple
    ? value.includes(optionValue)
    : value === optionValue;

  const insertMultipleValue = optionValue => {
    const nextMultipleValue =
      options
        .map(item => item.value)
        .filter(item => value.includes(item) || item === optionValue);

    onChange(nextMultipleValue);
  };

  const deleteMultipleValue = optionValue => {
    const nextMultipleValue = value.filter(item => item !== optionValue);

    onChange(nextMultipleValue);
  };

  const handleOpenDelayChange = nextOpen => {
    if (nextOpen) {
      onOpenChange(true);
    } else {
      setRafTimeout(() => {
        onOpenChange(false);
      }, 200);
    }
  };

  const handleOptionClick = (optionValue: ValueType, option: OptionProps) => {
    if (option.disabled) return;

    if (multiple) {
      value.includes(optionValue)
        ? deleteMultipleValue(optionValue)
        : insertMultipleValue(optionValue);
    } else {
      optionValue !== value && onChange(optionValue);
      handleOpenDelayChange(false);
    }

    setPicking(optionValue);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) {
        if (open) {
          if (event.key === 'Enter') {
            if (multiple) {
              if (picking !== null) {
                value.includes(picking)
                  ? deleteMultipleValue(picking)
                  : insertMultipleValue(picking);
              } else {
                handleOpenDelayChange(false);
              }
            } else {
              picking !== null && picking !== value && onChange(picking);
              handleOpenDelayChange(false);
            }
          }
          if (event.key === 'Escape') {
            !multiple && setPicking(value);
            handleOpenDelayChange(false);
          }
          if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            let pickingIndex = options.findIndex(item => item.value === picking);
            let nextIndex = (pickingIndex + 1) % options.length;

            for (let i = 0; i < options.length; i++) {
              const option = options[nextIndex];

              if (!option.disabled) {
                return setPicking(option.value);
              } else {
                nextIndex = (nextIndex + 1) % options.length
              }
            }

            setPicking(null);
          }
          if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            const pickingIndex = options.findIndex(item => item.value === picking);
            let nextIndex = pickingIndex !== -1
              ? (pickingIndex - 1 + options.length) % options.length
              : options.length - 1

            for (let i = 0; i < options.length; i++) {
              const option = options[nextIndex];

              if (!option.disabled) {
                return setPicking(option.value);
              } else {
                nextIndex = (nextIndex - 1 + options.length) % options.length
              }
            }

            setPicking(null);
          }
        } else {
          if (event.key === 'Enter') {
            handleOpenDelayChange(true);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, value, picking, options]);

  const popup = useMemo(() => (
    <div className={`${prefix}-select__options`}>
      {options.map(item => (
        <Option
          className={item.className}
          key={item.value}
          label={item.label}
          value={item.value}
          active={isOptionActive(item.value)}
          picking={!isOptionActive(item.value) && item.value === picking}
          disabled={item.disabled}
          multiple={multiple}
          onClick={() => handleOptionClick(item.value, item)}
          onMouseEnter={() => !item.disabled && setPicking(item.value)}
          onMouseLeave={() => setPicking(multiple ? null : value)}
        >
          {item.children}
        </Option>
      ))}
    </div>
  ), [options, value, picking]);

  return (
    <div
      className={classnames(`${prefix}-select`, className)}
      style={style}
    >
      <Trigger
        visible={open}
        onVisibleChange={onOpenChange}
        popup={popup}
        popupTransitionProps={{
          beforeEnter: `${prefix}-select__popup--before-enter`,
          entering: `${prefix}-select__popup--entering`,
          entered: `${prefix}-select__popup--entered`,
          leaving: `${prefix}-select__popup--leaving`,
        }}
        disabled={disabled}
        getPopupMountNode={getPopupMountNode}
      >
        <Selection
          className={`${prefix}-select__selection`}
          open={open}
          value={value}
          options={options}
          multiple={multiple}
          inputRef={inputRef}
          inputValue={inputValue}
          placeholder={placeholder}
          onTagDelete={optionValue => {
            deleteMultipleValue(optionValue);
            inputRef.current?.focus();
          }}
        />
      </Trigger>
    </div>
  );
};

Select.defaultProps = {
  options: [],
  multiple: false,
  getPopupMountNode: () => document.body,
};

Select.Option = Option;

export default Select;
