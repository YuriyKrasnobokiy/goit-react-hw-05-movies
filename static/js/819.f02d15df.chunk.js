"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[819],{819:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u,c=e(5861),s=e(9439),i=e(4687),o=e.n(i),f=e(2791),p=e(7689),h=e(1256),d=e(168),l=e(5867),v=l.ZP.div(r||(r=(0,d.Z)(["\n  padding: 10px 0 0;\n"]))),Z=l.ZP.h2(a||(a=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),x=l.ZP.li(u||(u=(0,d.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),m=e(184),w=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Bt)(a);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,m.jsxs)(v,{children:[(0,m.jsx)(Z,{children:"Reviews:"}),e&&e.length>0?(0,m.jsx)("ul",{children:e.map((function(n){return(0,m.jsxs)(x,{children:[(0,m.jsxs)("h3",{children:["Review by ",n.author]}),(0,m.jsx)("p",{children:n.content})]},n.id)}))}):"Reviews not found \u2639"]})}},1256:function(n,t,e){e.d(t,{Bt:function(){return p},IA:function(){return h},Ny:function(){return i},Zc:function(){return s},qF:function(){return o},y:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE",c.Z.defaults.headers.common.Accept="application/json",c.Z.defaults.params={language:"en-US"};var s=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/videos"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=819.f02d15df.chunk.js.map