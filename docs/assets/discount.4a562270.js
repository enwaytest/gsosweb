import{d as O,D as a,I as y,J as d,K as m}from"./index.b3d31375.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.84 5.01A2 2 0 105 7.84 2 2 0 007.84 5zm-.7.7a1 1 0 11-1.42 1.42 1 1 0 011.41-1.41z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M2 7.95V2h5.95a1 1 0 01.7.3l6.14 6.13a1 1 0 010 1.41L9.84 14.8a1 1 0 01-1.41 0L2.29 8.66A1 1 0 012 7.95zM7.95 3H3v4.95l6.13 6.13 4.95-4.95L7.95 3z",fillOpacity:.9}}]},h=O({name:"DiscountIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-discount",l.value]),u=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>d(g,f.value)}});export{h as default};
