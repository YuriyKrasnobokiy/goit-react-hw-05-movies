"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{50:function(n,t,e){e.d(t,{s:function(){return f}});var r,a,c=e(689),i=e(87),u=e(168),s=e(867),o=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),p=s.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n"]))),l=e(184),f=function(n){var t=n.movieItems,e=(0,c.TH)();return(0,l.jsx)("div",{children:(0,l.jsx)(o,{children:t&&t.map((function(n){var t=n.id,r=n.title,a=n.original_title,c=n.original_name,u=n.name,s=n.poster_path,o=r||u||a||c;return(0,l.jsx)(p,{children:(0,l.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:[o,(0,l.jsx)("img",{src:s?"https://image.tmdb.org/t/p/w200".concat(s):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300",alt:a})]})},t)}))})})}},256:function(n,t,e){e.d(t,{Bt:function(){return l},Ny:function(){return s},Zc:function(){return u},qF:function(){return o},y:function(){return p}});var r=e(861),a=e(757),c=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGRiMzc1OTU2OTc0MzQxMDAxMWYwODQ2NDE2MjM1ZiIsInN1YiI6IjY1MzZjN2Y2N2ZjYWIzMDBlYWIzNWM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QifJaFBfyRNeHIxkyBSq7u6hLriMTe30UhxSyJcvOFE",i.Z.defaults.headers.common.Accept="application/json",i.Z.defaults.params={language:"en-US"};var u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},415:function(n,t,e){e.r(t),e.d(t,{defaultImg:function(){return l}});var r=e(861),a=e(439),c=e(757),i=e.n(c),u=e(791),s=e(256),o=e(50),p=e(184),l="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300";t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Zc)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Hello!"}),(0,p.jsx)("h2",{children:"Tranding movies today:"}),(0,p.jsx)(o.s,{movieItems:e})]})}}}]);
//# sourceMappingURL=415.dff6c19e.chunk.js.map