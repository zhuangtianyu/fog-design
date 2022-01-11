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
};

export const sharedColors = {
  'color-disabled': '#a6a6a6',
  'color-contrast': '#ffffff',
  'transparent': 'transparent',
  'danger-color': '#ff3300',
  'danger-color-hover': getTransformedColor('#ff3300', 0.2),
  'danger-color-active': getTransformedColor('#ff3300', -0.2),
};

export const lightColors = {
  'color': '#0d0d0d',
  'color-contrast-disabled': '#fcfcfc',
  'border-color': '#d9d9d9',
  'background-color': '#ffffff',
  'background-color-blushed': '#f2f2f2',
  'background-color-interactive': '#bfbfbf',
  'background-color-interactive-disabled': '#e6e6e6',
  'background-color-mask': 'rgba(0, 0, 0, 0.4)',
  'background-color-modal': '#ffffff',
  'shadow-color-popup': '#8c8c8c',
};

export const darkColors = {
  'color': '#ffffff',
  'color-contrast-disabled': '#b3b3b3',
  'border-color': '#404040',
  'background-color': '#0d0d0d',
  'background-color-blushed': '#262626',
  'background-color-interactive': '#666666',
  'background-color-interactive-disabled': '#333333',
  'background-color-mask': 'rgba(0, 0, 0, 0.4)',
  'background-color-modal': '#262626',
  'shadow-color-popup': 'transparent',
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
      ...primaryColors,
      ...sharedColors,
      ...lightColors,
      'primary-color-disabled': getTransformedColor(primaryColor, 0.6),
    },
    dark: {
      ...primaryColors,
      ...sharedColors,
      ...darkColors,
      'primary-color-disabled': getTransformedColor(primaryColor, -0.5),
    },
  };

  return { ...accumulator, [themeName]: themeItem };
}, {});
