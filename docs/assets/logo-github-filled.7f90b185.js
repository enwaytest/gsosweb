import{d as O,D as a,I as d,J as y,K as g}from"./index.b3d31375.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1a7.1 7.1 0 00-7 7.18c0 3.17 2 5.86 4.79 6.8.35.07.46-.15.46-.34v-1.33c-1.95.43-2.35-.85-2.35-.85-.32-.83-.78-1.05-.78-1.05-.64-.45.05-.44.05-.44.7.05 1.07.74 1.07.74.63 1.1 1.64.78 2.04.6.06-.46.24-.78.44-.96-1.55-.18-3.19-.8-3.19-3.55 0-.78.28-1.42.72-1.92-.07-.19-.3-.92.07-1.9 0 0 .6-.2 1.93.73a6.56 6.56 0 013.5 0c1.34-.93 1.93-.73 1.93-.73.38.99.14 1.72.07 1.9.44.5.72 1.14.72 1.92 0 2.76-1.64 3.37-3.2 3.54.25.23.48.66.48 1.33v1.97c0 .2.11.42.47.35A7.17 7.17 0 0015 8.18 7.09 7.09 0 008 1z",fillOpacity:.9}}]},h=O({name:"LogoGithubFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=d(r),p=a(()=>["t-icon","t-icon-logo-github-filled",l.value]),u=a(()=>c(c({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>y(b,v.value)}});export{h as default};
