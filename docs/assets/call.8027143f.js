import{d as O,D as l,I as y,J as d,K as m}from"./index.b3d31375.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14 11.06c0 .6-.16 1.24-.52 1.76l-.12.16c-.24.35-.58.6-.98.75-.28.1-.46.14-.91.2-1.95.17-4.08-.74-6.18-2.6A10.2 10.2 0 012.32 6.9 6.45 6.45 0 012 5c0-.7.16-1.32.48-1.78.3-.42.88-.76 1.75-1.1a1 1 0 011.17.37l1.67 2.35a1 1 0 01-.1 1.27l-.21.22-.26.25c-.07.06-.17.2-.17.2-.02.3.3.93 1.26 1.9l.28.27c.88.81 1.12.88 1.39.69l.09-.07.87-.62a1 1 0 011.04-.06l.24.13c1.66.89 2.42 1.42 2.5 1.97v.08zm-1 .01c0 .09-.11-.04-.36-.22-.35-.25-.89-.57-1.61-.96l-.24-.12-.79.54-.02.01c-.86.68-1.6.49-3.1-.93-1.14-1.18-1.6-2.05-1.55-2.7.03-.35.27-.67.5-.86l.3-.29.12-.13-1.67-2.36c-.7.27-1.13.53-1.29.74C3.11 4.06 3 4.47 3 5c0 .48.1 1.03.28 1.61a9.2 9.2 0 002.67 3.98c1.91 1.7 3.79 2.5 5.41 2.35l.26-.04c.18-.02.28-.05.4-.1.23-.08.4-.2.54-.4.27-.33.4-.75.44-1.15v-.17z",fillOpacity:.9}}]},P=O({name:"CallIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=l(()=>e.size),{className:a,style:s}=y(r),p=l(()=>["t-icon","t-icon-call",a.value]),u=l(()=>i(i({},s.value),t.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var c;return(c=e.onClick)===null||c===void 0?void 0:c.call(e,{e:f})}}));return()=>d(g,v.value)}});export{P as default};
