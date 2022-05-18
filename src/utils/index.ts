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
