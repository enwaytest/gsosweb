import{d as O,D as a,I as d,J as y,K as h}from"./index.b3d31375.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.5 2.74h3.93L8.5 4.4h5v-1H8.85L6.78 1.74H2.5v1zM2.5 4.4a1 1 0 00-1 1V13a1 1 0 001 1h11a1 1 0 001-1V7.05a1 1 0 00-1-1H8.17L6.1 4.39H2.5zm0 1h3.25l2.08 1.65h5.67V13h-11V5.4z",fillOpacity:.9}}]},b=O({name:"FolderOpenIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=d(t),c=a(()=>["t-icon","t-icon-folder-open",o.value]),f=a(()=>p(p({},s.value),r.style)),u=a(()=>({class:c.value,style:f.value,onClick:v=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:v})}}));return()=>y(m,u.value)}});export{b as default};
