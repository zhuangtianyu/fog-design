export const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

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

export const getMonthStartDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex).valueOf();
};

export const getMonthEndDate = (timestamp: number = Date.now()) => {
  const { year, monthIndex } = timestampToDate(timestamp);

  return new Date(year, monthIndex + 1, 0).valueOf();
};

export const getMonthDates = (timestamp: number = Date.now()) => {
  // current month
  const currentStartDate = getMonthStartDate(timestamp);
  const currentEndDate = getMonthEndDate(timestamp);
  const currentDateCount = timestampToDate(currentEndDate).date;
  const currentDates = Array.from({ length: currentDateCount }).map((item, index) => {
    const value = currentStartDate + index * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: true, dateText: date };
  });

  // last month
  const lastDateCount = timestampToDate(currentStartDate).day;
  const lastDates = Array.from({ length: lastDateCount }).map((item, index) => {
    const value = currentStartDate - (lastDateCount - index) * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: false, dateText: date };
  });

  // next month
  const nextDateCount = DATES_COUNT - lastDateCount - currentDateCount;
  const nextDates = Array.from({ length: nextDateCount }).map((item, index) => {
    const value = currentEndDate + (index + 1) * ONE_DAY;
    const { date, dateString } = timestampToDate(value, 'YYYY-MM-DD');

    return { value, title: dateString, within: false, dateText: date };
  });

  return [...lastDates, ...currentDates, ...nextDates];
};
