import React, { useState } from 'react';
import DatePicker from '@components/date-picker';
import './index.less';

const DatePickerDemo = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <div className="date-picker-demo">
      <h2>DatePicker</h2>
      <h3>Basic Usage</h3>
      <DatePicker
        placeholder="Please select"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default DatePickerDemo;
