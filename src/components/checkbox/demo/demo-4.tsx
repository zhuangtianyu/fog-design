import React, { useState } from 'react';
import Checkbox from '@components/checkbox';
import './index.less';

const { Group } = Checkbox;

const checkboxes = ['Cola', 'Pepsi', 'Fanta', 'Sprite'];

const Demo = () => {
  const [value, setValue] = useState(checkboxes.filter(item => item !== 'Pepsi'));

  return (
    <>
      <Checkbox
        style={{ display: 'block', marginBottom: 12 }}
        indeterminate={value.length && value.length < checkboxes.length}
        checked={value.length === checkboxes.length}
        onChange={event => setValue(event.target.checked ? checkboxes : [])}
      >
        Check all
      </Checkbox>
      <Group value={value} onChange={setValue}>
        {checkboxes.map(item => (
          <Checkbox value={item} key={item}>{item}</Checkbox>
        ))}
      </Group>
    </>
  );
};

export default Demo;
