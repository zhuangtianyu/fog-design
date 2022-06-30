import React from 'react';

export const kebabCaseToPascalCase: (name: string) => string = name => {
  if (typeof name !== 'string') return '';

  return name
    .replace(/^(\w)/, $1 => $1.toUpperCase())
    .replace(/-(\w)/g, ($1, $2) => $2.toUpperCase());
};

export const setRafTimeout = (callback: Function, timeout: number = 0) => {
  const startTime = performance.now();
  const timer = { id: 0 };

  const checker = () => timer.id = requestAnimationFrame(() => {
    const elapsedTime = performance.now() - startTime;

    elapsedTime > timeout ? callback() : checker();
  });

  checker();

  return timer;
};

export const cancelRafTimeout = timer => {
  if (timer && timer.id) {
    cancelAnimationFrame(timer.id);
  }
};

export const isFunction: (fn: any) => boolean = fn => typeof fn === 'function';

export const isMobile = () => /mobile/i.test(window.navigator.userAgent);

// check if typing text will be a number, eg:
// x      -> false
// 1      -> true
// -      -> true
// -1     -> true
// -1.    -> true
// -1.2   -> true
export const isNumberLikeText = text => /^-?(\d+|\d+\.)?(\d+)?$/.test(text);

export const isNumberText = text => /^-?\d+(.\d+)?$/.test(text);

export const getPrecisionValue = (value: number) => Number(value.toPrecision(12));

export const getWrappedChildren: (params: {
  children: React.ReactChild | React.ReactChild[];
  wrapperType: string;
  wrapperProps?: Record<string, any>;
}) => React.ReactElement = ({
  children,
  wrapperType,
  wrapperProps,
}) => {
  const childrenIsArray = Array.isArray(children);
  const childrenIsFragment = !childrenIsArray && (children as React.ReactElement).type === React.Fragment;

  const shouldWrapped =
    childrenIsArray ||
    childrenIsFragment ||
    typeof children === 'string' ||
    typeof children === 'number';

  if (shouldWrapped) return React.createElement(wrapperType, wrapperProps, children);
  if (wrapperProps) return React.cloneElement(children, wrapperProps);

  return children;
};
