import{d as O,D as a,I as y,J as d,K as g}from"./index.2589d20c.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.8 6.2L8 9 5.2 6.2l-.7.71 3.5 3.5 3.5-3.5-.7-.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M14 13a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v10zm-1 0V3H3v10h10z",fillOpacity:.9}}]},w=O({name:"ChevronDownRectangleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),p=a(()=>["t-icon","t-icon-chevron-down-rectangle",l.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>d(h,u.value)}});export{w as default};