import{d as m,D as a,I as O,J as h,K as y}from"./index.b3d31375.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 9.77h3.22a1 1 0 00.97-1.24l-1.5-6a1 1 0 00-.97-.76H3a1 1 0 00-1 1v5a1 1 0 001 1h2l2 5h2a1 1 0 001-1v-3zm-4-1.2v-5.8h5.72l1.5 6H9v4H7.68L6 8.57zm-1-.8H3v-5h2v5z",fillOpacity:.9}}]},g=m({name:"ThumbDownIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=O(r),p=a(()=>["t-icon","t-icon-thumb-down",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>h(d,u.value)}});export{g as default};
