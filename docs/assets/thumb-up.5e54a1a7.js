import{d as O,D as a,I as h,J as y,K as m}from"./index.2589d20c.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 6h3.22a1 1 0 01.97 1.24l-1.5 6a1 1 0 01-.97.76H3a1 1 0 01-1-1V8a1 1 0 011-1h2l2-5h2a1 1 0 011 1v3zM6 7.2V13h5.72l1.5-6H9V3H7.68L6 7.2zM5 8H3v5h2V8z",fillOpacity:.9}}]},g=O({name:"ThumbUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=h(r),c=a(()=>["t-icon","t-icon-thumb-up",l.value]),u=a(()=>p(p({},s.value),t.style)),v=a(()=>({class:c.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(b,v.value)}});export{g as default};