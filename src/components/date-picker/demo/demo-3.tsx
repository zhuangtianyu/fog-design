import React from 'react';
import DatePicker from '@components/date-picker';

const { RangePicker } = DatePicker;

const disabledDate = value =>
  new Date(value).getDate() >= 20 ||
  new Date(value).getDate() === 12;

const Demo = () => {

  return (
    <>
      <DatePicker
        style={{ marginBottom: 12 }}
        placeholder="Please select"
        disabledDate={disabledDate}
      />
      <RangePicker
        placeholder={['Start date', 'End date']}
        disabledDate={disabledDate}
      />
    </>
  );
};

export default Demo;
