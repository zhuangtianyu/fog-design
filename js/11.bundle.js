"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[11],{7061:(n,e,r)=>{r.r(e),r.d(e,{default:()=>D});var t=r(7294),o=r(7368),a=r(9960),l=r(2041),c=r(7349);const i=function(){return t.createElement(t.Fragment,null,t.createElement(c.Z,{type:"primary"},"Primary"),t.createElement(c.Z,null,"Default"),t.createElement(c.Z,{type:"dashed"},"Dashed"),t.createElement(c.Z,{type:"link"},"Link"),t.createElement(c.Z,{type:"text"},"Text"))};var u=r(9940);const d=function(){return t.createElement(t.Fragment,null,t.createElement(c.Z,{type:"primary"},t.createElement(u.Z,{type:"calendar"}),"Date"),t.createElement(c.Z,null,t.createElement(u.Z,{type:"email"}),"Send"),t.createElement(c.Z,{type:"dashed"},"Trigger",t.createElement(u.Z,{type:"down"})),t.createElement(c.Z,{type:"link"},t.createElement(u.Z,{type:"link"}),"Link"),t.createElement(c.Z,{type:"text"},t.createElement(u.Z,{type:"edit"}),"Edit"))};function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,o,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);l=!0);}catch(n){c=!0,o=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return f(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}const g=function(){var n=s((0,t.useState)(!1),2),e=n[0],r=n[1];return t.createElement(t.Fragment,null,t.createElement(c.Z,{type:"primary",loading:!0},"Loading"),t.createElement(c.Z,{loading:e,onClick:function(){r(!0),setTimeout((function(){return r(!1)}),1e3)}},t.createElement(u.Z,{type:"email"}),"Click me"))};const m=function(){return t.createElement(t.Fragment,null,t.createElement(c.Z,{type:"primary",disabled:!0},"Primary"),t.createElement(c.Z,{disabled:!0},"Default"),t.createElement(c.Z,{type:"dashed",disabled:!0},"Dashed"),t.createElement(c.Z,{type:"link",disabled:!0},"Link"),t.createElement(c.Z,{type:"text",disabled:!0},"Text"))};const p=function(){return t.createElement(t.Fragment,null,t.createElement(c.Z,{type:"primary",danger:!0},"Primary"),t.createElement(c.Z,{danger:!0},"Default"),t.createElement(c.Z,{type:"dashed",danger:!0},"Dashed"),t.createElement(c.Z,{type:"link",danger:!0},"Link"),t.createElement(c.Z,{type:"text",danger:!0},"Text"))};var b=r(3379),v=r.n(b),y=r(7795),h=r.n(y),E=r(569),Z=r.n(E),k=r(3565),x=r.n(k),_=r(9216),w=r.n(_),S=r(4589),A=r.n(S),O=r(9688),C={};C.styleTagTransform=A(),C.setAttributes=x(),C.insert=Z().bind(null,"head"),C.domAPI=h(),C.insertStyleElement=w();v()(O.Z,C);O.Z&&O.Z.locals&&O.Z.locals;var T=o.w,j=o.c,N=T.button,I=N.demos,P=N.apiRows;const D=function(){return t.createElement("div",{className:"button-demo"},t.createElement("h1",null,"Button"),t.createElement("p",null,"Button is used to trigger events, such as click events, etc."),t.createElement("h2",null,"Demo"),t.createElement(l.Z,{title:"Type",description:"The following types are provided in different scenes.",content:t.createElement(i,null),code:I["demo-1"]}),t.createElement(l.Z,{title:"Icon",description:"Add icon for better operation awareness.",content:t.createElement(d,null),code:I["demo-2"]}),t.createElement(l.Z,{title:"Loading",description:"Loading state, and disable click event at the same time.",content:t.createElement(g,null),code:I["demo-3"]}),t.createElement(l.Z,{title:"Disabled",description:"Disable all interactive events, including keyboard events.",content:t.createElement(m,null),code:I["demo-4"]}),t.createElement(l.Z,{title:"Danger",description:"Add danger property to improve operation caution.",content:t.createElement(p,null),code:I["demo-5"]}),t.createElement("h2",null,"API"),t.createElement(a.Z,{columns:j,data:P.default}))}},7349:(n,e,r)=>{r.d(e,{Z:()=>O});var t=r(7294),o=r(4184),a=r.n(o),l=r(9074),c=r(9940),i=r(3379),u=r.n(i),d=r(7795),s=r.n(d),f=r(569),g=r.n(f),m=r(3565),p=r.n(m),b=r(9216),v=r.n(b),y=r(4589),h=r.n(y),E=r(7082),Z={};Z.styleTagTransform=h(),Z.setAttributes=p(),Z.insert=g().bind(null,"head"),Z.domAPI=s(),Z.insertStyleElement=v();u()(E.Z,Z);E.Z&&E.Z.locals&&E.Z.locals;var k=["className","type","danger","loading","disabled","children","onClick"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},x.apply(this,arguments)}function _(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}function S(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var A=l.O;const O=(0,t.forwardRef)((function(n,e){var r,o=n.className,l=n.type,i=n.danger,u=n.loading,d=n.disabled,s=n.children,f=n.onClick,g=S(n,k),m=(0,t.useMemo)((function(){var n=[];return t.Children.forEach(s,(function(e,r){["string","number"].includes(w(e))?n.push(t.createElement("span",{key:r},e)):e.type===c.Z&&u||n.push(e)})),n}),[s,u]);return t.createElement("button",x({className:a()("".concat(A,"-button"),o,(r={},_(r,"".concat(A,"-button--").concat(l),l),_(r,"".concat(A,"-button--danger"),i),_(r,"".concat(A,"-button--loading"),u),r)),ref:e,disabled:d,onClick:d||u?function(){}:f},g),u&&t.createElement(c.Z,{className:"".concat(A,"-button__loading"),type:"loading"}),m)}))},2041:(n,e,r)=>{r.d(e,{Z:()=>C});var t=r(7294),o=r(9074),a=r(2282),l=r(5046),c=r(4346),i=r(6032),u=r(2022),d=r(9940),s=r(7618),f=r(3379),g=r.n(f),m=r(7795),p=r.n(m),b=r(569),v=r.n(b),y=r(3565),h=r.n(y),E=r(9216),Z=r.n(E),k=r(4589),x=r.n(k),_=r(1738),w={};w.styleTagTransform=x(),w.setAttributes=h(),w.insert=v().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=Z();g()(_.Z,w);_.Z&&_.Z.locals&&_.Z.locals;function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,o,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);l=!0);}catch(n){c=!0,o=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return A(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var O=o.O;a.Z.registerLanguage("tsx",l.Z);const C=function(n){var e=n.title,r=n.description,o=n.content,l=n.code,f=(0,t.useContext)(u.f),g=S((0,t.useState)(!1),2),m=g[0],p=g[1],b=S((0,t.useState)((function(){return ResizeObserver?0:"auto"})),2),v=b[0],y=b[1],h=(0,t.useRef)(null);(0,t.useLayoutEffect)((function(){if(m&&ResizeObserver&&h.current){var n=new ResizeObserver((function(){var n=h.current.getBoundingClientRect().height;y(n)}));return n.observe(h.current),function(){return n.disconnect()}}}),[m]),(0,t.useEffect)((function(){return s.Z.destroyAll}),[]);return t.createElement("div",{className:"".concat(O,"-demo")},t.createElement("h3",{className:"".concat(O,"-demo__title")},t.createElement("span",null,e),t.createElement("div",{className:"".concat(O,"-demo__options")},t.createElement(d.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return s.Z.success({content:"Code copied"})})).catch((function(){return s.Z.error({content:"Please copy manually"})}))}}),t.createElement(d.Z,{type:"code",onClick:function(){return p(!m)}}))),r&&t.createElement("p",{className:"".concat(O,"-demo__description")},r),t.createElement("div",{className:"".concat(O,"-demo__content")},o),t.createElement("div",{className:"".concat(O,"-demo__code-wrapper"),style:{height:m?v:0}},t.createElement("div",{ref:h},t.createElement(a.Z,{className:"".concat(O,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:f?i.Z:c.Z},l))))}},9688:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),l=r.n(a)()(o());l.push([n.id,".button-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const c=l},7082:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),l=r.n(a)()(o());l.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},1738:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(8081),o=r.n(t),a=r(3645),l=r.n(a)()(o());l.push([n.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const c=l}}]);