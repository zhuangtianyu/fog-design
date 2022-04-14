import React from 'react';
import DatePicker from '@components/date-picker';

const { RangePicker } = DatePicker;

const Demo = () => (
  <>
    <DatePicker
      style={{ marginBottom: 12 }}
      placeholder="Please select"
      disabled
    />
    <RangePicker
      placeholder={['Start date', 'End date']}
      disabled
    />
  </>
);

export default Demo;
