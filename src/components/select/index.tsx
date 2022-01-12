import React, { useState, useEffect, useRef, useMemo } from 'react';
import namespace from '@namespace';
import classnames from 'classnames';
import Input from '@components/input';
import Trigger from '@components/trigger';
import Option, { OptionProps } from './components/option';
import useControlled from '@hooks/useControlled';
import { setRafTimeout } from '@utils/index';
import './index.less';

const { prefix } = namespace;

export type ValueType = number | string | null | any;

export type SelectValueType = ValueType | ValueType[];

export interface SelectProps {
  className?: string;
  value?: SelectValueType;
  defaultValue?: SelectValueType;
  onChange?: (value: ValueType) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  options?: OptionProps[];
  multiple?: boolean;
  placeholder?: string;
  getPopupMountNode?: () => HTMLElement;
}

export interface SelectTypes extends React.FC<SelectProps> {
  Option: React.FC<OptionProps>;
}

const Select: SelectTypes = props => {
  const {
    className,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    options: optionsFromProps,
    multiple,
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
          label: item.props.label,
          value: item.props.value,
          disabled: item.props.disabled,
          children: item.props.children,
        }))
      : optionsFromProps || []
  ), [children, optionsFromProps]);

  const valueText = useMemo(() => {
    if (multiple) {
      return options
        .filter(item => value.includes(item.value))
        .map(item => item.label || item.children || item.value || '')
        .join(' / ');
    } else {
      const { label, children } = options.find(item => item.value === value) || {};

      return label || children || value || '';
    }
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

  const handleOpenChange = nextOpen => {
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
      handleOpenChange(false);
    }

    setPicking(optionValue);
    inputRef.current.focus();
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
              }
            } else {
              picking !== null && picking !== value && onChange(picking);
              handleOpenChange(false);
            }
          }
          if (event.key === 'Escape') {
            !multiple && setPicking(value);
            handleOpenChange(false);
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
            handleOpenChange(true);
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
          key={item.value}
          label={item.label}
          value={item.value}
          active={isOptionActive(item.value)}
          picking={!isOptionActive(item.value) && item.value === picking}
          disabled={item.disabled}
          multiple={multiple}
          onClick={() => handleOptionClick(item.value, item)}
          onMouseEnter={() => setPicking(item.value)}
          onMouseLeave={() => setPicking(multiple ? null : value)}
        >
          {item.children}
        </Option>
      ))}
    </div>
  ), [options, value, picking]);

  return (
    <div className={classnames(`${prefix}-select`, className)}>
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
        getPopupMountNode={getPopupMountNode}
      >
        <Input
          className={classnames(`${prefix}-select__input`, {
            [`${prefix}-select__input--open`]: open,
          })}
          value={valueText}
          ref={inputRef}
          placeholder={placeholder}
          readOnly
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
