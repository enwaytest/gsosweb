import{d as O,D as n,I as y,J as g,K as m}from"./index.b3d31375.js";function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.25 3.96c.37.38.67.81.9 1.27a4.43 4.43 0 01.44 2.3l-.01-.02a.8.8 0 00-1.02-.15 3.86 3.86 0 010-.16c0-.53-.11-1.05-.35-1.54a3.97 3.97 0 00-.72-1.02A5.01 5.01 0 006.8 3.16a5.02 5.02 0 00-3.68 1.47c-.3.31-.54.65-.72 1.02a3.49 3.49 0 00.25 3.53 4.16 4.16 0 001.03 1.07.43.43 0 01.15.47l-.08.32-.03.1-.05.18c0 .05-.02.09-.03.12l-.01.05-.04.16c0 .04.03.07.07.07l.04-.01 1.07-.63.02-.01h.01a.56.56 0 01.44-.04 5.53 5.53 0 00.86.16l.09.01a5.6 5.6 0 002.29-.22.8.8 0 00.55.84 6.5 6.5 0 01-4.04.14l-1.66.83-.02.01-.01.01a.44.44 0 01-.67-.34v-.02-.02-.03-.02l.01-.05.02-.05.17-1.38c-.38-.34-.8-.83-1.06-1.21a4.52 4.52 0 01-.3-4.47c.22-.46.52-.9.9-1.27A6.07 6.07 0 016.8 2.16a6.07 6.07 0 014.45 1.8z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M11.35 9.05a.8.8 0 111.37-.62 2.48 2.48 0 00.78 1.36.2.2 0 01-.29.26 2.5 2.5 0 00-1.47-.78.8.8 0 01-.4-.22zM14.76 10.2a.8.8 0 00-1.36.43v.05a2.48 2.48 0 01-.78 1.38.2.2 0 10.3.24l.05-.05a2.48 2.48 0 011.44-.71.8.8 0 00.35-1.35zM10.34 11.47a.2.2 0 00.03.3c.02 0 .04.03.06.05a2.48 2.48 0 01.7 1.43.8.8 0 001.35.36.8.8 0 00-.48-1.38 2.48 2.48 0 01-1.38-.76.2.2 0 00-.28 0zM10.43 10.89a2.48 2.48 0 01.78-1.43.2.2 0 10-.3-.25 2.48 2.48 0 01-1.49.76.8.8 0 101 .91z",fillOpacity:.9}}]},h=O({name:"LogoWecomIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=y(r),p=n(()=>["t-icon","t-icon-logo-wecom",l.value]),u=n(()=>i(i({},s.value),t.style)),f=n(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>g(d,f.value)}});export{h as default};
