"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[18],{5942:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ae});var r=t(7294),o=t(7368),a=t(9960),c=t(2041),l=t(4184),i=t.n(l),u=t(9074),s=t(4692),f=t(3379),d=t.n(f),b=t(7795),m=t.n(b),h=t(569),g=t.n(h),p=t(3565),y=t.n(p),x=t(9216),v=t.n(x),k=t(4589),_=t.n(k),E=t(3931),A={};A.styleTagTransform=_(),A.setAttributes=y(),A.insert=g().bind(null,"head"),A.domAPI=m(),A.insertStyleElement=v();d()(E.Z,A);E.Z&&E.Z.locals&&E.Z.locals;function C(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var S=u.O,Z=function(e){var n=e.className,t=e.value,o=e.defaultValue,a=e.onChange,c=e.children,l=e.disabled,u=(0,s.Z)({value:t,defaultValue:o,onChange:a}),f=u.value,d=u.onChange,b=function(e){var n=e.target.checked?[].concat(C(f),[e.target.value]):f.filter((function(n){return n!==e.target.value})),t=h.filter((function(e){return n.includes(e)}));d(t)},m=(0,r.useMemo)((function(){var e=[];return r.Children.forEach(c,(function(n){n.type===F&&e.push(r.cloneElement(n,{checked:f.includes(n.props.value),disabled:n.props.disabled||l,onChange:b}))})),e}),[c,f]),h=(0,r.useMemo)((function(){return m.map((function(e){return e.props.value}))}),[m]);return r.createElement("div",{className:i()("".concat(S,"-checkbox-group"),n)},m)};Z.defaultProps={};const I=Z;var j=t(4646),O={};O.styleTagTransform=_(),O.setAttributes=y(),O.insert=g().bind(null,"head"),O.domAPI=m(),O.insertStyleElement=v();d()(j.Z,O);j.Z&&j.Z.locals&&j.Z.locals;function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var P=u.O,z=function(e){var n,t=e.className,o=e.style,a=e.value,c=e.checked,l=e.defaultChecked,u=e.onChange,f=e.disabled,d=e.indeterminate,b=e.children,m=M((0,r.useState)(!1),2),h=m[0],g=m[1],p=(0,s.Z)({value:c,defaultValue:l,onChange:u,innerValueGetter:function(e){return e.target.checked}}),y=p.value,x=p.onChange;return r.createElement("div",{className:i()(t,(n={},N(n,"".concat(P,"-checkbox"),!0),N(n,"".concat(P,"-checkbox--focused"),h),N(n,"".concat(P,"-checkbox--checked"),y),N(n,"".concat(P,"-checkbox--disabled"),f),N(n,"".concat(P,"-checkbox--indeterminate"),d),n)),style:o},r.createElement("label",{className:"".concat(P,"-checkbox__label")},r.createElement("input",{className:"".concat(P,"-checkbox__input"),type:"checkbox",value:a,checked:y||!1,disabled:f,onChange:x,onFocus:function(){return g(!0)},onBlur:function(){return g(!1)}}),r.createElement("span",{className:"".concat(P,"-checkbox__box")}),r.createElement("span",{className:"".concat(P,"-checkbox__content")},b)))};z.Group=I,z.defaultProps={};const F=z;const U=function(){return r.createElement(F,{defaultChecked:!0},"Cola")};var G=t(2708),R=t(7310),$={};$.styleTagTransform=_(),$.setAttributes=y(),$.insert=g().bind(null,"head"),$.domAPI=m(),$.insertStyleElement=v();d()(R.Z,$);R.Z&&R.Z.locals&&R.Z.locals;function V(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return B(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const D=function(){var e=V((0,r.useState)(!1),2),n=e[0],t=e[1];return r.createElement(r.Fragment,null,r.createElement(F,{defaultChecked:!0,disabled:n},"Cola"),r.createElement(F,{disabled:n},"Fanta"),r.createElement(G.Z,{checked:n,onChange:t}))};function L(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var H=F.Group;const J=function(){var e=L((0,r.useState)(!1),2),n=e[0],t=e[1];return r.createElement(r.Fragment,null,r.createElement(H,{defaultValue:["Cola"],disabled:n},r.createElement(F,{value:"Cola",key:"Cola"},"Cola"),r.createElement(F,{value:"Pepsi",key:"Pepsi",disabled:!0},"Pepsi"),r.createElement(F,{value:"Fanta",key:"Fanta"},"Fanta"),r.createElement(F,{value:"Sprite",key:"Sprite"},"Sprite")),r.createElement(G.Z,{checked:n,onChange:t}))};function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var W=F.Group,X=["Cola","Pepsi","Fanta","Sprite"];const Y=function(){var e=K((0,r.useState)(X.filter((function(e){return"Pepsi"!==e}))),2),n=e[0],t=e[1];return r.createElement(r.Fragment,null,r.createElement(F,{style:{display:"block",marginBottom:12},indeterminate:n.length&&n.length<X.length,checked:n.length===X.length,onChange:function(e){return t(e.target.checked?X:[])}},"Check all"),r.createElement(W,{value:n,onChange:t},X.map((function(e){return r.createElement(F,{value:e,key:e},e)}))))};var ee=o.w,ne=o.c,te=ee.checkbox,re=te.demos,oe=te.apiRows;const ae=function(){return r.createElement("div",{className:"checkbox-demo"},r.createElement("h1",null,"Checkbox"),r.createElement("p",null,"Checkbox is used to check item or not."),r.createElement("h2",null,"Demo"),r.createElement(c.Z,{title:"Basic Usage",content:r.createElement(U,null),code:re["demo-1"]}),r.createElement(c.Z,{title:"Disabled",content:r.createElement(D,null),code:re["demo-2"]}),r.createElement(c.Z,{title:"Group",description:"Combine several checkboxes into a group.",content:r.createElement(J,null),code:re["demo-3"]}),r.createElement(c.Z,{title:"Indeterminate",description:"Indeterminate state is usually used to describe checked state of checkbox group.",content:r.createElement(Y,null),code:re["demo-4"]}),r.createElement("h2",null,"API"),r.createElement("h3",null,"Checkbox"),r.createElement(a.Z,{columns:ne,data:oe.default}),r.createElement("h3",null,"Checkbox.Group"),r.createElement(a.Z,{columns:ne,data:oe.group}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(7294),o=t(9074),a=t(2282),c=t(5046),l=t(4346),i=t(6032),u=t(8849),s=t(9940),f=t(7618),d=t(3379),b=t.n(d),m=t(7795),h=t.n(m),g=t(569),p=t.n(g),y=t(3565),x=t.n(y),v=t(9216),k=t.n(v),_=t(4589),E=t.n(_),A=t(1738),C={};C.styleTagTransform=E(),C.setAttributes=x(),C.insert=p().bind(null,"head"),C.domAPI=h(),C.insertStyleElement=k();b()(A.Z,C);A.Z&&A.Z.locals&&A.Z.locals;function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var Z=o.O;a.Z.registerLanguage("tsx",c.Z);const I=function(e){var n=e.title,t=e.description,o=e.content,c=e.code,d=(0,r.useContext)(u.f),b=w((0,r.useState)(!1),2),m=b[0],h=b[1],g=w((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),p=g[0],y=g[1],x=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(m&&ResizeObserver&&x.current){var e=new ResizeObserver((function(){var e=x.current.getBoundingClientRect().height;y(e)}));return e.observe(x.current),function(){return e.disconnect()}}}),[m]),(0,r.useEffect)((function(){return f.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(Z,"-demo")},r.createElement("h3",{className:"".concat(Z,"-demo__title")},r.createElement("span",null,n),r.createElement("div",{className:"".concat(Z,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(c).then((function(){return f.Z.success({content:"Code copied"})})).catch((function(){return f.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return h(!m)}}))),t&&r.createElement("p",{className:"".concat(Z,"-demo__description")},t),r.createElement("div",{className:"".concat(Z,"-demo__content")},o),r.createElement("div",{className:"".concat(Z,"-demo__code-wrapper"),style:{height:m?p:0}},r.createElement("div",{ref:x},r.createElement(a.Z,{className:"".concat(Z,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:d?i.Z:l.Z},c))))}},3931:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),c=t.n(a)()(o());c.push([e.id,".fog-checkbox-group {\n  display: inline-block;\n}\n.fog-checkbox-group,\n.fog-checkbox-group *,\n.fog-checkbox-group *:before,\n.fog-checkbox-group *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox-group .fog-checkbox {\n  margin-right: 12px;\n}\n.fog-checkbox-group .fog-checkbox:last-child {\n  margin-right: 0;\n}\n",""]);const l=c},7310:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),c=t.n(a)()(o());c.push([e.id,".checkbox-demo .fog-checkbox {\n  margin-right: 12px;\n}\n.checkbox-demo .fog-checkbox-group {\n  margin-right: 12px;\n}\n",""]);const l=c},4646:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),c=t.n(a)()(o());c.push([e.id,".fog-checkbox {\n  display: inline-block;\n}\n.fog-checkbox,\n.fog-checkbox *,\n.fog-checkbox *:before,\n.fog-checkbox *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-checkbox__input[type=\"checkbox\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-checkbox__box,\n.fog-checkbox__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-checkbox__box {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 2px;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-checkbox__box::after {\n  content: none;\n}\n.fog-checkbox__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-checkbox--focused .fog-checkbox__box,\n.fog-checkbox:not(.fog-checkbox--checked):not(.fog-checkbox--disabled):hover .fog-checkbox__box {\n  border-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box,\n.fog-checkbox--indeterminate .fog-checkbox__box {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  width: 6px;\n  height: 10px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid var(--fog-contrast-color);\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: rotate(45deg) scale(0.9);\n}\n.fog-checkbox--indeterminate .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 6px;\n  left: 2.2px;\n  width: 10px;\n  height: 0;\n  border: none;\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: scale(0.9);\n}\n.fog-checkbox--disabled .fog-checkbox__content {\n  color: var(--fog-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__label {\n  cursor: not-allowed;\n}\n.fog-checkbox--disabled .fog-checkbox__box {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__box::after {\n  border-color: var(--fog-color-disabled);\n}\n",""]);const l=c},1738:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),c=t.n(a)()(o());c.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const l=c}}]);