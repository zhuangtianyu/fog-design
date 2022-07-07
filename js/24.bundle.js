"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[24],{2657:(e,n,r)=>{r.r(n),r.d(n,{default:()=>re});var o=r(7294),t=r(7368),a=r(9960),l=r(7385),i=r(2041),c=r(4184),u=r.n(c),d=r(9074),f=o.createContext({}),s=r(3379),m=r.n(s),b=r(7795),g=r.n(b),p=r(569),v=r.n(p),h=r(3565),y=r.n(h),_=r(9216),E=r.n(_),x=r(4589),k=r.n(x),w=r(2127),Z={};Z.styleTagTransform=k(),Z.setAttributes=y(),Z.insert=v().bind(null,"head"),Z.domAPI=g(),Z.insertStyleElement=E();m()(w.Z,Z);w.Z&&w.Z.locals&&w.Z.locals;var O=d.O;const C=function(e){var n=e.className,r=e.label,t=e.labelWidth,a=e.name,l=e.initialValue,i=e.children,c=(0,o.useRef)(!1),d=(0,o.useContext)(f);(0,o.useEffect)((function(){a&&void 0!==l&&!c.current&&d.setFieldValue(a,l),c.current=!0}),[a,l]);var s=(0,o.useMemo)((function(){return"vertical"===d.layout?{}:"horizontal"===d.layout?{width:t||d.labelWidth}:void 0}),[d.layout,d.labelWidth]);return o.createElement("div",{className:u()("".concat(O,"-form__item"),n)},o.createElement("div",{className:"".concat(O,"-form__item-label"),style:s},r),o.createElement("div",{className:"".concat(O,"-form__item-content")},i))};var S=r(5790),A={};A.styleTagTransform=k(),A.setAttributes=y(),A.insert=v().bind(null,"head"),A.domAPI=g(),A.insertStyleElement=E();m()(S.Z,A);S.Z&&S.Z.locals&&S.Z.locals;function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){N(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function N(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){i=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return T(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var z=d.O,V=function(e){var n,r=e.className,t=e.layout,a=e.labelWidth,l=e.initialValues,i=e.children,c=I((0,o.useState)((function(){return l||{}})),2),d=c[0],s=c[1];return o.createElement(f.Provider,{value:{formValue:d,layout:t,labelWidth:a,setFieldValue:function(e,n){s(j(j({},d),{},N({},e,n)))},setFieldsValue:function(e){s(j(j({},d),e))},getFieldValue:function(e){return d[e]},getFieldsValue:function(e){return e.reduce((function(e,n){return j(j({},e),{},N({},n,d[n]))}),{})}}},o.createElement("div",{className:u()(r,(n={},N(n,"".concat(z,"-form"),!0),N(n,"".concat(z,"-form--").concat(t),t),n))},i))};V.defaultProps={layout:"horizontal",labelWidth:100},V.Item=C;const D=V;var F=r(2541),M=r(9731),B=r(6383),W=r(194),G=r(8331),R=r(8692),U=r(3477);function L(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){i=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return $(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}var K=W.Z.Option;const q=function(){var e=L((0,o.useState)("horizontal"),2),n=e[0],r=e[1];return o.createElement(o.Fragment,null,o.createElement(D,{layout:n},o.createElement(D.Item,{label:"Layout"},o.createElement(F.Z.Group,{defaultValue:"horizontal",onChange:function(e){return r(e)}},["horizontal","vertical"].map((function(e){return o.createElement(F.Z.Button,{key:e,value:e,checked:e===n},(0,U.gC)(e))})))),o.createElement(D.Item,{label:"Name",name:"name"},o.createElement(M.Z,{placeholder:"Please input",clearable:!0})),o.createElement(D.Item,{label:"Remain",name:"remain"},o.createElement(B.Z,{placeholder:"Please input"})),o.createElement(D.Item,{label:"Category",name:"category"},o.createElement(W.Z,{placeholder:"Please select",multiple:!0,clearable:!0},o.createElement(K,{value:"Foodstuff"},"Foodstuff"),o.createElement(K,{value:"Groceries"},"Groceries"),o.createElement(K,{value:"Others"},"Others"))),o.createElement(D.Item,{label:"Launch Date",name:"launchDate"},o.createElement(G.Z,{placeholder:"Please select"})),o.createElement(D.Item,null,o.createElement(R.Z,{type:"primary"},"Submit"))))};var H=r(6961),J={};J.styleTagTransform=k(),J.setAttributes=y(),J.insert=v().bind(null,"head"),J.domAPI=g(),J.insertStyleElement=E();m()(H.Z,J);H.Z&&H.Z.locals&&H.Z.locals;var Q=t.w,X=t.c,Y=Q.form,ee=Y.demos,ne=Y.apiRows;const re=function(){return o.createElement("div",{className:"form-demo"},o.createElement(l.Z,null,"Form"),o.createElement("p",null,"Form is used to submit data."),o.createElement("h2",null,"Demo"),o.createElement(i.Z,{title:"Basic Usage",content:o.createElement(q,null),code:ee["demo-1"]}),o.createElement("h2",null,"API"),o.createElement("h3",null,"Form"),o.createElement(a.Z,{columns:X,data:ne.default}),o.createElement("h3",null,"Form.Item"),o.createElement(a.Z,{columns:X,data:ne.item}))}},6383:(e,n,r)=>{r.d(n,{Z:()=>z});var o=r(7294),t=r(4184),a=r.n(t),l=r(9074),i=r(9171),c=r(9940),u=r(4692),d=r(3477),f=(r(8913),r(3379)),s=r.n(f),m=r(7795),b=r.n(m),g=r(569),p=r.n(g),v=r(3565),h=r.n(v),y=r(9216),_=r.n(y),E=r(4589),x=r.n(E),k=r(6560),w={};w.styleTagTransform=x(),w.setAttributes=h(),w.insert=p().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=_();s()(k.Z,w);k.Z&&k.Z.locals&&k.Z.locals;var Z=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onBlur","onEnter"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},O.apply(this,arguments)}function C(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,t,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(o=r.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){i=!0,t=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw t}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=e[r];return o}function P(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var j=l.O,N=function(e){return(0,d.v5)(e)?"".concat(e):""},I=function(e,n){return""===e||isNaN(Number(e))?n:Number(e)},T=(0,o.forwardRef)((function(e,n){var r,t,l=e.className,f=e.value,s=e.defaultValue,m=e.onChange,b=e.placeholder,g=e.disabled,p=e.readOnly,v=e.prefix,h=e.suffix,y=e.min,_=e.max,E=e.step,x=e.showControl,k=e.keepControl,w=e.onBlur,A=e.onEnter,T=P(e,Z),z=(0,u.Z)({value:f,defaultValue:s,onChange:m}),V=z.value,D=z.onChange,F=S((0,o.useState)(!1),2),M=F[0],B=F[1],W=S((0,o.useState)(!1),2),G=W[0],R=W[1],U=(0,o.useRef)(null),L=n||U,$=S((0,o.useState)(""),2),K=$[0],q=$[1];(0,o.useEffect)((function(){q(N(V))}),[V]);var H=function(e){return null===e?null:"number"!=typeof y&&"number"!=typeof _?e:"number"==typeof y&&"number"!=typeof _?Math.max(y,e):"number"!=typeof y&&"number"==typeof _?Math.min(_,e):y>_?e:e<y?y:e>_?_:e},J=function(e){!M&&L.current.focus();var n=(0,d.gs)(I(K,0)+e*E),r=H(n);D(r)};return o.createElement(i.Z,O({className:a()(l,(r={},C(r,"".concat(j,"-input-number"),!0),C(r,"".concat(j,"-input-number--focused"),M),C(r,"".concat(j,"-input-number--entered"),G),C(r,"".concat(j,"-input-number--keep-control"),k),r)),focused:M,disabled:g,readOnly:p,prefix:v,suffix:h,onClick:function(){return L.current.focus()},onMouseEnter:function(){return R(!0)},onMouseLeave:function(){return R(!1)}},T),o.createElement("input",{className:"".concat(j,"-input"),ref:L,value:K,disabled:g,readOnly:p,placeholder:b,onFocus:function(){return B(!0)},onBlur:function(e){var n=I(e.target.value,null),r=H(n);r!==V&&D(r),q(N(r)),B(!1),e.currentTarget.value=r,(0,d.mf)(w)&&w(e)},onChange:function(e){(0,d.At)(e.target.value)&&q(e.target.value)},onKeyDown:function(e){if("ArrowUp"===e.key&&(e.preventDefault(),J(1)),"ArrowDown"===e.key&&(e.preventDefault(),J(-1)),"Enter"===e.key){var n=I(e.currentTarget.value,null),r=H(n);r!==V&&D(r),q(N(r)),e.currentTarget.value=r,(0,d.mf)(A)&&A(e)}}}),x&&o.createElement("div",{className:a()((t={},C(t,"".concat(j,"-input-number__control"),!0),C(t,"".concat(j,"-input-number__control--disabled"),g),C(t,"".concat(j,"-input-number__control--border-right"),h),t))},o.createElement(c.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!g&&J(1)},type:"up"}),o.createElement(c.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!g&&J(-1)},type:"down"})))}));T.defaultProps={step:1,showControl:!0,keepControl:!0},T.displayName="InputNumber";const z=T},2541:(e,n,r)=>{r.d(n,{Z:()=>D});var o=r(7294),t=r(4184),a=r.n(t),l=r(9074),i=r(3379),c=r.n(i),u=r(7795),d=r.n(u),f=r(569),s=r.n(f),m=r(3565),b=r.n(m),g=r(9216),p=r.n(g),v=r(4589),h=r.n(v),y=r(3929),_={};_.styleTagTransform=h(),_.setAttributes=b(),_.insert=s().bind(null,"head"),_.domAPI=d(),_.insertStyleElement=p();c()(y.Z,_);y.Z&&y.Z.locals&&y.Z.locals;function E(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var x=l.O,k=function(e){var n,r=e.className,t=e.value,l=e.checked,i=e.disabled,c=e.buttonStyle,u=e.children,d=e.onClick;return o.createElement(D,{className:"".concat(x,"-radio-button-wrapper"),value:t,checked:l,disabled:i,onClick:d},o.createElement("div",{className:a()(r,(n={},E(n,"".concat(x,"-radio-button"),!0),E(n,"".concat(x,"-radio-button--checked"),l),E(n,"".concat(x,"-radio-button--disabled"),i),E(n,"".concat(x,"-radio-button--").concat(c),l&&!i&&c),n))},u))};k.defaultProps={buttonStyle:"outline"};const w=k;var Z=r(4692),O=r(3477),C=r(6953),S={};S.styleTagTransform=h(),S.setAttributes=b(),S.insert=s().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=p();c()(C.Z,S);C.Z&&C.Z.locals&&C.Z.locals;var A=l.O,P=function(e){var n=e.className,r=e.style,t=e.value,l=e.defaultValue,i=e.onChange,c=e.children,u=e.disabled,d=e.buttonStyle,f=(0,Z.Z)({value:t,defaultValue:l,onChange:i}),s=f.value,m=f.onChange,b=function(e){e.target.value!==s&&m(e.target.value)},g=(0,o.useMemo)((function(){var e=[];return o.Children.forEach(c,(function(n){n.type===D&&e.push(o.cloneElement(n,{checked:n.props.value===s,disabled:n.props.disabled||u,onClick:function(e){b(e),(0,O.mf)(n.props.onClick)&&n.props.onClick(e)}})),n.type===w&&e.push(o.cloneElement(n,{checked:n.props.value===s,disabled:n.props.disabled||u,onClick:function(e){b(e),(0,O.mf)(n.props.onClick)&&n.props.onClick(e)},buttonStyle:d}))})),e}),[c,s]);return o.createElement("div",{className:a()("".concat(A,"-radio-group"),n),style:r},g)};P.defaultProps={buttonStyle:"outline"};const j=P;var N=r(5026),I={};I.styleTagTransform=h(),I.setAttributes=b(),I.insert=s().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=p();c()(N.Z,I);N.Z&&N.Z.locals&&N.Z.locals;function T(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var z=l.O,V=function(e){var n,r=e.className,t=e.value,l=e.checked,i=e.defaultChecked,c=e.disabled,u=e.children,d=e.onClick,f=(0,Z.Z)({value:l,defaultValue:i,innerValueGetter:function(e){return e.target.checked}}),s=f.value,m=f.onChange;return o.createElement("div",{className:a()(r,(n={},T(n,"".concat(z,"-radio"),!0),T(n,"".concat(z,"-radio--checked"),s),T(n,"".concat(z,"-radio--disabled"),c),n))},o.createElement("label",{className:"".concat(z,"-radio__label")},o.createElement("input",{className:"".concat(z,"-radio__input"),type:"radio",value:t,checked:s||!1,onChange:m,disabled:c,onClick:function(e){return(0,O.mf)(d)&&d(e)}}),o.createElement("span",{className:"".concat(z,"-radio__dot")}),o.createElement("span",{className:"".concat(z,"-radio__content")},u)))};V.defaultProps={},V.Group=j,V.Button=w;const D=V},2127:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-form__item {\n  margin-bottom: 24px;\n}\n.fog-form__item,\n.fog-form__item *,\n.fog-form__item *:before,\n.fog-form__item *:after {\n  box-sizing: border-box;\n}\n.fog-form__item:last-child {\n  margin-bottom: 0;\n}\n.fog-form__item-label {\n  font-size: 14px;\n  line-height: 32px;\n}\n.fog-form--horizontal .fog-form__item {\n  display: flex;\n  align-items: flex-start;\n}\n.fog-form--horizontal .fog-form__item-label {\n  flex-shrink: 0;\n  text-align: right;\n  margin-right: 12px;\n}\n.fog-form--horizontal .fog-form__item-content {\n  flex-grow: 1;\n}\n",""]);const i=l},6961:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".form-demo .fog-form {\n  max-width: 500px;\n}\n",""]);const i=l},5790:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-form {\n  font-size: 14px;\n}\n.fog-form,\n.fog-form *,\n.fog-form *:before,\n.fog-form *:after {\n  box-sizing: border-box;\n}\n",""]);const i=l},6560:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const i=l},3929:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio-button-wrapper .fog-radio__dot {\n  display: none;\n}\n.fog-radio-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--fog-color);\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-transparent);\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.fog-radio-button--disabled {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-radio-button--checked {\n  position: relative;\n}\n.fog-radio-button--disabled.fog-radio-button--checked {\n  background-color: var(--fog-internal-color-disabled);\n}\n.fog-radio-button:not(.fog-radio-button--disabled):not(.fog-radio-button--checked):hover {\n  color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--outline {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:hover {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--outline:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-radio-button--solid {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-radio-button--solid:hover {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-radio-button--solid:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n",""]);const i=l},6953:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio-group {\n  display: inline-block;\n}\n.fog-radio-group,\n.fog-radio-group *,\n.fog-radio-group *:before,\n.fog-radio-group *:after {\n  box-sizing: border-box;\n}\n.fog-radio-group .fog-radio {\n  margin-right: 12px;\n}\n.fog-radio-group .fog-radio:last-child {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper {\n  margin-right: 0;\n}\n.fog-radio-group .fog-radio-button-wrapper .fog-radio-button {\n  border-radius: 0;\n  margin-right: -1px;\n}\n.fog-radio-group .fog-radio-button-wrapper:first-child .fog-radio-button {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n}\n.fog-radio-group .fog-radio-button-wrapper:last-child .fog-radio-button {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  margin-right: 0;\n}\n",""]);const i=l},5026:(e,n,r)=>{r.d(n,{Z:()=>i});var o=r(8081),t=r.n(o),a=r(3645),l=r.n(a)()(t());l.push([e.id,".fog-radio {\n  display: inline-block;\n}\n.fog-radio,\n.fog-radio *,\n.fog-radio *:before,\n.fog-radio *:after {\n  box-sizing: border-box;\n}\n.fog-radio__label {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.fog-radio__input[type=\"radio\"] {\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n.fog-radio__dot,\n.fog-radio__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.fog-radio__dot {\n  position: relative;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--fog-border-color-deep);\n  border-radius: 50%;\n  margin-right: 8px;\n  transition: all 0.3s;\n}\n.fog-radio__dot::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 8px;\n  height: 8px;\n  background-color: var(--fog-transparent);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.fog-radio__content {\n  color: var(--fog-color);\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-radio:not(.fog-radio--checked):not(.fog-radio--disabled):hover .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot {\n  border-color: var(--fog-primary-color);\n}\n.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-primary-color);\n}\n.fog-radio--disabled .fog-radio__content {\n  color: var(--fog-color-disabled);\n}\n.fog-radio--disabled .fog-radio__label {\n  cursor: not-allowed;\n}\n.fog-radio--disabled .fog-radio__dot {\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-background-color-disabled);\n}\n.fog-radio--disabled.fog-radio--checked .fog-radio__dot::after {\n  background-color: var(--fog-background-color-active);\n}\n",""]);const i=l}}]);