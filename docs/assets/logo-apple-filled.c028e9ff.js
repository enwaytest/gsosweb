import{d as O,D as a,I as d,J as y,K as g}from"./index.59422791.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.69 1c.08.79-.24 1.58-.7 2.15a2.5 2.5 0 01-2 .96c-.1-.78.27-1.58.7-2.09.5-.57 1.32-1 2-1.02zM13.13 5.6c-.15.1-1.46.92-1.45 2.57.02 2 1.71 2.68 1.8 2.72h.01v.02c-.05.14-.32 1-.93 1.9-.56.83-1.15 1.64-2.07 1.66a2.3 2.3 0 01-1.04-.25c-.32-.14-.65-.29-1.18-.29-.56 0-.9.15-1.24.3-.3.12-.58.24-.97.26-.89.03-1.57-.89-2.13-1.7-1.16-1.68-2.05-4.74-.86-6.8a3.3 3.3 0 012.8-1.7c.49 0 .97.18 1.38.35.32.13.6.24.84.24.2 0 .48-.1.8-.24.52-.2 1.14-.44 1.78-.38a3.15 3.15 0 012.46 1.34z",fillOpacity:.9}}]},P=O({name:"LogoAppleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:p}=d(r),s=a(()=>["t-icon","t-icon-logo-apple-filled",l.value]),u=a(()=>c(c({},p.value),t.style)),f=a(()=>({class:s.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>y(m,f.value)}});export{P as default};