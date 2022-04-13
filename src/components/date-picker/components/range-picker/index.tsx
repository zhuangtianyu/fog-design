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

const defaultValue = [null, null];

const getElementFocused = element => document.activeElement === element;

type Focused = 'start' | 'end';

export interface RangePickerProps extends Omit<DatePickerProps, 'value' | 'defaultValue' | 'placeholder'> {
  value?: number[];
  defaultValue?: number[];
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

  const { value = defaultValue, onChange } = useControlled({
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
  });

  const { value: open, onChange: onOpenChange } = useControlled({
    value: openFromProps,
    defaultValue: defaultOpenFromProps,
    onChange: onOpenChangeFromProps,
  });

  const triggerRef = useRef<HTMLDivElement>(null);
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);

  const [focused, setFocused] = useState<Focused | null>(null);
  const [entered, setEntered] = useState<boolean>(false);

  // panelValue is zero o'clock on the first day of the corresponding panel
  const [panelValue, setPanelValue] = useState<(number | null)[]>([null, null]);

  const [pickingValue, setPickingValue] = useState<(number | null)[]>([null, null]);

  const isValueValid = useMemo(() => {
    const isNumber = item => typeof item === 'number';

    return Array.isArray(value) && isNumber(value[0]) && isNumber(value[1]);
  }, [value]);

  const inputValue = useMemo(() => {
    if (!isValueValid) return [undefined, undefined];

    return [
      timestampToDate(value[0], format || FORMAT_DEFAULT[mode]).dateString,
      timestampToDate(value[1], format || FORMAT_DEFAULT[mode]).dateString,
    ];
  }, [value, isValueValid]);

  useEffect(() => {
    if (!isValueValid) {
      const startDate = getMonthStartDate(Date.now());
      const endDate = getNextMonthDate(startDate);

      setPanelValue([startDate, endDate]);
    } else {
      setPanelValue(value.map(item => getMonthStartDate(item)));
    }
  }, [value, isValueValid]);

  const handleInputWrapperClick = event => {
    if (open) event.stopPropagation();

    if (!getElementFocused(endInputRef.current)) {
      startInputRef.current.focus();
    } else {
      endInputRef.current.focus();
    }
  };

  const handleClear = event => {
    event.stopPropagation();
    onChange(null);
    startInputRef.current.focus();
  };

  const handleCellClick = (cellValue: number, updateIndex: 0 | 1) => {
    const nextValue = [...value];

    nextValue[updateIndex] = cellValue;

    onChange(nextValue);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!triggerRef.current.contains(document.activeElement)) {
        handleOpenChange(false);
        setFocused(null);
      }
    });
  };

  const handleInputKeyDown = event => {
    if (open) {
      event.key === 'Escape' && handleOpenChange(false);
    } else {
      event.key === 'Enter' && handleOpenChange(true);
    }
  };

  const handleOpenChange = (nextOpen: boolean) => {
    const existFocusedInput =
      getElementFocused(startInputRef.current) ||
      getElementFocused(endInputRef.current);

    if (!nextOpen && !existFocusedInput) {
      setFocused(null);
    }

    onOpenChange(nextOpen);
  };

  const popup = (
    <div
      className={`${prefix}-range-picker__popup`}
      onMouseDown={event => event.preventDefault()}
    >
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={panelValue[0]}
        list={getDates(
          panelValue[0] ?? value[0],
          isValueValid ? value[0] : null,
          disabledDate,
        )}
        onLastYearClick={() => {}}
        onLastMonthClick={() => {}}
        onNextMonthClick={() => {}}
        onNextYearClick={() => {}}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={(cellValue: number) => handleCellClick(cellValue, 0)}
        renderFooter={renderFooter}
      />
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={panelValue[1]}
        list={getDates(
          panelValue[1] ?? value[1],
          isValueValid ? value[1] : null,
          disabledDate,
        )}
        onLastYearClick={() => {}}
        onLastMonthClick={() => {}}
        onNextMonthClick={() => {}}
        onNextYearClick={() => {}}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={(cellValue: number) => handleCellClick(cellValue, 1)}
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
        onVisibleChange={handleOpenChange}
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
            focused={!!focused || open}
            suffix={
              isValueValid && clearable && !disabled && entered
                ? <Icon
                    className={`${prefix}-range-picker__clear`}
                    type="close-circle-fill"
                    onMouseDown={event => event.preventDefault()}
                    onClick={handleClear}
                  />
                : <Icon
                    type="calendar"
                    onMouseDown={event => event.preventDefault()}
                  />
            }
            onClick={handleInputWrapperClick}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
          >
            <Input
              className={classnames({
                [`${prefix}-range-picker__input`]: true,
                [`${prefix}-range-picker__input--focused`]: focused === 'start',
              })}
              ref={startInputRef}
              value={inputValue[0]}
              placeholder={placeholder?.[0]}
              onFocus={() => setFocused('start')}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              onClick={event => {
                event.stopPropagation();
                !open && handleOpenChange(true);
              }}
            />
            <Icon
              className={`${prefix}-range-picker__connector`}
              type="exchange"
              onMouseDown={event => event.preventDefault()}
            />
            <Input
              className={classnames({
                [`${prefix}-range-picker__input`]: true,
                [`${prefix}-range-picker__input--focused`]: focused === 'end',
              })}
              ref={endInputRef}
              value={inputValue[1]}
              placeholder={placeholder?.[1]}
              onFocus={() => setFocused('end')}
              onBlur={handleInputBlur}
              onKeyDown={handleInputKeyDown}
              onClick={event => {
                event.stopPropagation();
                !open && handleOpenChange(true);
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
