"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(689),o=r(256),f=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],p=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Bt)(p);case 3:t=e.sent,u(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews:"}),r&&r.length>0?(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Review by ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))}):"Reviews not found \u2639"]})}},256:function(e,t,r){r.d(t,{Bt:function(){return p},Ny:function(){return i},Zc:function(){return s},qF:function(){return o},y:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE",c.Z.defaults.headers.common.Accept="application/json",c.Z.defaults.params={language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.33cba289.chunk.js.map