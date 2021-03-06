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
  getLastYearDate,
  getNextYearDate,
  getLastMonthDate,
  getNextMonthDate,
  getMonthStartDate,
  isRangeValid,
} from '../../utils';
import { isFunction, setRafTimeout } from '@utils/index';
import './index.less';

const { prefix } = namespace;

const defaultValue = [null, null];

const focusedIndexMap = { start: 0, end: 1 };

const getElementFocused = element => document.activeElement === element;

type Focused = 'start' | 'end';

type PanelName = 'start' | 'end';

type ClickedRef = {
  start: boolean;
  end: boolean;
}

export interface RangePickerProps extends Omit<DatePickerProps, 'value' | 'defaultValue' | 'placeholder'> {
  value?: number[];
  defaultValue?: number[];
  placeholder?: string[];
}

const RangePicker: React.FC<RangePickerProps> = props => {
  const {
    className,
    style,
    error,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onChange: onChangeFromProps,
    open: openFromProps,
    defaultOpen: defaultOpenFromProps,
    onOpenChange: onOpenChangeFromProps,
    disabledDate: disabledDateFromProps,
    placeholder,
    format,
    disabled,
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
  const [picking, setPicking] = useState<boolean>(false);

  const clickedRef = useRef<ClickedRef>({ start: false, end: false });

  // panelValue is zero o'clock on the first day of the corresponding panel
  const [panelValue, setPanelValue] = useState<(number | null)[]>([null, null]);

  const [presetValue, setPresetValue] = useState<(number | null)[]>([null, null]);

  const [pickingValue, setPickingValue] = useState<(number | null)[]>([null, null]);

  const isValueValid = useMemo(() => isRangeValid(value), [value]);

  const isPresetValueValid = useMemo(() => isRangeValid(presetValue), [presetValue]);

  const inputText = useMemo(() => {
    const inputValue = !open
      ? value
      : presetValue.map((item, index) => pickingValue[index] ?? item);

    return inputValue
      .map(
        item => item !== null
          ? timestampToDate(item, format || FORMAT_DEFAULT[mode]).dateString
          : undefined
      );
  }, [value, open, presetValue, pickingValue]);

  useEffect(() => {
    if (open) {
      if (isValueValid) {
        setPresetValue([...value]);
      } else {
        setPresetValue([null, null]);
      }
    }
  }, [value, isValueValid, open]);

  useEffect(() => () => handleOpenChange(false), []);

  const handlePanelValueUpdate = () => {
    if (isValueValid) {
      const { activeElement } = document;

      if (startInputRef.current === activeElement) {
        const startDate = getMonthStartDate(value[0]);
        const endDate = getNextMonthDate(startDate);

        setPanelValue([startDate, endDate]);
      }

      if (endInputRef.current === activeElement) {
        const sameMonth = getMonthStartDate(value[0]) === getMonthStartDate(value[1]);
        let startDate;
        let endDate;

        if (sameMonth) {
          startDate = getMonthStartDate(value[0]);
          endDate = getNextMonthDate(value[0]);
        } else {
          endDate = getMonthStartDate(value[1]);
          startDate = getLastMonthDate(endDate);
        }

        setPanelValue([startDate, endDate]);
      }
    } else {
      const startDate = getMonthStartDate(Date.now());
      const endDate = getNextMonthDate(startDate);

      setPanelValue([startDate, endDate]);
    }
  };

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
    onChange([null, null]);
    setPresetValue([null, null]);
  };

  const handleCellClick = (cellValue: number, panelName: PanelName) => {
    const nextPresetValue = [...presetValue];

    if (focused === 'start') {
      nextPresetValue[0] = cellValue;
      clickedRef.current.start = true;
      clickedRef.current.end === false && endInputRef.current.focus();

      if (
        nextPresetValue[1] !== null &&
        nextPresetValue[0] > nextPresetValue[1]
      ) {
        nextPresetValue[1] = null;
      }
    }

    if (focused === 'end') {
      nextPresetValue[1] = cellValue;
      clickedRef.current.end = true;
      clickedRef.current.start === false && startInputRef.current.focus();

      if (
        nextPresetValue[0] !== null &&
        nextPresetValue[0] > nextPresetValue[1]
      ) {
        nextPresetValue[0] = null;
      }
    }

    if (panelName === 'start') {
      const startDate = getMonthStartDate(cellValue);
      const endDate = getNextMonthDate(startDate);

      setPanelValue([startDate, endDate]);
    }

    if (panelName === 'end') {
      const endDate = getMonthStartDate(cellValue);
      const startDate = getLastMonthDate(endDate);

      setPanelValue([startDate, endDate]);
    }

    setPresetValue(nextPresetValue);
  };

  useEffect(() => {
    if (clickedRef.current.start && clickedRef.current.end) {
      handleOpenChange(false);
    }
  }, [presetValue, isPresetValueValid]);

  const handleCellEnter = (cellValue: number) => {
    setPicking(true);

    const nextPickingValue = [...pickingValue];
    const updateIndex = focusedIndexMap[focused];

    nextPickingValue[updateIndex] = cellValue;

    setPickingValue(nextPickingValue);
  };

  const handleCellLeave = () => {
    setPicking(false);

    const nextPickingValue = [...pickingValue];
    const updateIndex = focusedIndexMap[focused];

    nextPickingValue[updateIndex] = null;

    setPickingValue(nextPickingValue);
  };

  const handleInputFocus = (nextFocused: Focused) => {
    setFocused(nextFocused);

    if (isValueValid) {
      // update panel when date interval is greater than two months
      const shouldUpdatePanelValue =
        getLastMonthDate(getLastMonthDate(getMonthStartDate(value[1]))) >=
        getMonthStartDate(value[0]);

      shouldUpdatePanelValue && handlePanelValueUpdate();
    }
  };

  const handleInputBlur = () => {
    if (!triggerRef.current.contains(document.activeElement)) {
      setFocused(null);
    }
  };

  const handleInputKeyDown = event => {
    if (open) {
      event.key === 'Escape' && handleOpenChange(false);
    } else {
      event.key === 'Enter' && handleOpenChange(true);
    }
  };

  const handlePresetValueSubmit = () => {
    onChange([...presetValue]);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      onOpenChange(true);
      handlePanelValueUpdate();
    } else {
      const existFocusedInput =
        getElementFocused(startInputRef.current) ||
        getElementFocused(endInputRef.current);

      setPicking(false);
      setPickingValue([null, null]);

      clickedRef.current.start = false;
      clickedRef.current.end = false;

      !existFocusedInput && setFocused(null);
      isPresetValueValid && handlePresetValueSubmit();

      setRafTimeout(() => {
        onOpenChange(false);
      }, 200);
    }
  };

  const handleLastYearClick = () => {
    setPanelValue(panelValue.map(item => getLastYearDate(item)));
  };

  const handleLastMonthClick = () => {
    setPanelValue(panelValue.map(item => getLastMonthDate(item)));
  };

  const handleNextMonthClick = () => {
    setPanelValue(panelValue.map(item => getNextMonthDate(item)));
  };

  const handleNextYearClick = () => {
    setPanelValue(panelValue.map(item => getNextYearDate(item)));
  };

  const disabledDate = (dateValue: number) => {
    const propsDisabled = isFunction(disabledDateFromProps) && disabledDateFromProps(dateValue);

    let rangeDisabled = false;

    if (focused === 'start' && clickedRef.current.end) {
      rangeDisabled = presetValue[1] !== null ? dateValue > presetValue[1] : false;
    }

    if (focused === 'end' && clickedRef.current.start) {
      rangeDisabled = presetValue[0] !== null ? dateValue < presetValue[0] : false;
    }

    return propsDisabled || rangeDisabled;
  };

  const popup = (
    <div
      className={`${prefix}-range-picker__popup`}
      onMouseDown={event => event.preventDefault()}
    >
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={panelValue[0]}
        list={getDates({
          panelValue: panelValue[0],
          value,
          range: true,
          presetValue,
          pickingValue,
          disabledDate,
        })}
        onLastYearClick={handleLastYearClick}
        onLastMonthClick={handleLastMonthClick}
        onNextMonthClick={handleNextMonthClick}
        onNextYearClick={handleNextYearClick}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={(cellValue: number) => handleCellClick(cellValue, 'start')}
        onCellEnter={(cellValue: number) => handleCellEnter(cellValue)}
        onCellLeave={() => handleCellLeave()}
        renderFooter={renderFooter}
      />
      <DatePanel
        className={`${prefix}-range-picker__panel`}
        value={panelValue[1]}
        list={getDates({
          panelValue: panelValue[1],
          value,
          range: true,
          presetValue,
          pickingValue,
          disabledDate,
        })}
        onLastYearClick={handleLastYearClick}
        onLastMonthClick={handleLastMonthClick}
        onNextMonthClick={handleNextMonthClick}
        onNextYearClick={handleNextYearClick}
        onYearClick={() => {}}
        onMonthClick={() => {}}
        onCellClick={(cellValue: number) => handleCellClick(cellValue, 'end')}
        onCellEnter={(cellValue: number) => handleCellEnter(cellValue)}
        onCellLeave={() => handleCellLeave()}
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
            error={error}
            focused={!!focused || open}
            disabled={disabled}
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
                [`${prefix}-range-picker__input--picking`]: focused === 'start' && picking,
              })}
              ref={startInputRef}
              value={inputText[0]}
              disabled={disabled}
              placeholder={placeholder?.[0]}
              onFocus={() => handleInputFocus('start')}
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
                [`${prefix}-range-picker__input--picking`]: focused === 'end' && picking,
              })}
              ref={endInputRef}
              value={inputText[1]}
              disabled={disabled}
              placeholder={placeholder?.[1]}
              onFocus={() => handleInputFocus('end')}
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
