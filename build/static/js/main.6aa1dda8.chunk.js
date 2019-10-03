(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=a(10),s=a(13),o=a(5),u=a(6),m=a(8),f=a(7),b=a(9),p=(a(31),a(11)),d=a(15);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var g={ADD_NEW_FILM:"FILM::ADD"},v=function(e){return{type:g.ADD_NEW_FILM,payload:e}},O={films:[]};var y=function(e){var t=e(),a=[];return{getState:function(){return t},dispatch:function(n){t=e(t,n),a.forEach(function(e){return e(t)})},subscribe:function(e){if("function"!==typeof e)throw new Error("Callback should be a function");return a.push(e),function(){a=a.filter(function(t){return t!==e})}}}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g.ADD_NEW_FILM:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{films:[].concat(Object(s.a)(e.films),[t.payload])});default:return e}}),E=(a(32),a(33),function(e){var t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl,i=e.id;return r.a.createElement(d.b,{to:"/film/".concat(i),className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))});E.defaultProps={description:""};var j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={films:[]},a.unsubscribe=null,a.getFilmsList=function(){a.setState({films:Object(s.a)(y.getState().films)})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=y.subscribe(this.getFilmsList)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.films;return r.a.createElement("div",{className:"films"},e.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))}))}}]),t}(r.a.Component);j.defaultProps={films:[]};var N=a(20),w=a(19),P=a.n(w),D=(a(39),Object(n.memo)(function(e){var t=e.error,a=e.name,n=e.label,c=e.type,i=e.onChange,l=e.placeholder,s=e.value,o=P()("input",{"is-danger":!!t}),u=P()("control",{"has-icons-right":!!t}),m="textarea"===c?c:"input";return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:a,className:"label"},n),r.a.createElement("div",{className:u},r.a.createElement(m,{name:a,id:a,className:o,type:c,placeholder:l,value:s,onChange:i}),t&&r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&r.a.createElement("p",{className:"help is-danger"},t))}));D.defaultProps={error:"",type:"text",placeholder:"Type text here"};var S=function(e,t){return t?null:"Field ".concat(e," is required")};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var C={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},F={title:S,imgUrl:S,imdbUrl:S},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state=C,a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return Object(l.a)({},n,{value:r,error:e[n].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,n=a.getFormValue(),r=a.validate(),c=r.hasError,i=r.errors;c?a.setState(function(e){var t=i.map(function(t){var a=Object(N.a)(t,2),n=a[0];return[n,{error:a[1],value:e[n].value}]});return Object.fromEntries(t)}):(a.setState(C),t(n))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(l.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(N.a)(e,2),a=t[0],n=t[1],r=F[a];return[a,r?r(a,n.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(D,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),r.a.createElement(D,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),r.a.createElement(D,Object.assign({},n,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),r.a.createElement(D,Object.assign({},c,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={film:[]},a.getFilmsList=function(){var e=a.props.match.params.id,t=y.getState().films.find(function(t){return String(t.id)===e});a.setState({film:t})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=y.subscribe(this.getFilmsList)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.film,t=e.title,a=e.description,n=e.imgUrl,c=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-4"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:c},"IMDB"))))}}]),t}(n.Component);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}A.defaultProps={description:""};var L="http://www.omdbapi.com/?apikey=2f4a38c9&t=",x=Object(p.f)(A),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={filmsList:[],searchWord:""},a.unsubscribe=null,a.getFilmsList=function(){a.setState({filmsList:Object(s.a)(y.getState().films)})},a.handleAddFilm=function(e){var t=y.getState().films;console.log(t),y.dispatch(v(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({id:t[t.length-1].id+1},e)))},a.handleSearchChange=function(e){var t=e.target;a.setState({searchWord:t.value})},a.searchFilm=function(e){fetch("".concat(L).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.Title,a=e.Plot,n=e.Poster,r=e.Website,c={id:e.imdbID,title:t,description:a,imgUrl:n,imdbUrl:r};y.dispatch(v(c))})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.unsubscribe=y.subscribe(this.getFilmsList)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.state.searchWord;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"box"},r.a.createElement(D,{value:t,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),r.a.createElement("button",{onClick:function(){return e.searchFilm(t)},type:"button",className:"button is-primary"},"Search film")),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:j}),r.a.createElement(p.a,{exact:!0,path:"/film/:id",component:x}))),r.a.createElement("div",{className:"sidebar"},r.a.createElement(U,{onAdd:this.handleAddFilm}))))}}]),t}(n.Component);a(40);i.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6aa1dda8.chunk.js.map