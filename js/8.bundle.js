"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[8],{7031:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var r=t(7294),o=t(7368),l=t(9960),a=t(7385),u=t(2041),c=t(6383);const i=function(){return r.createElement(c.Z,{placeholder:"Please input"})};const s=function(){return r.createElement(c.Z,{placeholder:"Please input",prefix:"$"})};const f=function(){return r.createElement(c.Z,{placeholder:"Please input",prefix:"$",suffix:"/L"})};const m=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set keepControl to false, then the control will only show on hover or focus."),r.createElement(c.Z,{placeholder:"Please input",keepControl:!1}),r.createElement(c.Z,{placeholder:"Please input",prefix:"$",keepControl:!1}),r.createElement(c.Z,{placeholder:"Please input",prefix:"$",suffix:"/L",keepControl:!1}))};const p=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set min value to 0 and max value to 10."),r.createElement(c.Z,{placeholder:"Please input",min:0,max:10}))};var d=t(7618);const b=function(){return(0,r.useEffect)((function(){return function(){return d.Z.destroyAll()}}),[]),r.createElement(r.Fragment,null,r.createElement("p",null,"Set min value to 0 and max value to 10."),r.createElement(c.Z,{placeholder:"Please input",min:0,max:10,onEnter:function(e){d.Z.info({content:"Entered value: ".concat(e.currentTarget.value)})}}))};const g=function(){return r.createElement(c.Z,{placeholder:"Please input",disabled:!0})};const h=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"Set showControl to false, then the control will never show."),r.createElement(c.Z,{placeholder:"Please input",showControl:!1}),r.createElement(c.Z,{placeholder:"Please input",prefix:"$",showControl:!1}),r.createElement(c.Z,{placeholder:"Please input",prefix:"$",suffix:"/L",showControl:!1}))};var y=t(3379),v=t.n(y),_=t(7795),E=t.n(_),x=t(569),Z=t.n(x),w=t(3565),C=t.n(w),S=t(9216),A=t.n(S),O=t(4589),N=t.n(O),k=t(930),P={};P.styleTagTransform=N(),P.setAttributes=C(),P.insert=Z().bind(null,"head"),P.domAPI=E(),P.insertStyleElement=A();v()(k.Z,P);k.Z&&k.Z.locals&&k.Z.locals;var j=o.w,M=o.c,I=j["input-number"],T=I.demos,D=I.apiRows;const z=function(){return r.createElement("div",{className:"input-number-demo"},r.createElement(a.Z,null,"InputNumber"),r.createElement("p",null,"InputNumber is used to type numeric text."),r.createElement("h2",null,"Demo"),r.createElement(u.Z,{title:"Basic Usage",content:r.createElement(i,null),code:T["demo-1"]}),r.createElement(u.Z,{title:"Disabled",content:r.createElement(g,null),code:T["demo-7"]}),r.createElement(u.Z,{title:"Range",content:r.createElement(p,null),code:T["demo-5"]}),r.createElement(u.Z,{title:"Enter",content:r.createElement(b,null),code:T["demo-6"]}),r.createElement(u.Z,{title:"Prefix",content:r.createElement(s,null),code:T["demo-2"]}),r.createElement(u.Z,{title:"Suffix",content:r.createElement(f,null),code:T["demo-3"]}),r.createElement(u.Z,{title:"ShowControl",content:r.createElement(h,null),code:T["demo-8"]}),r.createElement(u.Z,{title:"KeepControl",content:r.createElement(m,null),code:T["demo-4"]}),r.createElement("h2",null,"API"),r.createElement(l.Z,{columns:M,data:D.default}))}},6383:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7294),o=t(4184),l=t.n(o),a=t(9074),u=t(9171),c=t(9940),i=t(4692),s=t(3477),f=(t(8913),t(3379)),m=t.n(f),p=t(7795),d=t.n(p),b=t(569),g=t.n(b),h=t(3565),y=t.n(h),v=t(9216),_=t.n(v),E=t(4589),x=t.n(E),Z=t(6560),w={};w.styleTagTransform=x(),w.setAttributes=y(),w.insert=g().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=_();m()(Z.Z,w);Z.Z&&Z.Z.locals&&Z.Z.locals;var C=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onBlur","onEnter"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},S.apply(this,arguments)}function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,l=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return l}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function k(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var P=a.O,j=function(e){return(0,s.v5)(e)?"".concat(e):""},M=function(e,n){return""===e||isNaN(Number(e))?n:Number(e)},I=(0,r.forwardRef)((function(e,n){var t,o,a=e.className,f=e.value,m=e.defaultValue,p=e.onChange,d=e.placeholder,b=e.disabled,g=e.readOnly,h=e.prefix,y=e.suffix,v=e.min,_=e.max,E=e.step,x=e.showControl,Z=e.keepControl,w=e.onBlur,N=e.onEnter,I=k(e,C),T=(0,i.Z)({value:f,defaultValue:m,onChange:p}),D=T.value,z=T.onChange,R=O((0,r.useState)(!1),2),$=R[0],L=R[1],U=O((0,r.useState)(!1),2),B=U[0],F=U[1],V=(0,r.useRef)(null),K=n||V,q=O((0,r.useState)(""),2),G=q[0],H=q[1];(0,r.useEffect)((function(){H(j(D))}),[D]);var J=function(e){return null===e?null:"number"!=typeof v&&"number"!=typeof _?e:"number"==typeof v&&"number"!=typeof _?Math.max(v,e):"number"!=typeof v&&"number"==typeof _?Math.min(_,e):v>_?e:e<v?v:e>_?_:e},Q=function(e){!$&&K.current.focus();var n=M(G,0)+e*E,t=J(n);z(t)};return r.createElement(u.Z,S({className:l()(a,(t={},A(t,"".concat(P,"-input-number"),!0),A(t,"".concat(P,"-input-number--focused"),$),A(t,"".concat(P,"-input-number--entered"),B),A(t,"".concat(P,"-input-number--keep-control"),Z),t)),focused:$,disabled:b,readOnly:g,prefix:h,suffix:y,onClick:function(){return K.current.focus()},onMouseEnter:function(){return F(!0)},onMouseLeave:function(){return F(!1)}},I),r.createElement("input",{className:"".concat(P,"-input"),ref:K,value:G,disabled:b,readOnly:g,placeholder:d,onFocus:function(){return L(!0)},onBlur:function(e){var n=M(e.target.value,null),t=J(n);t!==D&&z(t),H(j(t)),L(!1),e.currentTarget.value=t,(0,s.mf)(w)&&w(e)},onChange:function(e){(0,s.At)(e.target.value)&&H(e.target.value)},onKeyDown:function(e){if("ArrowUp"===e.key&&(e.preventDefault(),Q(1)),"ArrowDown"===e.key&&(e.preventDefault(),Q(-1)),"Enter"===e.key){var n=M(e.currentTarget.value,null),t=J(n);t!==D&&z(t),H(j(t)),e.currentTarget.value=t,(0,s.mf)(N)&&N(e)}}}),x&&r.createElement("div",{className:l()((o={},A(o,"".concat(P,"-input-number__control"),!0),A(o,"".concat(P,"-input-number__control--disabled"),b),A(o,"".concat(P,"-input-number__control--border-right"),y),o))},r.createElement(c.Z,{className:"".concat(P,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!b&&Q(1)},type:"up"}),r.createElement(c.Z,{className:"".concat(P,"-input-number__step"),onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!b&&Q(-1)},type:"down"})))}));I.defaultProps={step:1,showControl:!0,keepControl:!0},I.displayName="InputNumber";const T=I},2041:(e,n,t)=>{t.d(n,{Z:()=>N});var r=t(7294),o=t(9074),l=t(2282),a=t(5046),u=t(4346),c=t(6032),i=t(8849),s=t(9940),f=t(7618),m=t(3379),p=t.n(m),d=t(7795),b=t.n(d),g=t(569),h=t.n(g),y=t(3565),v=t.n(y),_=t(9216),E=t.n(_),x=t(4589),Z=t.n(x),w=t(1738),C={};C.styleTagTransform=Z(),C.setAttributes=v(),C.insert=h().bind(null,"head"),C.domAPI=b(),C.insertStyleElement=E();p()(w.Z,C);w.Z&&w.Z.locals&&w.Z.locals;function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,l=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return l}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var O=o.O;l.Z.registerLanguage("tsx",a.Z);const N=function(e){var n=e.title,t=e.description,o=e.content,a=e.code,m=(0,r.useContext)(i.f),p=S((0,r.useState)(!1),2),d=p[0],b=p[1],g=S((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),h=g[0],y=g[1],v=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(d&&ResizeObserver&&v.current){var e=new ResizeObserver((function(){var e=v.current.getBoundingClientRect().height;y(e)}));return e.observe(v.current),function(){return e.disconnect()}}}),[d]),(0,r.useEffect)((function(){return f.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(O,"-demo")},r.createElement("h3",{className:"".concat(O,"-demo__title")},r.createElement("span",null,n),r.createElement("div",{className:"".concat(O,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(a).then((function(){return f.Z.success({content:"Code copied"})})).catch((function(){return f.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return b(!d)}}))),t&&r.createElement("p",{className:"".concat(O,"-demo__description")},t),r.createElement("div",{className:"".concat(O,"-demo__content")},o),r.createElement("div",{className:"".concat(O,"-demo__code-wrapper"),style:{height:d?h:0}},r.createElement("div",{ref:v},r.createElement(l.Z,{className:"".concat(O,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:m?c.Z:u.Z},a))))}},930:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,".input-number-demo {\n  position: static;\n}\n.input-number-demo .fog-demo__content > .fog-input-number,\n.input-number-demo .fog-demo__content > .fog-input-wrapper {\n  width: 300px;\n  margin: 0 12px 12px 0;\n}\n.input-number-demo .fog-demo__content > .fog-input-number:last-child,\n.input-number-demo .fog-demo__content > .fog-input-wrapper:last-child {\n  margin-bottom: 0;\n}\n",""]);const u=a},6560:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const u=a},1738:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(8081),o=t.n(r),l=t(3645),a=t.n(l)()(o());a.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const u=a}}]);