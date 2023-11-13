"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{308:function(e,t,n){n.d(t,{A:function(){return m},Kp:function(){return x},Qd:function(){return f},iD:function(){return v},rg:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="802712c8bad18fed91462bf1a55b27d1";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="trending/all/day",u="search/movie",l="movie/",d="/reviews",p="/credits",f=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(o,"?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(u,"?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(l).concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(l).concat(t).concat(d,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/".concat(l).concat(t).concat(p,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(689),u=n(87),l=n(308),d=n(172),p="MovieDetails_container__Ys+c9",f="MovieDetails_title__cUGs9",v="MovieDetails_text__RHcc4",h="MovieDetails_header2__i+zKg",m="MovieDetails_list__dbNMP",x="MovieDetails_item__mbUY+",_="MovieDetails_header3__Vf15S",g=n(184),j=function(){var e,t,n=(0,o.UO)().movieId,c=(0,i.useState)(null),j=(0,a.Z)(c,2),w=j[0],k=j[1],b=(0,i.useState)(!1),Z=(0,a.Z)(b,2),y=Z[0],N=Z[1],U=(0,o.TH)();if((0,i.useEffect)((function(){console.log("Fetching movie details for movieId:",n);var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,(0,l.rg)(n);case 4:t=e.sent,console.log("Detail Movie:",t),k(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error fetching movie details:",e.t0);case 12:return e.prev=12,N(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),!w)return(0,g.jsxs)("div",{children:[y&&(0,g.jsx)(d.Z,{}),(0,g.jsx)("p",{children:"Loading..."})]});var D=w.title,M=w.release_date,S=w.popularity,R=w.overview,A=w.genres,C=w.poster_path,I=w.original_title;return(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)(u.rU,{to:null!==(e=null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,g.jsx)("button",{type:"button",children:"Return"})}),y&&(0,g.jsx)(d.Z,{}),(0,g.jsx)("div",{className:p,children:(0,g.jsx)("img",{width:"300px",src:C?"https://image.tmdb.org/t/p/w500".concat(C):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:I})}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsxs)("h1",{className:f,children:[D," (",M.slice(0,4),")"]}),(0,g.jsxs)("p",{className:v,children:["User score: ",S]}),(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{className:v,children:R}),(0,g.jsx)("h2",{className:h,children:"Genres"}),(0,g.jsx)("ul",{className:m,children:A.map((function(e){return(0,g.jsx)("li",{className:x,children:e.name},e.id)}))})]}),(0,g.jsx)("hr",{}),(0,g.jsx)("h3",{className:_,children:"Additional information"}),(0,g.jsxs)("ul",{className:m,children:[(0,g.jsx)("li",{className:x,children:(0,g.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{className:x,children:(0,g.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)("hr",{}),(0,g.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=135.d371b59d.chunk.js.map