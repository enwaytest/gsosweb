import{d as u,D as a,I as O,J as y,K as m}from"./index.b3d31375.js";function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?c(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-1v2h3a1 1 0 011 1v1h1c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1V9h-7v1h1c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1V9a1 1 0 011-1h3V6h-1a.5.5 0 01-.5-.5v-3zM7 5h2V3H7v2zm-4 6v2h2v-2H3zm8 0v2h2v-2h-2z",fillOpacity:.9}}]},b=u({name:"ForkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:v}=O(t),s=a(()=>["t-icon","t-icon-fork",o.value]),p=a(()=>i(i({},v.value),r.style)),h=a(()=>({class:s.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(d,h.value)}});export{b as default};
