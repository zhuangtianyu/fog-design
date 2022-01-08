export const kebabCaseToPascalCase: (name: string) => string = name => {
  if (typeof name !== 'string') return '';

  return name
    .replace(/^(\w)/, $1 => $1.toUpperCase())
    .replace(/-(\w)/g, ($1, $2) => $2.toUpperCase());
};

export const setRafTimeout = (callback: Function, timeout: number = 0) => {
  const startTime = Date.now();
  let id = 0;

  const checker = () => id = requestAnimationFrame(() => {
    const elapsedTime = Date.now() - startTime;

    elapsedTime > timeout ? callback() : checker();
  });

  checker();

  return id;
};

export const clearRafTimeout = id => id && cancelAnimationFrame(id);
