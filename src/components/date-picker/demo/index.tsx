import React from 'react';
import DatePicker from '@components/date-picker';
import './index.less';

const DatePickerDemo = () => {

  return (
    <div className="date-picker-demo">
      <h2>DatePicker</h2>
      <h3>Basic Usage</h3>
      <DatePicker placeholder="Please select" />
      <h3>Disabled</h3>
      <DatePicker
        placeholder="Please select"
        disabled
      />
      <h3>Disabled Date</h3>
      <DatePicker
        placeholder="Please select"
        disabledDate={value => (
          new Date(value).getDate() >= 20 ||
          new Date(value).getDate() === 12
        )}
      />
      <h3>Mode</h3>
      <p>
        <code>mode="month"</code>
      </p>
      <DatePicker
        placeholder="Please select"
        mode="month"
      />
      <p>
        <code>mode="year"</code>
      </p>
      <DatePicker
        placeholder="Please select"
        mode="year"
      />
    </div>
  );
};

export default DatePickerDemo;
