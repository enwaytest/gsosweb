import{d as O,D as n,I as y,J as g,K as d}from"./index.a05a8362.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.34 7.31c.27-.3.56-.62.87-.92h3.61a1.87 1.87 0 00-2.06-1.4c.37-.29.74-.56 1.11-.8a2.8 2.8 0 011.94 2.66v.46H5.34z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M3.74 15a2.72 2.72 0 01-2-.73A2.72 2.72 0 011 12.26a6.3 6.3 0 01.69-2.62 6.54 6.54 0 017.95-7.95l.33-.15A6.3 6.3 0 0112.26 1c.72 0 1.46.18 2 .73.56.55.75 1.3.74 2.01a6.3 6.3 0 01-.67 2.6 6.54 6.54 0 01.14 2.68l-.06.4H6.2a1.87 1.87 0 003.3.65l.14-.19h4.66l-.27.65a6.53 6.53 0 01-7.7 3.8l-.31.13a6.3 6.3 0 01-2.29.54zm1.3-1.17a6.56 6.56 0 01-2.38-2.08c.1-.34.24-.7.42-1.09a5.6 5.6 0 009.78.15H10.1a2.8 2.8 0 01-4.89-1.86v-.47h8.38c.02-.15.02-.3.02-.47a5.6 5.6 0 00-2.85-4.87c.4-.17.78-.3 1.13-.39.8.6 1.48 1.38 1.94 2.29.37-1.15.32-2.1-.22-2.65-1.28-1.27-4.82.2-7.92 3.3-3.1 3.1-4.57 6.64-3.3 7.92.54.54 1.5.59 2.65.22zm3.24-11.4l-.27-.02a5.6 5.6 0 00-5.59 5.87 18.3 18.3 0 012.61-3.25 18.3 18.3 0 013.25-2.6z",fillOpacity:.9}}]},b=O({name:"LogoIeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=y(r),p=n(()=>["t-icon","t-icon-logo-ie",l.value]),u=n(()=>c(c({},s.value),t.style)),f=n(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>g(m,f.value)}});export{b as default};