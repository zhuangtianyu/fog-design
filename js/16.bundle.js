"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[16],{8239:(e,n,t)=>{t.r(n),t.d(n,{default:()=>U});var o=t(7294),r=t(7368),a=t(9960),s=t(2041),i=t(4184),c=t.n(i),l=t(9074),d=t(4692),p=t(3379),f=t.n(p),u=t(7795),m=t.n(u),g=t(569),_=t.n(g),v=t(3565),h=t.n(v),x=t(9216),b=t.n(x),y=t(4589),E=t.n(y),Z=t(8938),w={};w.styleTagTransform=E(),w.setAttributes=h(),w.insert=_().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=b();f()(Z.Z,w);Z.Z&&Z.Z.locals&&Z.Z.locals;function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var A=l.O,S=function(e){var n,t=e.className,r=e.steps,a=e.value,s=e.defaultValue,i=e.onChange,l=e.vertical,p=(0,d.Z)({value:a,defaultValue:s,onChange:i}).value,f=(0,o.useMemo)((function(){return r.findIndex((function(e){return e.value===p}))}),[r,p]);return Array.isArray(r)&&r.length?o.createElement("div",{className:c()(t,(n={},N(n,"".concat(A,"-steps"),!0),N(n,"".concat(A,"-steps--vertical"),l),n))},r.map((function(e,n){var t,a,s,i;return o.createElement("div",{className:c()((t={},N(t,"".concat(A,"-steps__item"),!0),N(t,"".concat(A,"-steps__item--active"),n<=f),t)),key:e.value},o.createElement("div",{className:"".concat(A,"-steps__dot")},o.createElement("div",{className:c()((a={},N(a,"".concat(A,"-steps__index"),!0),N(a,"".concat(A,"-steps__index--filled"),n===f),a))},n+1),n<r.length-1&&l&&o.createElement("div",{className:c()((s={},N(s,"".concat(A,"-steps__connector"),!0),N(s,"".concat(A,"-steps__connector--active"),n<=f-1),s))})),o.createElement("div",{className:"".concat(A,"-steps__content")},o.createElement("div",{className:"".concat(A,"-steps__header")},o.createElement("div",{className:"".concat(A,"-steps__title")},e.title),n<r.length-1&&!l&&o.createElement("div",{className:c()((i={},N(i,"".concat(A,"-steps__connector"),!0),N(i,"".concat(A,"-steps__connector--active"),n<=f-1),i))})),o.createElement("div",{className:"".concat(A,"-steps__description")},e.description)))}))):null};S.defaultProps={};const k=S;var C=[{value:1,title:"Title",description:"Description"},{value:2,title:"Title",description:"Description"},{value:3,title:"Title",description:"Description"},{value:4,title:"Title",description:"Description"}];const z=function(){return o.createElement(k,{defaultValue:3,steps:C})};var P=[{value:1,title:"S1",description:"Harry Potter and the Philosopher's Stone."},{value:2,title:"S2",description:"Harry Potter and the Chamber of Secrets."},{value:3,title:"S3",description:"Harry Potter and the Prisoner of Azkaban."}];const T=function(){return o.createElement(k,{defaultValue:3,steps:P,vertical:!0})};var M=t(3779),j={};j.styleTagTransform=E(),j.setAttributes=h(),j.insert=_().bind(null,"head"),j.domAPI=m(),j.insertStyleElement=b();f()(M.Z,j);M.Z&&M.Z.locals&&M.Z.locals;var I=r.w,O=r.c,R=I.steps,D=R.demos,V=R.apiRows;const U=function(){return o.createElement("div",{className:"steps-demo"},o.createElement("h1",null,"Steps"),o.createElement("p",null,"Steps is used to display the current step."),o.createElement("h2",null,"Demo"),o.createElement(s.Z,{title:"Basic Usage",content:o.createElement(z,null),code:D["demo-1"]}),o.createElement(s.Z,{title:"Vertical",content:o.createElement(T,null),code:D["demo-2"]}),o.createElement("h2",null,"API"),o.createElement(a.Z,{columns:O,data:V.default}))}},2041:(e,n,t)=>{t.d(n,{Z:()=>C});var o=t(7294),r=t(9074),a=t(2282),s=t(5046),i=t(4346),c=t(6032),l=t(8849),d=t(9940),p=t(7618),f=t(3379),u=t.n(f),m=t(7795),g=t.n(m),_=t(569),v=t.n(_),h=t(3565),x=t.n(h),b=t(9216),y=t.n(b),E=t(4589),Z=t.n(E),w=t(1738),N={};N.styleTagTransform=Z(),N.setAttributes=x(),N.insert=v().bind(null,"head"),N.domAPI=g(),N.insertStyleElement=y();u()(w.Z,N);w.Z&&w.Z.locals&&w.Z.locals;function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,a=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(o=t.next()).done)&&(a.push(o.value),!n||a.length!==n);s=!0);}catch(e){i=!0,r=e}finally{try{s||null==t.return||t.return()}finally{if(i)throw r}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return S(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var k=r.O;a.Z.registerLanguage("tsx",s.Z);const C=function(e){var n=e.title,t=e.description,r=e.content,s=e.code,f=(0,o.useContext)(l.f),u=A((0,o.useState)(!1),2),m=u[0],g=u[1],_=A((0,o.useState)((function(){return ResizeObserver?0:"auto"})),2),v=_[0],h=_[1],x=(0,o.useRef)(null);(0,o.useLayoutEffect)((function(){if(m&&ResizeObserver&&x.current){var e=new ResizeObserver((function(){var e=x.current.getBoundingClientRect().height;h(e)}));return e.observe(x.current),function(){return e.disconnect()}}}),[m]),(0,o.useEffect)((function(){return p.Z.destroyAll}),[]);return o.createElement("div",{className:"".concat(k,"-demo")},o.createElement("h3",{className:"".concat(k,"-demo__title")},o.createElement("span",null,n),o.createElement("div",{className:"".concat(k,"-demo__options")},o.createElement(d.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(s).then((function(){return p.Z.success({content:"Code copied"})})).catch((function(){return p.Z.error({content:"Please copy manually"})}))}}),o.createElement(d.Z,{type:"code",onClick:function(){return g(!m)}}))),t&&o.createElement("p",{className:"".concat(k,"-demo__description")},t),o.createElement("div",{className:"".concat(k,"-demo__content")},r),o.createElement("div",{className:"".concat(k,"-demo__code-wrapper"),style:{height:m?v:0}},o.createElement("div",{ref:x},o.createElement(a.Z,{className:"".concat(k,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:f?c.Z:i.Z},s))))}},3779:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),s=t.n(a)()(r());s.push([e.id,".steps-demo .fog-steps {\n  max-width: 800px;\n}\n",""]);const i=s},8938:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),s=t.n(a)()(r());s.push([e.id,".fog-steps {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-steps,\n.fog-steps *,\n.fog-steps *:before,\n.fog-steps *:after {\n  box-sizing: border-box;\n}\n.fog-steps__item {\n  flex: 1;\n  display: flex;\n  margin-right: 12px;\n}\n.fog-steps__dot {\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n.fog-steps__index {\n  width: 28px;\n  height: 28px;\n  color: var(--fog-border-color-deep);\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  border: 1px solid var(--fog-border-color-deep);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.fog-steps__item--active .fog-steps__index {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n}\n.fog-steps__item--active .fog-steps__index--filled {\n  color: var(--fog-contrast-color);\n  background-color: var(--fog-primary-color);\n}\n.fog-steps__content {\n  flex-grow: 1;\n}\n.fog-steps__header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.fog-steps__title {\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n}\n.fog-steps__connector {\n  flex-grow: 1;\n  height: 1px;\n  background-color: var(--fog-border-color);\n  margin-left: 12px;\n  transition: all 0.3s;\n}\n.fog-steps__connector--active {\n  background-color: var(--fog-primary-color);\n}\n.fog-steps--vertical {\n  flex-direction: column;\n}\n.fog-steps--vertical .fog-steps__item {\n  margin-right: 0;\n  margin-bottom: 6px;\n}\n.fog-steps--vertical .fog-steps__item:last-child {\n  margin-bottom: 0;\n}\n.fog-steps--vertical .fog-steps__dot {\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.fog-steps--vertical .fog-steps__connector {\n  margin-left: 0;\n  margin-top: 8px;\n  width: 1px;\n  flex-grow: 1;\n}\n.fog-steps--vertical .fog-steps__description {\n  padding-bottom: 16px;\n}\n",""]);const i=s},1738:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(8081),r=t.n(o),a=t(3645),s=t.n(a)()(r());s.push([e.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const i=s}}]);