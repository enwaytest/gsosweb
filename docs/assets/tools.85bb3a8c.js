import{d as O,D as a,I as y,J as d,K as m}from"./index.2589d20c.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.75 8.25l.56.15c1 .28 2.09.03 2.85-.73.67-.67.94-1.6.8-2.5l-1.05 1.05a1.5 1.5 0 01-2.12 0l-.43-.42a1.5 1.5 0 010-2.12l1.06-1.06a2.9 2.9 0 00-2.5.8c-.76.77-1.01 1.85-.74 2.85l.16.57-5.8 5.8 1.4 1.41 5.81-5.8zm2.5-6.45c.32.1.64.26.94.46l-2.12 2.12a.5.5 0 000 .71l.42.43c.2.2.52.2.71 0l2.12-2.13a3.92 3.92 0 01-.46 4.98 3.91 3.91 0 01-3.81 1l-5.4 5.4a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 010-1.42l5.4-5.39a3.91 3.91 0 01.99-3.82 3.92 3.92 0 014.03-.92z",fillOpacity:.9}}]},P=O({name:"ToolsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-tools",l.value]),u=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>d(g,f.value)}});export{P as default};