import{d as O,D as a,I as y,J as d,K as m}from"./index.797845a3.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 8.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM10.5 10.75a12.8 12.8 0 00-8 .99v1.76h8v1H2a.5.5 0 01-.5-.5v-2.28c0-.37.2-.7.54-.87a13.79 13.79 0 018.46-1.12v1.02zM11.4 14.3l1.6-1.6-1.6-1.59.71-.7 1.6 1.58 1.58-1.59.71.71-1.6 1.6 1.6 1.58-.7.71-1.6-1.6-1.59 1.6-.7-.7z"}}]},P=O({name:"UserClearIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=y(t),p=a(()=>["t-icon","t-icon-user-clear",l.value]),u=a(()=>s(s({},c.value),r.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(g,v.value)}});export{P as default};