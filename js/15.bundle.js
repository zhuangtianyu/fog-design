"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[15],{9036:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});var o=t(7294),r=t(7368),a=t(9960),l=t(7385),c=t(2041),i=t(6049),s=["React","Vue","Angular"];const u=function(){return o.createElement(o.Fragment,null,s.map((function(e){return o.createElement(i.Z,{key:e},e)})))};var d=t(7618),m=["React","Vue","Angular"];const f=function(){return(0,o.useEffect)((function(){return d.Z.destroyAll}),[]),o.createElement(o.Fragment,null,m.map((function(e){return o.createElement(i.Z,{key:e,closable:!0,onClose:function(){return d.Z.success({content:"Tag closed!"})}},e)})))};var p=t(9940);const g=function(){var e=function(){return d.Z.success({content:"Tag closed!"})};return(0,o.useEffect)((function(){return d.Z.destroyAll}),[]),o.createElement(o.Fragment,null,o.createElement(i.Z,{closable:!0,onClose:e},o.createElement(p.Z,{type:"copy"}),"React"),o.createElement(i.Z,{closable:!0,onClose:e},o.createElement(p.Z,{type:"exchange"}),"Vue"),o.createElement(i.Z,null,o.createElement(p.Z,{type:"check"}),"Angular"))};const E=function(){return o.createElement(o.Fragment,null,o.createElement(i.Z,{closable:!0,disabled:!0},o.createElement(p.Z,{type:"copy"}),"React"),o.createElement(i.Z,{closable:!0,disabled:!0},o.createElement(p.Z,{type:"exchange"}),"Vue"),o.createElement(i.Z,{disabled:!0},o.createElement(p.Z,{type:"check"}),"Angular"))};var y=t(3379),b=t.n(y),Z=t(7795),h=t.n(Z),v=t(569),_=t.n(v),x=t(3565),A=t.n(x),w=t(9216),C=t.n(w),k=t(4589),N=t.n(k),R=t(3447),S={};S.styleTagTransform=N(),S.setAttributes=A(),S.insert=_().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=C();b()(R.Z,S);R.Z&&R.Z.locals&&R.Z.locals;var T=r.w,M=r.c,z=T.tag,I=z.demos,O=z.apiRows;const j=function(){return o.createElement("div",{className:"tag-demo"},o.createElement(l.Z,null,"Tag"),o.createElement("p",null,"Tag is used to display the content properties."),o.createElement("h2",null,"Demo"),o.createElement(c.Z,{title:"Basic Usage",content:o.createElement(u,null),code:I["demo-1"]}),o.createElement(c.Z,{title:"Closable",content:o.createElement(f,null),code:I["demo-2"]}),o.createElement(c.Z,{title:"With Icon",content:o.createElement(g,null),code:I["demo-3"]}),o.createElement(c.Z,{title:"Disabled",content:o.createElement(E,null),code:I["demo-4"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:M,data:O.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>R});var o=t(7294),r=t(9074),a=t(2282),l=t(5046),c=t(4346),i=t(6032),s=t(8849),u=t(9940),d=t(7618),m=t(3379),f=t.n(m),p=t(7795),g=t.n(p),E=t(569),y=t.n(E),b=t(3565),Z=t.n(b),h=t(9216),v=t.n(h),_=t(4589),x=t.n(_),A=t(1738),w={};w.styleTagTransform=x(),w.setAttributes=Z(),w.insert=y().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=v();f()(A.Z,w);A.Z&&A.Z.locals&&A.Z.locals;function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==t.return||t.return()}finally{if(c)throw r}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return k(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var N=r.O;a.Z.registerLanguage("tsx",l.Z);const R=function(e){var n=e.title,t=e.description,r=e.content,l=e.code,m=(0,o.useContext)(s.f),f=C((0,o.useState)(!1),2),p=f[0],g=f[1],E=C((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),y=E[0],b=E[1],Z=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(p&&ResizeObserver&&Z.current){var e=new ResizeObserver((function(){var e=Z.current.getBoundingClientRect().height;b(e)}));return e.observe(Z.current),function(){return e.disconnect()}}}),[p]),(0,o.useEffect)((function(){return d.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(N,"-demo")},o.createElement("h3",{className:"".concat(N,"-demo__title")},o.createElement("span",null,n),o.createElement("div",{className:"".concat(N,"-demo__options")},o.createElement(u.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(l).then((function(){return d.Z.success({content:"Code copied"})})).catch((function(){return d.Z.error({content:"Please copy manually"})}))}}),o.createElement(u.Z,{type:"code",onClick:function(){return g(!p)}}))),t&&o.createElement("p",{className:"".concat(N,"-demo__description")},t),o.createElement("div",{className:"".concat(N,"-demo__content")},r),o.createElement("div",{className:"".concat(N,"-demo__code-wrapper"),style:{height:p?y:0}},o.createElement("div",{ref:Z},o.createElement(a.Z,{className:"".concat(N,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:m?i.Z:c.Z},l))))}},3447:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,".tag-demo .fog-tag {\n  margin-right: 12px;\n}\n",""]);const c=l},1738:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),r=t.n(o),a=t(3645),l=t.n(a)()(r());l.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const c=l}}]);