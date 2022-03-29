"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[4],{7349:(n,o,r)=>{r.d(o,{Z:()=>A});var t=r(7294),e=r(4184),a=r.n(e),l=r(9074),c=r(9940),i=r(3379),f=r.n(i),u=r(7795),s=r.n(u),d=r(569),g=r.n(d),m=r(3565),b=r.n(m),p=r(9216),v=r.n(p),y=r(4589),h=r.n(y),k=r(7082),x={};x.styleTagTransform=h(),x.setAttributes=b(),x.insert=g().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=v();f()(k.Z,x);k.Z&&k.Z.locals&&k.Z.locals;var _=["className","type","danger","loading","disabled","children","onClick"];function E(){return E=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},E.apply(this,arguments)}function C(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}function O(n,o){if(null==n)return{};var r,t,e=function(n,o){if(null==n)return{};var r,t,e={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(e[r]=n[r]);return e}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}var j=l.O;const A=(0,t.forwardRef)((function(n,o){var r,e=n.className,l=n.type,i=n.danger,f=n.loading,u=n.disabled,s=n.children,d=n.onClick,g=O(n,_),m=(0,t.useMemo)((function(){var n=[];return t.Children.forEach(s,(function(o,r){["string","number"].includes(w(o))?n.push(t.createElement("span",{key:r},o)):o.type===c.Z&&f||n.push(o)})),n}),[s,f]);return t.createElement("button",E({className:a()("".concat(j,"-button"),e,(r={},C(r,"".concat(j,"-button--").concat(l),l),C(r,"".concat(j,"-button--danger"),i),C(r,"".concat(j,"-button--loading"),f),r)),ref:o,disabled:u,onClick:u||f?function(){}:d},g),f&&t.createElement(c.Z,{className:"".concat(j,"-button__loading"),type:"loading"}),m)}))},601:(n,o,r)=>{r.r(o),r.d(o,{default:()=>F});var t=r(7294),e=r(7349),a=r(3935),l=r(9074),c=r(4184),i=r.n(c),f=r(2205),u=r(9940),s=r(3477),d=r(3379),g=r.n(d),m=r(7795),b=r.n(m),p=r(569),v=r.n(p),y=r(3565),h=r.n(y),k=r(9216),x=r.n(k),_=r(4589),E=r.n(_),C=r(1055),w={};w.styleTagTransform=E(),w.setAttributes=h(),w.insert=v().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=x();g()(C.Z,w);C.Z&&C.Z.locals&&C.Z.locals;var O=["visible","content","onCancel","onConfirm","afterClose"];function j(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.push.apply(r,t)}return r}function A(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?j(Object(r),!0).forEach((function(o){Z(n,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))}))}return n}function Z(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function S(n,o){if(null==n)return{};var r,t,e=function(n,o){if(null==n)return{};var r,t,e={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||(e[r]=n[r]);return e}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(e[r]=n[r])}return e}function P(){return P=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},P.apply(this,arguments)}function N(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,e,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(a.push(t.value),!o||a.length!==o);l=!0);}catch(n){c=!0,e=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw e}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return T(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=n[r];return t}var L=l.O,I=function(n,o,r){if((0,s.mf)(n)){var t=n();(0,s.mf)(null==t?void 0:t.then)?((0,s.mf)(o)&&o(),t.finally((function(){(0,s.mf)(r)&&r()}))):(0,s.mf)(r)&&r()}},B=function(n){var o=n.className,r=n.visible,a=n.width,l=n.title,c=n.content,s=n.children,d=n.showClose,g=n.showCancel,m=n.cancelText,b=n.confirmText,p=n.cancelLoading,v=n.confirmLoading,y=n.cancelButtonProps,h=n.confirmButtonProps,k=n.escClosable,x=n.maskClosable,_=n.unmountNodeAfterLeave,E=n.onCancel,C=n.onConfirm,w=n.afterClose,O=(0,t.useRef)(null),j=N((0,t.useState)(!1),2),A=j[0],Z=j[1],S=N((0,t.useState)(!1),2),T=S[0],B=S[1],M=function(){return I(E,(function(){return Z(!0)}),(function(){return Z(!1)}))};return(0,t.useEffect)((function(){if(r&&k){var n=function(n){"Escape"===n.key&&O.current.contains(document.activeElement)&&M()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}}),[r,k]),(0,t.useEffect)((function(){setTimeout((function(){var n;r&&(null===(n=O.current)||void 0===n||n.focus())}))}),[r,O.current]),t.createElement(f.Z,{visible:r,timeout:300,beforeEnter:"".concat(L,"-modal--before-enter"),entering:"".concat(L,"-modal--entering"),entered:"".concat(L,"-modal--entered"),leaving:"".concat(L,"-modal--leaving"),unmountNodeAfterLeave:_,onLeft:w},t.createElement("div",{className:i()("".concat(L,"-modal"),o),ref:O,tabIndex:-1},t.createElement("div",{className:"".concat(L,"-modal__mask"),onClick:function(){return x&&M()}}),t.createElement("div",{className:"".concat(L,"-modal__content"),style:{width:a}},t.createElement("div",{className:"".concat(L,"-modal__header")},t.createElement("div",{className:"".concat(L,"-modal__title")},l),d&&t.createElement("div",{className:"".concat(L,"-modal__close"),onClick:M},t.createElement(u.Z,{type:"close",size:18}))),t.createElement("div",{className:"".concat(L,"-modal__body")},s||c),t.createElement("div",{className:"".concat(L,"-modal__footer")},g&&t.createElement(e.Z,P({loading:A||p||(null==y?void 0:y.loading),onClick:M},y),m),t.createElement(e.Z,P({type:"primary",loading:T||v||(null==h?void 0:h.loading),onClick:function(){return I(C,(function(){return B(!0)}),(function(){return B(!1)}))}},h),b)))))};B.defaultProps={width:420,visible:!1,showClose:!0,showCancel:!0,cancelText:"Cancel",confirmText:"Confirm",cancelButtonProps:{},confirmButtonProps:{},escClosable:!0,maskClosable:!0,unmountNodeAfterLeave:!0};var M=[];B.confirm=function(n){var o=document.createElement("div"),r=n;document.body.appendChild(o);var e=function(n){var e=n.visible,i=void 0===e||e,f=n.content,u=n.onCancel,d=n.onConfirm,g=n.afterClose,m=S(n,O);r=n,a.render(t.createElement(B,P({visible:i,onCancel:function(){I((0,s.mf)(u)?u:function(){},(function(){return c({cancelLoading:!0})}),(function(){c({cancelLoading:!1}),l()}))},onConfirm:function(){I((0,s.mf)(d)?d:function(){},(function(){return c({confirmLoading:!0})}),(function(){c({confirmLoading:!1}),l()}))},afterClose:function(){(0,s.mf)(g)&&g(),a.unmountComponentAtNode(o),document.body.removeChild(o)}},m),f),o)},l=function(){e(A(A({},r),{},{visible:!1})),M=M.filter((function(n){return n!==i}))},c=function(n){return e(A(A({},r),n))};e(n);var i={update:c,destroy:l};return M.push(i),i},B.destroyAll=function(){for(;M.length;){M.pop().destroy()}};const z=B;var D=r(2156),U={};U.styleTagTransform=E(),U.setAttributes=h(),U.insert=v().bind(null,"head"),U.domAPI=b(),U.insertStyleElement=x();g()(D.Z,U);D.Z&&D.Z.locals&&D.Z.locals;function H(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,e,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(t=r.next()).done)&&(a.push(t.value),!o||a.length!==o);l=!0);}catch(n){c=!0,e=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw e}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return R(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,t=new Array(o);r<o;r++)t[r]=n[r];return t}var $=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(o){var r=setTimeout((function(){o(null),clearTimeout(r)}),n)}))};const F=function(){var n=H((0,t.useState)(!1),2),o=n[0],r=n[1],a=H((0,t.useState)(!1),2),l=a[0],c=a[1];return t.createElement("div",{className:"modal-demo"},t.createElement("h2",null,"Modal"),t.createElement("h3",null,"Basic Usage"),t.createElement(e.Z,{onClick:function(){return r(!0)}},"Open modal"),t.createElement(z,{title:"Title",visible:o,onCancel:function(){return r(!1)},onConfirm:function(){return r(!1)}},"Basic usage."),t.createElement("h3",null,"By Method"),t.createElement(e.Z,{onClick:function(){z.confirm({title:"Hi",content:"Beach, waves, and night."})}},"Modal.confirm"),t.createElement(e.Z,{onClick:function(){var n=z.confirm({title:"Hi",content:t.createElement(t.Fragment,null,t.createElement("span",{style:{marginRight:12}},"Beach, waves, and night."),t.createElement(e.Z,{onClick:function(){n.update({content:t.createElement("span",{style:{lineHeight:"32px"}},"Catch the moment.")})}},"Update"))})}},"Update reference"),t.createElement(e.Z,{onClick:function(){for(var n=0;n<3;n++)setTimeout((function(){z.confirm({title:"Hi",content:t.createElement(e.Z,{onClick:z.destroyAll},"Destroy all")})}),300*n)}},"Modal.destroyAll"),t.createElement("h3",null,"Async Logic"),t.createElement(z,{title:"Async modal",visible:l,onCancel:function(){return c(!1)},onConfirm:function(){return $().then((function(){return c(!1)}))}},"Async logic in basic usage."),t.createElement(e.Z,{onClick:function(){return c(!0)}},"Open modal"),t.createElement(e.Z,{onClick:function(){z.confirm({title:"Async method",content:"Async logic by method.",onConfirm:$})}},"Modal.confirm"))}},7082:(n,o,r)=>{r.d(o,{Z:()=>c});var t=r(8081),e=r.n(t),a=r(3645),l=r.n(a)()(e());l.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const c=l},2156:(n,o,r)=>{r.d(o,{Z:()=>c});var t=r(8081),e=r.n(t),a=r(3645),l=r.n(a)()(e());l.push([n.id,".modal-demo > .fog-button {\n  margin: 0 12px 12px 0;\n}\n",""]);const c=l},1055:(n,o,r)=>{r.d(o,{Z:()=>c});var t=r(8081),e=r.n(t),a=r(3645),l=r.n(a)()(e());l.push([n.id,".fog-modal {\n  position: fixed;\n  font-size: 14px;\n  z-index: 10;\n}\n.fog-modal,\n.fog-modal *,\n.fog-modal *:before,\n.fog-modal *:after {\n  box-sizing: border-box;\n}\n.fog-modal--before-enter .fog-modal__mask {\n  position: static;\n  background-color: var(--fog-transparent);\n}\n.fog-modal--entering .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--entered .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--leaving .fog-modal__mask {\n  background-color: var(--fog-transparent);\n}\n.fog-modal--before-enter .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal--entering .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--entered .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--leaving .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal__mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  transition: all 0.3s;\n}\n.fog-modal__content {\n  position: fixed;\n  top: 160px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 90%;\n  text-align: left;\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  transition: all 0.3s;\n  overflow: hidden;\n}\n.fog-modal__header {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-modal__title {\n  flex-grow: 1;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.fog-modal__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fog-modal__body {\n  padding: 12px 16px;\n  min-height: 120px;\n}\n.fog-modal__footer {\n  padding: 8px 16px;\n  text-align: right;\n  border-top: 1px solid var(--fog-border-color);\n}\n.fog-modal__footer .fog-button {\n  margin-right: 8px;\n}\n.fog-modal__footer .fog-button:last-child {\n  margin-right: 0;\n}\n",""]);const c=l}}]);