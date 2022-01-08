export const kebabCaseToPascalCase: (name: string) => string = name => {
  if (typeof name !== 'string') return '';

  return name
    .replace(/^(\w)/, $1 => $1.toUpperCase())
    .replace(/-(\w)/g, ($1, $2) => $2.toUpperCase());
};
