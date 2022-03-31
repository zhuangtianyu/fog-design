import React from 'react';
import DatePicker from '@components/date-picker';

const Demo = () => {

  return (
    <>
      <p>mode="month"</p>
      <DatePicker placeholder="Please select" mode="month" />
      <p>mode="year"</p>
      <DatePicker placeholder="Please select" mode="year" />
    </>
  );
};

export default Demo;
