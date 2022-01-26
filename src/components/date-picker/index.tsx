import React, { useState, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Input from '@components/input';
import Trigger from '@components/trigger';
import Button from '@components/button';
import Icon from './icon';
import useControlled from '@hooks/useControlled';
import { setRafTimeout, isFunction } from '@utils/index';
import { DAYS, ONE_DAY, timestampToDate, getMonthStartDate, getMonthDates } from './utils';
import './index.less';

interface DateItem {
  value: number;
  title: string;
  within: boolean;
  dateText: number | string;
}

interface DatePickerProps  {
  className?: string;
  placeholder?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  format?: string;
  disabled?: boolean;
  disabledDate?: (value: number) => boolean;
}

const { prefix } = namespace;

const DatePicker: React.FC<DatePickerProps> = props => {
  const {
    className,
    placeholder,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    format,
    disabled,
    disabledDate,
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

  const [panelValue, setPanelValue] = useState<number>(getMonthStartDate(Date.now()));

  const dates = useMemo<DateItem[]>(() => getMonthDates(panelValue), [panelValue]);

  const panelText = useMemo(() => timestampToDate(panelValue), [panelValue]);

  const inputValue = useMemo(() => {
    if (value === null || value === undefined) return '';

    return timestampToDate(value, format).dateString;
  }, [value]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value === null || value === undefined) {
      setPanelValue(getMonthStartDate(Date.now()));
    } else {
      setPanelValue(getMonthStartDate(value));
    }
  }, [value]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement === inputRef.current) {
        if (event.key === 'Escape' && open) {
          onOpenChange(false);
        }
        if (event.key === 'Enter' && !open) {
          onOpenChange(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const handleLastMonthClick = () => {
    const { year, monthIndex } = timestampToDate(panelValue);

    setPanelValue(new Date(year, monthIndex - 1).valueOf());
  };

  const handleNextMonthClick = () => {
    const { year, monthIndex } = timestampToDate(panelValue);

    setPanelValue(new Date(year, monthIndex + 1).valueOf());
  };

  const handleLastYearClick = () => {
    const { year, monthIndex } = timestampToDate(panelValue);

    setPanelValue(new Date(year - 1, monthIndex).valueOf());
  };

  const handleNextYearClick = () => {
    const { year, monthIndex } = timestampToDate(panelValue);

    setPanelValue(new Date(year + 1, monthIndex).valueOf());
  };

  const handleTodayClick = () => {
    const { year, monthIndex, date } = timestampToDate(Date.now());
    const nextValue = new Date(year, monthIndex, date).valueOf();

    handleDateClick(nextValue);
  };

  const handleDateClick = (nextValue: number) => {
    onChange(nextValue);
    setPanelValue(getMonthStartDate(nextValue));
    handleOpenChange(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      onOpenChange(true);
    } else {
      setRafTimeout(() => {
        onOpenChange(false);
      }, 200);
    }
  };

  const popup = (
    <div
      className={`${prefix}-date-picker__popup`}
      onClick={() => inputRef.current.focus()}
    >
      <div className={`${prefix}-date-picker__header`}>
        <div
          className={`${prefix}-date-picker__trigger`}
          title="last year"
          onClick={handleLastYearClick}
        >
          <Icon type="double-left" />
        </div>
        <div
          className={`${prefix}-date-picker__trigger`}
          onClick={handleLastMonthClick}
        >
          <Icon type="left" />
        </div>
        <div className={`${prefix}-date-picker__overview`}>
          <div className={`${prefix}-date-picker__year`}>
            {panelText.YYYY}
          </div>
          <div className={`${prefix}-date-picker__month`}>
            {panelText.MM}
          </div>
        </div>
        <div
          className={`${prefix}-date-picker__trigger`}
          onClick={handleNextMonthClick}
        >
          <Icon type="right" />
        </div>
        <div
          className={`${prefix}-date-picker__trigger`}
          onClick={handleNextYearClick}
        >
          <Icon type="double-right" />
        </div>
      </div>
      <div className={`${prefix}-date-picker__body`}>
        <div className={`${prefix}-date-picker__days`}>
          {DAYS.map(day => (
            <div className={`${prefix}-date-picker__day`} key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className={`${prefix}-date-picker__dates`}>
          {dates.map(item => {
            const disabled = isFunction(disabledDate) && disabledDate(item.value);
            const yesterdayDisabled = isFunction(disabledDate) && disabledDate(item.value - ONE_DAY);
            const tomorrowDisabled = isFunction(disabledDate) && disabledDate(item.value + ONE_DAY);
            const disabledFirstChild = disabled && !yesterdayDisabled && tomorrowDisabled;
            const disabledLastChild = disabled && yesterdayDisabled && !tomorrowDisabled;
            const disabledIsolated = disabled && !yesterdayDisabled && !tomorrowDisabled;

            return (
              <div
                className={classnames({
                  [`${prefix}-date-picker__date`]: true,
                  [`${prefix}-date-picker__date--active`]: item.value === value,
                  [`${prefix}-date-picker__date--within`]: item.within,
                  [`${prefix}-date-picker__date--disabled`]: disabled,
                  [`${prefix}-date-picker__date--disabled-first-child`]: disabledFirstChild,
                  [`${prefix}-date-picker__date--disabled-last-child`]: disabledLastChild,
                  [`${prefix}-date-picker__date--disabled-isolated`]: disabledIsolated,
                })}
                key={item.value}
                title={item.title}
                onClick={() => !disabled && handleDateClick(item.value)}
              >
                <div className={`${prefix}-date-picker__date-text`}>
                  {item.dateText}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${prefix}-date-picker__footer`}>
        <Button type="link" onClick={handleTodayClick}>
          Today
        </Button>
      </div>
    </div>
  );

  if (disabled) {
    return (
      <div className={classnames(`${prefix}-date-picker`, className)}>
        <Input
          className={`${prefix}-date-picker__input`}
          value={inputValue}
          placeholder={placeholder}
          disabled
        />
      </div>
    );
  }

  return (
    <div className={classnames(`${prefix}-date-picker`, className, {
      [`${prefix}-date-picker--open`]: open,
    })}>
      <Trigger
        visible={open}
        onVisibleChange={onOpenChange}
        popup={popup}
        popupTransitionProps={{
          beforeEnter: `${prefix}-date-picker__popup--before-enter`,
          entering: `${prefix}-date-picker__popup--entering`,
          entered: `${prefix}-date-picker__popup--entered`,
          leaving: `${prefix}-date-picker__popup--leaving`,
        }}
      >
        <Input
          className={`${prefix}-date-picker__input`}
          ref={inputRef}
          value={inputValue}
          placeholder={placeholder}
          readOnly
        />
      </Trigger>
    </div>
  );
};

DatePicker.defaultProps = {
  format: 'YYYY-MM-DD',
};

export default DatePicker;
