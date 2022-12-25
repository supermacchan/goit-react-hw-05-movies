"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{8076:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(9439),a=r(2791),c=r(7689),s=r(7596),u=r(4697),o=r(6673),i={castList:"Cast_castList__ARoWn",castMember:"Cast_castMember__RY3Nk",name:"Cast_name__6UbFm",character:"Cast_character__tKDlA",characterName:"Cast_characterName__R1bgC"},p=r(184),h=function(){var t=(0,c.UO)().movieId,e=(0,a.useState)(null),r=(0,n.Z)(e,2),h=r[0],f=r[1],m=(0,a.useState)(!1),l=(0,n.Z)(m,2),v=l[0],b=l[1];return(0,a.useEffect)((function(){b(!0),u.Z.fetchCast(t).then((function(t){return f(t.cast)})).catch((function(t){return s.Am.error("".concat(t.message))})).finally((function(){b(!1)}))}),[t]),(0,p.jsxs)("ul",{className:i.castList,children:[h&&h.map((function(t){return(0,p.jsxs)("li",{className:i.castMember,children:[t.profile_path?(0,p.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.profile_path),alt:"",width:"180",className:i.photo}):(0,p.jsx)("img",{src:"https://dummyimage.com/500x750/C4F5C8/083004.jpg&text=No+Photo",alt:"",width:"180",className:i.photo}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:i.name,children:t.name}),(0,p.jsx)("p",{className:i.character,children:"Character:"}),t.character?(0,p.jsx)("p",{className:i.characterName,children:t.character}):(0,p.jsx)("p",{className:i.characterName,children:"cameo"})]})]},t.cast_id)})),v&&(0,p.jsx)(o.a,{})]})}},4697:function(t,e,r){var n=r(5861),a=r(7757),c=r.n(a),s=r(2388),u="https://api.themoviedb.org/3",o="69fc77f6620d7e54166b698911b2babb",i="/trending/movie/day",p="/movie",h="/credits",f="/reviews",m="/search/movie";function l(){return(l=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="".concat(u).concat(i,"?api_key=").concat(o),t.next=4,s.Z.get(e);case 4:if(!(r=t.sent)){t.next=7;break}return t.abrupt("return",r.data.results);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u).concat(p,"/").concat(e,"?api_key=").concat(o),t.next=4,s.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function b(){return(b=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u).concat(p,"/").concat(e).concat(h,"?api_key=").concat(o),t.next=4,s.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u).concat(p,"/").concat(e).concat(f,"?api_key=").concat(o),t.next=4,s.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(u).concat(m,"?api_key=").concat(o,"&query=").concat(e),t.next=4,s.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}var _={fetchTrending:function(){return l.apply(this,arguments)},fetchMovieDetails:function(t){return v.apply(this,arguments)},fetchCast:function(t){return b.apply(this,arguments)},fetchReviews:function(t){return w.apply(this,arguments)},searchMovies:function(t){return d.apply(this,arguments)}};e.Z=_}}]);
//# sourceMappingURL=76.008e7bd9.chunk.js.map