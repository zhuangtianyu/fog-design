import { useState, useMemo } from 'react';

const useControlled = props => {
  const {
    value,
    defaultValue,
    onChange = () => {},
  } = props;

  const isControlled = useMemo(() => typeof value !== 'undefined', [value]);

  const [innerValue, setInnerValue] = useState(defaultValue);

  const uncontrolledHandler = nextValue => {
    setInnerValue(nextValue);
    onChange(nextValue);
  };

  return isControlled
    ? { value, onChange }
    : { value: innerValue, onChange: uncontrolledHandler };
};

export default useControlled;
