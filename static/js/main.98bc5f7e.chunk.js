(this["webpackJsonpbinouze.me"]=this["webpackJsonpbinouze.me"]||[]).push([[0],{20:function(e,a,t){e.exports=t(34)},25:function(e,a,t){},26:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(17),r=t.n(l),o=(t(25),t(26),t(6)),i=t(1),m=t(9),s=t(18),u=t.n(s),E=function(e){var a=e.beer;return c.a.createElement(o.b,{to:"/beers/".concat(a.id)},c.a.createElement("div",{className:"beer-item"},c.a.createElement("img",{src:a.image_url,alt:a.name,className:"beer-image"}),c.a.createElement("div",{className:"pic-name"},a.id+"- "+a.name)))},p=function(e){var a=e.location,t=e.history,l=Object(n.useState)([]),r=Object(m.a)(l,2),o=r[0],i=r[1],s=u.a.parse(a.search,{ignoreQueryPrefix:!0}),p=parseInt(s.page)||1,g=Object(n.useState)(25),h=Object(m.a)(g,2),b=h[0],f=h[1];Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers?page=".concat(p,"&per_page=").concat(b)).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.log("Error fetching and parsing data",e)}))}),[p,b]);var d=function(e){var a="/?page=".concat(parseInt(p)+e);t.push(a)};console.log("Type of BEERS",o&&o,typeof o),console.log("BEERLIST",p),console.log(b,"!==",o.length,b!==o.length);var v="page : ".concat(p);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav-options"},c.a.createElement("button",{onClick:function(){return d(-1)},className:"page-nav",disabled:1===p},"\u21e6"),c.a.createElement("span",null,v),c.a.createElement("div",null,c.a.createElement("label",null,"Bi\xe8res par page :"),c.a.createElement("select",{onChange:function(e){return f(parseInt(e.target.value))}},c.a.createElement("option",{value:25},"25"),c.a.createElement("option",{value:50},"50"),c.a.createElement("option",{value:75},"75"))),c.a.createElement("button",{onClick:function(){return d(1)},className:"page-nav",disabled:o.length!==b},"\u21e8")),o.length>0?c.a.createElement("ul",{className:"beer-list"},o.map((function(e){return c.a.createElement(E,{key:e.id,beer:e})}))):c.a.createElement("p",null,"LOADING..."))},g=function(){return c.a.createElement("ul",{className:"main-nav"},c.a.createElement("li",null,c.a.createElement(o.b,{exact:!0,to:"/"},"1")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/?page=2"},"2")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/?page=3"},"3")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/?page=4"},"4")))},h=function(e){console.log("+_BEERCARD_-=+=",e);var a=e.match.params.id,t=Object(n.useState)(),l=Object(m.a)(t,2),r=l[0],o=l[1];return Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers/".concat(a)).then((function(e){return e.json()})).then((function(e){o(e[0])})).catch((function(e){console.log("Error fetching and parsing data",e)}))}),[a]),r?(console.log(r),c.a.createElement("div",{className:"beer-card"},c.a.createElement("img",{src:r.image_url,alt:r.name,className:"beer-card-image"}),c.a.createElement("div",{className:"beer-card-info"},c.a.createElement("h1",null,c.a.createElement("strong",null,r.name)),c.a.createElement("h2",null,"BREWERS TIPS"),c.a.createElement("p",null,r.brewers_tips),c.a.createElement("h2",null,"FOOD PAIRING"),c.a.createElement("p",null,r.food_pairing)))):null};var b=function(){return console.log("render app"),c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"binouze.me"),c.a.createElement("h3",null,"bienvenue chez vous"),c.a.createElement(g,null)),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:p}),c.a.createElement(i.a,{path:"/beers/:id",component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.98bc5f7e.chunk.js.map