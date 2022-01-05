export interface ThemeItem {
  light: {
    [colorName: string]: string;
  };
  dark: {
    [colorName: string]: string;
  };
}

export interface Themes {
  [themeName: string]: ThemeItem;
}

export const getTransformedColor = (hex: string, step: number) => {
  hex = hex.slice(1);

  let r = hex.slice(0, 2);
  let g = hex.slice(2, 4);
  let b = hex.slice(4, 6);

  const transform = (value: string) => {
    const transformed = Number(`0x${value}`) + step;

    if (transformed < 0) return '00';
    if (transformed > 255) return 'ff';

    return transformed.toString(16).padStart(2, '0');
  };

  r = transform(r);
  g = transform(g);
  b = transform(b);

  return `#${r}${g}${b}`;
};

export const themeColors = {
  cloudless: '#2482f5',
  camellias: '#f65a6e',
  lavenders: '#7373f2',
};

export const lightColors = {
  'color': '#0d0d0d',
  'border-color': '#d9d9d9',
  'background-color': '#ffffff',
};

export const darkColors = {
  'color': '#ffffff',
  'border-color': '#808080',
  'background-color': '#0d0d0d',
};

export const themeNames = Object.keys(themeColors);

export const themes: Themes = themeNames.reduce((accumulator, themeName) => {
  const primaryColor = themeColors[themeName];

  const primaryColors = {
    'primary-color': primaryColor,
    'primary-color-hover': getTransformedColor(primaryColor, 25),
    'primary-color-active': getTransformedColor(primaryColor, -25),
  };

  const themeItem: ThemeItem = {
    light: { ...primaryColors, ...lightColors },
    dark: { ...primaryColors, ...darkColors },
  };

  return { ...accumulator, [themeName]: themeItem };
}, {});

export default themes;
