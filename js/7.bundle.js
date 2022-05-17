"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[7],{2255:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var r=t(7294),o=t(7368),a=t(9960),i=t(2041),l=t(4184),u=t.n(l),c=t(9074),s=t(9171),d=t(9940),f=t(4692),m=(t(8913),t(3379)),p=t.n(m),g=t(7795),b=t.n(g),y=t(569),h=t.n(y),_=t(3565),v=t.n(_),x=t(9216),E=t.n(x),Z=t(4589),w=t.n(Z),O=t(6560),A={};A.styleTagTransform=w(),A.setAttributes=v(),A.insert=h().bind(null,"head"),A.domAPI=b(),A.insertStyleElement=E();p()(O.Z,A);O.Z&&O.Z.locals&&O.Z.locals;var N=["className","value","defaultValue","onChange","placeholder","disabled","readOnly","prefix","suffix"];function C(){return C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},C.apply(this,arguments)}function S(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function I(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var P=c.O,k=(0,r.forwardRef)((function(e,n){var t=e.className,o=e.value,a=e.defaultValue,i=e.onChange,l=e.placeholder,c=e.disabled,m=e.readOnly,p=e.prefix,g=e.suffix,b=I(e,N),y=(0,f.Z)({value:o,defaultValue:a,onChange:i,innerValueGetter:function(e){return e.target.value}}),h=y.value,_=y.onChange,v=S((0,r.useState)(!1),2),x=v[0],E=v[1],Z=(0,r.useRef)(null),w=n||Z;return r.createElement(s.Z,C({focused:x,disabled:c,readOnly:m,prefix:p,suffix:g,onClick:function(){return w.current.focus()}},b),r.createElement("input",{className:u()(t,"".concat(P,"-input"),"".concat(P,"-input-number")),ref:w,value:h||"",disabled:c,readOnly:m,placeholder:l,onFocus:function(){return E(!0)},onBlur:function(){return E(!1)},onChange:_}),r.createElement("div",{className:"".concat(P,"-input-number__triggers")},r.createElement(d.Z,{className:"".concat(P,"-input-number__trigger"),type:"up"}),r.createElement(d.Z,{className:"".concat(P,"-input-number__trigger"),type:"down"})))}));k.defaultProps={},k.displayName="InputNumber";const M=k;const z=function(){return r.createElement(M,{placeholder:"Please input"})};const T=function(){return r.createElement(M,{placeholder:"Please input",prefix:"$"})};var R=t(930),U={};U.styleTagTransform=w(),U.setAttributes=v(),U.insert=h().bind(null,"head"),U.domAPI=b(),U.insertStyleElement=E();p()(R.Z,U);R.Z&&R.Z.locals&&R.Z.locals;var V=o.w,B=o.c,$=V["input-number"],L=$.demos,D=$.apiRows;const F=function(){return r.createElement("div",{className:"input-number-demo"},r.createElement("h1",null,"InputNumber"),r.createElement("p",null,"InputNumber is used to type numeric text."),r.createElement("h2",null,"Demo"),r.createElement(i.Z,{title:"Basic Usage",content:r.createElement(z,null),code:L["demo-1"]}),r.createElement(i.Z,{title:"Prefix",content:r.createElement(T,null),code:L["demo-2"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:B,data:D.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(7294),o=t(9074),a=t(2282),i=t(5046),l=t(4346),u=t(6032),c=t(2022),s=t(9940),d=t(7618),f=t(3379),m=t.n(f),p=t(7795),g=t.n(p),b=t(569),y=t.n(b),h=t(3565),_=t.n(h),v=t(9216),x=t.n(v),E=t(4589),Z=t.n(E),w=t(1738),O={};O.styleTagTransform=Z(),O.setAttributes=_(),O.insert=y().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=x();m()(w.Z,O);w.Z&&w.Z.locals&&w.Z.locals;function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var C=o.O;a.Z.registerLanguage("tsx",i.Z);const S=function(e){var n=e.title,t=e.description,o=e.content,i=e.code,f=(0,r.useContext)(c.f),m=A((0,r.useState)(!1),2),p=m[0],g=m[1],b=A((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),y=b[0],h=b[1],_=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(p&&ResizeObserver&&_.current){var e=new ResizeObserver((function(){var e=_.current.getBoundingClientRect().height;h(e)}));return e.observe(_.current),function(){return e.disconnect()}}}),[p]),(0,r.useEffect)((function(){return d.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(C,"-demo")},r.createElement("h3",{className:"".concat(C,"-demo__title")},r.createElement("span",null,n),r.createElement("div",{className:"".concat(C,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(i).then((function(){return d.Z.success({content:"Code copied"})})).catch((function(){return d.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return g(!p)}}))),t&&r.createElement("p",{className:"".concat(C,"-demo__description")},t),r.createElement("div",{className:"".concat(C,"-demo__content")},o),r.createElement("div",{className:"".concat(C,"-demo__code-wrapper"),style:{height:p?y:0}},r.createElement("div",{ref:_},r.createElement(a.Z,{className:"".concat(C,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:f?u.Z:l.Z},i))))}},930:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,".input-number-demo {\n  position: static;\n}\n.input-number-demo .fog-demo__content > .fog-input-number,\n.input-number-demo .fog-demo__content > .fog-input-wrapper {\n  width: 300px;\n  margin: 0 12px 12px 0;\n}\n.input-number-demo .fog-demo__content > .fog-input-number:last-child,\n.input-number-demo .fog-demo__content > .fog-input-wrapper:last-child {\n  margin-bottom: 0;\n}\n",""]);const l=i},6560:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,".fog-input-number,\n.fog-input-number *,\n.fog-input-number *:before,\n.fog-input-number *:after {\n  box-sizing: border-box;\n}\n.fog-input-number__triggers {\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid var(--fog-border-color);\n  transition: border-color 0.3s;\n}\n.fog-input-number__triggers .fog-input-number__trigger {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 15px;\n  font-size: 10px;\n  transition: border-color 0.3s;\n  cursor: pointer;\n}\n.fog-input-number__triggers .fog-input-number__trigger:first-child {\n  border-bottom: 0.5px solid var(--fog-border-color);\n}\n.fog-input-number__triggers .fog-input-number__trigger:last-child {\n  border-top: 0.5px solid var(--fog-border-color);\n}\n",""]);const l=i},1738:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const l=i}}]);