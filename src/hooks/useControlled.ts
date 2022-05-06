import { useState, useEffect, useRef, useMemo } from 'react';

const useControlled = props => {
  const {
    value,
    defaultValue,
    onChange = () => {},
    innerValueGetter = nextValue => nextValue,
  } = props;

  const isControlled = useMemo(() => typeof value !== 'undefined', [value]);

  const lastControlled = useRef<boolean>(isControlled);

  const [innerValue, setInnerValue] = useState(defaultValue);

  const uncontrolledHandler = (...args) => {
    setInnerValue(innerValueGetter(...args));
    onChange(...args);
  };

  useEffect(() => {
    // clear innerValue when changed to controlled state
    // otherwise, old innerValue will appear when changed to uncontrolled again
    if (!lastControlled.current && isControlled) {
      setInnerValue(undefined);
    }

    return () => {
      lastControlled.current = isControlled;
    };
  }, [isControlled]);

  return isControlled
    ? { value, onChange }
    : { value: innerValue, onChange: uncontrolledHandler };
};

export default useControlled;
