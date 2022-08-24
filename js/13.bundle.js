"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[13],{7425:(n,e,t)=>{t.r(e),t.d(e,{default:()=>F});var r=t(7294),o=t(7368),a=t(9960),i=t(7385),l=t(2041),c=t(4184),u=t.n(c),s=t(9074),d=t(5894),f=t(4692),p=t(3477),g=t(3379),m=t.n(g),b=t(7795),v=t.n(b),h=t(569),y=t.n(h),_=t(3565),w=t.n(_),E=t(9216),x=t.n(E),Z=t(4589),k=t.n(Z),S=t(1858),A={};A.styleTagTransform=k(),A.setAttributes=w(),A.insert=y().bind(null,"head"),A.domAPI=v(),A.insertStyleElement=x();m()(S.Z,A);S.Z&&S.Z.locals&&S.Z.locals;function C(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return N(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var M=s.O,j=function(n){return function(n){return Math.round(1e4*n)/1e4}(function(n){switch(!0){case n>1:return 1;case n<0:return 0;default:return n}}(n))},I=function(n,e){if(!e)return j(n);var t=n%e;return j(t<.5*e?Math.max(0,n-t):Math.min(1,n-t+e))};const P=function(n){var e,t=n.className,o=n.step,a=n.value,i=n.defaultValue,l=n.onChange,c=n.disabled,s=(0,f.Z)({value:a,defaultValue:i,onChange:l}),g=s.value,m=s.onChange,b=(0,r.useRef)(null),v=(0,r.useRef)(null),h=O((0,r.useState)(!1),2),y=h[0],_=h[1],w=O((0,r.useState)(!1),2),E=w[0],x=w[1],Z=O((0,r.useState)(0),2),k=Z[0],S=Z[1],A="".concat((0,p.gs)(100*k),"%"),N=function(n){return n-b.current.getBoundingClientRect().left};(0,r.useEffect)((function(){S(j(g))}),[g]);(0,r.useEffect)((function(){if(E){var n=function(n){var e=N(n.clientX),t=b.current.offsetWidth,r=I(e/t,o);S(r)};return window.addEventListener("mousemove",n),function(){return window.removeEventListener("mousemove",n)}}}),[E,o]),(0,r.useEffect)((function(){if(E){var n=function(){k!==g&&m(k),x(!1)};return window.addEventListener("mouseup",n),function(){return window.removeEventListener("mouseup",n)}}}),[E,k,g]);(0,r.useEffect)((function(){if(E){var n=function(n){if(1===n.touches.length){var e=N(n.touches[0].clientX),t=b.current.offsetWidth,r=I(e/t,o);S(r)}};return window.addEventListener("touchmove",n),function(){return window.removeEventListener("touchmove",n)}}}),[E,o]),(0,r.useEffect)((function(){if(E){var n=function(){k!==g&&m(k),x(!1)};return window.addEventListener("touchend",n),function(){return window.removeEventListener("touchend",n)}}}),[E,k,g]);return r.createElement("div",{className:u()(t,(e={},C(e,"".concat(M,"-slider"),!0),C(e,"".concat(M,"-slider--disabled"),c),e))},r.createElement("div",{className:"".concat(M,"-slider__track"),ref:b,onClick:function(n){if(!c&&n.target!==v.current){var e=N(n.clientX),t=b.current.offsetWidth,r=I(e/t,o);S(r),m(r)}}},r.createElement("div",{className:"".concat(M,"-slider__passed"),style:{width:A}}),r.createElement(d.Z,{visible:E||y,content:A,getPopupMountNode:function(){return v.current}},r.createElement("div",{className:"".concat(M,"-slider__handle"),ref:v,style:{left:A},tabIndex:c?void 0:-1,draggable:!1,onDragStart:function(){return!1},onMouseDown:function(){c||x(!0)},onTouchStart:function(){c||x(!0)},onMouseEnter:function(){return _(!0)},onMouseLeave:function(){return _(!1)}}))))};var T=t(7618);const z=function(){return r.createElement(P,{defaultValue:.3,onChange:function(n){return T.Z.info({content:"value changed to ".concat(n)})}})};const L=function(){return r.createElement(r.Fragment,null,r.createElement("p",null,"step={0.05}"),r.createElement(P,{step:.05,defaultValue:.3,onChange:function(n){return T.Z.info({content:"value changed to ".concat(n)})}}),r.createElement("p",null,"step={0.1}"),r.createElement(P,{step:.1,defaultValue:.3,onChange:function(n){return T.Z.info({content:"value changed to ".concat(n)})}}))};const R=function(){return r.createElement(P,{defaultValue:.3,disabled:!0})};var V=t(9961),U={};U.styleTagTransform=k(),U.setAttributes=w(),U.insert=y().bind(null,"head"),U.domAPI=v(),U.insertStyleElement=x();m()(V.Z,U);V.Z&&V.Z.locals&&V.Z.locals;var B=o.w,D=o.c,W=B.slider,X=W.demos,$=W.apiRows;const F=function(){return r.createElement("div",{className:"slider-demo"},r.createElement(i.Z,null,"Slider"),r.createElement("p",null,"Slider is used to display data in slide way."),r.createElement("h2",null,"Demo"),r.createElement(l.Z,{title:"Basic Usage",content:r.createElement(z,null),code:X["demo-1"]}),r.createElement(l.Z,{title:"Step",content:r.createElement(L,null),code:X["demo-2"]}),r.createElement(l.Z,{title:"Disabled",content:r.createElement(R,null),code:X["demo-3"]}),r.createElement("h2",null,"API"),r.createElement(a.Z,{columns:D,data:$.default}))}},5894:(n,e,t)=>{t.d(e,{Z:()=>C});var r=t(7294),o=t(4184),a=t.n(o),i=t(9074),l=t(3477),c=t(4137),u=t(3379),s=t.n(u),d=t(7795),f=t.n(d),p=t(569),g=t.n(p),m=t(3565),b=t.n(m),v=t(9216),h=t.n(v),y=t(4589),_=t.n(y),w=t(5048),E={};E.styleTagTransform=_(),E.setAttributes=b(),E.insert=g().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=h();s()(w.Z,E);w.Z&&w.Z.locals&&w.Z.locals;var x=["popupClassName","children","content"];function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)}function k(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var S=i.O,A=function(n){var e=n.popupClassName,t=n.children,o=n.content,i=k(n,x),u=(0,r.useMemo)((function(){return(0,l.nB)({children:t,wrapperType:"span",wrapperProps:{className:"".concat(S,"-tooltip__trigger")}})}),[t]);return r.createElement(c.Z,Z({popupClassName:a()("".concat(S,"-tooltip"),e),popup:o},i),u)};A.defaultProps={trigger:"hover",placement:"top",showArrow:!0};const C=A},2041:(n,e,t)=>{t.d(e,{Z:()=>O});var r=t(7294),o=t(9074),a=t(2282),i=t(5046),l=t(4346),c=t(6032),u=t(8849),s=t(9940),d=t(7618),f=t(3379),p=t.n(f),g=t(7795),m=t.n(g),b=t(569),v=t.n(b),h=t(3565),y=t.n(h),_=t(9216),w=t.n(_),E=t(4589),x=t.n(E),Z=t(1738),k={};k.styleTagTransform=x(),k.setAttributes=y(),k.insert=v().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=w();p()(Z.Z,k);Z.Z&&Z.Z.locals&&Z.Z.locals;function S(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,l=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){l=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return A(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var C=o.O;a.Z.registerLanguage("tsx",i.Z);const O=function(n){var e=n.title,t=n.description,o=n.content,i=n.code,f=(0,r.useContext)(u.f),p=S((0,r.useState)(!1),2),g=p[0],m=p[1],b=S((0,r.useState)((function(){return ResizeObserver?0:"auto"})),2),v=b[0],h=b[1],y=(0,r.useRef)(null);(0,r.useLayoutEffect)((function(){if(g&&ResizeObserver&&y.current){var n=new ResizeObserver((function(){var n=y.current.getBoundingClientRect().height;h(n)}));return n.observe(y.current),function(){return n.disconnect()}}}),[g]),(0,r.useEffect)((function(){return d.Z.destroyAll}),[]);return r.createElement("div",{className:"".concat(C,"-demo")},r.createElement("h3",{className:"".concat(C,"-demo__title")},r.createElement("span",null,e),r.createElement("div",{className:"".concat(C,"-demo__options")},r.createElement(s.Z,{type:"copy",onClick:function(){navigator.clipboard.writeText(i).then((function(){return d.Z.success({content:"Code copied"})})).catch((function(){return d.Z.error({content:"Please copy manually"})}))}}),r.createElement(s.Z,{type:"code",onClick:function(){return m(!g)}}))),t&&r.createElement("p",{className:"".concat(C,"-demo__description")},t),r.createElement("div",{className:"".concat(C,"-demo__content")},o),r.createElement("div",{className:"".concat(C,"-demo__code-wrapper"),style:{height:g?v:0}},r.createElement("div",{ref:y},r.createElement(a.Z,{className:"".concat(C,"-demo__pre"),customStyle:{margin:0,padding:20},language:"tsx",style:f?c.Z:l.Z},i))))}},9961:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".slider-demo .fog-slider {\n  max-width: 300px;\n}\n",""]);const l=i},1858:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".fog-slider {\n  padding: 2px 0;\n}\n.fog-slider,\n.fog-slider *,\n.fog-slider *:before,\n.fog-slider *:after {\n  box-sizing: border-box;\n}\n.fog-slider--disabled .fog-slider__track {\n  background-color: var(--fog-internal-color-disabled);\n  cursor: not-allowed;\n}\n.fog-slider--disabled .fog-slider__passed {\n  background-color: var(--fog-background-color-active);\n  cursor: not-allowed;\n}\n.fog-slider--disabled .fog-slider__handle {\n  border-color: var(--fog-background-color-active);\n  cursor: not-allowed;\n}\n.fog-slider__track {\n  position: relative;\n  width: 100%;\n  height: 4px;\n  border-radius: 2px;\n  background-color: var(--fog-internal-color);\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n.fog-slider__track::after {\n  content: '';\n  position: absolute;\n  top: -4px;\n  right: 0;\n  bottom: -4px;\n  left: 0;\n}\n.fog-slider__passed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  border-radius: 2px;\n  background-color: var(--fog-primary-color);\n  transition: background-color 0.3s;\n}\n.fog-slider__handle {\n  position: absolute;\n  top: 50%;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid var(--fog-primary-color);\n  background-color: var(--fog-background-color);\n  transform: translate(-50%, -50%);\n  transition: box-shadow 0.3s, border-color 0.3s, background-color 0.3s;\n  cursor: pointer;\n  z-index: 1;\n}\n.fog-slider__handle:focus {\n  box-shadow: 0 0 1px 1px var(--fog-primary-color);\n}\n.fog-slider__handle::after {\n  content: '';\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n}\n.fog-slider .fog-trigger__popup-content {\n  user-select: none;\n}\n",""]);const l=i},5048:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,".fog-tooltip,\n.fog-tooltip *,\n.fog-tooltip *:before,\n.fog-tooltip *:after {\n  box-sizing: border-box;\n}\n.fog-tooltip .fog-trigger__popup-content {\n  padding: 8px;\n  max-width: 300px;\n  word-break: break-all;\n  color: var(--fog-contrast-color);\n  font-size: 14px;\n  line-height: 22px;\n  background-color: var(--fog-background-color-profound);\n}\n.fog-tooltip .fog-trigger__popup-arrow {\n  background-color: var(--fog-background-color-profound);\n}\n",""]);const l=i},1738:(n,e,t)=>{t.d(e,{Z:()=>l});var r=t(8081),o=t.n(r),a=t(3645),i=t.n(a)()(o());i.push([n.id,'.fog-demo {\n  border: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n}\n.fog-demo,\n.fog-demo *,\n.fog-demo *:before,\n.fog-demo *:after {\n  box-sizing: border-box;\n}\n.fog-demo__title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n.fog-demo__options {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n}\n.fog-demo__options .fog-icon {\n  padding: 4px;\n  margin-right: 4px;\n  user-select: none;\n  cursor: pointer;\n}\n.fog-demo__options .fog-icon:last-child {\n  margin-right: 0;\n}\n.fog-demo__description {\n  padding: 0 20px;\n}\n.fog-demo__content {\n  padding: 0 20px 20px;\n}\n.fog-demo__code-wrapper {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.fog-demo__pre {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  border-top: 1px solid var(--fog-border-color);\n  border-radius: 2px;\n  background-color: var(--fog-background-color) !important;\n  transition: all 0.3s;\n}\n.fog-demo__pre code {\n  font-size: 14px !important;\n  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace !important;\n  text-shadow: none !important;\n  transition: all 0.3s;\n}\n',""]);const l=i}}]);