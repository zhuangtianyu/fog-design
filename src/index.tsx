import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Link, NavLink, Navigate, useParams } from 'react-router-dom';
import Switch from '@components/switch';
import Select from '@components/select';
import Icon from '@components/icon';
import Drawer from '@components/drawer';
import Menu from '@components/menu';
import Loading from '@components/loading';
import useTheme from '@hooks/useTheme';
import { themes, themeNames, themeColors } from '@constants/themes';
import { kebabCaseToPascalCase, isMobile } from '@utils/index';
import '@styles/index.less';
import './index.less';

const { Option } = Select;

const previousDark = !!localStorage.getItem('dark');
const previousThemeName = localStorage.getItem('themeName');

export const DarkContext = React.createContext(false);

const components: string[] = [
  'button',
  'checkbox',
  'date-picker',
  'drawer',
  'icon',
  'input',
  'loading',
  'menu',
  'message',
  'modal',
  'radio',
  'select',
  'steps',
  'switch',
  'table',
  'tabs',
  'tag',
  'transition',
  'trigger',
];

const componentDemoMap = components.reduce((accumulator, componentName) =>({
  ...accumulator,
  [componentName]: lazy(() => import(`@components/${componentName}/demo`)),
}), {});

const AppMenu = ({ className }) => {
  const { name } = useParams();

  return (
    <Menu
      className={className}
      value={name}
      style={{ width: 240 }}
    >
      {components.map(componentName => (
        <Menu.Item key={componentName} value={componentName}>
          <NavLink to={`/${componentName}`}>
            {kebabCaseToPascalCase(componentName)}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

const GithubLink = () => (
  <a
    href="https://github.com/zhuangtianyu/fog-design"
    target="_blank"
  >
    <div className="app__header-github">
      <Icon type="github-circle-fill" size={22} />
    </div>
  </a>
);

const Fallback = () => (
  <div className="app__fallback">
    <Loading />
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<Fallback />}>
    <Routes>
      {components.map(componentName => {
        const ComponentDemo = componentDemoMap[componentName];

        return (
          <Route
            key={componentName}
            path={componentName}
            element={<ComponentDemo />}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/button" />} />
    </Routes>
  </Suspense>
);

const ThemesSelect = props => (
  <Select {...props}>
    {themeNames.map(item => {
        const label = kebabCaseToPascalCase(item);
        const backgroundColor = themeColors[item];

        return (
          <Option
            className="app__themes-option"
            key={item}
            label={label}
            value={item}
          >
            <span className="app__themes-label">{label}</span>
            <span className="app__themes-block" style={{ backgroundColor }} />
          </Option>
        );
    })}
  </Select>
);

const App = () => {
  const [dark, setDark] = useState(previousDark || false);
  const [themeName, setThemeName] = useState(previousThemeName || themeNames[0]);
  const [mobile, setMobile] = useState<boolean>(isMobile());
  const [visible, setVisible] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useTheme(themes[themeName], dark);

  useEffect(() => {
    localStorage.setItem('dark', dark ? '1' : '');
  }, [dark]);

  useEffect(() => {
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  useEffect(() => {
    const resizeHandler = () => setMobile(isMobile());

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <HashRouter>
      <DarkContext.Provider value={dark}>
        <div className="app">
          <div className="app__header" ref={headerRef}>
            <Link className="app__header-title" to="">
              Fog Design
            </Link>
            {
              !mobile
                ? <>
                    <div className="app__header-themes">
                      <span>Theme:</span>
                      <ThemesSelect
                        className="app__header-themes-select"
                        value={themeName}
                        onChange={setThemeName}
                        getPopupMountNode={() => headerRef.current}
                      />
                    </div>
                    <div className="app__header-darkness">
                      <span className="app__header-darkname">Darkness:</span>
                      <Switch checked={dark} onChange={setDark} />
                    </div>
                    <GithubLink />
                  </>
                : <>
                    <div className="app__drawer-trigger">
                      <Icon
                        type="more"
                        size={18}
                        onClick={() => setVisible(true)}
                      />
                    </div>
                    <Drawer
                      visible={visible}
                      onClose={() => setVisible(false)}
                    >
                      <div
                        className="app__drawer-content"
                        ref={drawerRef}
                      >
                        <h3>Themes</h3>
                        <ThemesSelect
                          value={themeName}
                          onChange={setThemeName}
                          getPopupMountNode={() => drawerRef.current}
                        />
                        <h3>Darkness</h3>
                        <Switch checked={dark} onChange={setDark} />
                        <h3>Github</h3>
                        <GithubLink />
                        <h3>Components</h3>
                        <Routes>
                          <Route
                            path="/:name"
                            element={<AppMenu className="app__drawer-menu" />}
                          />
                        </Routes>
                      </div>
                    </Drawer>
                  </>
            }
          </div>
          <div className="app__body">
            {!mobile && (
              <Routes>
                <Route
                  path="/:name"
                  element={<AppMenu className="app__sidebar" />}
                />
              </Routes>
            )}
            <div className="app__content">
              <AppRoutes />
            </div>
          </div>
        </div>
      </DarkContext.Provider>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.querySelector('.root'));
