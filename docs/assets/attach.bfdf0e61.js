import{d as O,D as a,I as y,J as d,K as m}from"./index.b3d31375.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12.13 3.86a2.02 2.02 0 00-2.85 0l-7.2 7.21-.71-.7 7.2-7.21a3.02 3.02 0 114.27 4.26L7 13.26a1.88 1.88 0 01-2.66-2.66L10 4.93l.71.7-5.67 5.68a.88.88 0 101.25 1.25l5.84-5.84c.79-.8.78-2.08-.01-2.86z",fillOpacity:.9}}]},b=O({name:"AttachIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-attach",l.value]),u=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>d(g,f.value)}});export{b as default};
