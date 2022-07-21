import React, { useState } from 'react';
import Form, { FormLayout } from '@components/form';
import Radio from '@components/radio';
import Input from '@components/input';
import InputNumber from '@components/input-number';
import Select from '@components/select';
import DatePicker from '@components/date-picker';
import Button from '@components/button';
import { kebabCaseToPascalCase } from '@utils/index';

const { Option } = Select;

const Demo = () => {
  const [layout, setLayout] = useState<FormLayout>('horizontal');

  const layouts = ['horizontal', 'vertical'];

  const handleLayoutChange = (nextLayout: string) => {
    setLayout(nextLayout as FormLayout);
  };

  return (
    <Form layout={layout}>
      <Form.Item label="Layout" name="layout" initialValue="horizontal">
        <Radio.Group onChange={handleLayoutChange}>
          {layouts.map(item => (
            <Radio.Button key={item} value={item} checked={item === layout}>
              {kebabCaseToPascalCase(item)}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Name" name="name" initialValue="Milk">
        <Input placeholder="Please input" clearable />
      </Form.Item>
      <Form.Item label="Remain" name="remain" initialValue={10}>
        <InputNumber placeholder="Please input" />
      </Form.Item>
      <Form.Item label="Category" name="category" initialValue="Foodstuff">
        <Select placeholder="Please select" clearable>
          <Option value="Foodstuff">Foodstuff</Option>
          <Option value="Groceries">Groceries</Option>
          <Option value="Others">Others</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Launch Date" name="launchDate" initialValue={Date.now()}>
        <DatePicker placeholder="Please select" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
