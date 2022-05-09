"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[7],{1320:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var a=t(7294),r=t(7368),o=t(9960),i=t(2041),l=t(4184),c=t.n(l),u=t(9074),s=t(4692),m=t(3477),p=t(8692),g=t(194),f=t(9940),d=t(3379),y=t.n(d),b=t(7795),h=t.n(b),v=t(569),E=t.n(v),Z=t(3565),_=t.n(Z),w=t(9216),S=t.n(w),k=t(4589),A=t.n(k),C=t(8456),P={};P.styleTagTransform=A(),P.setAttributes=_(),P.insert=E().bind(null,"head"),P.domAPI=h(),P.insertStyleElement=S();y()(C.Z,P);C.Z&&C.Z.locals&&C.Z.locals;function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N=u.O,z=g.Z.Option,O=function(e){var n=e.className,t=e.style,r=e.page,o=e.pageSize,i=e.defaultPage,l=e.defaultPageSize,u=e.total,d=e.pageSizeOptions,y=e.disabled,b=e.onChange,h=(0,a.useMemo)((function(){return(0,m.mf)(b)?b:function(){}}),[b]),v=(0,s.Z)({value:r,defaultValue:i}),E=v.value,Z=void 0===E?1:E,_=v.onChange,w=(0,s.Z)({value:o,defaultValue:l}),S=w.value,k=void 0===S?20:S,A=w.onChange,C=function(e){_(e),h(e,k)},P=(0,a.useRef)(null),O=(0,a.useMemo)((function(){return u>0&&k>0?Math.ceil(u/k):0}),[k,u]);return a.createElement("div",{className:c()("".concat(N,"-pagination"),n),style:t},O>0?a.createElement(a.Fragment,null,a.createElement(p.Z,{className:"".concat(N,"-pagination__item"),disabled:y||Z<=1,onClick:function(e){e.currentTarget.blur(),C(Z-1)}},a.createElement(f.Z,{type:"left"})),Array.from({length:O}).map((function(e,n){var t;return a.createElement(p.Z,{key:n,className:c()((t={},x(t,"".concat(N,"-pagination__item"),!0),x(t,"".concat(N,"-pagination__item--active"),n+1===Z),t)),disabled:y,onClick:function(){return n+1!==Z&&C(n+1)}},n+1)})),a.createElement(p.Z,{className:"".concat(N,"-pagination__item"),disabled:y||Z>=O,onClick:function(e){e.currentTarget.blur(),C(Z+1)}},a.createElement(f.Z,{type:"right"})),a.createElement("div",{className:"".concat(N,"-pagination__options-wrapper"),ref:P},a.createElement(g.Z,{className:"".concat(N,"-pagination__options"),value:k,onChange:function(e){_(1),A(e),h(1,e)},disabled:y,getPopupMountNode:function(){return P.current}},d.map((function(e){return a.createElement(z,{key:e,value:e},"".concat(e," / Page"))}))))):"empty")};O.defaultProps={total:0,pageSizeOptions:[10,20,50,100]};const T=O;const I=function(){return a.createElement(T,{total:100})};var M=t(2708);function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var a,r,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw r}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}const D=function(){var e=j((0,a.useState)(!1),2),n=e[0],t=e[1];return a.createElement(a.Fragment,null,a.createElement(T,{style:{marginRight:12},disabled:n,total:100}),a.createElement(M.Z,{checked:n,onChange:t}))};var F=t(4368),U={};U.styleTagTransform=A(),U.setAttributes=_(),U.insert=E().bind(null,"head"),U.domAPI=h(),U.insertStyleElement=S();y()(F.Z,U);F.Z&&F.Z.locals&&F.Z.locals;var V=r.w,B=r.c,$=V.pagination,q=$.demos,G=$.apiRows;const H=function(){return a.createElement("div",{className:"pagination-demo"},a.createElement("h1",null,"Pagination"),a.createElement("p",null,"Pagination displays corresponding data by page and pageSize."),a.createElement("h2",null,"Demo"),a.createElement(i.Z,{title:"Basic Usage",content:a.createElement(I,null),code:q["demo-1"]}),a.createElement(i.Z,{title:"Disabled",content:a.createElement(D,null),code:q["demo-2"]}),a.createElement("h2",null,"API"),a.createElement(o.Z,{columns:B,data:G.default}))}},4368:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(8081),r=t.n(a),o=t(3645),i=t.n(o)()(r());i.push([e.id,".pagination-demo {\n  position: static;\n}\n",""]);const l=i},8456:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(8081),r=t.n(a),o=t(3645),i=t.n(o)()(r());i.push([e.id,".fog-pagination {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-pagination,\n.fog-pagination *,\n.fog-pagination *:before,\n.fog-pagination *:after {\n  box-sizing: border-box;\n}\n.fog-pagination__item {\n  padding: 4px;\n  min-width: 32px;\n  margin-right: 8px;\n}\n.fog-pagination__item--active {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n}\n.fog-pagination__options-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.fog-pagination__options {\n  width: 120px;\n}\n",""]);const l=i}}]);