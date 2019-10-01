(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),l=a(5),s=a(6),o=a(8),m=a(7),u=a(9),d=(a(31),a(14)),f=a(10),h=(a(32),a(33),function(e){var t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl,i=e.id;return r.a.createElement(d.b,{to:"/film/".concat(i),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))});h.defaultProps={description:""};var p=a(25),b=a(12);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var E={ADD_NEW_FILM:"FILM::ADD"},O=function(e){return{type:E.ADD_NEW_FILM,payload:e}},y={films:[]};var j=function(e){var t=e(),a=[];return{getState:function(){return t},dispatch:function(n){t=e(t,n),a.forEach(function(e){return e(t)})},subscribe:function(e){if("function"!==typeof e)throw new Error("Callback should be a function");return a.push(e),function(){a=a.filter(function(t){return t!==e})}}}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E.ADD_NEW_FILM:return g({},e,{films:[].concat(Object(p.a)(e.films),[g({id:e.films.length+1},t.payload)])});default:return e}}),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={films:j.getState().films},a.unsubscribe=null,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=j.subscribe(function(){e.setState({films:j.getState().films})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.films;return r.a.createElement("div",{className:"films"},e.map(function(e){return r.a.createElement(h,Object.assign({key:e.id},e))}))}}]),t}(r.a.Component),w=a(19),D=a(18),S=a.n(D),P=(a(39),Object(n.memo)(function(e){var t=e.error,a=e.name,n=e.label,c=e.type,i=e.onChange,l=e.placeholder,s=e.value,o=S()("input",{"is-danger":!!t}),m=S()("control",{"has-icons-right":!!t}),u="textarea"===c?c:"input";return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:a,className:"label"},n),r.a.createElement("div",{className:m},r.a.createElement(u,{name:a,id:a,className:o,type:c,placeholder:l,value:s,onChange:i}),t&&r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&r.a.createElement("p",{className:"help is-danger"},t))}));P.defaultProps={error:"",type:"text",placeholder:"Type text here"};var C=function(e,t){return t?null:"Field ".concat(e," is required")};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var U={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},A={title:C,imgUrl:C,imdbUrl:C},F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=U,a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(b.a)({},n,{value:r,error:e[n].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,n=a.getFormValue(),r=a.validate(),c=r.hasError,i=r.errors;c?a.setState(function(e){var t=i.map(function(t){var a=Object(w.a)(t,2),n=a[0];return[n,{error:a[1],value:e[n].value}]});return Object.fromEntries(t)}):(a.setState(U),t(n))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(b.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(w.a)(e,2),a=t[0],n=t[1],r=A[a];return[a,r?r(a,n.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(P,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},n,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),r.a.createElement(P,Object.assign({},c,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={film:{}},a.unsubscribe=null,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;this.unsubscribe=j.subscribe(function(){e.setState({film:j.getState().films.find(function(e){return String(e.id)===t.params.id})})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.film,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))}}]),t}(n.Component),x="http://www.omdbapi.com/?apikey=2f4a38c9&t=",W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchWord:""},a.handleAddFilm=function(e){j.dispatch(O(e))},a.handleSearchChange=function(e){var t=e.target;a.setState({searchWord:t.value})},a.searchFilm=function(e){fetch("".concat(x).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.Title,a=e.Plot,n=e.Poster,r=e.Website,c={id:e.imdbID,title:t,description:a,imgUrl:n,imdbUrl:r};j.dispatch(O(c))})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchFilm("spider")}},{key:"render",value:function(){var e=this,t=this.state.searchWord;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"box"},r.a.createElement(P,{value:t,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),r.a.createElement("button",{onClick:function(){return e.searchFilm(t)},type:"button",className:"button is-primary"},"Search film")),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:N}),r.a.createElement(f.a,{exact:!0,path:"/film/:id",component:I}))),r.a.createElement("div",{className:"sidebar"},r.a.createElement(F,{onAdd:this.handleAddFilm}))))}}]),t}(n.Component);a(40);i.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.03977f7d.chunk.js.map