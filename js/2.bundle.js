"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[2],{30:(e,n,r)=>{r.d(n,{Z:()=>T});var o=r(7294),t=r(4184),a=r.n(t),l=r(9074),c=r(4692),i=r(3379),u=r.n(i),f=r(7795),d=r.n(f),s=r(569),b=r.n(s),g=r(3565),p=r.n(g),m=r(9216),h=r.n(m),y=r(4589),v=r.n(y),x=r(3931),_={};_.styleTagTransform=v(),_.setAttributes=p(),_.insert=b().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=h();u()(x.Z,_);x.Z&&x.Z.locals&&x.Z.locals;function k(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return E(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var Z=l.O,w=function(e){var n=e.className,r=e.value,t=e.defaultValue,l=e.onChange,i=e.children,u=e.disabled,f=(0,c.Z)({value:r,defaultValue:t,onChange:l}),d=f.value,s=f.onChange,b=function(e){var n=e.target.checked?[].concat(k(d),[e.target.value]):d.filter((function(n){return n!==e.target.value})),r=p.filter((function(e){return n.includes(e)}));s(r)},g=(0,o.useMemo)((function(){var e=[];return o.Children.forEach(i,(function(n){n.type===T&&e.push(o.cloneElement(n,{checked:d.includes(n.props.value),disabled:n.props.disabled||u,onChange:b}))})),e}),[i,d]),p=(0,o.useMemo)((function(){return g.map((function(e){return e.props.value}))}),[g]);return o.createElement("div",{className:a()("".concat(Z,"-checkbox-group"),n)},g)};w.defaultProps={};const A=w;var O=r(4646),S={};S.styleTagTransform=v(),S.setAttributes=p(),S.insert=b().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=h();u()(O.Z,S);O.Z&&O.Z.locals&&O.Z.locals;function C(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var N=l.O,P=function(e){var n,r=e.className,t=e.style,l=e.value,i=e.checked,u=e.defaultChecked,f=e.onChange,d=e.disabled,s=e.indeterminate,b=e.children,g=j((0,o.useState)(!1),2),p=g[0],m=g[1],h=(0,c.Z)({value:i,defaultValue:u,onChange:f,innerValueGetter:function(e){return e.target.checked}}),y=h.value,v=h.onChange;return o.createElement("div",{className:a()(r,(n={},C(n,"".concat(N,"-checkbox"),!0),C(n,"".concat(N,"-checkbox--focused"),p),C(n,"".concat(N,"-checkbox--checked"),y),C(n,"".concat(N,"-checkbox--disabled"),d),C(n,"".concat(N,"-checkbox--indeterminate"),s),n)),style:t},o.createElement("label",{className:"".concat(N,"-checkbox__label")},o.createElement("input",{className:"".concat(N,"-checkbox__input"),type:"checkbox",value:l,checked:y||!1,disabled:d,onChange:v,onFocus:function(){return m(!0)},onBlur:function(){return m(!1)}}),o.createElement("span",{className:"".concat(N,"-checkbox__box")}),o.createElement("span",{className:"".concat(N,"-checkbox__content")},b)))};P.Group=A,P.defaultProps={};const T=P},3310:(e,n,r)=>{r.r(n),r.d(n,{default:()=>fe});var o=r(7294),t=r(7368),a=r(9960),l=r(7385),c=r(2041),i=r(4184),u=r.n(i),f=r(9074),d=r(3477),s=o.createContext({}),b=r(2541),g=r(30),p=r(9731),m=r(6383),h=r(194),y=r(2708),v=r(8331),x=r(3379),_=r.n(x),k=r(7795),E=r.n(k),Z=r(569),w=r.n(Z),A=r(3565),O=r.n(A),S=r(9216),C=r.n(S),j=r(4589),I=r.n(j),N=r(2127),P={};P.styleTagTransform=I(),P.setAttributes=O(),P.insert=w().bind(null,"head"),P.domAPI=E(),P.insertStyleElement=C();_()(N.Z,P);N.Z&&N.Z.locals&&N.Z.locals;function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function V(e){return function(e){if(Array.isArray(e))return D(e)}(e)||F(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){return function(e){if(Array.isArray(e))return e}(e)||F(e)||M(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,n){if(e){if("string"==typeof e)return D(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,n):void 0}}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function F(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var G=f.O;const U=function e(n){var r=n.className,t=n.label,a=n.labelWidth,l=n.name,c=n.initialValue,i=n.children,f=(0,o.useRef)(!1),x=(0,o.useContext)(s);(0,o.useEffect)((function(){l&&void 0!==c&&!f.current&&x.setFieldValue(l,c),f.current=!0}),[l,c]);var _=(0,o.useMemo)((function(){return"vertical"===x.layout?{}:"horizontal"===x.layout?{width:a||x.labelWidth}:void 0}),[x.layout,x.labelWidth]),k=function(e){var n=function(e){switch(e.type){case p.Z:case m.Z:return function(e){return e.target.value};case b.Z:case g.Z:return function(e){return e.target.checked};case h.Z:case y.Z:case v.Z:case v.Z.RangePicker:case b.Z.Group:case g.Z.Group:return function(e){return e};default:return null}}(e);return n?o.cloneElement(e,{key:e.key,value:x.getFieldValue(l),onChange:function(){var r,o=n.apply(void 0,arguments);x.setFieldValue(l,o),(0,d.mf)(e.props.onChange)&&(r=e.props).onChange.apply(r,arguments)}}):e};return o.createElement("div",{className:u()("".concat(G,"-form__item"),r)},o.createElement("div",{className:"".concat(G,"-form__item-label"),style:_},t),o.createElement("div",{className:"".concat(G,"-form__item-content")},function n(r){if(!l)return r;if(!Array.isArray(r))return n([r]);if(!r.length)return null;var o=z(r),t=o[0],a=o.slice(1);return Array.isArray(t)?[n(t)].concat(V(a)):["string","number"].includes(T(t))||t.type===e?r:[k(t)].concat(V(a))}(i)))};var B=r(5790),R={};R.styleTagTransform=I(),R.setAttributes=O(),R.insert=w().bind(null,"head"),R.domAPI=E(),R.insertStyleElement=C();_()(B.Z,R);B.Z&&B.Z.locals&&B.Z.locals;function W(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function $(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?W(Object(r),!0).forEach((function(n){L(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function L(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return q(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var H=f.O,J=function(e){var n,r=e.className,t=e.layout,a=e.labelWidth,l=e.initialValues,c=e.children,i=K((0,o.useState)((function(){return l||{}})),2),f=i[0],d=i[1];return o.createElement(s.Provider,{value:{formValue:f,layout:t,labelWidth:a,setFieldValue:function(e,n){d((function(r){return $($({},r),{},L({},e,n))}))},setFieldsValue:function(e){d((function(n){return $($({},n),e)}))},getFieldValue:function(e){return f[e]},getFieldsValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.keys(f);return e.reduce((function(e,n){return $($({},e),{},L({},n,f[n]))}),{})}}},o.createElement("div",{className:u()(r,(n={},L(n,"".concat(H,"-form"),!0),L(n,"".concat(H,"-form--").concat(t),t),n))},c))};J.defaultProps={layout:"horizontal",labelWidth:100},J.Item=U;const Q=J;var X=r(8692);function Y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return ee(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var ne=h.Z.Option;const re=function(){var e=Y((0,o.useState)("horizontal"),2),n=e[0],r=e[1];return o.createElement(Q,{layout:n},o.createElement(Q.Item,{label:"Layout",name:"layout",initialValue:"horizontal"},o.createElement(b.Z.Group,{onChange:function(e){r(e)}},["horizontal","vertical"].map((function(e){return o.createElement(b.Z.Button,{key:e,value:e,checked:e===n},(0,d.gC)(e))})))),o.createElement(Q.Item,{label:"Name",name:"name"},o.createElement(p.Z,{placeholder:"Please input",clearable:!0})),o.createElement(Q.Item,{label:"Remain",name:"remain"},o.createElement(m.Z,{placeholder:"Please input"})),o.createElement(Q.Item,{label:"Category",name:"category"},o.createElement(h.Z,{placeholder:"Please select",multiple:!0,clearable:!0},o.createElement(ne,{value:"Foodstuff"},"Foodstuff"),o.createElement(ne,{value:"Groceries"},"Groceries"),o.createElement(ne,{value:"Others"},"Others"))),o.createElement(Q.Item,{label:"Launch Date",name:"launchDate"},o.createElement(v.Z,{placeholder:"Please select"})),o.createElement(Q.Item,null,o.createElement(X.Z,{type:"primary"},"Submit")))};var oe=r(6961),te={};te.styleTagTransform=I(),te.setAttributes=O(),te.insert=w().bind(null,"head"),te.domAPI=E(),te.insertStyleElement=C();_()(oe.Z,te);oe.Z&&oe.Z.locals&&oe.Z.locals;var ae=t.w,le=t.c,ce=ae.form,ie=ce.demos,ue=ce.apiRows;const fe=function(){return o.createElement("div",{className:"form-demo"},o.createElement(l.Z,null,"Form"),o.createElement("p",null,"Form is used to submit data."),o.createElement("h2",null,"Demo"),o.createElement(c.Z,{title:"Basic Usage",content:o.createElement(re,null),code:ie["demo-1"]}),o.createElement("h2",null,"API"),o.createElement("h3",null,"Form"),o.createElement(a.Z,{columns:le,data:ue.default}),o.createElement("h3",null,"Form.Item"),o.createElement(a.Z,{columns:le,data:ue.item}))}},6383:(e,n,r)=>{r.d(n,{Z:()=>V});var o=r(7294),t=r(4184),a=r.n(t),l=r(9074),c=r(9171),i=r(9940),u=r(4692),f=r(3477),d=(r(8913),r(3379)),s=r.n(d),b=r(7795),g=r.n(b),p=r(569),m=r.n(p),h=r(3565),y=r.n(h),v=r(9216),x=r.n(v),_=r(4589),k=r.n(_),E=r(6560),Z={};Z.styleTagTransform=k(),Z.setAttributes=y(),Z.insert=m().bind(null,"head"),Z.domAPI=g(),Z.insertStyleElement=x();s()(E.Z,Z);E.Z&&E.Z.locals&&E.Z.locals;var w=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onBlur","onEnter"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},A.apply(this,arguments)}function O(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return C(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function j(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var I=l.O,N=function(e){return(0,f.v5)(e)?"".concat(e):""},P=function(e,n){return""===e||isNaN(Number(e))?n:Number(e)},T=(0,o.forwardRef)((function(e,n){var r,t,l=e.className,d=e.value,s=e.defaultValue,b=e.onChange,g=e.placeholder,p=e.disabled,m=e.readOnly,h=e.prefix,y=e.suffix,v=e.min,x=e.max,_=e.step,k=e.showControl,E=e.keepControl,Z=e.onBlur,C=e.onEnter,T=j(e,w),V=(0,u.Z)({value:d,defaultValue:s,onChange:b,innerValueGetter:function(e){return e.target.value}}),z=V.value,M=V.onChange,D=S((0,o.useState)(!1),2),F=D[0],G=D[1],U=S((0,o.useState)(!1),2),B=U[0],R=U[1],W=(0,o.useRef)(null),$=n||W,L=S((0,o.useState)(""),2),K=L[0],q=L[1];(0,o.useEffect)((function(){q(N(z))}),[z]);var H=function(e){return null===e?null:"number"!=typeof v&&"number"!=typeof x?e:"number"==typeof v&&"number"!=typeof x?Math.max(v,e):"number"!=typeof v&&"number"==typeof x?Math.min(x,e):v>x?e:e<v?v:e>x?x:e},J=function(e){!F&&$.current.focus();var n=(0,f.gs)(P(K,0)+e*_),r=H(n);M({target:{value:r}})};return o.createElement(c.Z,A({className:a()(l,(r={},O(r,"".concat(I,"-input-number"),!0),O(r,"".concat(I,"-input-number--focused"),F),O(r,"".concat(I,"-input-number--entered"),B),O(r,"".concat(I,"-input-number--keep-control"),E),r)),focused:F,disabled:p,readOnly:m,prefix:h,suffix:y,onClick:function(){return $.current.focus()},onMouseEnter:function(){return R(!0)},onMouseLeave:function(){return R(!1)}},T),o.createElement("input",{className:"".concat(I,"-input"),ref:$,value:K,disabled:p,readOnly:m,placeholder:g,onFocus:function(){return G(!0)},onBlur:function(e){var n=P(e.target.value,null),r=H(n);e.target.value=r,r!==z&&M(e),q(N(r)),G(!1),(0,f.mf)(Z)&&Z(e)},onChange:function(e){(0,f.At)(e.target.value)&&q(e.target.value)},onKeyDown:function(e){if("ArrowUp"===e.key&&(e.preventDefault(),J(1)),"ArrowDown"===e.key&&(e.preventDefault(),J(-1)),"Enter"===e.key){var n=P(e.currentTarget.value,null),r=H(n);e.currentTarget.value=r,r!==z&&M(e),q(N(r)),(0,f.mf)(C)&&C(e)}}}),k&&o.createElement("div",{className:a()((t={},O(t,"".concat(I,"-input-number__control"),!0),O(t,"".concat(I,"-input-number__control--disabled"),p),O(t,"".concat(I,"-input-number__control--border-right"),y),t))},o.createElement(i.Z,{className:"".concat(I,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!p&&J(1)},type:"up"}),o.createElement(i.Z,{className:"".concat(I,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!p&&J(-1)},type:"down"})))}));T.defaultProps={step:1,showControl:!0,keepControl:!0},T.displayName="InputNumber";const V=T},2541:(e,n,r)=>{r.d(n,{Z:()=>M});var o=r(7294),t=r(4184),a=r.n(t),l=r(9074),c=r(3379),i=r.n(c),u=r(7795),f=r.n(u),d=r(569),s=r.n(d),b=r(3565),g=r.n(b),p=r(9216),m=r.n(p),h=r(4589),y=r.n(h),v=r(3929),x={};x.styleTagTransform=y(),x.setAttributes=g(),x.insert=s().bind(null,"head"),x.domAPI=f(),x.insertStyleElement=m();i()(v.Z,x);v.Z&&v.Z.locals&&v.Z.locals;function _(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var k=l.O,E=function(e){var n,r=e.className,t=e.value,l=e.checked,c=e.disabled,i=e.buttonStyle,u=e.children,f=e.onClick;return o.createElement(M,{className:"".concat(k,"-radio-button-wrapper"),value:t,checked:l,disabled:c,onClick:f},o.createElement("div",{className:a()(r,(n={},_(n,"".concat(k,"-radio-button"),!0),_(n,"".concat(k,"-radio-button--checked"),l),_(n,"".concat(k,"-radio-button--disabled"),c),_(n,"".concat(k,"-radio-button--").concat(i),l&&!c&&i),n))},u))};E.defaultProps={buttonStyle:"outline"};const Z=E;var w=r(4692),A=r(3477),O=r(6953),S={};S.styleTagTransform=y(),S.setAttributes=g(),S.insert=s().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=m();i()(O.Z,S);O.Z&&O.Z.locals&&O.Z.locals;var C=l.O,j=function(e){var n=e.className,r=e.style,t=e.value,l=e.defaultValue,c=e.onChange,i=e.children,u=e.disabled,f=e.buttonStyle,d=(0,w.Z)({value:t,defaultValue:l,onChange:c}),s=d.value,b=d.onChange,g=function(e){e.target.value!==s&&b(e.target.value)},p=(0,o.useMemo)((function(){var e=[];return o.Children.forEach(i,(function(n){n.type===M&&e.push(o.cloneElement(n,{checked:n.props.value===s,disabled:n.props.disabled||u,onClick:function(e){g(e),(0,A.mf)(n.props.onClick)&&n.props.onClick(e)}})),n.type===Z&&e.push(o.cloneElement(n,{checked:n.props.value===s,disabled:n.props.disabled||u,onClick:function(e){g(e),(0,A.mf)(n.props.onClick)&&n.props.onClick(e)},buttonStyle:f}))})),e}),[i,s]);return o.createElement("div",{className:a()("".concat(C,"-radio-group"),n),style:r},p)};j.defaultProps={buttonStyle:"outline"};const I=j;var N=r(5026),P={};P.styleTagTransform=y(),P.setAttributes=g(),P.insert=s().bind(null,"head"),P.domAPI=f(),P.insertStyleElement=m();i()(N.Z,P);N.Z&&N.Z.locals&&N.Z.locals;function T(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var V=l.O,z=function(e){var n,r=e.className,t=e.value,l=e.checked,c=e.defaultChecked,i=e.disabled,u=e.children,f=e.onClick,d=(0,w.Z)({value:l,defaultValue:c,innerValueGetter:function(e){return e.target.checked}}),s=d.value,b=d.onChange;return o.createElement("div",{className:a()(r,(n={},T(n,"".concat(V,"-radio"),!0),T(n,"".concat(V,"-radio--checked"),s),T(n,"".concat(V,"-radio--disabled"),i),n))},o.createElement("label",{className:"".concat(V,"-radio__label")},o.createElement("input",{className:"".concat(V,"-radio__input"),type:"radio",value:t,checked:s||!1,onChange:b,disabled:i,onClick:function(e){return(0,A.mf)(f)&&f(e)}}),o.createElement("span",{className:"".concat(V,"-radio__dot")}),o.createElement("span",{className:"".concat(V,"-radio__content")},u)))};z.defaultProps={},z.Group=I,z.Button=Z;const M=z},3931:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-checkbox-group {\n  display: inline-block;\n}\n.fog-checkbox-group,\n.fog-checkbox-group *,\n.fog-checkbox-group *:before,\n.fog-checkbox-group *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox-group .fog-checkbox {\n  margin-right: 12px;\n}\n.fog-checkbox-group .fog-checkbox:last-child {\n  margin-right: 0;\n}\n",""]);const c=l},4646:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-checkbox {\n  display: inline-block;\n}\n.fog-checkbox,\n.fog-checkbox *,\n.fog-checkbox *:before,\n.fog-checkbox *:after {\n  box-sizing: border-box;\n}\n.fog-checkbox__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-checkbox__input[type=\"checkbox\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-checkbox__box,\n.fog-checkbox__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-checkbox__box {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 2px;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-checkbox__box::after {\n  content: none;\n}\n.fog-checkbox__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-checkbox--focused .fog-checkbox__box,\n.fog-checkbox:not(.fog-checkbox--checked):not(.fog-checkbox--disabled):hover .fog-checkbox__box {\n  border-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box,\n.fog-checkbox--indeterminate .fog-checkbox__box {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-checkbox--checked .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  left: 4px;\n  width: 6px;\n  height: 10px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid var(--fog-contrast-color);\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: rotate(45deg) scale(0.9);\n}\n.fog-checkbox--indeterminate .fog-checkbox__box::after {\n  content: '';\n  position: absolute;\n  top: 6px;\n  left: 2.2px;\n  width: 10px;\n  height: 0;\n  border: none;\n  border-bottom: 2px solid var(--fog-contrast-color);\n  transform: scale(0.9);\n}\n.fog-checkbox--disabled .fog-checkbox__content {\n  color: var(--fog-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__label {\n  cursor: not-allowed;\n}\n.fog-checkbox--disabled .fog-checkbox__box {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-checkbox--disabled .fog-checkbox__box::after {\n  border-color: var(--fog-color-disabled);\n}\n",""]);const c=l},2127:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-form__item {\n  margin-bottom: 24px;\n}\n.fog-form__item,\n.fog-form__item *,\n.fog-form__item *:before,\n.fog-form__item *:after {\n  box-sizing: border-box;\n}\n.fog-form__item:last-child {\n  margin-bottom: 0;\n}\n.fog-form__item-label {\n  font-size: 14px;\n  line-height: 32px;\n}\n.fog-form--horizontal .fog-form__item {\n  display: flex;\n  align-items: flex-start;\n}\n.fog-form--horizontal .fog-form__item-label {\n  flex-shrink: 0;\n  text-align: right;\n  margin-right: 12px;\n}\n.fog-form--horizontal .fog-form__item-content {\n  flex-grow: 1;\n}\n",""]);const c=l},6961:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".form-demo .fog-form {\n  max-width: 500px;\n}\n",""]);const c=l},5790:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-form {\n  font-size: 14px;\n}\n.fog-form,\n.fog-form *,\n.fog-form *:before,\n.fog-form *:after {\n  box-sizing: border-box;\n}\n",""]);const c=l},6560:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const c=l},3929:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio-button-wrapper .fog-radio__dot {\n  display: none;\n}\n.fog-radio-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--fog-color);\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-transparent);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.fog-radio-button--disabled {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-radio-button--checked {\n  position: relative;\n}\n.fog-radio-button--disabled.fog-radio-button--checked {\n  background-color: var(--fog-internal-color-disabled);\n}\n.fog-radio-button:not(.fog-radio-button--disabled):not(.fog-radio-button--checked):hover {\n  color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--outline {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:hover {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--solid {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-radio-button--solid:hover {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--solid:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n",""]);const c=l},6953:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio-group {\n  display: inline-block;\n}\n.fog-radio-group,\n.fog-radio-group *,\n.fog-radio-group *:before,\n.fog-radio-group *:after {\n  box-sizing: border-box;\n}\n.fog-radio-group .fog-radio {\n  margin-right: 12px;\n}\n.fog-radio-group .fog-radio:last-child {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper .fog-radio-button {\n  border-radius: 0;\n  margin-right: -1px;\n}\n.fog-radio-group .fog-radio-button-wrapper:first-child .fog-radio-button {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.fog-radio-group .fog-radio-button-wrapper:last-child .fog-radio-button {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  margin-right: 0;\n}\n",""]);const c=l},5026:(e,n,r)=>{r.d(n,{Z:()=>c});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio {\n  display: inline-block;\n}\n.fog-radio,\n.fog-radio *,\n.fog-radio *:before,\n.fog-radio *:after {\n  box-sizing: border-box;\n}\n.fog-radio__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-radio__input[type=\"radio\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-radio__dot,\n.fog-radio__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-radio__dot {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 50%;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-radio__dot::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 8px;\n  height: 8px;\n  background-color: var(--fog-transparent);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.fog-radio__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-radio:not(.fog-radio--checked):not(.fog-radio--disabled):hover .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-primary-color);\n}\n.fog-radio--disabled .fog-radio__content {\n  color: var(--fog-color-disabled);\n}\n.fog-radio--disabled .fog-radio__label {\n  cursor: not-allowed;\n}\n.fog-radio--disabled .fog-radio__dot {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-radio--disabled.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-background-color-active);\n}\n",""]);const c=l}}]);