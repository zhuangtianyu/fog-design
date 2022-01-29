"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[2],{7349:(n,o,r)=>{r.d(o,{Z:()=>C});var e=r(7294),t=r(4184),a=r.n(t),l=r(9074),c=r(3379),i=r.n(c),f=r(7795),d=r.n(f),g=r(569),s=r.n(g),u=r(3565),b=r.n(u),m=r(9216),v=r.n(m),p=r(4589),y=r.n(p),h=r(7082),k={};k.styleTagTransform=y(),k.setAttributes=b(),k.insert=s().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=v();i()(h.Z,k);h.Z&&h.Z.locals&&h.Z.locals;var x=["className","type","danger","disabled","children"];function _(){return _=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},_.apply(this,arguments)}function O(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function w(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var E=l.O;const C=(0,e.forwardRef)((function(n,o){var r,t=n.className,l=n.type,c=n.danger,i=n.disabled,f=n.children,d=w(n,x);return e.createElement("button",_({className:a()("".concat(E,"-button"),t,(r={},O(r,"".concat(E,"-button--").concat(l),l),O(r,"".concat(E,"-button--danger"),c),r)),ref:o,disabled:i},d),f)}))},601:(n,o,r)=>{r.r(o),r.d(o,{default:()=>M});var e=r(7294),t=r(7349),a=r(3935),l=r(9074),c=r(4184),i=r.n(c),f=r(2205),d=r(3477),g=r(3379),s=r.n(g),u=r(7795),b=r.n(u),m=r(569),v=r.n(m),p=r(3565),y=r.n(p),h=r(9216),k=r.n(h),x=r(4589),_=r.n(x),O=r(1055),w={};w.styleTagTransform=_(),w.setAttributes=y(),w.insert=v().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=k();s()(O.Z,w);O.Z&&O.Z.locals&&O.Z.locals;var E=["visible","content","onCancel","onConfirm","afterClose"];function C(n,o){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.push.apply(r,e)}return r}function j(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?C(Object(r),!0).forEach((function(o){Z(n,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))}))}return n}function Z(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function P(){return P=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},P.apply(this,arguments)}function A(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var N=l.O,S=function(n){var o=n.className,r=n.visible,a=n.width,l=n.title,c=n.content,g=n.children,s=n.showClose,u=n.showCancel,b=n.cancelText,m=n.confirmText,v=n.escClosable,p=n.maskClosable,y=n.unmountNodeAfterLeave,h=n.onCancel,k=n.onConfirm,x=n.afterClose,_=(0,e.useRef)(null),O=function(){return(0,d.mf)(h)&&h()};return(0,e.useEffect)((function(){if(r&&v){var n=function(n){"Escape"===n.key&&_.current.contains(document.activeElement)&&O()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}}),[r,v]),(0,e.useEffect)((function(){setTimeout((function(){var n;r&&(null===(n=_.current)||void 0===n||n.focus())}))}),[r,_.current]),e.createElement(f.Z,{visible:r,timeout:300,beforeEnter:"".concat(N,"-modal--before-enter"),entering:"".concat(N,"-modal--entering"),entered:"".concat(N,"-modal--entered"),leaving:"".concat(N,"-modal--leaving"),unmountNodeAfterLeave:y,onLeft:x},e.createElement("div",{className:i()("".concat(N,"-modal"),o),ref:_,tabIndex:-1},e.createElement("div",{className:"".concat(N,"-modal__mask"),onClick:function(){return p&&O()}}),e.createElement("div",{className:"".concat(N,"-modal__content"),style:{width:a}},e.createElement("div",{className:"".concat(N,"-modal__header")},e.createElement("div",{className:"".concat(N,"-modal__title")},l),s&&e.createElement("div",{className:"".concat(N,"-modal__close"),onClick:O})),e.createElement("div",{className:"".concat(N,"-modal__body")},g||c),e.createElement("div",{className:"".concat(N,"-modal__footer")},u&&e.createElement(t.Z,{onClick:O},b),e.createElement(t.Z,{type:"primary",onClick:function(){return(0,d.mf)(k)&&k()}},m)))))};S.defaultProps={width:420,visible:!1,showClose:!0,showCancel:!0,cancelText:"Cancel",confirmText:"Confirm",escClosable:!0,maskClosable:!0,unmountNodeAfterLeave:!0};var T=[];S.confirm=function(n){var o=document.createElement("div"),r=n;document.body.appendChild(o);var t=function(n){var t=n.visible,c=void 0===t||t,i=n.content,f=n.onCancel,g=n.onConfirm,s=n.afterClose,u=A(n,E);r=n,a.render(e.createElement(S,P({visible:c,onCancel:function(){(0,d.mf)(f)&&f(),l()},onConfirm:function(){(0,d.mf)(g)&&g(),l()},afterClose:function(){(0,d.mf)(s)&&s(),a.unmountComponentAtNode(o),document.body.removeChild(o)}},u),i),o)},l=function(){t(j(j({},r),{},{visible:!1})),T=T.filter((function(n){return n!==c}))};t(n);var c={update:function(n){return t(j(j({},r),n))},destroy:l};return T.push(c),c},S.destroyAll=function(){for(;T.length;){T.pop().destroy()}};const I=S;var L=r(2156),z={};z.styleTagTransform=_(),z.setAttributes=y(),z.insert=v().bind(null,"head"),z.domAPI=b(),z.insertStyleElement=k();s()(L.Z,z);L.Z&&L.Z.locals&&L.Z.locals;function B(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var e,t,a=[],l=!0,c=!1;try{for(r=r.call(n);!(l=(e=r.next()).done)&&(a.push(e.value),!o||a.length!==o);l=!0);}catch(n){c=!0,t=n}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return D(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,e=new Array(o);r<o;r++)e[r]=n[r];return e}const M=function(){var n=B((0,e.useState)(!1),2),o=n[0],r=n[1];return e.createElement("div",{className:"modal-demo"},e.createElement("h2",null,"Modal"),e.createElement("h3",null,"Basic Usage"),e.createElement(t.Z,{onClick:function(){return r(!0)}},"Open modal"),e.createElement(I,{title:"Title",visible:o,onCancel:function(){return r(!1)},onConfirm:function(){return r(!1)}},"Basic usage."),e.createElement("h3",null,"By Methods"),e.createElement(t.Z,{onClick:function(){I.confirm({title:"Hi",content:"Beach, waves, and night."})}},"Modal.confirm"),e.createElement(t.Z,{onClick:function(){var n=I.confirm({title:"Hi",content:e.createElement(e.Fragment,null,e.createElement("span",{style:{marginRight:12}},"Beach, waves, and night."),e.createElement(t.Z,{onClick:function(){n.update({content:e.createElement("span",{style:{lineHeight:"32px"}},"Catch the moment.")})}},"Update"))})}},"Update reference"),e.createElement(t.Z,{onClick:function(){for(var n=0;n<3;n++)setTimeout((function(){I.confirm({title:"Hi",content:e.createElement(t.Z,{onClick:I.destroyAll},"Destroy all")})}),300*n)}},"Modal.destroyAll"))}},7082:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n",""]);const c=l},2156:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".modal-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const c=l},1055:(n,o,r)=>{r.d(o,{Z:()=>c});var e=r(8081),t=r.n(e),a=r(3645),l=r.n(a)()(t());l.push([n.id,".fog-modal {\n  position: fixed;\n  font-size: 14px;\n}\n.fog-modal,\n.fog-modal *,\n.fog-modal *:before,\n.fog-modal *:after {\n  box-sizing: border-box;\n}\n.fog-modal--before-enter .fog-modal__mask {\n  position: static;\n  background-color: var(--fog-transparent);\n}\n.fog-modal--entering .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--entered .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--leaving .fog-modal__mask {\n  background-color: var(--fog-transparent);\n}\n.fog-modal--before-enter .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal--entering .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--entered .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--leaving .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal__mask {\n  position: fixed;\n  inset: 0;\n  text-align: center;\n  transition: all 0.3s;\n}\n.fog-modal__content {\n  position: fixed;\n  top: 160px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 90%;\n  text-align: left;\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  transition: all 0.3s;\n  overflow: hidden;\n}\n.fog-modal__header {\n  display: flex;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-modal__title {\n  flex-grow: 1;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.fog-modal__close {\n  position: relative;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fog-modal__body {\n  padding: 12px 16px;\n  min-height: 120px;\n}\n.fog-modal__footer {\n  padding: 8px 16px;\n  text-align: right;\n  border-top: 1px solid var(--fog-border-color);\n}\n.fog-modal__footer .fog-button {\n  margin-right: 8px;\n}\n.fog-modal__footer .fog-button:last-child {\n  margin-right: 0;\n}\n",""]);const c=l}}]);