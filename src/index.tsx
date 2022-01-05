import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ButtonDemo from '@components/button/demo';
import useTheme from '@hooks/useTheme';
import { themes, themeNames } from '@constants/themes';
import './index.less';

const previousDark = !!localStorage.getItem('dark');
const previousThemeName = localStorage.getItem('themeName');

const App = () => {
  const [dark, setDark] = useState(previousDark || false);
  const [themeName, setThemeName] = useState(previousThemeName || themeNames[0]);

  useTheme(themes[themeName], dark);

  useEffect(() => {
    localStorage.setItem('dark', dark ? '1' : '');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  return (
    <div className="app">
      <h2>Themes</h2>
      <div className="themes">
        {themeNames.map(item => (
          <span
            key={item}
            style={{ fontWeight: item === themeName ? 'bold' : 'normal' }}
            onClick={() => setThemeName(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <h2>Darkness</h2>
      <div className="darkness">
        <span
          style={{ fontWeight: dark ? 'normal' : 'bold' }}
          onClick={() => setDark(false)}
        >
          light
        </span>
        <span
          style={{ fontWeight: dark ? 'bold' : 'normal' }}
          onClick={() => setDark(true)}
        >
          dark
        </span>
      </div>
      <h2>Demo</h2>
      <ButtonDemo />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));
