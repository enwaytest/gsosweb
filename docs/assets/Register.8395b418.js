import{d as I,r as f,l as n,o as _,e as v,w as u,a as o,n as g,q as C,m as r,t as k,b as B,s as U,M as w,p as R,f as q,_ as N}from"./index.797845a3.js";import{u as $}from"./index.66756da6.js";const A=i=>(R("data-v-abf759a3"),i=i(),q(),i),M=A(()=>B("span",null,"TDesign\u670D\u52A1\u534F\u8BAE",-1)),L=A(()=>B("span",null,"TDesign \u9690\u79C1\u58F0\u660E",-1)),P={class:"switch-container"},O=I({__name:"Register",emits:["registerSuccess"],setup(i,{emit:V}){const b={phone:"",email:"",password:"",verifyCode:"",checked:!1},E={phone:[{required:!0,message:"\u624B\u673A\u53F7\u5FC5\u586B",type:"error"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B",type:"error"},{email:!0,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",type:"warning"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"}],verifyCode:[{required:!0,message:"\u9A8C\u8BC1\u7801\u5FC5\u586B",type:"error"}]},s=f("phone"),y=f(),a=f({...b}),d=f(!1),[F,x]=$(),D=({validateResult:p})=>{if(p===!0){if(!a.value.checked){w.error("\u8BF7\u540C\u610FTDesign\u670D\u52A1\u534F\u8BAE\u548CTDesign \u9690\u79C1\u58F0\u660E");return}w.success("\u6CE8\u518C\u6210\u529F"),V("registerSuccess")}},z=p=>{y.value.reset(),s.value=p};return(p,e)=>{const c=n("t-icon"),m=n("t-input"),l=n("t-form-item"),h=n("t-button"),S=n("t-checkbox"),T=n("t-form");return _(),v(T,{ref_key:"form",ref:y,class:U(["item-container",`register-${s.value}`]),data:a.value,rules:E,"label-width":"0",onSubmit:D},{default:u(()=>[s.value=="phone"?(_(),v(l,{key:0,name:"phone"},{default:u(()=>[o(m,{modelValue:a.value.phone,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.phone=t),maxlength:11,size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7"},{"prefix-icon":u(()=>[o(c,{name:"user"})]),_:1},8,["modelValue"])]),_:1})):g("v-if",!0),s.value=="email"?(_(),v(l,{key:1,name:"email"},{default:u(()=>[o(m,{modelValue:a.value.email,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.email=t),type:"text",size:"large",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1"},{"prefix-icon":u(()=>[o(c,{name:"mail"})]),_:1},8,["modelValue"])]),_:1})):g("v-if",!0),o(l,{name:"password"},{default:u(()=>[o(m,{modelValue:a.value.password,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.password=t),size:"large",type:d.value?"text":"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},{"prefix-icon":u(()=>[o(c,{name:"lock-on"})]),"suffix-icon":u(()=>[o(c,{name:d.value?"browse":"browse-off",onClick:e[2]||(e[2]=t=>d.value=!d.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),s.value=="phone"?(_(),v(l,{key:2,class:"verification-code",name:"verifyCode"},{default:u(()=>[o(m,{modelValue:a.value.verifyCode,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.verifyCode=t),size:"large",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),o(h,{variant:"outline",disabled:C(F)>0,onClick:C(x)},{default:u(()=>[r(k(C(F)==0?"\u53D1\u9001\u9A8C\u8BC1\u7801":`${C(F)}\u79D2\u540E\u53EF\u91CD\u53D1`),1)]),_:1},8,["disabled","onClick"])]),_:1})):g("v-if",!0),o(l,{class:"check-container",name:"checked"},{default:u(()=>[o(S,{modelValue:a.value.checked,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.checked=t)},{default:u(()=>[r("\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F ")]),_:1},8,["modelValue"]),r(),M,r(" \u548C "),L]),_:1}),o(l,null,{default:u(()=>[o(h,{block:"",size:"large",type:"submit"},{default:u(()=>[r(" \u6CE8\u518C ")]),_:1})]),_:1}),B("div",P,[B("span",{class:"tip",onClick:e[6]||(e[6]=t=>z(s.value=="phone"?"email":"phone"))},k(s.value=="phone"?"\u4F7F\u7528\u90AE\u7BB1\u6CE8\u518C":"\u4F7F\u7528\u624B\u673A\u53F7\u6CE8\u518C"),1)])]),_:1},8,["class","data"])}}});const H=N(O,[["__scopeId","data-v-abf759a3"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/login/components/Register.vue"]]);export{H as default};