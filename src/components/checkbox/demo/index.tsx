import React, { useState } from 'react';
import Checkbox from '@components/checkbox';
import Switch from '@components/switch';
import './index.less';

const { Group } = Checkbox;

const checkboxes = ['Cola', 'Pepsi', 'Fanta', 'Sprite'];

const CheckboxDemo = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [groupDisabled, setGroupDisabled] = useState<boolean>(false);
  const [value, setValue] = useState(checkboxes.filter(item => item !== 'Pepsi'));

  return (
    <div className="checkbox-demo">
      <h2>Checkbox</h2>
      <h3>Basic Usage</h3>
      <Checkbox defaultChecked>Cola</Checkbox>
      <h3>Disabled</h3>
      <Checkbox defaultChecked disabled={disabled}>Cola</Checkbox>
      <Checkbox disabled={disabled}>Fanta</Checkbox>
      <Switch checked={disabled} onChange={setDisabled} />
      <h3>Group</h3>
      <Group defaultValue={['Cola']} disabled={groupDisabled}>
        <Checkbox value="Cola" key="Cola">Cola</Checkbox>
        <Checkbox value="Pepsi" key="Pepsi" disabled>Pepsi</Checkbox>
        <Checkbox value="Fanta" key="Fanta">Fanta</Checkbox>
        <Checkbox value="Sprite" key="Sprite">Sprite</Checkbox>
      </Group>
      <Switch checked={groupDisabled} onChange={setGroupDisabled} />
      <h3>Indeterminate</h3>
      <Checkbox
        style={{ display: 'block', marginBottom: 20 }}
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
    </div>
  );
};

export default CheckboxDemo;
