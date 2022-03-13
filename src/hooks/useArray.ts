import { useMemo } from 'react';

const useArray = <T>(array: T, defaultValue: T | any = []) => useMemo(() => {
  if (Array.isArray(array)) return array;

  return defaultValue;
}, [array, defaultValue]);

export default useArray;
