(this["webpackJsonpbinouze-me"]=this["webpackJsonpbinouze-me"]||[]).push([[0],{27:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),i=(a(32),a(2)),o=(a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(4)),s=a(1),m=a(16),u=a.n(m),d=["#FFE699","#FFE699","#FFD878","#FFCA5A","#FFBF42","#FBB123","#F8A600","#F39C00","#EA8F00","#E58500","#DE7C00","#D77200","#CF6900","#CB6200","#C35900","#BB5100","#B54C00","#B04500","#A63E00","#A13700","#9B3200","#952D00","#8E2900","#882300","#821E00","#7B1A00","#771900","#701400","#6A0E00","#660D00","#620903","#5E0B00","#5A0A02","#520907","#4C0505","#470606","#440607","#3F0708","#3B0607","#3A070B","#36080A","#36080A","#36080A"],g={position:"absolute",width:"100%",height:24,transform:"translate(0%, -50%)",borderRadius:2,pointerEvents:"none",background:"linear-gradient(90deg,".concat(d,")")},p=function(e){return d[Math.round(e/7.5)]},h=function(e){var t=e.ebc,a=e.size,n=p(t);return r.a.createElement("div",{className:"colorChip",style:{borderTop:"".concat(a,"px solid ").concat(n," "),borderRight:"".concat(a,"px solid transparent")}})},f=function(e){var t=e.beer;return r.a.createElement(o.b,{to:"/catalogue/beers/id=".concat(t.id)},r.a.createElement("div",{className:"beer-item"},r.a.createElement(h,{ebc:t.ebc,size:25}),r.a.createElement("img",{src:t.image_url,alt:t.name,className:"beer-image"}),r.a.createElement("div",{className:"pic-name"},r.a.createElement("p",null,t.name.split("\u2013")[0].split("(")[0].substring(0,15)))))},v=function(e){var t=e.beer;return r.a.createElement("div",{className:"mini-beer-card"},r.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},r.a.createElement("div",{style:{alignSelf:"center"}},r.a.createElement(o.b,{to:"/catalogue/beers/id=".concat(t.id)},r.a.createElement("img",{src:t.image_url,alt:t.name,className:"beer-image"}))),r.a.createElement("div",{className:"mini-card-info"},r.a.createElement(o.b,{to:"/beers/id=".concat(t.id)},r.a.createElement("p",{className:"mini-card-title"},r.a.createElement("strong",null,t.name))),r.a.createElement("p",{style:{fontStyle:"italic"}},t.tagline),r.a.createElement("div",{style:{flexGrow:"3"}}))))};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("g",null,r.a.createElement("path",{d:"m420.404 0h-328.808c-50.506 0-91.596 41.09-91.596 91.596v328.809c0 50.505 41.09 91.595 91.596 91.595h328.809c50.505 0 91.595-41.09 91.595-91.596v-328.808c0-50.506-41.09-91.596-91.596-91.596zm61.596 420.404c0 33.964-27.632 61.596-61.596 61.596h-328.808c-33.964 0-61.596-27.632-61.596-61.596v-328.808c0-33.964 27.632-61.596 61.596-61.596h328.809c33.963 0 61.595 27.632 61.595 61.596z"}),r.a.createElement("path",{d:"m432.733 112.467h-228.461c-6.281-18.655-23.926-32.133-44.672-32.133s-38.391 13.478-44.672 32.133h-35.661c-8.284 0-15 6.716-15 15s6.716 15 15 15h35.662c6.281 18.655 23.926 32.133 44.672 32.133s38.391-13.478 44.672-32.133h228.461c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-273.133 32.133c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.686 17.133 17.133-7.686 17.133-17.133 17.133z"}),r.a.createElement("path",{d:"m432.733 241h-35.662c-6.281-18.655-23.927-32.133-44.672-32.133s-38.39 13.478-44.671 32.133h-228.461c-8.284 0-15 6.716-15 15s6.716 15 15 15h228.461c6.281 18.655 23.927 32.133 44.672 32.133s38.391-13.478 44.672-32.133h35.662c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-80.333 32.133c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.686 17.133 17.133-7.686 17.133-17.133 17.133z"}),r.a.createElement("path",{d:"m432.733 369.533h-164.194c-6.281-18.655-23.926-32.133-44.672-32.133s-38.391 13.478-44.672 32.133h-99.928c-8.284 0-15 6.716-15 15s6.716 15 15 15h99.928c6.281 18.655 23.926 32.133 44.672 32.133s38.391-13.478 44.672-32.133h164.195c8.284 0 15-6.716 15-15s-6.716-15-15.001-15zm-208.866 32.134c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.685 17.133 17.132-7.686 17.134-17.133 17.134z"})),N=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return r.a.createElement("svg",E({id:"filter-icon",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,ref:t},n),a?r.a.createElement("title",null,a):null,y)},j=r.a.forwardRef((function(e,t){return r.a.createElement(N,E({svgRef:t},e))}));a.p;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M=r.a.createElement("g",null,r.a.createElement("path",{className:"st0",d:"M5.85,0h20.09c3.22,0,5.85,2.63,5.85,5.85v20.09c0,3.22-2.63,5.85-5.85,5.85H5.85C2.63,31.8,0,29.16,0,25.94 V5.85C0,2.63,2.63,0,5.85,0L5.85,0z M96.42,91.08h20.09c3.22,0,5.86,2.63,5.86,5.86v20.09c0,3.22-2.63,5.86-5.86,5.86H96.42 c-3.22,0-5.86-2.63-5.86-5.86V96.94C90.56,93.72,93.2,91.08,96.42,91.08L96.42,91.08z M51.14,91.08h20.09 c3.22,0,5.86,2.63,5.86,5.86v20.09c0,3.22-2.63,5.86-5.86,5.86H51.14c-3.22,0-5.85-2.63-5.85-5.86V96.94 C45.28,93.72,47.92,91.08,51.14,91.08L51.14,91.08z M5.85,91.08h20.09c3.22,0,5.85,2.63,5.85,5.86v20.09 c0,3.22-2.63,5.86-5.85,5.86H5.85c-3.22,0-5.85-2.63-5.85-5.86V96.94C0,93.72,2.63,91.08,5.85,91.08L5.85,91.08z M96.42,45.54 h20.09c3.22,0,5.86,2.63,5.86,5.86v20.09c0,3.22-2.63,5.86-5.86,5.86H96.42c-3.22,0-5.86-2.63-5.86-5.86V51.4 C90.56,48.18,93.2,45.54,96.42,45.54L96.42,45.54z M51.14,45.54h20.09c3.22,0,5.86,2.63,5.86,5.86v20.09 c0,3.22-2.63,5.86-5.86,5.86H51.14c-3.22,0-5.85-2.63-5.85-5.86V51.4C45.28,48.18,47.92,45.54,51.14,45.54L51.14,45.54z M5.85,45.54h20.09c3.22,0,5.85,2.63,5.85,5.86v20.09c0,3.22-2.63,5.86-5.85,5.86H5.85C2.63,77.34,0,74.7,0,71.48V51.4 C0,48.18,2.63,45.54,5.85,45.54L5.85,45.54z M96.42,0h20.09c3.22,0,5.86,2.63,5.86,5.85v20.09c0,3.22-2.63,5.85-5.86,5.85H96.42 c-3.22,0-5.86-2.63-5.86-5.85V5.85C90.56,2.63,93.2,0,96.42,0L96.42,0z M51.14,0h20.09c3.22,0,5.86,2.63,5.86,5.85v20.09 c0,3.22-2.63,5.85-5.86,5.85H51.14c-3.22,0-5.85-2.63-5.85-5.85V5.85C45.28,2.63,47.92,0,51.14,0L51.14,0z"})),x=function(e){var t=e.svgRef,a=e.title,n=w(e,["svgRef","title"]);return r.a.createElement("svg",C({className:"grid-icon",id:"small-item-icon",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 122 122",enableBackground:"new 0 0 122 122",ref:t},n),a?r.a.createElement("title",null,a):null,M)},O=r.a.forwardRef((function(e,t){return r.a.createElement(x,C({svgRef:t},e))}));a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=r.a.createElement("g",null,r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.78,66.082h47.875c2.045,0,3.717,1.988,3.717,4.414v46.479 c0,2.43-1.671,4.416-3.717,4.416H3.78c-2.043,0-3.717-1.986-3.717-4.416V70.496C0.063,68.07,1.737,66.082,3.78,66.082L3.78,66.082z M71.224,0H119.1c2.046,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H71.224 c-2.045,0-3.714-1.984-3.714-4.413V4.415C67.51,1.986,69.179,0,71.224,0L71.224,0z M3.714,0h47.878 c2.045,0,3.717,1.986,3.717,4.415v46.479c0,2.429-1.671,4.413-3.717,4.413H3.714C1.671,55.307,0,53.323,0,50.894V4.415 C0,1.986,1.671,0,3.714,0L3.714,0z M71.287,67.26h47.876c2.043,0,3.717,1.986,3.717,4.416v46.479c0,2.426-1.674,4.412-3.717,4.412 H71.287c-2.045,0-3.717-1.986-3.717-4.412V71.676C67.57,69.246,69.242,67.26,71.287,67.26L71.287,67.26z"})),I=function(e){var t=e.svgRef,a=e.title,n=L(e,["svgRef","title"]);return r.a.createElement("svg",z({className:"grid-icon",id:"large-item-icon",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 122 122",enableBackground:"new 0 0 122 122",ref:t},n),a?r.a.createElement("title",null,a):null,k)},S=r.a.forwardRef((function(e,t){return r.a.createElement(I,z({svgRef:t},e))})),B=(a.p,function(e){e.beers;var t=e.itemsPage,a=(e.page,e.pageDisplay),n=e.onChange,c=e.largeGrid,l=e.switchGrid,i=e.hiddenFilters,s=e.handleHiddenFilters,m=e.isMobile;return r.a.createElement("div",{className:"nav-options"},r.a.createElement("div",{className:"nav-filter-title",hidden:!m,onClick:function(){return s(!i)}},r.a.createElement(j,{id:"filter-icon"})),r.a.createElement("span",null,a),r.a.createElement("div",null,r.a.createElement("select",{id:"itemsPerPage",value:t,onChange:function(e){return n(1,parseInt(e.target.value))}},r.a.createElement("option",{value:25},"25"),r.a.createElement("option",{value:50},"50"),r.a.createElement("option",{value:75},"75")),r.a.createElement("label",{htmlFor:"itemsPerPage"},"items")),r.a.createElement("div",{className:"items-size-button",onClick:function(){return l(c)}},r.a.createElement(O,{className:c?"grid-icon":"grid-icon-selected grid-icon"}),r.a.createElement(S,{className:c?"grid-icon-selected grid-icon":"grid-icon"})),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/catalogue/beers/id=random",activeClassName:"active-nav-route"},r.a.createElement("img",{src:"https://img.icons8.com/fluent-systems-regular/40/000000/dice.png",alt:"dice roll",className:"diceroll"}))))}),P=a(11),D={position:"absolute",width:"100%",height:42,transform:"translate(0%, -50%)",borderRadius:7,cursor:"pointer"},A={position:"absolute",width:"100%",height:14,transform:"translate(0%, -50%)",borderRadius:7,pointerEvents:"none",backgroundColor:"#F2BB05"};function T(e){var t=e.getRailProps,a=e.railBackgroundColor;return r.a.createElement(n.Fragment,null,r.a.createElement("div",Object.assign({style:D},t())),r.a.createElement("div",{style:a||A}))}function R(e){var t=e.source,a=e.target,n=e.getTrackProps,c=e.disabled;return r.a.createElement("div",Object.assign({style:{position:"absolute",transform:"translate(0%, -50%)",height:14,zIndex:1,backgroundColor:c?"#999":"#f2bb05",borderRadius:7,cursor:"pointer",left:"".concat(t.percent,"%"),width:"".concat(a.percent-t.percent,"%")}},n()))}R.defaultProps={disabled:!1};var F=a(8),W=function(e){return{width:14,height:34,borderRadius:"20%",boxShadow:"inset 0px 0px 0px 1px rgba(255, 255, 255, 0.6)",backgroundColor:e,borderColor:"rgba(0, 0, 0, 0.3)",borderStyle:"solid",borderWidth:"1px"}},H={position:"absolute",transform:"translate(-50%, -50%)",zIndex:2,width:2,height:18,borderRadius:"20%",border:"2px solid #042A2B",boxShadow:"0px 1px 2px 1px rgba(0, 0, 0, 0.3)"};function Q(e){var t=Object(i.a)(e.domain,2),a=t[0],c=t[1],l=e.handle,o=l.id,s=l.value,m=l.percent,u=e.disabled,d=e.customHandleColor,g=e.customColorsList,p=e.getHandleProps;return r.a.createElement(n.Fragment,null,r.a.createElement("div",Object.assign({style:{left:"".concat(m,"%"),position:"absolute",transform:"translate(-50%, -50%)",WebkitTapHighlightColor:"rgba(0,0,0,0)",zIndex:5,width:28,height:42,cursor:"pointer",backgroundColor:"none"}},p(o))),r.a.createElement("div",{role:"slider","aria-valuemin":a,"aria-valuemax":c,"aria-valuenow":s,style:Object(F.a)(Object(F.a)({left:"".concat(m,"%"),backgroundColor:u?"#666":"#124e78"},H),d?Object(F.a)({},W("".concat(g[Math.round(s/15)]))):null)}))}function U(e){var t=e.tick,a=e.count,n=e.format;return r.a.createElement("div",null,r.a.createElement("div",{style:{position:"absolute",marginTop:14,width:1,height:5,backgroundColor:"rgb(200,200,200)",left:"".concat(t.percent,"%")}}),r.a.createElement("div",{style:{position:"absolute",marginTop:22,fontSize:10,textAlign:"center",marginLeft:"".concat(-100/a/2,"%"),width:"".concat(100/a,"%"),left:"".concat(t.percent,"%")}},n(t.value)))}Q.defaultProps={disabled:!1},U.defaultProps={format:function(e){return e}};var G=function(e){var t=e.rangeDomain,a=e.range,n=e.handleRangeChange,c=e.handleRangeUpdate,l=e.ticksNumber,i=e.railBackgroundColor,o=e.noTrack,s=e.customHandleColor,m=e.customColorsList,u=t,d=a;return r.a.createElement("div",{style:{margin:"10%",height:20,width:"80%"}},r.a.createElement(P.c,{mode:2,step:1,domain:u,rootStyle:{position:"relative",width:"100%"},onUpdate:c,onChange:n,values:d,className:"filter-slider"},r.a.createElement(P.b,null,(function(e){var t=e.getRailProps;return r.a.createElement(T,{railBackgroundColor:i,getRailProps:t})})),r.a.createElement(P.a,null,(function(e){var t=e.handles,a=e.getHandleProps;return r.a.createElement("div",{className:"slider-handles"},t.map((function(e){var t=e.id;return r.a.createElement(Q,{key:e.id,styleId:t,handle:e,domain:u,getHandleProps:a,customHandleColor:s,customColorsList:m})})))})),o?null:r.a.createElement(P.e,{left:!1,right:!1},(function(e){var t=e.tracks,a=e.getTrackProps;return r.a.createElement("div",{className:"slider-tracks"},t.map((function(e){var t=e.id,n=e.source,c=e.target;return r.a.createElement(R,{key:t,source:n,target:c,getTrackProps:a})})))})),r.a.createElement(P.d,{count:l},(function(e){var t=e.ticks;return r.a.createElement("div",{className:"slider-ticks"},t.map((function(e){return r.a.createElement(U,{key:e.id,tick:e,count:t.length})})))}))))},V=function(e){var t=e.handleSwitch,a=e.typesArray,c=e.category,l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){}),[s]),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:s?"option-title opened":"option-title",onClick:function(){m(!s),console.log("BeerTypeFilter : ",s)}},r.a.createElement("h3",null," ","type of ".concat(c))),r.a.createElement("ul",{className:"filter-option-list"},a.map((function(e,a){return r.a.createElement("li",{className:s?"filter-option":"filter-option filter-option-hidden",key:a.toString()},r.a.createElement("input",{type:"radio",id:e,name:"beerType",value:e,onChange:function(e){return t(e.target.value)}}),r.a.createElement("label",{htmlFor:e},e))}))))},Z=["Wyeast 1056 - American Ale\u2122","Wyeast 2007 - Pilsen Lager\u2122","Wyeast 3711 - French Saison\u2122","Wyeast 3522 - Belgian Ardennes\u2122","Saflager S189","Wyeast 1272 - American Ale II\u2122","Wyeast 3333 - German Wheat\u2122","Wyeast 3638 - Bavarian Wheat\u2122","WLP500 - Monastery Ale","Wyeast 1010 - American Wheat\u2122","WLP099 - Super High Gravity Ale","Wyeast 3787 - Trappist High Gravity\u2122","Safale US-05","WLP351 - Bavarian Weizen","Champagne","Wyeast 1056 - American Ale\u2122 & Wyeast 1272 - American Ale II\u2122","Wyeast 3944 - Belgian Witbier\u2122","Wyeast 3724 - Belgian Saison\u2122","Westvleteren 12 (recovered from a bottle)","Wyeast 1388 - Belgian Strong Ale\u2122","Wyeast 2124 - Bohemian Lager\u2122","WLP4000 - Vermont Ale","Wyeast 2126 - Bohemian Lager\u2122","WLP013 - London Ale","Saflager W-34/70"],Y=["ipa","lager","pils","stout","blonde","citra","india","double","tripel"],K=function(e){var t=e.abvDomain,a=e.abvRange,n=e.ibuDomain,c=e.ibuRange,l=e.srmDomain,i=e.srmRange,o=e.onChange,s=e.handleNameSearch,m=e.hidden,u=e.isMobile;return r.a.createElement("div",{className:"nav-filter-wrapper",style:{background:"".concat(m&&u?"transparent":"#aaaa9825")}},r.a.createElement("div",{className:m?"nav-filters nav-filters-hidden":"nav-filters"},r.a.createElement("div",{className:"nav-filter-title"},r.a.createElement("h3",{hidden:u},"filters")),r.a.createElement("div",{id:"filters-container"},r.a.createElement("div",{className:m?"filter-hidden":"filter"}," ","alcohol by volume",r.a.createElement(G,{rangeDomain:t,range:a,handleRangeChange:function(e){o(e,c,i)},ticksNumber:6})),r.a.createElement("div",{className:m?"filter-hidden":"filter"},"bitterness - IBU",r.a.createElement(G,{rangeDomain:n,range:c,handleRangeChange:function(e){o(a,e,i)},ticksNumber:6})),r.a.createElement("div",{className:m?"filter-hidden":"filter"},"color -SRM",r.a.createElement(G,{rangeDomain:l,range:i,handleRangeChange:function(e){o(a,c,e)},ticksNumber:6,railBackgroundColor:g,noTrack:!0,customHandleColor:!0,customColorsList:d})),r.a.createElement("div",{className:m?"filter-hidden":"filter"},r.a.createElement(V,{key:"1",handleSwitch:s,category:"Beer",typesArray:Y}),r.a.createElement(V,{key:"2",handleSwitch:s,category:"Yeast",typesArray:Z}))),r.a.createElement("div",{style:{flexGrow:3,height:"600px",margin:"auto"}})))},J=function(){return r.a.createElement("div",{style:{flexGrow:3,width:"100%",margin:"20px 0"}},r.a.createElement("p",null,"Oh, this is so sad... Seems like the beer of your dreams doesn't exist..."),r.a.createElement("p",null,"I'm starting to think... that you have bad taste."),r.a.createElement("p",null,"Sorry."))},_=function(e){var t=e.location,a=e.history,c=Object(n.useState)([]),l=Object(i.a)(c,2),o=l[0],s=l[1],m=u.a.parse(t.search,{ignoreQueryPrefix:!0}),d=parseInt(parseInt(m.page))||1,g=parseInt(parseInt(m.items))||25;console.log("queryString : ",m,d,g);var p="page ".concat(d),h=function(e){if(m[e]){var t=m[e].split("-");return[parseInt(t[0]),parseInt(t[1])]}},E=[0,56],b=h("abv")||E,y=[0,250],N=h("ibu")||y,j=[0,601],C=h("srm")||j;console.log("filter ranges :",b,N,C);var w=Object(n.useState)(),M=Object(i.a)(w,2),x=M[0],O=M[1],z="https://api.punkapi.com/v2/beers?page=".concat(d,"&per_page=").concat(g)+"&abv_gt=".concat(b[0],"&abv_lt=").concat(b[1])+"&ibu_gt=".concat(N[0],"&ibu_lt=").concat(N[1])+"&ebc_gt=".concat(parseInt(C[0])/2,"&ebc_lt=").concat(parseInt(C[1])/2);Object(n.useEffect)((function(){fetch(z).then((function(e){return e.json()})).then((function(e){console.log("USEEFFECT N\xb01",z),s(e.filter((function(e){return"https://images.punkapi.com/v2/keg.png"!==e.image_url&&"https://images.punkapi.com/v2/cask.png"!==e.image_url})))})).catch((function(e){console.log("Error fetching and parsing data",e)}))}),[z]),Object(n.useEffect)((function(){if(void 0!==x){var e=z.concat("&yeast=".concat(x));fetch(e).then((function(e){return e.json()})).then((function(e){console.log("USEEFFECT N\xb02"),s(e)})).catch((function(e){console.log("Error fetching and parsing data",e)}))}}),[x,z]),console.log("beers : ",o&&o);var L=Object(n.useState)(!1),k=Object(i.a)(L,2),I=k[0],S=k[1],P=function(){var e=Object(n.useState)(window.innerWidth),t=Object(i.a)(e,2),a=t[0],r=t[1],c=function(e){console.log("HANDLE WIDTH",e),r(e.target.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}})),a}(),D=P<640,A=Object(n.useState)(D),T=Object(i.a)(A,2),R=T[0],F=T[1];return Object(n.useEffect)((function(){F(P<640)}),[P]),r.a.createElement("div",null,r.a.createElement("div",{className:"body-wrapper"},r.a.createElement(K,{abvDomain:E,abvRange:b,ibuDomain:y,ibuRange:N,srmDomain:j,srmRange:C,onChange:function(e,t,n){console.log("consoleLog SRM",n);var r="/catalogue/?page=".concat(d,"&items=").concat(g,"&abv=").concat(e[0],"-").concat(e[1],"&ibu=").concat(t[0],"-").concat(t[1],"&srm=").concat(n[0],"-").concat(n[1]);a.push(r)},handleNameSearch:O,hidden:R,isMobile:D}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(B,{beers:o,itemsPage:g,page:d,pageDisplay:p,onChange:function(e,t){var n="/catalogue/?page=".concat(e,"&items=").concat(t,"&abv=").concat(b[0],"-").concat(b[1],"&ibu=").concat(N[0],"-").concat(N[1],"&srm=").concat(C[0],"-").concat(C[1]);a.push(n)},largeGrid:I,switchGrid:function(e){return S(!e)},hiddenFilters:R,handleHiddenFilters:F,isMobile:D}),o.length>0?r.a.createElement("div",{className:"beer-list",style:I?{gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))"}:{gridTemplateColumns:"repeat(auto-fill, minmax(118px, 1fr))"}},o.map((function(e){return function(e){return!0===I?r.a.createElement(v,{key:e.id,beer:e}):r.a.createElement(f,{key:e.id,beer:e})}(e)}))):r.a.createElement(J,null),r.a.createElement("div",{id:"empty-div-wrapper",style:{width:"100%",flexGrow:3}}))))},q=function(){return r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/catalogue",activeClassName:"active-nav-route"},r.a.createElement("img",{alt:"",style:{width:"42px",height:"42px"},src:"https://img.icons8.com/pastel-glyph/64/000000/liquor-shelf--v2.png"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/top",activeClassName:"active-nav-route"},r.a.createElement("img",{style:{width:"42px",height:"42px"},alt:"user rated beers",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQ1LjUzMnB4IiBoZWlnaHQ9IjQ1LjUzMnB4IiB2aWV3Qm94PSIwIDAgNDUuNTMyIDQ1LjUzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUuNTMyIDQ1LjUzMjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTIyLjc2NiwwLjAwMUMxMC4xOTQsMC4wMDEsMCwxMC4xOTMsMCwyMi43NjZzMTAuMTkzLDIyLjc2NSwyMi43NjYsMjIuNzY1YzEyLjU3NCwwLDIyLjc2Ni0xMC4xOTIsMjIuNzY2LTIyLjc2NQ0KCQlTMzUuMzQsMC4wMDEsMjIuNzY2LDAuMDAxeiBNMjIuNzY2LDYuODA4YzQuMTYsMCw3LjUzMSwzLjM3Miw3LjUzMSw3LjUzYzAsNC4xNTktMy4zNzEsNy41My03LjUzMSw3LjUzDQoJCWMtNC4xNTgsMC03LjUyOS0zLjM3MS03LjUyOS03LjUzQzE1LjIzNywxMC4xOCwxOC42MDgsNi44MDgsMjIuNzY2LDYuODA4eiBNMjIuNzYxLDM5LjU3OWMtNC4xNDksMC03Ljk0OS0xLjUxMS0xMC44OC00LjAxMg0KCQljLTAuNzE0LTAuNjA5LTEuMTI2LTEuNTAyLTEuMTI2LTIuNDM5YzAtNC4yMTcsMy40MTMtNy41OTIsNy42MzEtNy41OTJoOC43NjJjNC4yMTksMCw3LjYxOSwzLjM3NSw3LjYxOSw3LjU5Mg0KCQljMCwwLjkzOC0wLjQxLDEuODI5LTEuMTI1LDIuNDM4QzMwLjcxMiwzOC4wNjgsMjYuOTExLDM5LjU3OSwyMi43NjEsMzkuNTc5eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}))))},X=a(26),$=function(e){var t=e.rate,a=e.id,n=e.checked,c=e.size,l=void 0===c?20:c;return r.a.createElement("li",{onClick:function(){return t(a)},className:n?"selected":null},r.a.createElement("svg",{preserveAspectRatio:"xMidYMid meet",width:l,height:l*(86/73),viewBox:"0 0 73 86",className:"star"},r.a.createElement("path",{strokeWidth:"2",id:"svg_1",d:"m61.6208,33.8545l-8.70113,0l0,-1.42248c2.83387,-2.09888 4.67498,-5.4656 4.67498,-9.2548c0,-5.61369 -4.0394,-10.30195 -9.36409,-11.31068c-1.54776,-5.71462 -6.76213,-9.86637 -12.9226,-9.86654c-3.40953,0.00016 -6.6817,1.31854 -9.14178,3.61255c-0.8784,-0.22972 -1.78671,-0.34794 -2.69969,-0.34794c-4.34067,0 -8.12719,2.63354 -9.77687,6.42056c-0.22503,-0.01326 -0.45121,-0.01981 -0.67792,-0.01981c-6.34752,0 -11.51168,5.16415 -11.51168,11.51168c0,3.495 1.56758,6.62879 4.0342,8.74179l0,47.61082c0,2.77075 2.26699,5.03771 5.03771,5.03771l37.31001,0c2.77075,0 5.03773,-2.26696 5.03773,-5.03771l0,-7.38865l8.70114,0c5.18516,0 9.40374,-4.21857 9.40374,-9.40376l0,-19.47919c0,-5.18515 -4.21858,-9.40358 -9.40374,-9.40358l0.00001,0.00002zm-15.53784,-5.5467l-29.47669,0l0,10.25193c0,1.76203 -1.42854,3.19055 -3.19056,3.19055c-1.76203,0 -3.19056,-1.42853 -3.19056,-3.19055l0,-11.07812c-1.40938,-0.91552 -2.34405,-2.5024 -2.34405,-4.30456c0,-2.82901 2.30157,-5.13058 5.1306,-5.13058c0.63675,0 1.25993,0.11654 1.85252,0.34625c0.94641,0.36691 2.01105,0.26179 2.8673,-0.28362c0.85625,-0.54542 1.40184,-1.46564 1.4695,-2.47838c0.1493,-2.23456 2.02283,-3.98499 4.26546,-3.98499c0.73146,0 1.42481,0.17799 2.06042,0.52878c1.40636,0.77614 3.1704,0.38572 4.11799,-0.91132c1.33802,-1.83155 3.40215,-2.88207 5.66306,-2.88207c3.74084,0 6.81536,2.92321 6.99942,6.65499c0.04214,0.85642 0.42738,1.65993 1.06882,2.22902c0.64132,0.56926 1.48479,0.85708 2.34019,0.79663c0.14844,-0.0104 0.26499,-0.01511 0.36658,-0.01511c2.82902,0 5.13058,2.30157 5.13058,5.13057s-2.30156,5.13058 -5.13058,5.13058zm16.20951,34.42963c0,0.35785 -0.31384,0.67168 -0.67167,0.67168l-8.70113,0l0,-20.82256l8.70113,0c0.35785,0 0.67167,0.31384 0.67167,0.67168l0,19.47919l0,0.00002z"})))},ee=function(e){var t=e.onChange,a=e.beerRating,n=e.size,c=e.customClass,l=function(e){t(e!==a?e:0)};return r.a.createElement("div",null,r.a.createElement("ul",{className:"beer-stars ".concat(c)},function(){for(var e=[],t=0;t<5;t++)e.push(r.a.createElement($,{id:t+1,key:t,rate:l,checked:t<a,size:n}));return e}()))},te=function(e){var t=e.ebc,a=e.size,n=p(t);return r.a.createElement("div",{className:"beer-color-display",style:{backgroundColor:n,width:"".concat(a,"px"),height:"".concat(a,"px")}})},ae=function(e){var t=e.match,a=e.favBeers,c=e.setFavBeers,l=u.a.parse(t.params.id,{ignoreQueryPrefix:!0}),o=l.id?l.id:Math.floor(325*Math.random()),s=Object(n.useState)(),m=Object(i.a)(s,2),d=m[0],g=m[1];Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers/".concat(o)).then((function(e){return e.json()})).then((function(e){g(e[0])})).catch((function(e){console.log("Error fetching and parsing data",e)}))}),[o]);var p=function(e){var t=[];return d.ingredients[e].map((function(e,a){return t.includes(e.name)?t:t=[].concat(Object(X.a)(t),[e.name])})),t};return d?r.a.createElement("div",{className:"beer-card"},r.a.createElement("div",{className:"beer-img-star"},r.a.createElement("img",{src:d.image_url,alt:d.name,className:"beer-card-image"}),r.a.createElement(ee,{id:"beer-card-rating",beerRating:a?a[o]:0,onChange:function(e){c((function(t){var a=Object(F.a)({},t);return a[o]=e,a}))},size:36,customClass:"beer-stars"}),r.a.createElement("label",{htmlFor:"beer-card-rating"},"Rate this Beer !")),r.a.createElement("div",{className:"beer-card-info"},r.a.createElement("h1",{className:"beer-card-title"},r.a.createElement("strong",null,d.name.toUpperCase())),r.a.createElement("h4",null,d.tagline),r.a.createElement("div",{className:"beer-description"},r.a.createElement("p",null,d.description)),r.a.createElement("div",null,r.a.createElement("div",{className:"icon-title-main"},r.a.createElement("img",{src:"https://img.icons8.com/wired/30/000000/food-and-wine.png",alt:"food pairing icon"}),r.a.createElement("h2",null,"Food pairing")),r.a.createElement("ul",null,d.food_pairing.map((function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("div",{className:"beer-card-data"},r.a.createElement("div",null,r.a.createElement("span",null,"European Brewery Convention : "),r.a.createElement(te,{ebc:d.ebc,size:40})),r.a.createElement("div",null,r.a.createElement("span",null,"Alcohol by Volume : "),r.a.createElement("div",{className:"beer-color-display"},d.abv,"%")),r.a.createElement("div",null,r.a.createElement("span",null,"International Bitterness Unit : "),r.a.createElement("div",{className:"beer-color-display"},d.ibu)))),r.a.createElement("div",null,r.a.createElement("div",{className:"side-card"},r.a.createElement("div",null,r.a.createElement("div",{className:"icon-title-side"},r.a.createElement("img",{src:"https://img.icons8.com/carbon-copy/30/000000/wheat.png",alt:"malt icon"}),r.a.createElement("h3",null,"malts")),r.a.createElement("ul",null,p("malt").map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:"icon-title-side"},r.a.createElement("img",{src:"https://img.icons8.com/carbon-copy/30/000000/hops.png",alt:"hops icon"}),r.a.createElement("h3",null,"hops")),r.a.createElement("ul",null,p("hops").map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:"icon-title-side"},r.a.createElement("img",{src:"https://img.icons8.com/carbon-copy/30/000000/microorganisms.png",alt:"yeast icon"}),r.a.createElement("h3",null,"yeast")),r.a.createElement("p",null,d.ingredients.yeast),r.a.createElement("div",{className:"icon-title-side"},r.a.createElement("img",{src:"https://img.icons8.com/dotty/30/000000/cook-male.png",alt:"recipe icon"}),r.a.createElement("h3",null,"the brewers tips")),r.a.createElement("p",null,d.brewers_tips))))):null},ne=function(e){var t=e.id,a=e.beerRating,c=e.setFavBeers,l=Object(n.useState)(!1),s=Object(i.a)(l,2),m=s[0],u=s[1],d=Object(n.useState)(!1),g=Object(i.a)(d,2),p=g[0],f=g[1],v=t,E=Object(n.useState)(),b=Object(i.a)(E,2),y=b[0],N=b[1];return Object(n.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers/".concat(v||"random")).then((function(e){return e.json()})).then((function(e){return e[0]})).then((function(e){N(e),f(!0),u(!0)})).catch((function(e){u(!1),console.log("Error fetching and parsing data",e)}))}),[v]),m||p?y?r.a.createElement("div",{className:"mini-beer-card"},r.a.createElement(h,{ebc:y.ebc,size:30}),r.a.createElement("div",{style:{alignSelf:"center"}},r.a.createElement(o.b,{to:"/catalogue/beers/id=".concat(y.id)},r.a.createElement("img",{src:y.image_url,alt:y.name,className:"beer-image"}))),r.a.createElement("div",{className:"mini-card-info"},r.a.createElement(o.b,{to:"/catalogue/beers/id=".concat(y.id)},r.a.createElement("p",{className:"mini-card-title"},r.a.createElement("strong",null,y.name))),r.a.createElement("div",{style:{flexGrow:"3"}}),r.a.createElement("p",{style:{fontStyle:"italic"}},y.tagline),r.a.createElement(ee,{beerRating:a,onChange:function(e){c((function(t){var a=Object(F.a)({},t);return a[v]=e,a}))},size:28,customClass:"mini-beer-stars"}))):r.a.createElement("div",{style:{flexGrow:2,height:"100vh",width:"80vw",margin:"20px 0"}},r.a.createElement("p",null,"You haven't rated any beer yet !")):null},re=function(e){var t=e.favBeers,a=e.setFavBeers;if(console.log("favBeers : ",t),t){var n=Object.entries(t);return console.log("top beer list : ",n),r.a.createElement("div",{className:"top-beers-list wrapper"},n.map((function(e){var n=Object(i.a)(e,2),c=n[0],l=n[1];return r.a.createElement(ne,{id:parseInt(c),key:c.toString(),beerRating:l,favBeers:t,setFavBeers:a})})))}return r.a.createElement("div",null,t?null:r.a.createElement("h1",null,"Your haven't rated any beer yet !"))},ce=function(){return r.a.createElement("div",{className:"error404"},"404, not found")},le=function(){return r.a.createElement("div",{className:"error404"},"Coming soon...")};var ie=function(){console.log("render app");var e=JSON.parse(localStorage.getItem("favBeers")),t=Object(n.useState)(e||!1),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){localStorage.setItem("favBeers",JSON.stringify(c))}),[c]),r.a.createElement(o.a,{basename:"/binouze-me"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"app-header"},r.a.createElement("div",{className:"site-title"},r.a.createElement("h2",null,"binouze-me"),r.a.createElement("h5",null,"welcome to Brewdog")),r.a.createElement(q,null)),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:_}),r.a.createElement(s.a,{path:"/catalogue/beers/:id",render:function(e){var t=e.match;return r.a.createElement(ae,{favBeers:c,setFavBeers:l,match:t})}}),r.a.createElement(s.a,{path:"/catalogue/beers/:id",render:function(){return r.a.createElement(ae,{favBeers:c,setFavBeers:l,match:"random"})}}),r.a.createElement(s.a,{path:"/catalogue",component:_}),r.a.createElement(s.a,{path:"/search",component:le}),r.a.createElement(s.a,{path:"/top/",render:function(){return r.a.createElement(re,{favBeers:c,setFavBeers:l})}}),r.a.createElement(s.a,{component:ce}))),r.a.createElement("footer",{style:{display:"flex",width:"100%",padding:"2px",justifyContent:"center",alignSelf:"flex-end",boxShadow:"0px 1px 2px -1px inset #124e78"}},r.a.createElement("p",{style:{margin:"1px"}},"Thank you for trying this little app, hope you enjoyed it, it was made using"," ",r.a.createElement("a",{href:"https://punkapi.com/",style:{color:"blue"}},"punkapi.com"),", come visit me on"," ",r.a.createElement("a",{href:"https://github.com/arieloO",style:{color:"blue"}},"my git-hub page")," ","for more - icons by ",r.a.createElement("a",{href:"https://icons8.com"},"Icons8"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.68069cd1.chunk.js.map