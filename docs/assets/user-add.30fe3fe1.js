import{d,D as a,I as O,J as y,K as h}from"./index.13b914b0.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 8.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM11.5 10.99a12.77 12.77 0 00-9 .75v1.76h7v1H2a.5.5 0 01-.5-.5v-2.28c0-.37.2-.7.54-.87a13.79 13.79 0 019.46-.9v1.04zM12.75 13.75V16h1v-2.25H16v-1h-2.25V10.5h-1v2.25H10.5v1h2.25z"}}]},b=d({name:"UserAddIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=O(t),v=a(()=>["t-icon","t-icon-user-add",o.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>y(m,u.value)}});export{b as default};