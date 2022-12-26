"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{7135:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(9439),a=r(2791),c=r(1087),s=r(7689),i=r(7596),o=r(6673),u=r(9126),l=r(4697),p="MovieDetails_movieDetails__EbgQo",v="MovieDetails_goBackBtn__WL+X0",h="MovieDetails_backArrow__S2XGU",f="MovieDetails_basicInfo__oprnA",m="MovieDetails_movieInfo__4EKMk",d="MovieDetails_name__LW6-I",_="MovieDetails_description__33mrB",w="MovieDetails_title__cUGs9",x="MovieDetails_additionalInfo__4J0eA",b="MovieDetails_secondaryTitle__ZMNtP",g="MovieDetails_link__U+v+7",j=r(184),k=function(){var e,t,r=(0,s.UO)().movieId,k=(0,a.useState)(null),y=(0,n.Z)(k,2),M=y[0],N=y[1],Z=(0,a.useState)(!1),D=(0,n.Z)(Z,2),S=D[0],E=D[1],U=(0,s.TH)();return(0,a.useEffect)((function(){E(!0),l.Z.fetchMovieDetails(r).then((function(e){return N(e)})).catch((function(e){return i.Am.error("".concat(e.message))})).finally((function(){E(!1)}))}),[r]),(0,j.jsxs)(j.Fragment,{children:[M&&(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)(c.rU,{to:null!==(e=null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",className:v,children:[(0,j.jsx)(u.e6h,{className:h}),"Go back"]}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(M.poster_path),alt:M.title,width:"280"}),(0,j.jsxs)("div",{className:m,children:[(0,j.jsxs)("h2",{className:d,children:[M.title," (",M.release_date.slice(0,4),")"]}),(0,j.jsx)("p",{className:_,children:"User Score:"}),(0,j.jsx)("h3",{className:w,children:"Overview"}),(0,j.jsx)("p",{className:_,children:M.overview}),(0,j.jsx)("h4",{className:w,children:"Genres"}),(0,j.jsx)("p",{className:_,children:M.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("h5",{className:b,children:"Additional Information:"}),(0,j.jsx)(c.rU,{to:"/movies/".concat(M.id,"/cast"),className:g,children:"Cast"}),(0,j.jsx)(c.rU,{to:"/movies/".concat(M.id,"/reviews"),className:g,children:"Reviews"})]}),(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)(o.a,{}),children:(0,j.jsx)(s.j3,{})})]}),S&&(0,j.jsx)(o.a,{})]})}},4697:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),s=r(2388),i="https://api.themoviedb.org/3",o="69fc77f6620d7e54166b698911b2babb",u="/trending/movie/day",l="/movie",p="/credits",v="/reviews",h="/search/movie";function f(){return(f=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(i).concat(u,"?api_key=").concat(o),e.next=4,s.Z.get(t);case 4:if(!(r=e.sent)){e.next=7;break}return e.abrupt("return",r.data.results);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i).concat(l,"/").concat(t,"?api_key=").concat(o),e.next=4,s.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i).concat(l,"/").concat(t).concat(p,"?api_key=").concat(o),e.next=4,s.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i).concat(l,"/").concat(t).concat(v,"?api_key=").concat(o),e.next=4,s.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(i).concat(h,"?api_key=").concat(o,"&query=").concat(t),e.next=4,s.Z.get(r);case 4:if(!(n=e.sent)){e.next=7;break}return e.abrupt("return",n.data);case 7:return e.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var x={fetchTrending:function(){return f.apply(this,arguments)},fetchMovieDetails:function(e){return m.apply(this,arguments)},fetchCast:function(e){return d.apply(this,arguments)},fetchReviews:function(e){return _.apply(this,arguments)},searchMovies:function(e){return w.apply(this,arguments)}};t.Z=x}}]);
//# sourceMappingURL=135.551711a2.chunk.js.map