"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[744],{744:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,u,c=t(439),o=t(791),i=t(689),s=t(87),p=t(323),f=t(168),l=t(686),d=l.Z.input(r||(r=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 15px 16px;\n\n  color: rgba(255, 255, 255, 0.2);\n\n  background: #2b2b2b;\n  border-radius: 10px;\n\n  :active,\n  :focus,\n  :hover {\n    color: white;\n  }\n"]))),h=l.Z.ul(a||(a=(0,f.Z)(["\n  margin-top: 12px;\n"]))),v=l.Z.li(u||(u=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n\n  background-color: #2a2a2a;\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #ffc700;\n    color: #111111;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),g=t(184),x=function(){var n=(0,o.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)([]),u=(0,c.Z)(a,2),f=u[0],l=u[1],x=(0,i.TH)();return(0,o.useEffect)((function(){(0,p.Ph)(t).then(l)}),[t]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{type:"text",placeholder:"Search",value:t,onChange:function(n){var e=n.target.value;r(e)}}),(0,g.jsx)(h,{children:f.map((function(n){var e=n.id,t=n.original_title;return(0,g.jsx)(v,{children:(0,g.jsx)(s.rU,{state:{from:x},to:"/movies/".concat(e),children:t})},e)}))})]})}},323:function(n,e,t){t.d(e,{Df:function(){return i},Eb:function(){return f},Hu:function(){return l},Pg:function(){return p},Ph:function(){return s}});var r=t(861),a=t(687),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3373af60a4ee1fe7510a1a61c11380e1",i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=744.a82365ee.chunk.js.map