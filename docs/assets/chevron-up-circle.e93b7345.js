import{d as O,D as a,I as y,J as d,K as m}from"./index.a05a8362.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.2 9.8L8 7l2.8 2.8.7-.71L8 5.59l-3.5 3.5.7.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M15 8A7 7 0 111 8a7 7 0 0114 0zm-1 0A6 6 0 102 8a6 6 0 0012 0z",fillOpacity:.9}}]},b=O({name:"ChevronUpCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=y(t),s=a(()=>["t-icon","t-icon-chevron-up-circle",l.value]),u=a(()=>c(c({},p.value),r.style)),v=a(()=>({class:s.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{b as default};