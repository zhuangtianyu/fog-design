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

export const cancelRafTimeout = timer => timer.id && cancelAnimationFrame(timer.id);

export const isFunction: (fn: any) => boolean = fn => typeof fn === 'function';
