"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[255],{419:function(t,n,e){e.d(n,{s:function(){return p}});var r,a,i=e(689),o=e(87),s=e(168),c=e(867),u=c.ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),l=c.ZP.li(a||(a=(0,s.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n"]))),f=e(184),p=function(t){var n=t.movieItems,e=(0,i.TH)();return(0,f.jsx)("div",{children:(0,f.jsx)(u,{children:n&&n.map((function(t){var n=t.id,r=t.title,a=t.original_title,i=t.original_name,s=t.name,c=t.poster_path,u=r||s||a||i;return(0,f.jsx)(l,{children:(0,f.jsxs)(o.rU,{to:"/movies/".concat(n),state:{from:e},children:[u,(0,f.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300",alt:a})]})},n)}))})})}},256:function(t,n,e){e.d(n,{Bt:function(){return f},IA:function(){return p},Ny:function(){return c},Zc:function(){return s},qF:function(){return u},y:function(){return l}});var r=e(861),a=e(757),i=e.n(a),o=e(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE",o.Z.defaults.headers.common.Accept="application/json",o.Z.defaults.params={language:"en-US"};var s=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/all/day");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie?query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/videos"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},255:function(t,n,e){e.r(n),e.d(n,{default:function(){return Ut}});var r,a,i,o=e(861),s=e(439),c=e(757),u=e.n(c),l=e(168),f=e(867),p=(f.ZP.div(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),f.ZP.input(a||(a=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"])))),d=f.ZP.button(i||(i=(0,l.Z)(["\n  width: 140px;\n  height: 40px;\n  background-color: lightblue;\n"]))),m=e(184),v=function(t){var n=t.handlerSubmit;return(0,m.jsxs)("form",{onSubmit:n,children:[(0,m.jsx)(p,{type:"text",name:"movieName",placeholder:"Search movie by name"}),(0,m.jsx)(d,{type:"submit",children:"Search movie"})]})},h=e(433);function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var x=e(791),w={data:""},Z=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||w},j=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,O=/\/\*[^]*?\*\/|  +/g,k=/\n+/g,E=function t(n,e){var r="",a="",i="",o=function(o){var c=n[o];"@"==o[0]?"i"==o[1]?r=o+" "+c+";":a+="f"==o[1]?t(c,o):o+"{"+t(c,"k"==o[1]?"":e)+"}":"object"==typeof c?a+=t(c,e?e.replace(/([^,])+/g,(function(t){return o.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=t.p?t.p(o,c):o+":"+c+";"),s=o};for(var s in n)o(s);return r+(e&&i?e+"{"+i+"}":i)+a},N={},I=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},P=function(t,n,e,r,a){var i=I(t),o=N[i]||(N[i]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(i));if(!N[o]){var s=i!==t?t:function(t){for(var n,e,r=[{}];n=j.exec(t.replace(O,""));)n[4]?r.shift():n[3]?(e=n[3].replace(k," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(k," ").trim();return r[0]}(t);N[o]=E(a?g({},"@keyframes "+o,s):s,e?"":"."+o)}var c=e&&N.g?N.g:null;return e&&(N.g=N[o]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(N[o],n,r,c),o},z=function(t,n,e){return t.reduce((function(t,r,a){var i=n[a];if(i&&i.call){var o=i(e),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":E(o,""):!1===o?"":o}return t+r+(null==i?"":i)}),"")};function D(t){var n=this||{},e=t.call?t(n.p):t;return P(e.unshift?e.raw?z(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,Z(n.target),n.g,n.o,n.k)}D.bind({g:1});var C,M,S,A,T,J,_,F,U,B,H,L,W,Y,q,Q,R,G,V,X=D.bind({k:1});function $(t,n){var e=this||{};return function(){var r=arguments;function a(i,o){var s=Object.assign({},i),c=s.className||a.className;e.p=Object.assign({theme:M&&M()},s),e.o=/ *go\d+/.test(c),s.className=D.apply(e,r)+(c?" "+c:""),n&&(s.ref=o);var u=t;return t[0]&&(u=s.as||t,delete s.as),S&&u[0]&&S(s),C(u,s)}return n?n(a):a}}var K=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},tt=function(){var t=0;return function(){return(++t).toString()}}(),nt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),et=new Map,rt=function(t){if(!et.has(t)){var n=setTimeout((function(){et.delete(t),st({type:4,toastId:t})}),1e3);et.set(t,n)}},at=function t(n,e){switch(e.type){case 0:return b(b({},n),{},{toasts:[e.toast].concat((0,h.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=et.get(t);n&&clearTimeout(n)}(e.toast.id),b(b({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?b(b({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var a=e.toastId;return a?rt(a):n.toasts.forEach((function(t){rt(t.id)})),b(b({},n),{},{toasts:n.toasts.map((function(t){return t.id===a||void 0===a?b(b({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?b(b({},n),{},{toasts:[]}):b(b({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return b(b({},n),{},{pausedAt:e.time});case 6:var i=e.time-(n.pausedAt||0);return b(b({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return b(b({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},it=[],ot={toasts:[],pausedAt:void 0},st=function(t){ot=at(ot,t),it.forEach((function(t){t(ot)}))},ct={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ut=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return b(b({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||tt()})}(n,t,e);return st({type:2,toast:r}),r.id}},lt=function(t,n){return ut("blank")(t,n)};lt.error=ut("error"),lt.success=ut("success"),lt.loading=ut("loading"),lt.custom=ut("custom"),lt.dismiss=function(t){st({type:3,toastId:t})},lt.remove=function(t){return st({type:4,toastId:t})},lt.promise=function(t,n,e){var r=lt.loading(n.loading,b(b({},e),null==e?void 0:e.loading));return t.then((function(t){return lt.success(K(n.success,t),b(b({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){lt.error(K(n.error,t),b(b({id:r},e),null==e?void 0:e.error))})),t};var ft=function(t,n){st({type:1,toast:{id:t,height:n}})},pt=function(){st({type:5,time:Date.now()})},dt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,x.useState)(ot),e=(0,s.Z)(n,2),r=e[0],a=e[1];(0,x.useEffect)((function(){return it.push(a),function(){var t=it.indexOf(a);t>-1&&it.splice(t,1)}}),[r]);var i=r.toasts.map((function(n){var e,r;return b(b(b(b({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||ct[n.type],style:b(b(b({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return b(b({},r),{},{toasts:i})}(t),e=n.toasts,r=n.pausedAt;(0,x.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return lt.dismiss(n.id)}),e);n.visible&&lt.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var a=(0,x.useCallback)((function(){r&&st({type:6,time:Date.now()})}),[r]),i=(0,x.useCallback)((function(t,n){var r,a=n||{},i=a.reverseOrder,o=void 0!==i&&i,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),f=l.findIndex((function(n){return n.id===t.id})),p=l.filter((function(t,n){return n<f&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,h.Z)(o?[p+1]:[0,p])).reduce((function(t,n){return t+(n.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:ft,startPause:pt,endPause:a,calculateOffset:i}}},mt=X(A||(A=(0,l.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),vt=X(T||(T=(0,l.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),ht=X(J||(J=(0,l.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),gt=$("div")(_||(_=(0,l.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),mt,vt,(function(t){return t.secondary||"#fff"}),ht),yt=X(F||(F=(0,l.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),bt=$("div")(U||(U=(0,l.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),yt),xt=X(B||(B=(0,l.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),wt=X(H||(H=(0,l.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),Zt=$("div")(L||(L=(0,l.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),xt,wt,(function(t){return t.secondary||"#fff"})),jt=$("div")(W||(W=(0,l.Z)(["\n  position: absolute;\n"]))),Ot=$("div")(Y||(Y=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),kt=X(q||(q=(0,l.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Et=$("div")(Q||(Q=(0,l.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),kt),Nt=function(t){var n=t.toast,e=n.icon,r=n.type,a=n.iconTheme;return void 0!==e?"string"==typeof e?x.createElement(Et,null,e):e:"blank"===r?null:x.createElement(Ot,null,x.createElement(bt,b({},a)),"loading"!==r&&x.createElement(jt,null,"error"===r?x.createElement(gt,b({},a)):x.createElement(Zt,b({},a))))},It=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Pt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},zt=$("div")(R||(R=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Dt=$("div")(G||(G=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ct=x.memo((function(t){var n=t.toast,e=t.position,r=t.style,a=t.children,i=n.height?function(t,n){var e=t.includes("top")?1:-1,r=nt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[It(e),Pt(e)],a=(0,s.Z)(r,2),i=a[0],o=a[1];return{animation:n?"".concat(X(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(X(o)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},o=x.createElement(Nt,{toast:n}),c=x.createElement(Dt,b({},n.ariaProps),K(n.message,n));return x.createElement(zt,{className:n.className,style:b(b(b({},i),r),n.style)},"function"==typeof a?a({icon:o,message:c}):x.createElement(x.Fragment,null,o,c))}));!function(t,n,e,r){E.p=n,C=t,M=e,S=r}(x.createElement);var Mt=function(t){var n=t.id,e=t.className,r=t.style,a=t.onHeightUpdate,i=t.children,o=x.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;a(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,a]);return x.createElement("div",{ref:o,className:e,style:r},i)},St=D(V||(V=(0,l.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),At=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,a=t.toastOptions,i=t.gutter,o=t.children,s=t.containerStyle,c=t.containerClassName,u=dt(a),l=u.toasts,f=u.handlers;return x.createElement("div",{style:b({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},l.map((function(t){var e=t.position||r,a=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return b(b({left:0,right:0,display:"flex",position:"absolute",transition:nt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),a)}(e,f.calculateOffset(t,{reverseOrder:n,gutter:i,defaultPosition:r}));return x.createElement(Mt,{id:t.id,key:t.id,onHeightUpdate:f.updateHeight,className:t.visible?St:"",style:a},"custom"===t.type?K(t.message,t):o?o(t):x.createElement(Ct,{toast:t,position:e}))})))},Tt=lt,Jt=e(256),_t=e(419),Ft=e(87),Ut=function(){var t,n=(0,Ft.lr)(),e=(0,s.Z)(n,2),r=e[0],a=e[1],i=null!==(t=r.get("movieName"))&&void 0!==t?t:"",c=(0,x.useState)([]),l=(0,s.Z)(c,2),f=l[0],p=l[1];(0,x.useEffect)((function(){var t=function(){var t=(0,o.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,Jt.qF)(i);case 3:n=t.sent,p(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[i]);return(0,m.jsxs)("main",{children:[(0,m.jsx)(v,{handlerSubmit:function(t){t.preventDefault();var n=t.currentTarget;""!==n.elements.movieName.value?(a({movieName:n.elements.movieName.value}),n.reset()):Tt.error("Type movie name")}}),(0,m.jsx)(_t.s,{movieItems:f}),(0,m.jsx)(At,{})]})}}}]);
//# sourceMappingURL=255.bef96a86.chunk.js.map