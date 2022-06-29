"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[20],{9086:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var o=t(7294),r=t(7368),a=t(9960),l=t(7385),c=t(2041),i=t(5894);const s=function(){return o.createElement(o.Fragment,null,o.createElement(i.Z,{content:"Tooltip content."},"Hover me"),o.createElement(i.Z,{content:"Tooltip content."},o.createElement("span",{style:{marginLeft:12,marginRight:12}},"Hover me")),o.createElement(i.Z,{content:"Tooltip content."},o.createElement(o.Fragment,null,"Hover me")))};var u=r.w,p=r.c,d=u.tooltip,f=d.demos,m=d.apiRows;const g=function(){return o.createElement("div",{className:"tooltip-demo"},o.createElement(l.Z,null,"Tooltip"),o.createElement("p",null,"Tooltip is used to display content in popup."),o.createElement("h2",null,"Demo"),o.createElement(c.Z,{title:"Basic Usage",content:o.createElement(s,null),code:f["demo-1"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:p,data:m.default}))}},5894:(e,n,t)=>{t.d(n,{Z:()=>C});var o=t(7294),r=t(4184),a=t.n(r),l=t(9074),c=t(4137),i=t(3379),s=t.n(i),u=t(7795),p=t.n(u),d=t(569),f=t.n(d),m=t(3565),g=t.n(m),b=t(9216),y=t.n(b),v=t(4589),h=t.n(v),_=t(5048),E={};E.styleTagTransform=h(),E.setAttributes=g(),E.insert=f().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=y();s()(_.Z,E);_.Z&&_.Z.locals&&_.Z.locals;var x=["popupClassName","children","content"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Z.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var O=l.O,A=function(e){var n=e.popupClassName,t=e.children,r=e.content,l=w(e,x),i=(0,o.useMemo)((function(){var e=Array.isArray(t),n=!e&&t.type===o.Fragment;return e||n||"string"==typeof t||"number"==typeof t?o.createElement("span",{className:"".concat(O,"-tooltip__trigger")},t):t}),[t]);return o.createElement(c.Z,Z({popupClassName:a()("".concat(O,"-tooltip"),n),popup:o.createElement(o.Fragment,null,r)},l),i)};A.defaultProps={trigger:"hover",placement:"top",showArrow:!0};const C=A},2041:(e,n,t)=>{t.d(n,{Z:()=>k});var o=t(7294),r=t(9074),a=t(2282),l=t(5046),c=t(4346),i=t(6032),s=t(8849),u=t(9940),p=t(7618),d=t(3379),f=t.n(d),m=t(7795),g=t.n(m),b=t(569),y=t.n(b),v=t(3565),h=t.n(v),_=t(9216),E=t.n(_),x=t(4589),Z=t.n(x),w=t(1738),O={};O.styleTagTransform=Z(),O.setAttributes=h(),O.insert=y().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=E();f()(w.Z,O);w.Z&&w.Z.locals&&w.Z.locals;function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var N=r.O;a.Z.registerLanguage("tsx",l.Z);const k=function(e){var n=e.title,t=e.description,r=e.content,l=e.code,d=(0,o.useContext)(s.f),f=A((0,o.useState)(!1),2),m=f[0],g=f[1],b=A((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),y=b[0],v=b[1],h=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(m&&ResizeObserver&&h.current){var e=new ResizeObserver((function(){var e=h.current.getBoundingClientRect().height;v(e)}));return e.observe(h.current),function(){return e.disconnect()}}}),[m]),(0,o.useEffect)((function(){return p.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(N,"-demo")},o.createElement("h3",{className:"".concat(N,"-demo__title")},o.createElement("span",null,n),o.createElement("div",{className:"".concat(N,"-demo__options")},o.createElement(u.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return p.Z.success({content:"Code copied"})})).catch((function(){return p.Z.error({content:"Please copy manually"})}))}}),o.createElement(u.Z,{type:"code",onClick:function(){return g(!m)}}))),t&&o.createElement("p",{className:"".concat(N,"-demo__description")},t),o.createElement("div",{className:"".concat(N,"-demo__content")},r),o.createElement("div",{className:"".concat(N,"-demo__code-wrapper"),style:{height:m?y:0}},o.createElement("div",{ref:h},o.createElement(a.Z,{className:"".concat(N,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:d?i.Z:c.Z},l))))}},5048:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,".fog-tooltip,\n.fog-tooltip *,\n.fog-tooltip *:before,\n.fog-tooltip *:after {\n  box-sizing: border-box;\n}\n.fog-tooltip .fog-trigger__popup-content {\n  padding: 8px;\n  color: var(--fog-contrast-color);\n  font-size: 14px;\n  line-height: 22px;\n  background-color: var(--fog-background-color-profound);\n}\n.fog-tooltip .fog-trigger__popup-arrow {\n  background-color: var(--fog-background-color-profound);\n}\n",""]);const c=l},1738:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const c=l}}]);