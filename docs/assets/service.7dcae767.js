import{d as O,D as a,I as y,J as d,K as m}from"./index.797845a3.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.52 6.37a5.5 5.5 0 0110.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 019 14.7H8v-1h1a3.5 3.5 0 003.4-2.7h-1.9a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 00-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-4c0-.04 0-.09.02-.13zM12.5 7H11v3h1.5V7zm-9 0v3H5V7H3.5z",fillOpacity:.9}}]},b=O({name:"ServiceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:i,style:s}=y(t),v=a(()=>["t-icon","t-icon-service",i.value]),p=a(()=>l(l({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(h,u.value)}});export{b as default};