"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[18],{7349:(n,o,r)=>{r.d(o,{Z:()=>O});var e=r(7294),t=r(4184),a=r.n(t),c=r(9074),l=r(9940),i=r(3379),u=r.n(i),s=r(7795),f=r.n(s),g=r(569),d=r.n(g),m=r(3565),b=r.n(m),p=r(9216),v=r.n(p),y=r(4589),h=r.n(y),Z=r(7082),E={};E.styleTagTransform=h(),E.setAttributes=b(),E.insert=d().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=v();u()(Z.Z,E);Z.Z&&Z.Z.locals&&Z.Z.locals;var k=["className","type","shape","danger","loading","disabled","children","onClick"];function x(){return x=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},x.apply(this,arguments)}function _(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}function C(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},a=Object.keys(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)r=a[e],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var A=c.O;const O=(0,e.forwardRef)((function(n,o){var r,t=n.className,c=n.type,i=n.shape,u=n.danger,s=n.loading,f=n.disabled,g=n.children,d=n.onClick,m=C(n,k),b=(0,e.useMemo)((function(){var n=[],o=e.createElement(l.Z,{className:"".concat(A,"-button__loading"),key:"loading",type:"loading"}),r=!1;return e.Children.forEach(g,(function(t,a){if(["string","number"].includes(w(t))){var c=e.createElement("span",{key:a},t);return n.push(c)}if(t.type===l.Z)return s?(r=!0,n.push(o)):n.push(t);n.push(t)})),s&&!r&&n.unshift(o),n}),[g,s]),p=(0,e.useMemo)((function(){return 1===b.length&&b[0].type===l.Z}),[b]);return e.createElement("button",x({className:a()("".concat(A,"-button"),t,(r={},_(r,"".concat(A,"-button--").concat(c),c),_(r,"".concat(A,"-button--").concat(i),i),_(r,"".concat(A,"-button--danger"),u),_(r,"".concat(A,"-button--loading"),s),_(r,"".concat(A,"-button--icon-isolated"),p),r)),ref:o,disabled:f,onClick:f||s?function(){}:d},m),b)}))},8544:(n,o,r)=>{r.r(o),r.d(o,{default:()=>I});var e=r(7294),t=r(7368),a=r(9960),c=r(2041),l=r(7618),i=r(7349);const u=function(){return e.createElement(i.Z,{onClick:function(){return l.Z.info({content:"Basic usage"})}},"Click me")};const s=function(){return e.createElement(e.Fragment,null,e.createElement(i.Z,{onClick:function(){return l.Z.info({content:"Subscribe the news"})}},"Info"),e.createElement(i.Z,{onClick:function(){return l.Z.error({content:"Login required"})}},"Error"),e.createElement(i.Z,{onClick:function(){return l.Z.warning({content:"Remember password"})}},"Warning"),e.createElement(i.Z,{onClick:function(){return l.Z.success({content:"Login success"})}},"Success"))};var f=r(9940);const g=function(){return e.createElement(e.Fragment,null,e.createElement(i.Z,{onClick:function(){return l.Z.error({icon:e.createElement(f.Z,{type:"doubt-circle-fill",color:"var(--fog-danger-color)"}),content:"Are you sure?"})}},"Doubt"),e.createElement(i.Z,{onClick:function(){return l.Z.info({icon:null,content:"Just no icon"})}},"No icon"))};const d=function(){var n=(0,e.useRef)(null);return(0,e.useEffect)((function(){return function(){n.current&&(n.current.destroy(),n.current=null)}}),[]),e.createElement(e.Fragment,null,e.createElement(i.Z,{onClick:function(){n.current||(n.current=l.Z.info({content:"The waves lapping the shore endlessly",duration:0}))}},"Open"),e.createElement(i.Z,{onClick:function(){n.current&&(n.current.destroy(),n.current=null)}},"Close"))};const m=function(){return e.createElement(e.Fragment,null,e.createElement(i.Z,{onClick:function(){return l.Z.info({content:"The signal disappears into the night"})}},"Click me"),e.createElement(i.Z,{onClick:function(){return l.Z.destroyAll()}},"DestroyAll"))};var b=r(3379),p=r.n(b),v=r(7795),y=r.n(v),h=r(569),Z=r.n(h),E=r(3565),k=r.n(E),x=r(9216),_=r.n(x),w=r(4589),C=r.n(w),A=r(9263),O={};O.styleTagTransform=C(),O.setAttributes=k(),O.insert=Z().bind(null,"head"),O.domAPI=y(),O.insertStyleElement=_();p()(A.Z,O);A.Z&&A.Z.locals&&A.Z.locals;var S=t.w,M=t.c,N=S.message,j=N.demos,z=N.apiRows;const I=function(){return e.createElement("div",{className:"message-demo"},e.createElement("h1",null,"Message"),e.createElement("p",null,"Message is used for push message notifications."),e.createElement("h2",null,"Demo"),e.createElement(c.Z,{title:"Basic Usage",content:e.createElement(u,null),code:j["demo-1"]}),e.createElement(c.Z,{title:"Method",content:e.createElement(s,null),code:j["demo-2"]}),e.createElement(c.Z,{title:"Customized Icon",content:e.createElement(g,null),code:j["demo-3"]}),e.createElement(c.Z,{title:"Manual Close",content:e.createElement(d,null),code:j["demo-4"]}),e.createElement(c.Z,{title:"DestroyAll",description:"Destroy all references at some time, e.g. a route change happens.",content:e.createElement(m,null),code:j["demo-5"]}),e.createElement("h2",null,"API"),e.createElement(a.Z,{columns:M,data:z.default}))}},2041:(n,o,r)=>{r.d(o,{Z:()=>S});var e=r(7294),t=r(9074),a=r(2282),c=r(5046),l=r(4346),i=r(6032),u=r(2022),s=r(9940),f=r(7618),g=r(3379),d=r.n(g),m=r(7795),b=r.n(m),p=r(569),v=r.n(p),y=r(3565),h=r.n(y),Z=r(9216),E=r.n(Z),k=r(4589),x=r.n(k),_=r(1738),w={};w.styleTagTransform=x(),w.setAttributes=h(),w.insert=v().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=E();d()(_.Z,w);_.Z&&_.Z.locals&&_.Z.locals;function C(n,o){return function(n){if(Array.isArray(n))return n}(n)||function(n,o){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var e,t,a=[],c=!0,l=!1;try{for(r=r.call(n);!(c=(e=r.next()).done)&&(a.push(e.value),!o||a.length!==o);c=!0);}catch(n){l=!0,t=n}finally{try{c||null==r.return||r.return()}finally{if(l)throw t}}return a}(n,o)||function(n,o){if(!n)return;if("string"==typeof n)return A(n,o);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(n,o)}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,o){(null==o||o>n.length)&&(o=n.length);for(var r=0,e=new Array(o);r<o;r++)e[r]=n[r];return e}var O=t.O;a.Z.registerLanguage("tsx",c.Z);const S=function(n){var o=n.title,r=n.description,t=n.content,c=n.code,g=(0,e.useContext)(u.f),d=C((0,e.useState)(!1),2),m=d[0],b=d[1],p=C((0,e.useState)((function(){return ResizeObserver?0:"auto"})),2),v=p[0],y=p[1],h=(0,e.useRef)(null);(0,e.useLayoutEffect)((function(){if(m&&ResizeObserver&&h.current){var n=new ResizeObserver((function(){var n=h.current.getBoundingClientRect().height;y(n)}));return n.observe(h.current),function(){return n.disconnect()}}}),[m]),(0,e.useEffect)((function(){return f.Z.destroyAll}),[]);return e.createElement("div",{className:"".concat(O,"-demo")},e.createElement("h3",{className:"".concat(O,"-demo__title")},e.createElement("span",null,o),e.createElement("div",{className:"".concat(O,"-demo__options")},e.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(c).then((function(){return f.Z.success({content:"Code copied"})})).catch((function(){return f.Z.error({content:"Please copy manually"})}))}}),e.createElement(s.Z,{type:"code",onClick:function(){return b(!m)}}))),r&&e.createElement("p",{className:"".concat(O,"-demo__description")},r),e.createElement("div",{className:"".concat(O,"-demo__content")},t),e.createElement("div",{className:"".concat(O,"-demo__code-wrapper"),style:{height:m?v:0}},e.createElement("div",{ref:h},e.createElement(a.Z,{className:"".concat(O,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:g?i.Z:l.Z},c))))}},7082:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,".fog-button {\n  padding: 4px 16px;\n  font-size: 14px;\n  line-height: 22px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 2px;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--fog-color);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button,\n.fog-button *,\n.fog-button *:before,\n.fog-button *:after {\n  box-sizing: border-box;\n}\n.fog-button:hover,\n.fog-button:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-primary-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-primary-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color);\n}\n.fog-button--primary:hover,\n.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-hover);\n}\n.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-primary-color-active);\n}\n.fog-button--link {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:hover,\n.fog-button--link:focus {\n  color: var(--fog-primary-color-hover);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--link:active {\n  color: var(--fog-primary-color-active);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:hover,\n.fog-button--text:focus {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--text:active {\n  color: var(--fog-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger {\n  color: var(--fog-danger-color);\n  border-color: var(--fog-danger-color);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:hover,\n.fog-button--danger:focus {\n  color: var(--fog-danger-color-hover);\n  border-color: var(--fog-danger-color-hover);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger:active {\n  color: var(--fog-danger-color-active);\n  border-color: var(--fog-danger-color-active);\n  background-color: var(--fog-transparent);\n}\n.fog-button--danger.fog-button--primary {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color);\n}\n.fog-button--danger.fog-button--primary:hover,\n.fog-button--danger.fog-button--primary:focus {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-hover);\n}\n.fog-button--danger.fog-button--primary:active {\n  color: var(--fog-contrast-color);\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-danger-color-active);\n}\n.fog-button[disabled] {\n  color: var(--fog-color-disabled);\n  border-color: var(--fog-border-color);\n  background-color: var(--fog-transparent);\n  cursor: not-allowed;\n}\n.fog-button--loading {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.fog-button--link[disabled],\n.fog-button--text[disabled],\n.fog-button--link.fog-button--danger,\n.fog-button--text.fog-button--danger {\n  border-color: var(--fog-transparent);\n  background-color: var(--fog-transparent);\n}\n.fog-button--dashed {\n  border-style: dashed;\n}\n.fog-button .fog-icon {\n  vertical-align: -0.13em;\n}\n.fog-button--icon-isolated {\n  padding: 4px;\n  width: 32px;\n  height: 32px;\n}\n.fog-button--icon-isolated .fog-icon {\n  margin-left: 0;\n  margin-right: 0;\n}\n.fog-button:not(.fog-button--icon-isolated) .fog-icon:first-child {\n  margin-right: 0.52em;\n}\n.fog-button:not(.fog-button--icon-isolated) .fog-icon:last-child {\n  margin-left: 0.52em;\n}\n.fog-button--round {\n  border-radius: 16px;\n}\n.fog-button--circle {\n  padding: 4px;\n  min-width: 32px;\n  border-radius: 16px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fog-button__loading {\n  animation: spin 1s infinite linear;\n}\n",""]);const l=c},9263:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,".message-demo {\n  position: static;\n}\n.message-demo .fog-button {\n  margin-right: 12px;\n}\n",""]);const l=c},1738:(n,o,r)=>{r.d(o,{Z:()=>l});var e=r(8081),t=r.n(e),a=r(3645),c=r.n(a)()(t());c.push([n.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const l=c}}]);