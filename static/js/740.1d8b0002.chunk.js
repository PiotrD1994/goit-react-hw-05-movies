"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{308:function(t,n,e){e.d(n,{A:function(){return v},Kp:function(){return _},Qd:function(){return d},iD:function(){return h},rg:function(){return m}});var r=e(861),a=e(757),c=e.n(a),u=e(243),s="802712c8bad18fed91462bf1a55b27d1";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="trending/all/day",i="search/movie",f="movie/",l="/reviews",p="/credits",d=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/".concat(o,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/".concat(i,"?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/".concat(f).concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/".concat(f).concat(n).concat(l,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),_=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/".concat(f).concat(n).concat(p,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},25:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(689),a=e(87),c="EditorList_list__fDgab",u="EditorList_item__XmOlN",s=e(184),o=function(t){var n=t.films,e=(0,r.TH)();return(0,s.jsx)("ul",{className:c,children:n.map((function(t){return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{form:e},children:t.title?t.title:t.name})},t.id)}))})}},740:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(439),a=e(791),c=e(172),u=e(25),s="Form_form__e1yzW",o="Form_input__FTtTw",i="Form_button__8NOIT",f=e(184),l=function(t){var n=t.searchMovies,e=(0,a.useState)(""),c=(0,r.Z)(e,2),u=c[0],l=c[1];return(0,f.jsxs)("form",{className:s,onSubmit:function(t){t.preventDefault(),n(u.toLowerCase())},children:[(0,f.jsx)("input",{className:o,type:"text",name:"query",autoFocus:!0,value:u,placeholder:"Search movies",onChange:function(t){l(t.target.value)}}),(0,f.jsx)("button",{className:i,type:"submit",children:"Search"})]})},p=e(308),d=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],o=(0,a.useState)(!1),i=(0,r.Z)(o,2),d=i[0],h=i[1],m=(0,a.useState)(!1),v=(0,r.Z)(m,2),_=v[0],g=v[1];return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{searchMovies:function(t){h(!0),(0,p.iD)(t).then((function(t){s(t),g(0===t.length)})).catch((function(t){console.log(t)})).finally((function(){h(!1)}))}}),d&&(0,f.jsx)(c.Z,{}),_&&(0,f.jsx)("p",{children:"No results. Please, try again"}),e&&(0,f.jsx)(u.Z,{films:e})]})}}}]);
//# sourceMappingURL=740.1d8b0002.chunk.js.map