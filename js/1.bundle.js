"use strict";(self.webpackChunkfog_design=self.webpackChunkfog_design||[]).push([[1],{9260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7294),o=n(4184),a=n.n(o),l=n(9074);const i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,r.useMemo)((function(){return Array.isArray(e)?e:t}),[e,t])};var c=n(3477),s=n(3379),f=n.n(s),u=n(7795),d=n.n(u),b=n(569),m=n.n(b),h=n(3565),p=n.n(h),y=n(9216),g=n.n(y),x=n(4589),v=n.n(x),_=n(6417),w={};w.styleTagTransform=v(),w.setAttributes=p(),w.insert=m().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=g();f()(_.Z,w);_.Z&&_.Z.locals&&_.Z.locals;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=l.O,P=function(e){var t=e.className,n=e.rowKey,o=e.contentWidth,l=e.data,s=e.columns,f=j((0,r.useState)({}),2),u=f[0],d=f[1],b=i(s).map((function(e){return E(E({},e),{},{fixed:(t=e.fixed,["left","right"].includes(t)?e.fixed:void 0)});var t})),m=i(l),h=(0,r.useMemo)((function(){return b.reduce((function(e,t){return E(E({},e),{},O({},t.key,r.createRef()))}),{})}),[b]),p=(0,r.useMemo)((function(){return b.filter((function(e){return"left"===e.fixed})).map((function(e){return e.key}))}),[b]),y=(0,r.useMemo)((function(){return b.filter((function(e){return"right"===e.fixed})).map((function(e){return e.key}))}),[b]),g=function(e){return p.length&&p[p.length-1]===e},x=function(e){return y.length&&y[0]===e},v=function(){var e={},t=0,n=0;p.forEach((function(n){h[n].current&&(e[n]={left:t},t+=h[n].current.offsetWidth)})),y.reverse().forEach((function(t){h[t].current&&(e[t]={right:n},n+=h[t].current.offsetWidth)})),d(e)};return(0,r.useLayoutEffect)((function(){var e=[];return Object.keys(h).forEach((function(t){var n=new ResizeObserver(v);n.observe(h[t].current),e.push(n)})),function(){return e.forEach((function(e){return e.disconnect()}))}}),[h]),r.createElement("div",{className:a()("".concat(N,"-table"),t)},r.createElement("div",{className:"".concat(N,"-table__content")},r.createElement("table",{width:o},r.createElement("thead",{className:"".concat(N,"-table__thead")},r.createElement("tr",{className:"".concat(N,"-table__tr")},b.map((function(e){var t,n=e.key,o=e.fixed;return r.createElement("th",{className:a()((t={},O(t,"".concat(N,"-table__cell"),!0),O(t,"".concat(N,"-table__cell--fixed"),o),O(t,"".concat(N,"-table__cell--fixed-last"),g(n)),O(t,"".concat(N,"-table__cell--fixed-first"),x(n)),t)),key:n,ref:h[n],style:u[n]||{}},e.name)})))),r.createElement("tbody",{className:"".concat(N,"-table__tbody")},m.map((function(e,t){return r.createElement("tr",{className:"".concat(N,"-table__tr"),key:n||t},b.map((function(n){var o,l=n.key,i=n.width,s=n.fixed,f=n.render;return r.createElement("td",{className:a()((o={},O(o,"".concat(N,"-table__cell"),!0),O(o,"".concat(N,"-table__cell--fixed"),s),O(o,"".concat(N,"-table__cell--fixed-last"),g(l)),O(o,"".concat(N,"-table__cell--fixed-first"),x(l)),o)),key:l,width:i,style:u[l]||{}},(0,c.mf)(f)?f(e[l],e,t):e[l])})))}))))))};P.defaultProps={};const S=P;var Z=n(316),T={};T.styleTagTransform=v(),T.setAttributes=p(),T.insert=m().bind(null,"head"),T.domAPI=d(),T.insertStyleElement=g();f()(Z.Z,T);Z.Z&&Z.Z.locals&&Z.Z.locals;var z=[{key:"id",name:"Line",render:function(e){return"Line ".concat(e)}},{key:"starting",name:"Starting"},{key:"terminal",name:"Terminal"}],D=[{id:4,starting:"Anheqiao North",terminal:"Tiangongyuan"},{id:10,starting:"Suzhoujie",terminal:"Huoqiying"},{id:13,starting:"Xizhimen",terminal:"Dongzhimen"}],M=[{key:"id",name:"No",width:100,fixed:"left"},{key:"name",name:"Name",width:150,fixed:"left"},{key:"math",name:"Math"},{key:"physics",name:"Physics"},{key:"chemistry",name:"Chemistry"},{key:"total",name:"Total",fixed:"right"}],C=[{id:1001,name:"Dan",math:100,physics:100,chemistry:100,total:300},{id:1002,name:"Evan",math:100,physics:100,chemistry:100,total:300},{id:1003,name:"Johnson",math:100,physics:100,chemistry:100,total:300}];const I=function(){return r.createElement("div",{className:"table-demo"},r.createElement("h2",null,"Table"),r.createElement("h3",null,"Basic Usage"),r.createElement(S,{columns:z,data:D}),r.createElement("h3",null,"Fixed Column"),r.createElement(S,{columns:M,data:C,contentWidth:1200}))}},316:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),o=n.n(r),a=n(3645),l=n.n(a)()(o());l.push([e.id,".table-demo .fog-table {\n  width: 100%;\n}\n",""]);const i=l},6417:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),o=n.n(r),a=n(3645),l=n.n(a)()(o());l.push([e.id,".fog-table {\n  width: 100%;\n  overflow-x: auto;\n  border: 1px solid var(--fog-border-color);\n}\n.fog-table,\n.fog-table *,\n.fog-table *:before,\n.fog-table *:after {\n  box-sizing: border-box;\n}\n.fog-table table {\n  min-width: 100%;\n  border-spacing: 0;\n  border-collapse: separate;\n}\n.fog-table__cell {\n  position: relative;\n  padding: 8px 16px;\n  color: var(--fog-color);\n  font-size: 14px;\n  text-align: left;\n  line-height: 22px;\n  border-right: 1px solid var(--fog-border-color);\n  border-bottom: 1px solid var(--fog-border-color);\n  background-color: var(--fog-background-color);\n}\n.fog-table__cell--fixed {\n  position: sticky;\n  z-index: 2;\n}\n.fog-table__cell--fixed-last::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -1px;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(100%);\n  box-shadow: inset 10px 0 8px -8px var(--fog-border-color);\n  pointer-events: none;\n}\n.fog-table__cell--fixed-first {\n  border-left: 1px solid var(--fog-border-color);\n}\n.fog-table__cell--fixed-first::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -1px;\n  bottom: -1px;\n  width: 30px;\n  transform: translateX(-100%);\n  box-shadow: inset -10px 0 8px -8px var(--fog-border-color);\n  pointer-events: none;\n}\n.fog-table__cell:last-child {\n  border-right: none;\n}\n.fog-table__tbody .fog-table__tr:last-child .fog-table__cell {\n  border-bottom: none;\n}\n",""]);const i=l}}]);