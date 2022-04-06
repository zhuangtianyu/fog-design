"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[19],{7349:(r,n,o)=>{o.d(n,{Z:()=>A});var t=o(7294),e=o(4184),a=o.n(e),l=o(9074),c=o(9940),u=o(3379),i=o.n(u),f=o(7795),g=o.n(f),s=o(569),d=o.n(s),b=o(3565),v=o.n(b),p=o(9216),m=o.n(p),y=o(4589),h=o.n(y),k=o(7082),w={};w.styleTagTransform=h(),w.setAttributes=v(),w.insert=d().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=m();i()(k.Z,w);k.Z&&k.Z.locals&&k.Z.locals;var E=["className","type","danger","loading","disabled","children","onClick"];function S(){return S=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t])}return r},S.apply(this,arguments)}function Z(r,n,o){return n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r}function O(r){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},O(r)}function x(r,n){if(null==r)return{};var o,t,e=function(r,n){if(null==r)return{};var o,t,e={},a=Object.keys(r);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(e[o]=r[o]);return e}(r,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(r,o)&&(e[o]=r[o])}return e}var C=l.O;const A=(0,t.forwardRef)((function(r,n){var o,e=r.className,l=r.type,u=r.danger,i=r.loading,f=r.disabled,g=r.children,s=r.onClick,d=x(r,E),b=(0,t.useMemo)((function(){var r=[];return t.Children.forEach(g,(function(n,o){["string","number"].includes(O(n))?r.push(t.createElement("span",{key:o},n)):n.type===c.Z&&i||r.push(n)})),r}),[g,i]);return t.createElement("button",S({className:a()("".concat(C,"-button"),e,(o={},Z(o,"".concat(C,"-button--").concat(l),l),Z(o,"".concat(C,"-button--danger"),u),Z(o,"".concat(C,"-button--loading"),i),o)),ref:n,disabled:f,onClick:f||i?function(){}:s},d),i&&t.createElement(c.Z,{className:"".concat(C,"-button__loading"),type:"loading"}),b)}))},4746:(r,n,o)=>{o.r(n),o.d(n,{default:()=>M});var t=o(7294),e=o(7368),a=o(9960),l=o(2041),c=o(9939),u=o(7349);function i(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var o=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==o)return;var t,e,a=[],l=!0,c=!1;try{for(o=o.call(r);!(l=(t=o.next()).done)&&(a.push(t.value),!n||a.length!==n);l=!0);}catch(r){c=!0,e=r}finally{try{l||null==o.return||o.return()}finally{if(c)throw e}}return a}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return f(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);"Object"===o&&r.constructor&&(o=r.constructor.name);if("Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=r[o];return t}const g=function(){var r=i((0,t.useState)(!1),2),n=r[0],o=r[1];return t.createElement(t.Fragment,null,t.createElement(u.Z,{onClick:function(){return o(!0)}},"Open"),t.createElement(c.Z,{title:"Basic Usage",visible:n,onClose:function(){return o(!1)}},"Drawer Content"))};var s=o(2541),d=o(3477),b=o(3379),v=o.n(b),p=o(7795),m=o.n(p),y=o(569),h=o.n(y),k=o(3565),w=o.n(k),E=o(9216),S=o.n(E),Z=o(4589),O=o.n(Z),x=o(8165),C={};C.styleTagTransform=O(),C.setAttributes=w(),C.insert=h().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=S();v()(x.Z,C);x.Z&&x.Z.locals&&x.Z.locals;function A(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){var o=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==o)return;var t,e,a=[],l=!0,c=!1;try{for(o=o.call(r);!(l=(t=o.next()).done)&&(a.push(t.value),!n||a.length!==n);l=!0);}catch(r){c=!0,e=r}finally{try{l||null==o.return||o.return()}finally{if(c)throw e}}return a}(r,n)||function(r,n){if(!r)return;if("string"==typeof r)return j(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);"Object"===o&&r.constructor&&(o=r.constructor.name);if("Map"===o||"Set"===o)return Array.from(r);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(r,n)}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(r,n){(null==n||n>r.length)&&(n=r.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=r[o];return t}var I=["top","right","bottom","left"],P=function(){var r=A((0,t.useState)(0),2),n=r[0],o=r[1];return t.createElement("div",{className:"drawer-content"},t.createElement("p",null,"Clicked ",n," times, state preserved."),t.createElement(u.Z,{onClick:function(){return o(n+1)}},"Click me"))};const N=function(){var r=A((0,t.useState)(!1),2),n=r[0],o=r[1],e=A((0,t.useState)(I[1]),2),a=e[0],l=e[1];return t.createElement(t.Fragment,null,t.createElement(s.Z.Group,{style:{marginRight:12},value:a,onChange:function(r){return l(r.target.value)}},I.map((function(r){return t.createElement(s.Z,{value:r,key:r},(0,d.gC)(r))}))),t.createElement(u.Z,{onClick:function(){return o(!0)}},"Open"),t.createElement(c.Z,{title:"Basic Usage",visible:n,placement:a,onClose:function(){return o(!1)}},t.createElement(P,null)))};var T=e.w,_=e.c,U=T.drawer,D=U.demos,B=U.apiRows;const M=function(){return t.createElement("div",{className:"drawer-demo"},t.createElement("h1",null,"Drawer"),t.createElement("p",null,"Drawer is used as a popup layer from side of window."),t.createElement("h2",null,"Demo"),t.createElement(l.Z,{title:"Basic Usage",description:"Open drawer on the right side of window.",content:t.createElement(g,null),code:D["demo-1"]}),t.createElement(l.Z,{title:"Placement",description:"Open drawer with custom popup placement.",content:t.createElement(N,null),code:D["demo-2"]}),t.createElement("h2",null,"API"),t.createElement(a.Z,{columns:_,data:B.default}))}},7082:(r,n,o)=>{o.d(n,{Z:()=>c});var t=o(8081),e=o.n(t),a=o(3645),l=o.n(a)()(e());l.push([r.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},8165:(r,n,o)=>{o.d(n,{Z:()=>c});var t=o(8081),e=o.n(t),a=o(3645),l=o.n(a)()(e());l.push([r.id,".drawer-demo {\n  position: static;\n}\n",""]);const c=l}}]);