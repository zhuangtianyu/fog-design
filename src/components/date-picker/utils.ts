import { isFunction } from '@utils/index';

export const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const FORMAT_DEFAULT = {
  date: 'YYYY-MM-DD',
  month: 'YYYY-MM',
  year: 'YYYY',
};

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

export const getLastMonthDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex - 1).valueOf();
};

export const getNextMonthDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex + 1).valueOf();
};

export const getLastYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year - 1, monthIndex).valueOf();
};

export const getNextYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year + 1, monthIndex).valueOf();
};

export const getLastGroupYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year - 12, monthIndex).valueOf();
};

export const getNextGroupYearDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year + 12, monthIndex).valueOf();
};

export const getDates = (panelValue: number, value: number | number[], disabledDate: Function) => {
  value = Array.isArray(value) ? value : [value];

  const mainStartDate = panelValue;
  const mainEndDate = getMonthEndDate(panelValue);
  const mainDateCount = timestampToDate(mainEndDate).date;
  const lastDateCount = timestampToDate(mainStartDate).day;
  const lastStartDate = mainStartDate - lastDateCount * ONE_DAY;

  const dates = Array.from({ length: DATES_COUNT }).map((_, index) => {
    const currentValue = lastStartDate + index * ONE_DAY;
    const dateInfo = timestampToDate(currentValue, 'YYYY-MM-DD');
    const within = index >= lastDateCount && index < (lastDateCount + mainDateCount);
    const active = (value as number[]).includes(currentValue);
    const disabled = isFunction(disabledDate) && disabledDate(currentValue);
    const lastDisabled = isFunction(disabledDate) && disabledDate(currentValue - ONE_DAY);
    const nextDisabled = isFunction(disabledDate) && disabledDate(currentValue + ONE_DAY);
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;

    return {
      value: currentValue,
      title: dateInfo.dateString,
      content: dateInfo.date,
      within,
      active,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });

  return dates;
};

export const getYears = (panelValue: number, value: number, disabledDate: Function) => {
  const { year, monthIndex } = timestampToDate(panelValue);
  let startYear = year - 1;

  while (startYear % 10 !== 9) {
    startYear--;
  }

  const years = Array.from({ length: 12 }).map((_, index) => {
    const currentYear = startYear + index;
    const currentValue = new Date(currentYear, monthIndex).valueOf();
    const disabled = isFunction(disabledDate) && disabledDate(currentValue);
    const lastYearDate = new Date(currentYear - 1, monthIndex);
    const nextYearDate = new Date(currentYear + 1, monthIndex);
    const lastDisabled = isFunction(disabledDate) && disabledDate(lastYearDate.valueOf());
    const nextDisabled = isFunction(disabledDate) && disabledDate(nextYearDate.valueOf());
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;

    return {
      value: currentValue,
      title: currentYear.toString(),
      content: currentYear,
      within: ![0, 11].includes(index),
      active: currentYear === timestampToDate(value).year,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });

  return years;
};

export const getMonths = (panelValue: number, value: number, disabledDate: Function) => {
  const { year } = timestampToDate(panelValue);

  const months = Array.from({ length: 12 }).map((_, index) => {
    const monthIndex = index;
    const currentValue = new Date(year, monthIndex).valueOf();
    const active = currentValue === getMonthStartDate(value);
    const disabled = isFunction(disabledDate) && disabledDate(currentValue);
    const lastMonthDate = new Date(year, monthIndex - 1);
    const nextMonthDate = new Date(year, monthIndex + 1);
    const lastDisabled = isFunction(disabledDate) && disabledDate(lastMonthDate.valueOf());
    const nextDisabled = isFunction(disabledDate) && disabledDate(nextMonthDate.valueOf());
    const disabledFirstChild = disabled && !lastDisabled && nextDisabled;
    const disabledLastChild = disabled && lastDisabled && !nextDisabled;
    const disabledIsolated = disabled && !lastDisabled && !nextDisabled;

    return {
      value: currentValue,
      title: timestampToDate(currentValue, 'YYYY-MM').dateString,
      content: MONTHS[monthIndex],
      within: true,
      active,
      disabled,
      disabledFirstChild,
      disabledLastChild,
      disabledIsolated,
    };
  });

  return months;
};
