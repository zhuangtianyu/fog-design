import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Switch from '@components/switch';
import useTheme from '@hooks/useTheme';
import { themes, themeNames } from '@constants/themes';
import { kebabCaseToPascalCase } from '@utils/index';
import './index.less';

const previousDark = !!localStorage.getItem('dark');
const previousThemeName = localStorage.getItem('themeName');

const Demo = () => {
  const { name } = useParams();
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (name) {
      import(`@components/${name}/demo`)
        .then(setComponent)
        .catch(error => {
          setComponent({ default: () => <span>{error.message}</span> });
        });
    }
  }, [name]);

  return component ? <component.default /> : null;
};

const components: string[] = ['button', 'switch', 'transition', 'modal', 'trigger'];

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
    <HashRouter>
      <div className="app">
        <div className="app__header">
          <Link to="">
            <div className="app__header-title">
              Fog Design
            </div>
          </Link>
          <div className="app__header-themes">
            {themeNames.map(item => (
              <span
                key={item}
                style={{ fontWeight: item === themeName ? 'bold' : 'normal' }}
                onClick={() => setThemeName(item)}
              >
                {kebabCaseToPascalCase(item)}
              </span>
            ))}
          </div>
          <div className="app__header-darkness">
            <span className="app__header-darkname">
              {dark ? 'Dark' : 'Light'}
            </span>
            <Switch checked={dark} onChange={setDark} />
          </div>
        </div>
        <div className="app__body">
          <div className="app__sidebar">
            {components.map(name => (
              <NavLink to={name} key={name}>
                <div className="app__sidebar-item">
                  {kebabCaseToPascalCase(name)}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="app__content">
            <Routes>
              <Route path="/" element={<span>No component picked.</span>} />
              <Route path="/:name" element={<Demo />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));
