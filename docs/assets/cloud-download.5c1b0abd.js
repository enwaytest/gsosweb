import{d,D as l,I as O,J as y,K as g}from"./index.797845a3.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.73 6.26l-.71.09A2.32 2.32 0 002 8.67c0 1.2.89 2.18 2 2.31v1a3.31 3.31 0 01-3-3.31 3.32 3.32 0 012.9-3.32A4.2 4.2 0 018 2c2 0 3.69 1.43 4.1 3.35 1.63.2 2.9 1.6 2.9 3.32a3.31 3.31 0 01-3 3.32v-1c1.11-.14 2-1.11 2-2.32 0-1.22-.9-2.2-2.02-2.32l-.71-.09-.15-.7A3.2 3.2 0 008 3a3.2 3.2 0 00-3.12 2.56l-.15.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M9.8 11.3l-1.3 1.29v-4.6h-1v4.6L6.2 11.3l-.7.7 2.15 2.15c.2.2.51.2.7 0L10.5 12l-.7-.71z",fillOpacity:.9}}]},b=d({name:"CloudDownloadIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=O(r),p=l(()=>["t-icon","t-icon-cloud-download",a.value]),u=l(()=>c(c({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(m,v.value)}});export{b as default};