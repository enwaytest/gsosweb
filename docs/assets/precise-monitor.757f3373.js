import{d as m,D as o,I as y,J as O,K as h}from"./index.b3d31375.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 1.5V5h1V1.5h-1zM6.23 5.53L2.7 1.99l-.71.7 3.54 3.54.7-.7zm3.54 0l3.53-3.54.71.7-3.54 3.54-.7-.7zM9 8a1 1 0 01-1.87.5H1.5v-1h5.63A1 1 0 019 8zM5.53 9.77L1.99 13.3l.7.71 3.54-3.54-.7-.7zm4.94 0l3.54 3.53-.7.71-3.54-3.54.7-.7zM14.5 7.5H11v1h3.5v-1zm-7 7V11h1v3.5h-1z",opacity:.9}}]},z=m({name:"PreciseMonitorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=y(t),p=o(()=>["t-icon","t-icon-precise-monitor",a.value]),v=o(()=>s(s({},c.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(d,u.value)}});export{z as default};
