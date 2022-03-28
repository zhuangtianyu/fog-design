"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[13],{5533:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(7294),o=n(4184),r=n.n(o),a=n(9074),i=n(4692),l=n(3379),c=n.n(l),p=n(7795),f=n.n(p),d=n(569),g=n.n(d),m=n(3565),_=n.n(m),u=n(9216),v=n.n(u),h=n(4589),x=n.n(h),b=n(8938),y={};y.styleTagTransform=x(),y.setAttributes=_(),y.insert=g().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=v();c()(b.Z,y);b.Z&&b.Z.locals&&b.Z.locals;function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=a.O,N=function(e){var t,n=e.className,o=e.steps,a=e.value,l=e.defaultValue,c=e.onChange,p=e.vertical,f=(0,i.Z)({value:a,defaultValue:l,onChange:c}).value,d=(0,s.useMemo)((function(){return o.findIndex((function(e){return e.value===f}))}),[o,f]);return Array.isArray(o)&&o.length?s.createElement("div",{className:r()(n,(t={},E(t,"".concat(k,"-steps"),!0),E(t,"".concat(k,"-steps--vertical"),p),t))},o.map((function(e,t){var n,a,i,l;return s.createElement("div",{className:r()((n={},E(n,"".concat(k,"-steps__item"),!0),E(n,"".concat(k,"-steps__item--active"),t<=d),n)),key:e.value},s.createElement("div",{className:"".concat(k,"-steps__dot")},s.createElement("div",{className:r()((a={},E(a,"".concat(k,"-steps__index"),!0),E(a,"".concat(k,"-steps__index--filled"),t===d),a))},t+1),t<o.length-1&&p&&s.createElement("div",{className:r()((i={},E(i,"".concat(k,"-steps__connector"),!0),E(i,"".concat(k,"-steps__connector--active"),t<=d-1),i))})),s.createElement("div",{className:"".concat(k,"-steps__content")},s.createElement("div",{className:"".concat(k,"-steps__header")},s.createElement("div",{className:"".concat(k,"-steps__title")},e.title),t<o.length-1&&!p&&s.createElement("div",{className:r()((l={},E(l,"".concat(k,"-steps__connector"),!0),E(l,"".concat(k,"-steps__connector--active"),t<=d-1),l))})),s.createElement("div",{className:"".concat(k,"-steps__description")},e.description)))}))):null};N.defaultProps={};const w=N;var Z=n(3779),P={};P.styleTagTransform=x(),P.setAttributes=_(),P.insert=g().bind(null,"head"),P.domAPI=f(),P.insertStyleElement=v();c()(Z.Z,P);Z.Z&&Z.Z.locals&&Z.Z.locals;var S=[{value:1,title:"Title",description:"Description"},{value:2,title:"Title",description:"Description"},{value:3,title:"Title",description:"Description"},{value:4,title:"Title",description:"Description"}],T=[{value:1,title:"S1",description:"Harry Potter and the Philosopher's Stone"},{value:2,title:"S2",description:"Harry Potter and the Chamber of Secrets"},{value:3,title:"S3",description:"Harry Potter and the Prisoner of Azkaban"}];const A=function(){return s.createElement("div",{className:"steps-demo"},s.createElement("h2",null,"Steps"),s.createElement("h3",null,"Basic Usage"),s.createElement(w,{defaultValue:3,steps:S}),s.createElement("h3",null,"Vertical"),s.createElement(w,{defaultValue:3,steps:T,vertical:!0}))}},3779:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(8081),o=n.n(s),r=n(3645),a=n.n(r)()(o());a.push([e.id,".steps-demo {\n  max-width: 800px;\n}\n",""]);const i=a},8938:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(8081),o=n.n(s),r=n(3645),a=n.n(r)()(o());a.push([e.id,".fog-steps {\n  display: flex;\n  align-items: top;\n  justify-content: space-between;\n  font-size: 14px;\n  line-height: 22px;\n}\n.fog-steps,\n.fog-steps *,\n.fog-steps *:before,\n.fog-steps *:after {\n  box-sizing: border-box;\n}\n.fog-steps__item {\n  flex: 1;\n  display: flex;\n  margin-right: 12px;\n}\n.fog-steps__dot {\n  flex-shrink: 0;\n  margin-right: 8px;\n}\n.fog-steps__index {\n  width: 28px;\n  height: 28px;\n  color: var(--fog-border-color-deep);\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  border: 1px solid var(--fog-border-color-deep);\n  border-radius: 50%;\n  transition: all 0.3s;\n}\n.fog-steps__item--active .fog-steps__index {\n  color: var(--fog-primary-color);\n  border-color: var(--fog-primary-color);\n}\n.fog-steps__item--active .fog-steps__index--filled {\n  color: var(--fog-contrast-color);\n  background-color: var(--fog-primary-color);\n}\n.fog-steps__content {\n  flex-grow: 1;\n}\n.fog-steps__header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.fog-steps__title {\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 28px;\n}\n.fog-steps__connector {\n  flex-grow: 1;\n  height: 1px;\n  background-color: var(--fog-border-color);\n  margin-left: 12px;\n  transition: all 0.3s;\n}\n.fog-steps__connector--active {\n  background-color: var(--fog-primary-color);\n}\n.fog-steps--vertical {\n  flex-direction: column;\n}\n.fog-steps--vertical .fog-steps__item {\n  margin-right: 0;\n  margin-bottom: 6px;\n}\n.fog-steps--vertical .fog-steps__item:last-child {\n  margin-bottom: 0;\n}\n.fog-steps--vertical .fog-steps__dot {\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.fog-steps--vertical .fog-steps__connector {\n  margin-left: 0;\n  margin-top: 8px;\n  width: 1px;\n  flex-grow: 1;\n}\n.fog-steps--vertical .fog-steps__description {\n  padding-bottom: 16px;\n}\n",""]);const i=a}}]);