import{d as O,D as a,I as d,J as y,K as m}from"./index.b3d31375.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 6.61a3.35 3.35 0 015.61-2.47L8 4.5l.39-.36a3.35 3.35 0 014.63 4.84l-4.87 4.87a.2.2 0 01-.3 0L2.98 8.98A3.35 3.35 0 012 6.61z",fillOpacity:.9}}]},h=O({name:"HeartFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:c}=d(r),p=a(()=>["t-icon","t-icon-heart-filled",l.value]),u=a(()=>s(s({},c.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:v})}}));return()=>y(g,f.value)}});export{h as default};
