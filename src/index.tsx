import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import classnames from 'classnames';
import namespace from '@namespace';
import Switch from '@components/switch';
import Select from '@components/select';
import Icon from '@components/icon';
import Drawer from '@components/drawer';
import useTheme from '@hooks/useTheme';
import { themes, themeNames } from '@constants/themes';
import { kebabCaseToPascalCase, isMobile } from '@utils/index';
import '@styles/index.less';
import './index.less';

const { prefix } = namespace;

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

const components: string[] = [
  'button',
  'switch',
  'trigger',
  'tag',
  'tabs',
  'icon',
  'input',
  'select',
  'modal',
  'drawer',
  'message',
  'transition',
  'date-picker',
];

const { Option } = Select;

const Menu = ({ className }) => {

  return (
    <div className={classnames(`${prefix}-menu`, className)}>
      {components.map(name => (
        <NavLink to={name} key={name}>
          <div className={`${prefix}-menu__item`}>
            {kebabCaseToPascalCase(name)}
          </div>
        </NavLink>
      ))}
    </div>
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

const App = () => {
  const [dark, setDark] = useState(previousDark || false);
  const [themeName, setThemeName] = useState(previousThemeName || themeNames[0]);
  const [mobile, setMobile] = useState<boolean>(isMobile());
  const [visible, setVisible] = useState<boolean>(false);
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
      <div className="app">
        <div className="app__header">
          <Link className="app__header-title" to="">
            Fog Design
          </Link>
          {
            !mobile
              ? <>
                  <div className="app__header-themes">
                    <span>Theme:</span>
                    <Select
                      className="app__header-themes-select"
                      value={themeName}
                      onChange={setThemeName}
                    >
                      {themeNames.map(item => (
                        <Option key={item} value={item}>
                          {kebabCaseToPascalCase(item)}
                        </Option>
                      ))}
                    </Select>
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
                      <Select
                        value={themeName}
                        onChange={setThemeName}
                        getPopupMountNode={() => drawerRef.current}
                      >
                        {themeNames.map(item => (
                          <Option key={item} value={item}>
                            {kebabCaseToPascalCase(item)}
                          </Option>
                        ))}
                      </Select>
                      <h3>Darkness</h3>
                      <Switch checked={dark} onChange={setDark} />
                      <h3>Github</h3>
                      <GithubLink />
                      <h3>Components</h3>
                      <Menu className="app-drawer__menu" />
                    </div>
                  </Drawer>
                </>
          }
        </div>
        <div className="app__body">
          {!mobile && <Menu className="app__sidebar" />}
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
