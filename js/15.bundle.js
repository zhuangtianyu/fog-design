"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[15],{7618:(e,n,t)=>{t.d(n,{Z:()=>B});var r=t(7294),o=t(3935),c=t(4184),a=t.n(c),l=t(9074),s=t(2205),i=t(9940),f=t(3477),u=t(3379),g=t.n(u),m=t(7795),p=t.n(m),d=t(569),b=t.n(d),y=t(3565),v=t.n(y),E=t(9216),h=t.n(E),O=t(4589),x=t.n(O),Z=t(9968),j={};j.styleTagTransform=x(),j.setAttributes=v(),j.insert=b().bind(null,"head"),j.domAPI=p(),j.insertStyleElement=h();g()(Z.Z,j);Z.Z&&Z.Z.locals&&Z.Z.locals;var w=["visible","duration"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var C=l.O,N=function(){return r.createElement(i.Z,{type:"info-circle-fill",color:"var(--fog-primary-color)"})},S=function(){return r.createElement(i.Z,{type:"close-circle-fill",color:"var(--fog-danger-color)"})},T=function(){return r.createElement(i.Z,{type:"sigh-circle-fill",color:"var(--fog-warning-color)"})},z=function(){return r.createElement(i.Z,{type:"success-circle-fill",color:"var(--fog-success-color)"})},D=function(e){var n=e.className,t=e.icon,o=e.content;return r.createElement("div",{className:a()("".concat(C,"-message"),n)},t&&r.createElement("div",{className:"".concat(C,"-message__icon")},t),r.createElement("div",{className:"".concat(C,"-message__content")},o))};D.defaultProps={icon:r.createElement(N,null)};var I=[],Y=document.createElement("div");Y.style.position="fixed",Y.style.top="0px",Y.style.left="0px",Y.style.right="0px",Y.style.zIndex="10",Y.style.pointerEvents="none",document.body.appendChild(Y),D.info=function(e){var n,t=document.createElement("div");t.style.textAlign="center",Y.appendChild(t);var c=function(e){var c=e.visible,l=void 0===c||c,i=e.duration,u=void 0===i?3e3:i,g=A(e,w);l?0!==u&&(n=(0,f.cX)(a,u)):(0,f.lo)(n),o.render(r.createElement(s.Z,{visible:l,beforeEnter:"".concat(C,"-message--before-enter"),entering:"".concat(C,"-message--entering"),entered:"".concat(C,"-message--entered"),leaving:"".concat(C,"-message--leaving"),onLeft:function(){o.unmountComponentAtNode(t),Y.contains(t)&&Y.removeChild(t)}},r.createElement(D,g)),t)},a=function(){c(k(k({},e),{},{visible:!1})),I=I.filter((function(e){return e!==l}))};c(e);var l={destroy:a};return I.push(l),l},D.error=function(e){return D.info(k({icon:r.createElement(S,null)},e))},D.warning=function(e){return D.info(k({icon:r.createElement(T,null)},e))},D.success=function(e){return D.info(k({icon:r.createElement(z,null)},e))},D.destroyAll=function(){for(;I.length;){I.pop().destroy()}};const B=D},9459:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var r=t(7294),o=t(6049),c=t(7618),a=t(3379),l=t.n(a),s=t(7795),i=t.n(s),f=t(569),u=t.n(f),g=t(3565),m=t.n(g),p=t(9216),d=t.n(p),b=t(4589),y=t.n(b),v=t(3447),E={};E.styleTagTransform=y(),E.setAttributes=m(),E.insert=u().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=d();l()(v.Z,E);v.Z&&v.Z.locals&&v.Z.locals;var h=["React","Vue","Angular"];const O=function(){return(0,r.useEffect)((function(){return c.Z.destroyAll}),[]),r.createElement("div",{className:"tag-demo"},r.createElement("h2",null,"Tag"),r.createElement("h3",null,"Basic Usage"),h.map((function(e){return r.createElement(o.Z,{key:e},e)})),r.createElement("h3",null,"Closable"),h.map((function(e){return r.createElement(o.Z,{key:e,closable:!0,onClose:function(){return c.Z.success({content:"Tag closed!"})}},e)})))}},9968:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),c=t(3645),a=t.n(c)()(o());a.push([e.id,".fog-message {\n  display: inline-block;\n  padding: 10px 16px;\n  font-size: 0;\n  line-height: 22px;\n  box-shadow: 0 0 8px var(--fog-shadow-color);\n  border-radius: 2px;\n  background-color: var(--fog-panel-color);\n  margin-top: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 0;\n  pointer-events: all;\n}\n.fog-message,\n.fog-message *,\n.fog-message *:before,\n.fog-message *:after {\n  box-sizing: border-box;\n}\n.fog-message--before-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message--entering {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--entered {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.fog-message--leaving {\n  opacity: 0;\n  transform: scaleY(0);\n}\n.fog-message__icon {\n  margin-right: 8px;\n}\n.fog-message__icon,\n.fog-message__content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n}\n.fog-message .fog-icon {\n  display: block;\n  font-size: 16px;\n}\n",""]);const l=a},3447:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(8081),o=t.n(r),c=t(3645),a=t.n(c)()(o());a.push([e.id,".tag-demo .fog-tag {\n  margin: 0 12px 12px 0;\n}\n",""]);const l=a}}]);