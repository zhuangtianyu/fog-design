"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[24],{6383:(n,e,t)=>{t.d(e,{Z:()=>I});var r=t(7294),o=t(4184),a=t.n(o),i=t(9074),l=t(9171),u=t(9940),c=t(4692),s=t(3477),f=(t(8913),t(3379)),m=t.n(f),p=t(7795),g=t.n(p),d=t(569),b=t.n(d),y=t(3565),v=t.n(y),h=t(9216),_=t.n(h),E=t(4589),w=t.n(E),x=t(6560),Z={};Z.styleTagTransform=w(),Z.setAttributes=v(),Z.insert=b().bind(null,"head"),Z.domAPI=g(),Z.insertStyleElement=_();m()(x.Z,Z);x.Z&&x.Z.locals&&x.Z.locals;var S=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix","min","max","step","showControl","keepControl","onBlur","onEnter"];function A(){return A=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},A.apply(this,arguments)}function C(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function N(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return O(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function k(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var j=i.O,T=function(n){return(0,s.v5)(n)?"".concat(n):""},M=function(n,e){return""===n||isNaN(Number(n))?e:Number(n)},P=(0,r.forwardRef)((function(n,e){var t,o,i=n.className,f=n.value,m=n.defaultValue,p=n.onChange,g=n.placeholder,d=n.disabled,b=n.readOnly,y=n.prefix,v=n.suffix,h=n.min,_=n.max,E=n.step,w=n.showControl,x=n.keepControl,Z=n.onBlur,O=n.onEnter,P=k(n,S),I=(0,c.Z)({value:f,defaultValue:m,onChange:p,innerValueGetter:function(n){return n.target.value}}),z=I.value,D=I.onChange,B=N((0,r.useState)(!1),2),F=B[0],J=B[1],U=N((0,r.useState)(!1),2),V=U[0],R=U[1],$=(0,r.useRef)(null),L=e||$,G=N((0,r.useState)(""),2),K=G[0],q=G[1];(0,r.useEffect)((function(){q(T(z))}),[z]);var H=function(n){return null===n?null:"number"!=typeof h&&"number"!=typeof _?n:"number"==typeof h&&"number"!=typeof _?Math.max(h,n):"number"!=typeof h&&"number"==typeof _?Math.min(_,n):h>_?n:n<h?h:n>_?_:n},Q=function(n){!F&&L.current.focus();var e=(0,s.gs)(M(K,0)+n*E),t=H(e);D({target:{value:t}})};return r.createElement(l.Z,A({className:a()(i,(t={},C(t,"".concat(j,"-input-number"),!0),C(t,"".concat(j,"-input-number--focused"),F),C(t,"".concat(j,"-input-number--entered"),V),C(t,"".concat(j,"-input-number--keep-control"),x),t)),focused:F,disabled:d,readOnly:b,prefix:y,suffix:v,onClick:function(){return L.current.focus()},onMouseEnter:function(){return R(!0)},onMouseLeave:function(){return R(!1)}},P),r.createElement("input",{className:"".concat(j,"-input"),ref:L,value:K,disabled:d,readOnly:b,placeholder:g,onFocus:function(){return J(!0)},onBlur:function(n){var e=M(n.target.value,null),t=H(e);n.target.value=t,t!==z&&D(n),q(T(t)),J(!1),(0,s.mf)(Z)&&Z(n)},onChange:function(n){(0,s.At)(n.target.value)&&q(n.target.value)},onKeyDown:function(n){if("ArrowUp"===n.key&&(n.preventDefault(),Q(1)),"ArrowDown"===n.key&&(n.preventDefault(),Q(-1)),"Enter"===n.key){var e=M(n.currentTarget.value,null),t=H(e);n.currentTarget.value=t,t!==z&&D(n),q(T(t)),(0,s.mf)(O)&&O(n)}}}),w&&r.createElement("div",{className:a()((o={},C(o,"".concat(j,"-input-number__control"),!0),C(o,"".concat(j,"-input-number__control--disabled"),d),C(o,"".concat(j,"-input-number__control--border-right"),v),o))},r.createElement(u.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(n){return n.preventDefault()},onClick:function(){return!d&&Q(1)},type:"up"}),r.createElement(u.Z,{className:"".concat(j,"-input-number__step"),onMouseDown:function(n){return n.preventDefault()},onClick:function(){return!d&&Q(-1)},type:"down"})))}));P.defaultProps={step:1,showControl:!0,keepControl:!0},P.displayName="InputNumber";const I=P},1880:(n,e,t)=>{t.r(e),t.d(e,{default:()=>an});var r=t(7294),o=t(7368),a=t(9960),i=t(7385),l=t(2041),u=t(4184),c=t.n(u),s=t(9074),f=t(4692),m=t(3477),p=t(8692),g=t(194),d=t(9940),b=t(6383),y=t(3379),v=t.n(y),h=t(7795),_=t.n(h),E=t(569),w=t.n(E),x=t(3565),Z=t.n(x),S=t(9216),A=t.n(S),C=t(4589),N=t.n(C),O=t(9557),k={};k.styleTagTransform=N(),k.setAttributes=Z(),k.insert=w().bind(null,"head"),k.domAPI=_(),k.insertStyleElement=A();v()(O.Z,k);O.Z&&O.Z.locals&&O.Z.locals;function j(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function T(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return M(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var P=s.O;const I=function(n){var e,t,o,a=n.index,i=n.page,l=n.pageCount,u=n.disabled,s=n.onPageChange,f=a+1,m=T((0,r.useState)(!1),2),g=m[0],b=m[1],y=T((0,r.useState)(!1),2),v=y[0],h=y[1],_=Math.max(5-l+i,3),E=Math.max(5-i+1,3);return 1===f?r.createElement(p.Z,{className:c()((e={},j(e,"".concat(P,"-pagination__item"),!0),j(e,"".concat(P,"-pagination__item--active"),1===i),e)),disabled:u,onClick:function(){return 1!==i&&s(1)}},a+1):f===l?r.createElement(p.Z,{className:c()((t={},j(t,"".concat(P,"-pagination__item"),!0),j(t,"".concat(P,"-pagination__item--active"),i===l),t)),disabled:u,onClick:function(){return i!==l&&s(l)}},a+1):f===i-_?r.createElement(p.Z,{className:c()(["".concat(P,"-pagination__item"),"".concat(P,"-pagination__item--ellipsis")]),disabled:u,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},onClick:function(n){n.currentTarget.blur(),s(Math.max(1,i-5))}},r.createElement(d.Z,{type:g?"double-left":"more"})):f===i+E?r.createElement(p.Z,{className:c()(["".concat(P,"-pagination__item"),"".concat(P,"-pagination__item--ellipsis")]),disabled:u,onMouseEnter:function(){return h(!0)},onMouseLeave:function(){return h(!1)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},onClick:function(n){n.currentTarget.blur(),s(Math.min(l,i+5))}},r.createElement(d.Z,{type:v?"double-right":"more"})):f<i-_||f>i+E?null:r.createElement(p.Z,{className:c()((o={},j(o,"".concat(P,"-pagination__item"),!0),j(o,"".concat(P,"-pagination__item--active"),a+1===i),o)),disabled:u,onClick:function(){return a+1!==i&&s(a+1)}},a+1)};var z=t(8456),D={};D.styleTagTransform=N(),D.setAttributes=Z(),D.insert=w().bind(null,"head"),D.domAPI=_(),D.insertStyleElement=A();v()(z.Z,D);z.Z&&z.Z.locals&&z.Z.locals;function B(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var J=s.O,U=g.Z.Option,V=function(n){var e=n.className,t=n.style,o=n.page,a=n.pageSize,i=n.defaultPage,l=n.defaultPageSize,u=n.total,s=n.pageSizeOptions,y=n.disabled,v=n.showTotal,h=n.showJumper,_=n.onChange,E=B((0,r.useState)(null),2),w=E[0],x=E[1],Z=(0,r.useMemo)((function(){return(0,m.mf)(_)?_:function(){}}),[_]),S=(0,f.Z)({value:o,defaultValue:i}),A=S.value,C=void 0===A?1:A,N=S.onChange,O=(0,f.Z)({value:a,defaultValue:l}),k=O.value,j=void 0===k?20:k,T=O.onChange,M=function(n){N(n),Z(n,j)},P=function(n,e){x(n),setTimeout((function(){x(e)}))},z=(0,r.useRef)(null),D=(0,r.useMemo)((function(){return u>0&&j>0?Math.ceil(u/j):0}),[j,u]),F=(0,r.useMemo)((function(){if(!v)return null;var n=null;if("function"==typeof v){var e=[];e[0]=(C-1)*j+1,e[1]=Math.min(C*j,u),n=v(u,e)}else n="Total ".concat(u," items");return r.createElement("span",{className:"".concat(J,"-pagination__total")},n)}),[v,u,C,j]);return r.createElement("div",{className:c()("".concat(J,"-pagination"),e),style:t},D>0?r.createElement(r.Fragment,null,F,r.createElement(p.Z,{className:"".concat(J,"-pagination__item"),disabled:y||C<=1,onClick:function(n){n.currentTarget.blur(),M(C-1)}},r.createElement(d.Z,{type:"left"})),Array.from({length:D}).map((function(n,e){return r.createElement(I,{key:e,index:e,page:C,pageCount:D,disabled:y,onPageChange:M})})),r.createElement(p.Z,{className:"".concat(J,"-pagination__item"),disabled:y||C>=D,onClick:function(n){n.currentTarget.blur(),M(C+1)}},r.createElement(d.Z,{type:"right"})),r.createElement("div",{className:"".concat(J,"-pagination__options-wrapper"),ref:z},r.createElement(g.Z,{className:"".concat(J,"-pagination__options"),value:j,onChange:function(n){N(1),T(n),Z(1,n)},disabled:y,getPopupMountNode:function(){return z.current}},s.map((function(n){return r.createElement(U,{key:n,value:n},"".concat(n," / Page"))})))),h&&r.createElement("div",{className:"".concat(J,"-pagination__jumper")},r.createElement("span",{className:"".concat(J,"-pagination__jumper-text")},"Go to"),r.createElement(b.Z,{className:"".concat(J,"-pagination__jumper-input"),placeholder:"Page",value:w,min:1,max:D,showControl:!1,onBlur:function(n){P(Number(n.target.value),null)},onEnter:function(n){if(""!==n.currentTarget.value){var e=Number(n.currentTarget.value);N(e),Z(e,j),P(Number(n.currentTarget.value),null)}}}))):"empty")};V.defaultProps={total:0,pageSizeOptions:[10,20,50,100]};const R=V;const $=function(){return r.createElement(R,{total:100})};var L=t(2708);function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return K(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}const q=function(){var n=G((0,r.useState)(!1),2),e=n[0],t=n[1];return r.createElement(r.Fragment,null,r.createElement(R,{style:{marginRight:12},disabled:e,total:100}),r.createElement(L.Z,{checked:e,onChange:t}))};const H=function(){return r.createElement(R,{total:100,showJumper:!0})};const Q=function(){return r.createElement(r.Fragment,null,r.createElement(R,{style:{marginBottom:12},total:100,showJumper:!0,showTotal:!0}),r.createElement("br",null),r.createElement(R,{total:100,showJumper:!0,showTotal:function(n,e){return"".concat(e[0],"-").concat(e[1]," of ").concat(n," items")}}))};const W=function(){return r.createElement(R,{total:200,showJumper:!0})};var X=t(4368),Y={};Y.styleTagTransform=N(),Y.setAttributes=Z(),Y.insert=w().bind(null,"head"),Y.domAPI=_(),Y.insertStyleElement=A();v()(X.Z,Y);X.Z&&X.Z.locals&&X.Z.locals;var nn=o.w,en=o.c,tn=nn.pagination,rn=tn.demos,on=tn.apiRows;const an=function(){return r.createElement("div",{className:"pagination-demo"},r.createElement(i.Z,null,"Pagination"),r.createElement("p",null,"Pagination displays corresponding data by page and pageSize."),r.createElement("h2",null,"Demo"),r.createElement(l.Z,{title:"Basic Usage",content:r.createElement($,null),code:rn["demo-1"]}),r.createElement(l.Z,{title:"Disabled",content:r.createElement(q,null),code:rn["demo-2"]}),r.createElement(l.Z,{title:"Jumper",content:r.createElement(H,null),code:rn["demo-3"]}),r.createElement(l.Z,{title:"Ellipsis",content:r.createElement(W,null),code:rn["demo-5"]}),r.createElement(l.Z,{title:"Total",content:r.createElement(Q,null),code:rn["demo-4"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:en,data:on.default}))}},6560:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__control {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.fog-input-number--focused .fog-input-number__control,\n.fog-input-number--entered .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number--keep-control .fog-input-number__control {\n  opacity: 1;\n}\n.fog-input-number__control--border-right {\n  border-right: 1px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__control .fog-input-number__step:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control .fog-input-number__step:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__control--disabled,\n.fog-input-number__control--disabled .fog-input-number__step {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n",""]);const l=i},9557:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".fog-pagination__item {\n  padding: 4px;\n  min-width: 32px;\n  margin-right: 8px;\n}\n.fog-pagination__item,\n.fog-pagination__item *,\n.fog-pagination__item *:before,\n.fog-pagination__item *:after {\n  box-sizing: border-box;\n}\n.fog-pagination__item--active {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n}\n",""]);const l=i},4368:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".pagination-demo {\n  position: static;\n}\n",""]);const l=i},8456:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".fog-pagination {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-pagination,\n.fog-pagination *,\n.fog-pagination *:before,\n.fog-pagination *:after {\n  box-sizing: border-box;\n}\n.fog-pagination__total {\n  margin-right: 8px;\n}\n.fog-pagination__options-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.fog-pagination__options {\n  width: 120px;\n}\n.fog-pagination__jumper {\n  display: inline-block;\n  margin-left: 8px;\n}\n.fog-pagination__jumper-text {\n  display: inline-block;\n  margin-right: 8px;\n}\n.fog-pagination__jumper-input {\n  display: inline-block;\n  width: 60px;\n}\n",""]);const l=i}}]);