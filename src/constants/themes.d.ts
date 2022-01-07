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
