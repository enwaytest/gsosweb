import{d as O,D as a,I as y,J as m,K as d}from"./index.59422791.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 11v1h4v-1H6z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M7.65 1.65c.2-.2.5-.2.7 0l6.5 6.5-.7.7L13 7.71v5.79a1 1 0 01-1 1H4a1 1 0 01-1-1V7.7L1.85 8.86l-.7-.7 6.5-6.5zM8 2.7l-4 4v6.79h8V6.7l-4-4z",fillOpacity:.9}}]},b=O({name:"HomeIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-home",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(h,u.value)}});export{b as default};