import { isFunction } from '@utils/index';

export const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const ONE_DAY = 24 * 60 * 60 * 1000;

export const DATES_COUNT = 7 * 6;

export const timestampToDate = (
  timestamp: number = Date.now(),
  format: string = 'YYYY-MM-DD HH:mm:ss',
) => {
  const time = new Date(timestamp);

  const year = time.getFullYear();
  const monthIndex = time.getMonth();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  const padStart = (value, length = 2) => value.toString().padStart(length, '0');

  const YYYY = padStart(year, 4);
  const MM = padStart(month);
  const DD = padStart(date);
  const HH = padStart(hour);
  const mm = padStart(minute);
  const ss = padStart(second);

  const dateString = format
    .replace(/YYYY/g, YYYY)
    .replace(/MM/g, MM)
    .replace(/DD/g, DD)
    .replace(/HH/g, HH)
    .replace(/mm/g, mm)
    .replace(/ss/g, ss);

  return {
    year,
    monthIndex,
    month,
    date,
    day,
    hour,
    minute,
    second,
    YYYY,
    MM,
    DD,
    HH,
    mm,
    ss,
    dateString,
  };
};

export const getDayStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex, date } = timestampToDate(timestamp);

  return new Date(year, monthIndex, date).valueOf();
};

export const getMonthStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex).valueOf();
};

export const getMonthEndDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex + 1, 0).valueOf();
};

export const getLastMonthStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex - 1).valueOf();
};

export const getNextMonthStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex + 1).valueOf();
};

export const getLastYearStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year - 1, monthIndex).valueOf();
};

export const getNextYearStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year + 1, monthIndex).valueOf();
};

export const getLastYearGroupDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year - 12, monthIndex).valueOf();
};

export const getNextYearGroupDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year + 12, monthIndex).valueOf();
};

export const getLastYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex, date } = timestampToDate(timestamp);

  return new Date(year - 1, monthIndex, date).valueOf();
};

export const getNextYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex, date } = timestampToDate(timestamp);

  return new Date(year + 1, monthIndex, date).valueOf();
};

export const getDates = (timestamp: number, activeValue: number, disabledDate: Function) => {
  const currentStartDate = getMonthStartDate(timestamp);
  const currentEndDate = getMonthEndDate(timestamp);
  const currentDateCount = timestampToDate(currentEndDate).date;
  const currentDates = Array.from({ length: currentDateCount }).map((item, index) => {
    const value = currentStartDate + index * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: true, content: date };
  });

  const lastDateCount = timestampToDate(currentStartDate).day;
  const lastDates = Array.from({ length: lastDateCount }).map((item, index) => {
    const value = currentStartDate - (lastDateCount - index) * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: false, content: date };
  });

  const nextDateCount = DATES_COUNT - lastDateCount - currentDateCount;
  const nextDates = Array.from({ length: nextDateCount }).map((item, index) => {
    const value = currentEndDate + (index + 1) * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: false, content: date };
  });

  const dates = [...lastDates, ...currentDates, ...nextDates];

  return dates.map(item => {
    const active = item.value === activeValue;
    const disabled = isFunction(disabledDate) && disabledDate(item.value);
    const lastDisabled = isFunction(disabledDate) && disabledDate(item.value - ONE_DAY);
    const nextDisabled = isFunction(disabledDate) && disabledDate(item.value + ONE_DAY);
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;

    return {
      ...item,
      active,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });
};

export const getYears = (timestamp: number, activeValue: number, disabledDate: Function) => {
  const { year, monthIndex, date } = timestampToDate(timestamp);
  let startYear = year - 1;

  while (startYear % 10 !== 9) {
    startYear--;
  }

  const years = Array.from({ length: 12 }).map((item, index) => {
    const accumulatedYear = startYear + index;
    const value = new Date(accumulatedYear, monthIndex, date).valueOf();
    const active = timestampToDate(activeValue).year === accumulatedYear;
    const disabled = isFunction(disabledDate) && disabledDate(value);
    const lastYearDate = new Date(accumulatedYear - 1, monthIndex, date);
    const nextYearDate = new Date(accumulatedYear + 1, monthIndex, date);
    const lastDisabled = isFunction(disabledDate) && disabledDate(lastYearDate.valueOf());
    const nextDisabled = isFunction(disabledDate) && disabledDate(nextYearDate.valueOf());
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;
    const { YYYY } = timestampToDate(value)

    return {
      value,
      title: YYYY,
      within: ![0, 11].includes(index),
      content: YYYY,
      active,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });

  return years;
};

export const getMonths = (timestamp: number, activeValue: number, disabledDate: Function) => {
  const { year } = timestampToDate(timestamp);

  const months = Array.from({ length: 12 }).map((item, index) => {
    const monthIndex = index;
    const value = new Date(year, monthIndex).valueOf();
    const active = getMonthStartDate(value) === getMonthStartDate(activeValue);
    const disabled = isFunction(disabledDate) && disabledDate(value);
    const lastYearDate = new Date(monthIndex - 1, monthIndex);
    const nextYearDate = new Date(monthIndex + 1, monthIndex);
    const lastDisabled = isFunction(disabledDate) && disabledDate(lastYearDate.valueOf());
    const nextDisabled = isFunction(disabledDate) && disabledDate(nextYearDate.valueOf());
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;
    const { YYYY, MM } = timestampToDate(value)

    return {
      value,
      title: `${YYYY}-${MM}`,
      within: true,
      content: MONTHS[monthIndex],
      active,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });

  return months;
};
