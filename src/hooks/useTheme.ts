import { useEffect } from 'react';
import { ThemeItem } from '@constants/themes.d';

const useTheme: (
  theme: ThemeItem,
  dark: boolean,
  container?: HTMLElement,
) => void = (
  theme,
  dark,
  container = document.body,
) => {
  useEffect(() => {
    if (
      container &&
      container.style &&
      container.style.setProperty &&
      container.style.getPropertyValue
    ) {
      const colors = dark ? theme.dark : theme.light;
      const containerProperties = ['color', 'background-color'];

      Object.keys(colors).forEach(name => {
        container.style.setProperty(`--fog-${name}`, colors[name]);
      });
      containerProperties.forEach(name => {
        container.style.setProperty(name, container.style.getPropertyValue(`--fog-${name}`));
      });
      container.style.setProperty('transition', 'all 0.3s');
    }
  }, [theme, dark, container]);

  return null;
};

export default useTheme;
