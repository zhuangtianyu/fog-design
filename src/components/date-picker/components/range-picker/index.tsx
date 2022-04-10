import React, { useState, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import useControlled from '@hooks/useControlled';
import Input from '@components/input';
import InputWrapper from '@components/input/components/wrapper';
import Trigger from '@components/trigger';
import Icon from '@components/icon';
import { DatePickerProps } from '@components/date-picker';
import DatePanel from '../date-panel';
import {
  FORMAT_DEFAULT,
  timestampToDate,
  getDates,
  getNextMonthDate,
  getMonthStartDate,
} from '../../utils';
import './index.less';

const { prefix } = namespace;

type Focused = 'first' | 'last';

export interface RangePickerProps extends Omit<DatePickerProps, 'value' | 'placeholder'> {
  value?: number[];
  placeholder?: string[];
}

const RangePicker: React.FC<RangePickerProps> = props => {
  const {
    className,
    style,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    placeholder,
    format,
    disabled,
    disabledDate,
    renderFooter,
    mode,
    clearable,
  } = props;

  const { value, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const { value: open, onChange: onOpenChange } = useControlled({
    value: openFromProps,
    defaultValue: defaultOpenFromProps,
    onChange: onOpenChangeFromProps,
  });

  const [focused, setFocused] = useState<Focused | null>(null);
  const [entered, setEntered] = useState<boolean>(false);

  const triggerRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLInputElement>(null);

  const isValueValid = useMemo(() => {
    const valueValidator = valueItem =>
      valueItem !== undefined && valueItem !== null;

    return Array.isArray(value) && valueValidator(value[0]) && valueValidator(value[1]);
  }, [value]);

  // firstPanelValue is zero o'clock on the first day of the first panel
  const [firstPanelValue, setFirstPanelValue] = useState<number>(undefined);

  const lastPanelValue = useMemo(() => {
    if (!firstPanelValue) return undefined;

    return getNextMonthDate(firstPanelValue);
  }, [firstPanelValue]);

  const inputValue = useMemo(() => {
    if (!isValueValid) return [undefined, undefined];

    return [
      timestampToDate(value[0], format || FORMAT_DEFAULT[mode]).dateString,
      timestampToDate(value[1], format || FORMAT_DEFAULT[mode]).dateString,
    ];
  }, [value, isValueValid]);

  useEffect(() => {
    if (!isValueValid) {
      setFirstPanelValue(getMonthStartDate(Date.now()));
    } else {
      setFirstPanelValue(getMonthStartDate(value[0]));
    }
  }, [value, isValueValid]);

  const handleClear = event => {
    onChange(null);
    event.stopPropagation();
  };

  const popup = (
    <div className={`${prefix}-range-picker__popup`}>
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={firstPanelValue}
        list={getDates(firstPanelValue, null, disabledDate)}
        onLastYearClick={() => {}}
        onLastMonthClick={() => {}}
        onNextMonthClick={() => {}}
        onNextYearClick={() => {}}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={() => {}}
        renderFooter={renderFooter}
      />
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={lastPanelValue}
        list={getDates(lastPanelValue, null, disabledDate)}
        onLastYearClick={() => {}}
        onLastMonthClick={() => {}}
        onNextMonthClick={() => {}}
        onNextYearClick={() => {}}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={() => {}}
        renderFooter={renderFooter}
      />
    </div>
  );

  return (
    <div
      className={classnames(`${prefix}-range-picker`, className)}
      style={style}
    >
      <Trigger
        visible={open}
        onVisibleChange={onOpenChange}
        popup={popup}
        popupClassName={`${prefix}-range-picker__popup`}
        popupTransitionProps={{
          beforeEnter: `${prefix}-range-picker__popup--before-enter`,
          entering: `${prefix}-range-picker__popup--entering`,
          entered: `${prefix}-range-picker__popup--entered`,
          leaving: `${prefix}-range-picker__popup--leaving`,
        }}
        disabled={disabled}
      >
        <div ref={triggerRef}>
          <InputWrapper
            focused={focused || open}
            suffix={
              isValueValid && clearable && !disabled && entered
                ? <Icon
                    className={`${prefix}-date-picker__clear`}
                    type="close-circle-fill"
                    onClick={handleClear}
                  />
                : <Icon type="calendar" />
            }
            onClick={() => firstInputRef.current.focus()}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
          >
            <Input
              ref={firstInputRef}
              readOnly
              value={inputValue[0]}
              placeholder={placeholder?.[0]}
              onFocus={() => setFocused('first')}
              onBlur={() => setFocused(null)}
              onClick={event => {
                event.stopPropagation();
                !open && onOpenChange(true);
              }}
            />
            <Icon
              className={`${prefix}-range-picker__connector`}
              type="exchange"
            />
            <Input
              ref={lastInputRef}
              readOnly
              value={inputValue[1]}
              placeholder={placeholder?.[1]}
              onFocus={() => setFocused('last')}
              onBlur={() => setFocused(null)}
              onClick={event => {
                event.stopPropagation();
                !open && onOpenChange(true);
              }}
            />
          </InputWrapper>
        </div>
      </Trigger>
    </div>
  );
};

RangePicker.defaultProps = {
  mode: 'date',
  clearable: true,
  renderFooter: null,
};

export default RangePicker;
