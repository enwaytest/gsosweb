import{d as O,D as a,I as y,J as d,K as h}from"./index.b3d31375.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 11v-1h4v1H6z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M4.5 6V5a3.5 3.5 0 117 0h-1a2.5 2.5 0 00-5 0v1H13c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5h1.5zm-1 7h9V7h-9v6z",fillOpacity:.9}}]},b=O({name:"LockOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-lock-off",l.value]),f=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:f.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>d(m,v.value)}});export{b as default};
