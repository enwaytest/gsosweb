import{d as O,D as a,I as y,J as b,K as h}from"./index.b3d31375.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.5 13h3v-1h-3v1z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M5 1.5a1 1 0 00-1 1V14a1 1 0 001 1h6a1 1 0 001-1V2.5a1 1 0 00-1-1H5zm6 1V14H5V2.5h6zM2 4v9h1V4H2zM13 4v9h1V4h-1z",fillOpacity:.9}}]},g=O({name:"MobileVibrateIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=y(r),p=a(()=>["t-icon","t-icon-mobile-vibrate",i.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>b(m,u.value)}});export{g as default};
