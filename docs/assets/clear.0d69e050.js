import{d as h,D as a,I as O,J as y,K as m}from"./index.b3d31375.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7 4h2V2H7v2zm3-2v2h3a1 1 0 011 1v2a1 1 0 01-.86.99l.7 4.87a1 1 0 01-1 1.14H3.16a1 1 0 01-.99-1.14l.7-4.87A1 1 0 012 7V5a1 1 0 011-1h3V2a1 1 0 011-1h2a1 1 0 011 1zm2.13 5H13V5H3v2H12.13zm0 1H3.87l-.72 5H5v-2h1v2h1.5v-2h1v2H10v-2h1v2h1.85l-.72-5z",fillOpacity:.9}}]},b=h({name:"ClearIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=O(t),v=a(()=>["t-icon","t-icon-clear",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(d,u.value)}});export{b as default};
