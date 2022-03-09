import { Themes, ThemeItem } from './themes.d';

export const getTransformedColor = (HEX: string, percent: number) => {
  const value = Number.parseInt(HEX.slice(1), 16);
  const colorant = percent < 0 ? 0 : 255;
  const transform = value => Math.round((colorant - value) * Math.abs(percent)) + value;
  const R = transform(value >> 16);
  const G = transform(value >> 8 & 0x00FF);
  const B = transform(value & 0x0000FF);

  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
};

export const themeColors = {
  cloudless: '#0066ff',
  tangerine: '#ff6600',
  lavenders: '#9966ff',
  spearmint: '#00aa33',
  raspberry: '#ff5050',
};

export const lightColors = {
  'transparent': 'transparent',

  'color': '#0d0d0d',
  'color-disabled': '#a6a6a6',

  'contrast-color': '#ffffff',
  'contrast-color-disabled': '#fcfcfc',

  'border-color': '#d9d9d9',
  'border-color-deep': '#bfbfbf',
  'border-color-light': '#f2f2f2',
  'background-color': '#ffffff',
  'background-color-active': '#bfbfbf',
  'background-color-preset': '#f2f2f2',
  'background-color-disabled': '#f2f2f2',

  'placeholder-color': '#bfbfbf',

  /* used for: switch */
  'internal-color': '#bfbfbf',
  'internal-color-hover': '#a6a6a6',
  'internal-color-disabled': '#e6e6e6',

  /* used for: input, modal, popup... */
  'panel-color': '#ffffff',
  'panel-color-active': '#f2f2f2',
  'panel-color-disabled': '#f5f5f5',

  /* used for: menu-group, option-group... */
  'group-color': '#8c8c8c',

  /* used for: menu */
  'content-color': '#fafafa',

  /* used for: modal */
  'mask-color': 'rgba(0, 0, 0, 0.4)',

  /* used for: popup */
  'shadow-color': '#8c8c8c',

  /* used for: danger-element */
  'danger-color': '#ff3300',
  'danger-color-hover': getTransformedColor('#ff3300', 0.2),
  'danger-color-active': getTransformedColor('#ff3300', -0.2),
};

export const darkColors = {
  'transparent': 'transparent',

  'color': '#d9d9d9',
  'color-disabled': '#8c8c8c',

  'contrast-color': '#ffffff',
  'contrast-color-disabled': '#b3b3b3',

  'border-color': '#404040',
  'border-color-deep': '#595959',
  'border-color-light': '#262626',
  'background-color': '#0d0d0d',
  'background-color-active': '#595959',
  'background-color-preset': '#4d4d4d',
  'background-color-disabled': '#333333',

  'placeholder-color': '#666666',

  /* used for: switch */
  'internal-color': '#666666',
  'internal-color-hover': '#808080',
  'internal-color-disabled': '#333333',

  /* used for: input, modal, popup... */
  'panel-color': '#262626',
  'panel-color-active': '#404040',
  'panel-color-disabled': '#1a1a1a',

  /* used for: menu-group, option-group... */
  'group-color': '#808080',

  /* used for: menu */
  'content-color': '#1a1a1a',

  /* used for: modal */
  'mask-color': 'rgba(0, 0, 0, 0.4)',

  /* used for: popup */
  'shadow-color': '#1a1a1a',

  /* used for: danger-element */
  'danger-color': '#ff3300',
  'danger-color-hover': getTransformedColor('#ff3300', 0.2),
  'danger-color-active': getTransformedColor('#ff3300', -0.2),
};

export const themeNames = Object.keys(themeColors);

export const themes: Themes = themeNames.reduce((accumulator, themeName) => {
  const primaryColor = themeColors[themeName];

  const primaryColors = {
    'primary-color': primaryColor,
    'primary-color-hover': getTransformedColor(primaryColor, 0.2),
    'primary-color-active': getTransformedColor(primaryColor, -0.2),
  };

  const themeItem: ThemeItem = {
    light: {
      ...lightColors,
      ...primaryColors,
      'primary-color-blushed': getTransformedColor(primaryColor, 0.8),
      'primary-color-disabled': getTransformedColor(primaryColor, 0.6),
    },
    dark: {
      ...darkColors,
      ...primaryColors,
      'primary-color-blushed': getTransformedColor(primaryColor, -0.7),
      'primary-color-disabled': getTransformedColor(primaryColor, -0.5),
    },
  };

  return { ...accumulator, [themeName]: themeItem };
}, {});
