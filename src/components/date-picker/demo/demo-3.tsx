import React from 'react';
import DatePicker from '@components/date-picker';

const Demo = () => {

  return (
    <DatePicker
      placeholder="Please select"
      disabledDate={value => (
        new Date(value).getDate() >= 20 ||
        new Date(value).getDate() === 12
      )}
    />
  );
};

export default Demo;
