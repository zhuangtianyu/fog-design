import { useState, useMemo } from 'react';

const useControlled = props => {
  const {
    value,
    defaultValue,
    onChange = () => {},
    innerValueGetter = nextValue => nextValue,
  } = props;

  const isControlled = useMemo(() => typeof value !== 'undefined', [value]);

  const [innerValue, setInnerValue] = useState(defaultValue);

  const uncontrolledHandler = (...args) => {
    setInnerValue(innerValueGetter(...args));
    onChange(...args);
  };

  return isControlled
    ? { value, onChange: uncontrolledHandler }
    : { value: innerValue, onChange: uncontrolledHandler };
};

export default useControlled;
