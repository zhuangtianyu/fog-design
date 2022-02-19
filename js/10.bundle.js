"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[10],{7349:(n,o,r)=>{r.d(o,{Z:()=>A});var t=r(7294),e=r(4184),a=r.n(e),c=r(9074),l=r(9940),g=r(3379),i=r.n(g),f=r(7795),u=r.n(f),s=r(569),b=r.n(s),d=r(3565),v=r.n(d),p=r(9216),m=r.n(p),y=r(4589),h=r.n(y),k=r(7082),x={};x.styleTagTransform=h(),x.setAttributes=v(),x.insert=b().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=m();i()(k.Z,x);k.Z&&k.Z.locals&&k.Z.locals;var E=["className","type","danger","loading","disabled","children","onClick"];function w(){return w=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},w.apply(this,arguments)}function O(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function S(n){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(n)}function Z(n,o){if(null==n)return{};var r,t,e=function(n,o){if(null==n)return{};var r,t,e={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(e[r]=n[r]);return e}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}var j=c.O;const A=(0,t.forwardRef)((function(n,o){var r,e=n.className,c=n.type,g=n.danger,i=n.loading,f=n.disabled,u=n.children,s=n.onClick,b=Z(n,E),d=(0,t.useMemo)((function(){var n=[];return t.Children.forEach(u,(function(o,r){["string","number"].includes(S(o))?n.push(t.createElement("span",{key:r},o)):o.type===l.Z&&i||n.push(o)})),n}),[u,i]);return t.createElement("button",w({className:a()("".concat(j,"-button"),e,(r={},O(r,"".concat(j,"-button--").concat(c),c),O(r,"".concat(j,"-button--danger"),g),O(r,"".concat(j,"-button--loading"),i),r)),ref:o,disabled:f,onClick:f||i?function(){}:s},b),i&&t.createElement(l.Z,{className:"".concat(j,"-button__loading"),type:"loading"}),d)}))},5526:(n,o,r)=>{r.r(o),r.d(o,{default:()=>E});var t=r(7294),e=r(7349),a=r(2205),c=r(3379),l=r.n(c),g=r(7795),i=r.n(g),f=r(569),u=r.n(f),s=r(3565),b=r.n(s),d=r(9216),v=r.n(d),p=r(4589),m=r.n(p),y=r(9997),h={};h.styleTagTransform=m(),h.setAttributes=b(),h.insert=u().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=v();l()(y.Z,h);y.Z&&y.Z.locals&&y.Z.locals;function k(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,e,a=[],c=!0,l=!1;try{for(r=r.call(n);!(c=(t=r.next()).done)&&(a.push(t.value),!o||a.length!==o);c=!0);}catch(n){l=!0,e=n}finally{try{c||null==r.return||r.return()}finally{if(l)throw e}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return x(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=n[r];return t}const E=function(){var n=k((0,t.useState)(!0),2),o=n[0],r=n[1];return t.createElement("div",{className:"transition-demo"},t.createElement("h2",null,"Transition"),t.createElement("h3",null,"Basic Usage"),t.createElement(e.Z,{style:{margin:"0 20px 12px 0"},onClick:function(){return r(!o)}},"Toggle"),t.createElement(a.Z,{visible:o,timeout:300,beforeEnter:"beforeEnter",entering:"entering",entered:"entered",leaving:"leaving"},t.createElement("div",{className:"box"})))}},7082:(n,o,r)=>{r.d(o,{Z:()=>l});var t=r(8081),e=r.n(t),a=r(3645),c=r.n(a)()(e());c.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const l=c},9997:(n,o,r)=>{r.d(o,{Z:()=>l});var t=r(8081),e=r.n(t),a=r(3645),c=r.n(a)()(e());c.push([n.id,".transition-demo .box {\n  width: 100px;\n  height: 100px;\n  background-color: var(--fog-primary-color);\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n}\n.transition-demo .beforeEnter {\n  transform: scale(0);\n}\n.transition-demo .entering {\n  transform: scale(1);\n}\n.transition-demo .entered {\n  transform: scale(1);\n}\n.transition-demo .leaving {\n  transform: scale(0);\n}\n",""]);const l=c}}]);