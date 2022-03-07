"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[12],{4784:(e,n,t)=>{t.r(n),t.d(n,{default:()=>$});var o=t(7294),r=t(4184),c=t.n(r),a=t(9074),l=t(4692),i=t(3379),u=t.n(i),s=t(7795),f=t.n(s),b=t(569),d=t.n(b),h=t(3565),g=t.n(h),p=t(9216),m=t.n(p),x=t(4589),k=t.n(x),y=t(3931),v={};v.styleTagTransform=k(),v.setAttributes=g(),v.insert=d().bind(null,"head"),v.domAPI=f(),v.insertStyleElement=m();u()(y.Z,v);y.Z&&y.Z.locals&&y.Z.locals;function _(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var C=a.O,S=function(e){var n=e.className,t=e.value,r=e.defaultValue,a=e.onChange,i=e.children,u=e.disabled,s=(0,l.Z)({value:t,defaultValue:r,onChange:a}),f=s.value,b=s.onChange,d=function(e){var n=e.target.checked?[].concat(_(f),[e.target.value]):f.filter((function(n){return n!==e.target.value})),t=g.filter((function(e){return n.includes(e)}));b(t)},h=(0,o.useMemo)((function(){var e=[];return o.Children.forEach(i,(function(n){n.type===T&&e.push(o.cloneElement(n,{checked:f.includes(n.props.value),disabled:n.props.disabled||u,onChange:d}))})),e}),[i,f]),g=(0,o.useMemo)((function(){return h.map((function(e){return e.props.value}))}),[h]);return o.createElement("div",{className:c()("".concat(C,"-checkbox-group"),n)},h)};S.defaultProps={};const A=S;var w=t(4646),Z={};Z.styleTagTransform=k(),Z.setAttributes=g(),Z.insert=d().bind(null,"head"),Z.domAPI=f(),Z.insertStyleElement=m();u()(w.Z,Z);w.Z&&w.Z.locals&&w.Z.locals;function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,c=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(c.push(o.value),!n||c.length!==n);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw r}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var N=a.O,O=function(e){var n,t=e.className,r=e.style,a=e.value,i=e.checked,u=e.defaultChecked,s=e.onChange,f=e.disabled,b=e.indeterminate,d=e.children,h=P((0,o.useState)(!1),2),g=h[0],p=h[1],m=(0,l.Z)({value:i,defaultValue:u,onChange:s,innerValueGetter:function(e){return e.target.checked}}),x=m.value,k=m.onChange;return o.createElement("div",{className:c()(t,(n={},I(n,"".concat(N,"-checkbox"),!0),I(n,"".concat(N,"-checkbox--focused"),g),I(n,"".concat(N,"-checkbox--checked"),x),I(n,"".concat(N,"-checkbox--disabled"),f),I(n,"".concat(N,"-checkbox--indeterminate"),b),n)),style:r},o.createElement("label",{className:"".concat(N,"-checkbox__label")},o.createElement("input",{className:"".concat(N,"-checkbox__input"),type:"checkbox",value:a,checked:x||!1,disabled:f,onChange:k,onFocus:function(){return p(!0)},onBlur:function(){return p(!1)}}),o.createElement("span",{className:"".concat(N,"-checkbox__box")}),o.createElement("span",{className:"".concat(N,"-checkbox__content")},d)))};O.defaultProps={style:{}},O.Group=A;const T=O;var F=t(2708),M=t(7310),V={};V.styleTagTransform=k(),V.setAttributes=g(),V.insert=d().bind(null,"head"),V.domAPI=f(),V.insertStyleElement=m();u()(M.Z,V);M.Z&&M.Z.locals&&M.Z.locals;function G(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,c=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(c.push(o.value),!n||c.length!==n);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw r}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return U(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var z=T.Group,B=["Cola","Pepsi","Fanta","Sprite"];const $=function(){var e=G((0,o.useState)(!1),2),n=e[0],t=e[1],r=G((0,o.useState)(!1),2),c=r[0],a=r[1],l=G((0,o.useState)(B.filter((function(e){return"Pepsi"!==e}))),2),i=l[0],u=l[1];return o.createElement("div",{className:"checkbox-demo"},o.createElement("h2",null,"Checkbox"),o.createElement("h3",null,"Basic Usage"),o.createElement(T,{defaultChecked:!0},"Cola"),o.createElement("h3",null,"Disabled"),o.createElement(T,{defaultChecked:!0,disabled:n},"Cola"),o.createElement(T,{disabled:n},"Fanta"),o.createElement(F.Z,{checked:n,onChange:t}),o.createElement("h3",null,"Group"),o.createElement(z,{defaultValue:["Cola"],disabled:c},o.createElement(T,{value:"Cola",key:"Cola"},"Cola"),o.createElement(T,{value:"Pepsi",key:"Pepsi",disabled:!0},"Pepsi"),o.createElement(T,{value:"Fanta",key:"Fanta"},"Fanta"),o.createElement(T,{value:"Sprite",key:"Sprite"},"Sprite")),o.createElement(F.Z,{checked:c,onChange:a}),o.createElement("h3",null,"Indeterminate"),o.createElement(T,{style:{display:"block",marginBottom:20},indeterminate:i.length&&i.length<B.length,checked:i.length===B.length,onChange:function(e){return u(e.target.checked?B:[])}},"Check all"),o.createElement(z,{value:i,onChange:u},B.map((function(e){return o.createElement(T,{value:e,key:e},e)}))))}},3931:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(8081),r=t.n(o),c=t(3645),a=t.n(c)()(r());a.push([e.id,".fog-checkbox-group {\n  display: inline-block;\n}\n.fog-checkbox-group,\n.fog-checkbox-group *,\n.fog-checkbox-group *:before,\n.fog-checkbox-group *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox-group .fog-checkbox {\n  margin-right: 12px;\n}\n.fog-checkbox-group .fog-checkbox:last-child {\n  margin-right: 0;\n}\n",""]);const l=a},7310:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(8081),r=t.n(o),c=t(3645),a=t.n(c)()(r());a.push([e.id,".checkbox-demo > .fog-checkbox {\n  margin: 0 12px 12px 0;\n}\n.checkbox-demo .fog-checkbox-group {\n  margin: 0 12px 12px 0;\n}\n",""]);const l=a},4646:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(8081),r=t.n(o),c=t(3645),a=t.n(c)()(r());a.push([e.id,".fog-checkbox {\n  display: inline-block;\n}\n.fog-checkbox,\n.fog-checkbox *,\n.fog-checkbox *:before,\n.fog-checkbox *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-checkbox__input[type=\"checkbox\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-checkbox__box,\n.fog-checkbox__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-checkbox__box {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 2px;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-checkbox__box::after {\n  content: none;\n}\n.fog-checkbox__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-checkbox--focused .fog-checkbox__box,\n.fog-checkbox:not(.fog-checkbox--checked):not(.fog-checkbox--disabled):hover .fog-checkbox__box {\n  border-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box,\n.fog-checkbox--indeterminate .fog-checkbox__box {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  width: 6px;\n  height: 10px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid var(--fog-contrast-color);\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: rotate(45deg) scale(0.9);\n}\n.fog-checkbox--indeterminate .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 6px;\n  left: 2.2px;\n  width: 10px;\n  height: 0;\n  border: none;\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: scale(0.9);\n}\n.fog-checkbox--disabled .fog-checkbox__content {\n  color: var(--fog-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__label {\n  cursor: not-allowed;\n}\n.fog-checkbox--disabled .fog-checkbox__box {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__box::after {\n  border-color: var(--fog-color-disabled);\n}\n",""]);const l=a}}]);