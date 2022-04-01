"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[19],{7618:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(7294),a=t(3935),r=t(4184),i=t.n(r),l=t(9074),c=t(2205),s=t(9940),u=t(3477),d=t(3379),p=t.n(d),m=t(7795),f=t.n(m),b=t(569),g=t.n(b),y=t(3565),h=t.n(y),v=t(9216),x=t.n(v),k=t(4589),w=t.n(k),D=t(9968),C={};C.styleTagTransform=w(),C.setAttributes=h(),C.insert=g().bind(null,"head"),C.domAPI=f(),C.insertStyleElement=x();p()(D.Z,C);D.Z&&D.Z.locals&&D.Z.locals;var V=["visible","duration"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function B(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var I=l.O,P=function(){return o.createElement(s.Z,{type:"info-circle-fill",color:"var(--fog-primary-color)"})},_=function(){return o.createElement(s.Z,{type:"close-circle-fill",color:"var(--fog-danger-color)"})},E=function(){return o.createElement(s.Z,{type:"sigh-circle-fill",color:"var(--fog-warning-color)"})},N=function(){return o.createElement(s.Z,{type:"success-circle-fill",color:"var(--fog-success-color)"})},L=function(e){var n=e.className,t=e.icon,a=e.content;return o.createElement("div",{className:i()("".concat(I,"-message"),n)},t&&o.createElement("div",{className:"".concat(I,"-message__icon")},t),o.createElement("div",{className:"".concat(I,"-message__content")},a))};L.defaultProps={icon:o.createElement(P,null)};var j=[],M=document.createElement("div");M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.right="0px",M.style.zIndex="10",M.style.pointerEvents="none",document.body.appendChild(M),L.info=function(e){var n,t=document.createElement("div");t.style.textAlign="center",M.appendChild(t);var r=function(e){var r=e.visible,l=void 0===r||r,s=e.duration,d=void 0===s?3e3:s,p=B(e,V);l?0!==d&&(n=(0,u.cX)(i,d)):(0,u.lo)(n),a.render(o.createElement(c.Z,{visible:l,beforeEnter:"".concat(I,"-message--before-enter"),entering:"".concat(I,"-message--entering"),entered:"".concat(I,"-message--entered"),leaving:"".concat(I,"-message--leaving"),onLeft:function(){a.unmountComponentAtNode(t),M.contains(t)&&M.removeChild(t)}},o.createElement(L,p)),t)},i=function(){r(R(R({},e),{},{visible:!1})),j=j.filter((function(e){return e!==l}))};r(e);var l={destroy:i};return j.push(l),l},L.error=function(e){return L.info(R({icon:o.createElement(_,null)},e))},L.warning=function(e){return L.info(R({icon:o.createElement(E,null)},e))},L.success=function(e){return L.info(R({icon:o.createElement(N,null)},e))},L.destroyAll=function(){for(;j.length;){j.pop().destroy()}};const A=L},9960:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(7294),a=t(4184),r=t.n(a),i=t(9074);const l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,o.useMemo)((function(){return Array.isArray(e)?e:n}),[e,n])};var c=t(3477),s=t(3379),u=t.n(s),d=t(7795),p=t.n(d),m=t(569),f=t.n(m),b=t(3565),g=t.n(b),y=t(9216),h=t.n(y),v=t(4589),x=t.n(v),k=t(6417),w={};w.styleTagTransform=x(),w.setAttributes=g(),w.insert=f().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=h();u()(k.Z,w);k.Z&&k.Z.locals&&k.Z.locals;function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,a,r=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(o=t.next()).done)&&(r.push(o.value),!n||r.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var S=i.O,B=function(e){var n,t=e.className,a=e.rowKey,i=e.contentWidth,s=e.data,u=e.columns,d=(0,o.useRef)(null),p=O((0,o.useState)({}),2),m=p[0],f=p[1],b=O((0,o.useState)(!1),2),g=b[0],y=b[1],h=O((0,o.useState)(!1),2),v=h[0],x=h[1],k=(0,o.useMemo)((function(){return Array.isArray(u)?u.map((function(e){return C(C({},e),{},{fixed:(n=e.fixed,["left","right"].includes(n)?e.fixed:void 0)});var n})):[]}),[u]),w=l(s),D=(0,o.useMemo)((function(){return k.reduce((function(e,n){return C(C({},e),{},V({},n.key,o.createRef()))}),{})}),[k]),R=(0,o.useMemo)((function(){return k.filter((function(e){return"left"===e.fixed})).map((function(e){return e.key}))}),[k]),B=(0,o.useMemo)((function(){return k.filter((function(e){return"right"===e.fixed})).map((function(e){return e.key}))}),[k]),I=function(e){return R.length&&R[R.length-1]===e},P=function(e){return B.length&&B[0]===e},_=function(){if(d.current){var e=d.current,n=e.scrollLeft,t=e.scrollWidth,o=e.clientWidth;y(0===n),x(n+o===t)}},E=function(){var e={},n=0,t=0;R.forEach((function(t){D[t].current&&(e[t]={left:n},n+=D[t].current.offsetWidth)})),B.reverse().forEach((function(n){D[n].current&&(e[n]={right:t},t+=D[n].current.offsetWidth)})),f(e),_()};return(0,o.useLayoutEffect)((function(){if(ResizeObserver){var e=[];return Object.keys(D).forEach((function(n){var t=new ResizeObserver(E);t.observe(D[n].current),e.push(t)})),function(){return e.forEach((function(e){return e.disconnect()}))}}}),[D]),(0,o.useLayoutEffect)((function(){if(d.current)return d.current.addEventListener("scroll",_),function(){return d.current.removeEventListener("scroll",_)}}),[]),o.createElement("div",{className:r()(t,(n={},V(n,"".concat(S,"-table"),!0),V(n,"".concat(S,"-table--scroll-left-end"),g),V(n,"".concat(S,"-table--scroll-right-end"),v),n))},o.createElement("div",{className:"".concat(S,"-table__content"),ref:d},o.createElement("table",{width:i},o.createElement("thead",{className:"".concat(S,"-table__thead")},o.createElement("tr",{className:"".concat(S,"-table__tr")},k.map((function(e){var n,t=e.key,a=e.fixed;return o.createElement("th",{className:r()((n={},V(n,"".concat(S,"-table__cell"),!0),V(n,"".concat(S,"-table__cell--fixed"),a),V(n,"".concat(S,"-table__cell--fixed-last"),I(t)),V(n,"".concat(S,"-table__cell--fixed-first"),P(t)),n)),key:t,ref:D[t],style:m[t]||{}},e.name)})))),o.createElement("tbody",{className:"".concat(S,"-table__tbody")},w.map((function(e,n){return o.createElement("tr",{className:"".concat(S,"-table__tr"),key:a||n},k.map((function(t){var a,i=t.key,l=t.width,s=t.fixed,u=t.render;return o.createElement("td",{className:r()((a={},V(a,"".concat(S,"-table__cell"),!0),V(a,"".concat(S,"-table__cell--fixed"),s),V(a,"".concat(S,"-table__cell--fixed-last"),I(i)),V(a,"".concat(S,"-table__cell--fixed-first"),P(i)),a)),key:i,width:l,style:m[i]||{}},(0,c.mf)(u)?u(e[i],e,n):e[i])})))}))))))};B.defaultProps={};const I=B},9968:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(8081),a=t.n(o),r=t(3645),i=t.n(r)()(a());i.push([e.id,".fog-message {\n  display: inline-block;\n  padding: 10px 16px;\n  font-size: 0;\n  line-height: 22px;\n  box-shadow: 0 0 8px var(--fog-shadow-color);\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  margin-top: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n  pointer-events: all;\n}\n.fog-message,\n.fog-message *,\n.fog-message *:before,\n.fog-message *:after {\n  box-sizing: border-box;\n}\n.fog-message--before-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message--entering {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--entered {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--leaving {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message__icon {\n  margin-right: 8px;\n}\n.fog-message__icon,\n.fog-message__content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.fog-message .fog-icon {\n  display: block;\n  font-size: 16px;\n}\n",""]);const l=i},6417:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(8081),a=t.n(o),r=t(3645),i=t.n(r)()(a());i.push([e.id,".fog-table {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  overflow: hidden;\n}\n.fog-table,\n.fog-table *,\n.fog-table *:before,\n.fog-table *:after {\n  box-sizing: border-box;\n}\n.fog-table__content {\n  overflow: auto hidden;\n}\n.fog-table table {\n  min-width: 100%;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n.fog-table__cell {\n  position: relative;\n  padding: 10px 16px;\n  color: var(--fog-color);\n  font-size: 14px;\n  text-align: left;\n  line-height: 22px;\n  border-right: 1px solid var(--fog-border-color);\n  border-bottom: 1px solid var(--fog-border-color);\n  background-color: var(--fog-background-color);\n}\n.fog-table__cell--fixed {\n  position: sticky;\n  z-index: 2;\n}\n.fog-table__cell--fixed-last::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(100%);\n  box-shadow: inset 10px 0 8px -8px var(--fog-border-color);\n  transition: box-shadow 0.3s;\n  pointer-events: none;\n}\n.fog-table--scroll-left-end .fog-table__cell--fixed-last::after {\n  box-shadow: none;\n}\n.fog-table__cell--fixed-first::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(-100%);\n  box-shadow: inset -10px 0 8px -8px var(--fog-border-color);\n  border-right: 1px solid var(--fog-border-color);\n  transition: box-shadow 0.3s;\n  pointer-events: none;\n}\n.fog-table--scroll-right-end .fog-table__cell--fixed-first::after {\n  box-shadow: none;\n  border-right-color: var(--fog-transparent);\n}\n.fog-table__cell:last-child {\n  border-right: none;\n}\n.fog-table__tbody .fog-table__tr:last-child .fog-table__cell {\n  border-bottom: none;\n}\n",""]);const l=i},7368:e=>{e.exports=JSON.parse('{"w":{"button":{"demos":{"demo-1":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\">\\n        Primary\\n      </Button>\\n      <Button>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\">\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\">\\n        Link\\n      </Button>\\n      <Button type=\\"text\\">\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-2":"import React from \'react\';\\nimport Button from \'@components/button\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\">\\n        <Icon type=\\"calendar\\" />\\n        Date\\n      </Button>\\n      <Button>\\n        <Icon type=\\"email\\" />\\n        Send\\n      </Button>\\n      <Button type=\\"dashed\\">\\n        Trigger\\n        <Icon type=\\"down\\" />\\n      </Button>\\n      <Button type=\\"link\\">\\n        <Icon type=\\"link\\" />\\n        Link\\n      </Button>\\n      <Button type=\\"text\\">\\n        <Icon type=\\"edit\\" />\\n        Edit\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-3":"import React, { useState } from \'react\';\\nimport Button from \'@components/button\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n  const [loading, setLoading] = useState<boolean>(false);\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" loading>\\n        Loading\\n      </Button>\\n      <Button\\n        loading={loading}\\n        onClick={() => {\\n          setLoading(true);\\n\\n          setTimeout(() => setLoading(false), 1000);\\n        }}\\n      >\\n        <Icon type=\\"email\\" />\\n        Click me\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" disabled>\\n        Primary\\n      </Button>\\n      <Button disabled>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\" disabled>\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\" disabled>\\n        Link\\n      </Button>\\n      <Button type=\\"text\\" disabled>\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-5":"import React from \'react\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Button type=\\"primary\\" danger>\\n        Primary\\n      </Button>\\n      <Button danger>\\n        Default\\n      </Button>\\n      <Button type=\\"dashed\\" danger>\\n        Dashed\\n      </Button>\\n      <Button type=\\"link\\" danger>\\n        Link\\n      </Button>\\n      <Button type=\\"text\\" danger>\\n        Text\\n      </Button>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"type","type":"primary | dashed | link | text","defaultValue":"-","description":"-"},{"name":"danger","type":"boolean","defaultValue":"-","description":"-"},{"name":"loading","type":"boolean","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"}]}},"checkbox":{"demos":{"demo-1":"import React from \'react\';\\nimport Checkbox from \'@components/checkbox\';\\n\\nconst Demo = () => <Checkbox defaultChecked>Cola</Checkbox>;\\n\\nexport default Demo;\\n","demo-2":"import React, { useState } from \'react\';\\nimport Checkbox from \'@components/checkbox\';\\nimport Switch from \'@components/switch\';\\nimport \'./index.less\';\\n\\nconst Demo = () => {\\n  const [disabled, setDisabled] = useState<boolean>(false);\\n\\n  return (\\n    <>\\n      <Checkbox defaultChecked disabled={disabled}>Cola</Checkbox>\\n      <Checkbox disabled={disabled}>Fanta</Checkbox>\\n      <Switch checked={disabled} onChange={setDisabled} />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-3":"import React, { useState } from \'react\';\\nimport Checkbox from \'@components/checkbox\';\\nimport Switch from \'@components/switch\';\\nimport \'./index.less\';\\n\\nconst { Group } = Checkbox;\\n\\nconst Demo = () => {\\n  const [disabled, setDisabled] = useState<boolean>(false);\\n\\n  return (\\n    <>\\n      <Group defaultValue={[\'Cola\']} disabled={disabled}>\\n        <Checkbox value=\\"Cola\\" key=\\"Cola\\">Cola</Checkbox>\\n        <Checkbox value=\\"Pepsi\\" key=\\"Pepsi\\" disabled>Pepsi</Checkbox>\\n        <Checkbox value=\\"Fanta\\" key=\\"Fanta\\">Fanta</Checkbox>\\n        <Checkbox value=\\"Sprite\\" key=\\"Sprite\\">Sprite</Checkbox>\\n      </Group>\\n      <Switch checked={disabled} onChange={setDisabled} />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React, { useState } from \'react\';\\nimport Checkbox from \'@components/checkbox\';\\nimport \'./index.less\';\\n\\nconst { Group } = Checkbox;\\n\\nconst checkboxes = [\'Cola\', \'Pepsi\', \'Fanta\', \'Sprite\'];\\n\\nconst Demo = () => {\\n  const [value, setValue] = useState(checkboxes.filter(item => item !== \'Pepsi\'));\\n\\n  return (\\n    <>\\n      <Checkbox\\n        style={{ display: \'block\', marginBottom: 12 }}\\n        indeterminate={value.length && value.length < checkboxes.length}\\n        checked={value.length === checkboxes.length}\\n        onChange={event => setValue(event.target.checked ? checkboxes : [])}\\n      >\\n        Check all\\n      </Checkbox>\\n      <Group value={value} onChange={setValue}>\\n        {checkboxes.map(item => (\\n          <Checkbox value={item} key={item}>{item}</Checkbox>\\n        ))}\\n      </Group>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"value","type":"string","defaultValue":"-","description":"-"},{"name":"checked","type":"boolean","defaultValue":"-","description":"-"},{"name":"defaultChecked","type":"boolean","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"},{"name":"indeterminate","type":"boolean","defaultValue":"-","description":"-"},{"name":"onChange","type":"ChangeEventHandler<HTMLInputElement>","defaultValue":"-","description":"-"}],"group":[{"name":"className","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"string[]","defaultValue":"-","description":"-"},{"name":"defaultValue","type":"string[]","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"},{"name":"onChange","type":"(value: string[]) => void","defaultValue":"-","description":"-"}]}},"date-picker":{"demos":{"demo-1":"import React from \'react\';\\nimport DatePicker from \'@components/date-picker\';\\n\\nconst Demo = () => <DatePicker placeholder=\\"Please select\\" />;\\n\\nexport default Demo;\\n","demo-2":"import React from \'react\';\\nimport DatePicker from \'@components/date-picker\';\\n\\nconst Demo = () => <DatePicker placeholder=\\"Please select\\" disabled />;\\n\\nexport default Demo;\\n","demo-3":"import React from \'react\';\\nimport DatePicker from \'@components/date-picker\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <DatePicker\\n      placeholder=\\"Please select\\"\\n      disabledDate={value => (\\n        new Date(value).getDate() >= 20 ||\\n        new Date(value).getDate() === 12\\n      )}\\n    />\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React from \'react\';\\nimport DatePicker from \'@components/date-picker\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <p>mode=\\"month\\"</p>\\n      <DatePicker placeholder=\\"Please select\\" mode=\\"month\\" />\\n      <p>mode=\\"year\\"</p>\\n      <DatePicker placeholder=\\"Please select\\" mode=\\"year\\" />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"className","type":"string","defaultValue":"-","description":"-"},{"name":"placeholder","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"number","defaultValue":"-","description":"-"},{"name":"defaultValue","type":"number","defaultValue":"-","description":"-"},{"name":"onChange","type":"(value: number) => void","defaultValue":"-","description":"-"},{"name":"open","type":"boolean","defaultValue":"-","description":"-"},{"name":"defaultOpen","type":"boolean","defaultValue":"-","description":"-"},{"name":"onOpenChange","type":"(open: boolean) => void","defaultValue":"-","description":"-"},{"name":"format","type":"string","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"},{"name":"disabledDate","type":"(value: number) => boolean","defaultValue":"-","description":"-"},{"name":"mode","type":"date | month | year","defaultValue":"date","description":"-"},{"name":"renderFooter","type":"() => ReactElement<any, string | JSXElementConstructor<any>>","defaultValue":"-","description":"-"}],"date-panel":[],"month-panel":[],"panel-cell":[],"year-panel":[]}},"drawer":{"demos":{"demo-1":"import React, { useState } from \'react\';\\nimport Drawer from \'@components/drawer\';\\nimport Button from \'@components/button\';\\n\\nconst Demo = () => {\\n  const [visible, setVisible] = useState<boolean>(false);\\n\\n  return (\\n    <>\\n      <Button onClick={() => setVisible(true)}>\\n        Open\\n      </Button>\\n      <Drawer\\n        title=\\"Basic Usage\\"\\n        visible={visible}\\n        onClose={() => setVisible(false)}\\n      >\\n        Drawer Content\\n      </Drawer>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-2":"import React, { useState } from \'react\';\\nimport Drawer from \'@components/drawer\';\\nimport Button from \'@components/button\';\\nimport Radio from \'@components/radio\';\\nimport { kebabCaseToPascalCase } from \'@utils/index\';\\nimport \'./index.less\';\\n\\nconst placements = [\'top\', \'right\', \'bottom\', \'left\'];\\n\\nconst DrawerContent = () => {\\n  const [count, setCount] = useState<number>(0);\\n\\n  return (\\n    <div className=\\"drawer-content\\">\\n      <p>Clicked {count} times, state preserved.</p>\\n      <Button onClick={() => setCount(count + 1)}>\\n        Click me\\n      </Button>\\n    </div>\\n  );\\n};\\n\\nconst Demo = () => {\\n  const [visible, setVisible] = useState<boolean>(false);\\n  const [placement, setPlacement] = useState<string>(placements[1]);\\n\\n  return (\\n    <>\\n      <Radio.Group\\n        style={{ marginRight: 12 }}\\n        value={placement}\\n        onChange={event => setPlacement(event.target.value)}\\n      >\\n        {placements.map(item => (\\n          <Radio value={item} key={item}>\\n            {kebabCaseToPascalCase(item)}\\n          </Radio>\\n        ))}\\n      </Radio.Group>\\n      <Button onClick={() => setVisible(true)}>\\n        Open\\n      </Button>\\n      <Drawer\\n        title=\\"Basic Usage\\"\\n        visible={visible}\\n        placement={placement}\\n        onClose={() => setVisible(false)}\\n      >\\n        <DrawerContent />\\n      </Drawer>\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"visible","type":"boolean","defaultValue":"false","description":"-"},{"name":"width","type":"string | number","defaultValue":"300","description":"-"},{"name":"height","type":"string | number","defaultValue":"300","description":"-"},{"name":"title","type":"ReactChild","defaultValue":"-","description":"-"},{"name":"placement","type":"string","defaultValue":"right","description":"-"},{"name":"showClose","type":"boolean","defaultValue":"true","description":"-"},{"name":"escClosable","type":"boolean","defaultValue":"true","description":"-"},{"name":"maskClosable","type":"boolean","defaultValue":"true","description":"-"},{"name":"unmountNodeAfterLeave","type":"boolean","defaultValue":"false","description":"-"},{"name":"onClose","type":"() => void","defaultValue":"-","description":"-"},{"name":"afterClose","type":"() => void","defaultValue":"-","description":"-"}]}},"icon":{"demos":{},"apiRows":{"default":[{"name":"type","type":"up | down | left | right | double-up | double-down | double-left | double-right | close | check | search | edit | calendar | email | link | code | copy | more | loading | loading-3/4 | close-circle-fill | success-circle-fill | info-circle-fill | sigh-circle-fill | doubt-circle-fill | github-circle-fill","defaultValue":"-","description":"-"},{"name":"size","type":"string | number","defaultValue":"-","description":"-"},{"name":"color","type":"string","defaultValue":"-","description":"-"}]}},"input":{"demos":{"demo-1":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst Demo = () => <Input placeholder=\\"Please input\\" />;\\n\\nexport default Demo;\\n","demo-2":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <Input\\n      placeholder=\\"Please input\\"\\n      defaultValue=\\"Your emotion\\"\\n      clearable\\n    />\\n  );\\n};\\n\\nexport default Demo;\\n","demo-3":"import React from \'react\';\\nimport Input from \'@components/input\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Input\\n        placeholder=\\"Please input\\"\\n        prefix={<Icon type=\\"email\\" />}\\n      />\\n      <Input\\n        placeholder=\\"Please input\\"\\n        prefix=\\"https://\\"\\n      />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React from \'react\';\\nimport Input from \'@components/input\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <>\\n      <Input\\n        placeholder=\\"Please input\\"\\n        suffix={<Icon type=\\"edit\\" />}\\n      />\\n      <Input\\n        placeholder=\\"Please input\\"\\n        suffix=\\"@163.com\\"\\n      />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-5":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst Demo = () => <Input placeholder=\\"Please input\\" disabled />;\\n\\nexport default Demo;\\n","demo-6":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst Demo = () => <Input placeholder=\\"Please Input\\" readOnly />;\\n\\nexport default Demo;\\n","demo-7":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst Demo = () => {\\n\\n  return (\\n    <Input\\n      placeholder=\\"Please Input\\"\\n      type=\\"password\\"\\n      defaultValue=\\"12345678\\"\\n    />\\n  );\\n};\\n\\nexport default Demo;\\n","demo-8":"import React from \'react\';\\nimport Input from \'@components/input\';\\n\\nconst { TextArea } = Input;\\n\\nconst Demo = () => <TextArea placeholder=\\"Please Input\\" />;\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"value","type":"string","defaultValue":"-","description":"-"},{"name":"disabled","type":"boolean","defaultValue":"-","description":"-"},{"name":"readOnly","type":"boolean","defaultValue":"-","description":"-"},{"name":"prefix","type":"ReactNode","defaultValue":"-","description":"-"},{"name":"suffix","type":"ReactNode","defaultValue":"-","description":"-"},{"name":"clearable","type":"boolean","defaultValue":"-","description":"-"},{"name":"onChange","type":"(event: ChangeEvent<HTMLInputElement>) => void","defaultValue":"-","description":"-"}],"textarea":[],"wrapper":[]}},"loading":{"demos":{"demo-1":"import React from \'react\';\\nimport Loading from \'@components/loading\';\\n\\nconst Demo = () => <Loading />;\\n\\nexport default Demo;\\n","demo-2":"import React, { useState } from \'react\';\\nimport Loading from \'@components/loading\';\\nimport Switch from \'@components/switch\';\\n\\nconst Demo = () => {\\n  const [loading, setLoading] = useState<boolean>(true);\\n\\n  return (\\n    <>\\n      <Loading\\n        wrapperClassName=\\"loading-container\\"\\n        loading={loading}\\n      >\\n        <div className=\\"loading-content\\">\\n          <div className=\\"date\\">2022-03-01</div>\\n          <div>Dancing by the sea till night falls.</div>\\n        </div>\\n      </Loading>\\n      <Switch checked={loading} onChange={setLoading} />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-3":"import React, { useState } from \'react\';\\nimport Loading from \'@components/loading\';\\nimport Switch from \'@components/switch\';\\n\\nconst Demo = () => {\\n  const [loading, setLoading] = useState<boolean>(true);\\n\\n  return (\\n    <>\\n      <Loading\\n        wrapperClassName=\\"loading-container\\"\\n        loading={loading}\\n        tip=\\"Loading...\\"\\n      >\\n        <div className=\\"loading-content\\">\\n          <div className=\\"date\\">2022-03-01</div>\\n          <div>Dancing by the sea till night falls.</div>\\n        </div>\\n      </Loading>\\n      <Switch checked={loading} onChange={setLoading} />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n","demo-4":"import React, { useState } from \'react\';\\nimport Loading from \'@components/loading\';\\nimport Switch from \'@components/switch\';\\nimport Icon from \'@components/icon\';\\n\\nconst Demo = () => {\\n  const [loading, setLoading] = useState<boolean>(true);\\n\\n  return (\\n    <>\\n      <Loading\\n        wrapperClassName=\\"loading-container\\"\\n        loading={loading}\\n        icon={<Icon type=\\"loading-3/4\\" />}\\n      >\\n        <div className=\\"loading-content\\">\\n          <div className=\\"date\\">2022-03-01</div>\\n          <div>Dancing by the sea till night falls.</div>\\n        </div>\\n      </Loading>\\n      <Switch checked={loading} onChange={setLoading} />\\n    </>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"className","type":"string","defaultValue":"-","description":"-"},{"name":"wrapperClassName","type":"string","defaultValue":"-","description":"-"},{"name":"loading","type":"boolean","defaultValue":"true","description":"-"},{"name":"icon","type":"ReactElement<any, string | JSXElementConstructor<any>>","defaultValue":"<Icon type=\\"loading\\" />","description":"-"},{"name":"tip","type":"ReactChild","defaultValue":"-","description":"-"},{"name":"tipBackground","type":"boolean","defaultValue":"true","description":"-"}]}},"menu":{"demos":{"demo-1":"import React from \'react\';\\nimport Menu from \'@components/menu\';\\n\\nconst { SubMenu, ItemGroup, Item } = Menu;\\n\\nconst Demo = () => {\\n\\n  return (\\n    <Menu\\n      defaultOpens={[\'Navigation 1\', \'Navigation 2\', \'SubMenu\']}\\n      defaultValue=\\"Option 1\\"\\n    >\\n      <SubMenu label=\\"Navigation 1\\" key=\\"Navigation 1\\">\\n        <ItemGroup label=\\"Group-1\\" key=\\"Group-1\\">\\n          <Item label=\\"Option 1\\" key=\\"Option 1\\" />\\n          <Item label=\\"Option 2\\" key=\\"Option 2\\" />\\n        </ItemGroup>\\n        <ItemGroup label=\\"Group-2\\" key=\\"Group-2\\">\\n          <Item label=\\"Option 3\\" key=\\"Option 3\\" />\\n          <Item label=\\"Option 4\\" key=\\"Option 4\\" />\\n        </ItemGroup>\\n      </SubMenu>\\n      <SubMenu label=\\"Navigation 2\\" key=\\"Navigation 2\\">\\n        <Item label=\\"Option 5\\" key=\\"Option 5\\" />\\n        <Item label=\\"Option 6\\" key=\\"Option 6\\" />\\n        <SubMenu label=\\"SubMenu\\" key=\\"SubMenu\\">\\n          <Item label=\\"Option 7\\" key=\\"Option 7\\" />\\n          <Item label=\\"Option 8\\" key=\\"Option 8\\" />\\n        </SubMenu>\\n      </SubMenu>\\n      <Item label=\\"Option 9\\" key=\\"Option 9\\" />\\n      <Item label=\\"Option 10\\" key=\\"Option 10\\" />\\n    </Menu>\\n  );\\n};\\n\\nexport default Demo;\\n"},"apiRows":{"default":[{"name":"value","type":"any","defaultValue":"-","description":"-"},{"name":"defaultValue","type":"any","defaultValue":"-","description":"-"},{"name":"onChange","type":"(value: any) => void","defaultValue":"-","description":"-"},{"name":"opens","type":"any[]","defaultValue":"-","description":"-"},{"name":"defaultOpens","type":"any[]","defaultValue":"-","description":"-"},{"name":"onOpenChange","type":"(opens: any[]) => void","defaultValue":"-","description":"-"}],"menu-item":[{"name":"label","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"any","defaultValue":"-","description":"-"}],"menu-item-group":[{"name":"label","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"any","defaultValue":"-","description":"-"}],"submenu":[{"name":"label","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"any","defaultValue":"-","description":"-"}]}},"message":{"demos":{},"apiRows":{"default":[]}},"modal":{"demos":{},"apiRows":{"default":[]}},"radio":{"demos":{},"apiRows":{"default":[],"button":[],"group":[]}},"select":{"demos":{},"apiRows":{"default":[],"option":[],"selection":[]}},"steps":{"demos":{},"apiRows":{"default":[]}},"switch":{"demos":{},"apiRows":{"default":[]}},"table":{"demos":{},"apiRows":{"default":[]}},"tabs":{"demos":{},"apiRows":{"default":[{"name":"label","type":"string","defaultValue":"-","description":"-"},{"name":"value","type":"any","defaultValue":"-","description":"-"},{"name":"content","type":"React.ReactChild","defaultValue":"-","description":"-"}]}},"tag":{"demos":{},"apiRows":{"default":[]}},"transition":{"demos":{},"apiRows":{"default":[]}},"trigger":{"demos":{},"apiRows":{"default":[]}}},"c":[{"key":"name","name":"Property"},{"key":"type","name":"Type"},{"key":"defaultValue","name":"Default"},{"key":"description","name":"Description"}]}')}}]);