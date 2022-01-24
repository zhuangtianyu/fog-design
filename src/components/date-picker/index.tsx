import React, { useMemo } from 'react';
import classnames from 'classnames';
import namespace from '@namespace';
import Input from '@components/input';
import Trigger from '@components/trigger';
import useControlled from '@hooks/useControlled';
import './index.less';

const { prefix } = namespace;

interface DatePickerProps  {
  className?: string;
  placeholder?: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

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

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const dates = Array.from({ length: 40 });

  const inputValue = useMemo(() => {
    if (value === null || value === undefined) return '';

    return '2022-01-01';
  }, [value]);

  const popup = (
    <div className={`${prefix}-date-picker__popup`}>
      <div className={`${prefix}-date-picker__header`}>
        <div className={`${prefix}-date-picker__trigger`}>⏪</div>
        <div className={`${prefix}-date-picker__trigger`}>⬅️</div>
        <div className={`${prefix}-date-picker__overview`}>
          <div className={`${prefix}-date-picker__year`}>2020</div>
          <div className={`${prefix}-date-picker__month`}>10</div>
        </div>
        <div className={`${prefix}-date-picker__trigger`}>➡️</div>
        <div className={`${prefix}-date-picker__trigger`}>⏩</div>
      </div>
      <div className={`${prefix}-date-picker__body`}>
        <div className={`${prefix}-date-picker__days`}>
          {days.map(day => (
            <div className={`${prefix}-date-picker__day`} key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className={`${prefix}-date-picker__dates`}>
          {dates.map((date, index) => (
            <div
              className={classnames({
                [`${prefix}-date-picker__date`]: true,
                [`${prefix}-date-picker__date--active`]: index === 6,
              })}
              key={index}
            >
              Hi
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={classnames(`${prefix}-date-picker`, className)}>
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
          value={inputValue}
          placeholder={placeholder}
          readOnly
        />
      </Trigger>
    </div>
  );
};

export default DatePicker;
