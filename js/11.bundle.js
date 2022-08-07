"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[11],{2218:(n,e,t)=>{t.r(e),t.d(e,{default:()=>on});var r=t(7294),o=t(7368),a=t(9960),l=t(7385),i=t(2041),c=t(8692),u=t(3935),f=t(9074),m=t(4184),s=t.n(m),d=t(2205),g=t(9940),p=t(3477),y=t(3379),v=t.n(y),b=t(7795),h=t.n(b),E=t(569),_=t.n(E),C=t(3565),w=t.n(C),x=t(9216),O=t.n(x),k=t(4589),A=t.n(k),j=t(1055),Z={};Z.styleTagTransform=A(),Z.setAttributes=w(),Z.insert=_().bind(null,"head"),Z.domAPI=h(),Z.insertStyleElement=O();v()(j.Z,Z);j.Z&&j.Z.locals&&j.Z.locals;var S=["visible","content","onCancel","onConfirm","afterClose"];function P(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function T(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?P(Object(t),!0).forEach((function(e){I(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function I(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function L(){return L=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},L.apply(this,arguments)}function B(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return M(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var D=f.O,U=function(n,e,t){if((0,p.mf)(n)){var r=n();(0,p.mf)(null==r?void 0:r.then)?((0,p.mf)(e)&&e(),r.finally((function(){(0,p.mf)(t)&&t()}))):(0,p.mf)(t)&&t()}},z=function(n){var e=n.className,t=n.visible,o=n.width,a=n.title,l=n.content,i=n.children,u=n.showClose,f=n.showCancel,m=n.cancelText,p=n.confirmText,y=n.cancelLoading,v=n.confirmLoading,b=n.cancelButtonProps,h=n.confirmButtonProps,E=n.escClosable,_=n.maskClosable,C=n.unmountNodeAfterLeave,w=n.onCancel,x=n.onConfirm,O=n.afterClose,k=(0,r.useRef)(null),A=(0,r.useRef)(null),j=B((0,r.useState)(!1),2),Z=j[0],S=j[1],P=B((0,r.useState)(!1),2),T=P[0],I=P[1],N=function(){return U(w,(function(){return S(!0)}),(function(){return S(!1)}))};return(0,r.useEffect)((function(){if(t&&E){var n=function(n){"Escape"===n.key&&k.current.contains(document.activeElement)&&N()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}}),[t,E]),(0,r.useEffect)((function(){var n;t?(A.current=document.activeElement||null,setTimeout((function(){var n;null===(n=k.current)||void 0===n||n.focus()}))):A.current&&(null===(n=A.current)||void 0===n||n.focus())}),[t]),r.createElement(d.Z,{visible:t,timeout:300,beforeEnter:"".concat(D,"-modal--before-enter"),entering:"".concat(D,"-modal--entering"),entered:"".concat(D,"-modal--entered"),leaving:"".concat(D,"-modal--leaving"),unmountNodeAfterLeave:C,afterLeave:O},r.createElement("div",{className:s()("".concat(D,"-modal"),e),ref:k,tabIndex:-1},r.createElement("div",{className:"".concat(D,"-modal__mask"),onClick:function(){return _&&N()}}),r.createElement("div",{className:"".concat(D,"-modal__content"),style:{width:o}},r.createElement("div",{className:"".concat(D,"-modal__header")},r.createElement("div",{className:"".concat(D,"-modal__title")},a),u&&r.createElement("div",{className:"".concat(D,"-modal__close"),onClick:N},r.createElement(g.Z,{type:"close",size:18}))),r.createElement("div",{className:"".concat(D,"-modal__body")},i||l),r.createElement("div",{className:"".concat(D,"-modal__footer")},f&&r.createElement(c.Z,L({loading:Z||y||(null==b?void 0:b.loading),onClick:N},b),m),r.createElement(c.Z,L({type:"primary",loading:T||v||(null==h?void 0:h.loading),onClick:function(){return U(x,(function(){return I(!0)}),(function(){return I(!1)}))}},h),p)))))};z.defaultProps={width:420,visible:!1,showClose:!0,showCancel:!0,cancelText:"Cancel",confirmText:"Confirm",cancelButtonProps:{},confirmButtonProps:{},escClosable:!0,maskClosable:!0,unmountNodeAfterLeave:!0};var F=[];z.confirm=function(n){var e=document.createElement("div"),t=n;document.body.appendChild(e);var o=function(n){var o=n.visible,i=void 0===o||o,c=n.content,f=n.onCancel,m=n.onConfirm,s=n.afterClose,d=N(n,S);t=n,u.render(r.createElement(z,L({visible:i,onCancel:function(){U((0,p.mf)(f)?f:function(){},(function(){return l({cancelLoading:!0})}),(function(){l({cancelLoading:!1}),a()}))},onConfirm:function(){U((0,p.mf)(m)?m:function(){},(function(){return l({confirmLoading:!0})}),(function(){l({confirmLoading:!1}),a()}))},afterClose:function(){(0,p.mf)(s)&&s(),u.unmountComponentAtNode(e),document.body.removeChild(e)}},d),c),e)},a=function(){o(T(T({},t),{},{visible:!1})),F=F.filter((function(n){return n!==i}))},l=function(n){return o(T(T({},t),n))};o(n);var i={update:l,destroy:a};return F.push(i),i},z.destroyAll=function(){for(;F.length;){F.pop().destroy()}};const H=z;var R=t(2156),$={};$.styleTagTransform=A(),$.setAttributes=w(),$.insert=_().bind(null,"head"),$.domAPI=h(),$.insertStyleElement=O();v()(R.Z,$);R.Z&&R.Z.locals&&R.Z.locals;function q(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return G(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const J=function(){var n=q((0,r.useState)(!1),2),e=n[0],t=n[1];return r.createElement(r.Fragment,null,r.createElement(c.Z,{onClick:function(){return t(!0)}},"Open modal"),r.createElement(H,{title:"Title",visible:e,onCancel:function(){return t(!1)},onConfirm:function(){return t(!1)}},"Basic usage."))};const K=function(){return r.createElement(r.Fragment,null,r.createElement(c.Z,{onClick:function(){H.confirm({title:"Hi",content:"Beach, waves, and night."})}},"Modal.confirm"),r.createElement(c.Z,{onClick:function(){var n=H.confirm({title:"Hi",content:r.createElement(r.Fragment,null,r.createElement("span",{style:{marginRight:12}},"Beach, waves, and night."),r.createElement(c.Z,{onClick:function(){n.update({content:r.createElement("span",{style:{lineHeight:"32px"}},"Catch the moment.")})}},"Update"))})}},"Update reference"),r.createElement(c.Z,{onClick:function(){for(var n=0;n<3;n++)setTimeout((function(){H.confirm({title:"Hi",content:r.createElement(c.Z,{onClick:H.destroyAll},"Destroy all")})}),300*n)}},"Modal.destroyAll"))};function Q(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],l=!0,i=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(n){i=!0,o=n}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return V(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(e){var t=setTimeout((function(){e(null),clearTimeout(t)}),n)}))};const X=function(){var n=Q((0,r.useState)(!1),2),e=n[0],t=n[1];return r.createElement(r.Fragment,null,r.createElement(H,{title:"Async modal",visible:e,onCancel:function(){return t(!1)},onConfirm:function(){return W().then((function(){return t(!1)}))}},"Async logic in basic usage."),r.createElement(c.Z,{onClick:function(){return t(!0)}},"Open modal"),r.createElement(c.Z,{onClick:function(){H.confirm({title:"Async method",content:"Async logic by method.",onConfirm:W})}},"Modal.confirm"))};var Y=o.w,nn=o.c,en=Y.modal,tn=en.demos,rn=en.apiRows;const on=function(){return r.createElement("div",{className:"modal-demo"},r.createElement(l.Z,null,"Modal"),r.createElement("p",null,"Modal is used to confirm prompts or interception operations."),r.createElement("h2",null,"Demo"),r.createElement(i.Z,{title:"Basic Usage",content:r.createElement(J,null),code:tn["demo-1"]}),r.createElement(i.Z,{title:"By Method",content:r.createElement(K,null),code:tn["demo-2"]}),r.createElement(i.Z,{title:"Async Logic",content:r.createElement(X,null),code:tn["demo-3"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:nn,data:rn.default}))}},2156:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".modal-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const i=l},1055:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(8081),o=t.n(r),a=t(3645),l=t.n(a)()(o());l.push([n.id,".fog-modal {\n  position: fixed;\n  font-size: 14px;\n  z-index: 10;\n}\n.fog-modal,\n.fog-modal *,\n.fog-modal *:before,\n.fog-modal *:after {\n  box-sizing: border-box;\n}\n.fog-modal--before-enter .fog-modal__mask {\n  position: static;\n  background-color: var(--fog-transparent);\n}\n.fog-modal--entering .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--entered .fog-modal__mask {\n  background-color: var(--fog-mask-color);\n}\n.fog-modal--leaving .fog-modal__mask {\n  background-color: var(--fog-transparent);\n}\n.fog-modal--before-enter .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal--entering .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--entered .fog-modal__content {\n  transform: scale(1);\n  opacity: 1;\n}\n.fog-modal--leaving .fog-modal__content {\n  transform: scale(0);\n  opacity: 0;\n}\n.fog-modal__mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  transition: all 0.3s;\n}\n.fog-modal__content {\n  position: fixed;\n  top: 160px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  max-width: 90%;\n  text-align: left;\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  transition: all 0.3s;\n  overflow: hidden;\n}\n.fog-modal__header {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--fog-border-color);\n}\n.fog-modal__title {\n  flex-grow: 1;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n}\n.fog-modal__close {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.fog-modal__body {\n  padding: 12px 16px;\n  min-height: 120px;\n}\n.fog-modal__footer {\n  padding: 8px 16px;\n  text-align: right;\n  border-top: 1px solid var(--fog-border-color);\n}\n.fog-modal__footer .fog-button {\n  margin-right: 8px;\n}\n.fog-modal__footer .fog-button:last-child {\n  margin-right: 0;\n}\n",""]);const i=l}}]);