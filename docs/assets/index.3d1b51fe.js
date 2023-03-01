import{d as M,r as y,D as j,l as s,o as B,c as V,b as m,n as v,a as u,w as t,W as b,X as f,F as S,B as U,q as E,e as h,m as n,t as x,j as W,p as X,f as Y,_ as G}from"./index.59422791.js";const T={name:[{required:!0,message:"\u8BF7\u9009\u62E9\u5408\u540C\u540D\u79F0",type:"error"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u53D1\u7968\u7C7B\u578B",type:"error"}],title:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D1\u7968\u62AC\u5934",type:"error"}],taxNum:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7",type:"error"}],consignee:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA",type:"error"}],mobileNum:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",type:"error"}],deliveryAddress:[{required:!0,message:"\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",type:"error"}],fullAddress:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",type:"error"}]},H=[{label:"\u5408\u540CA",value:"1"},{label:"\u5408\u540CB",value:"2"},{label:"\u5408\u540CC",value:"3"}],J=[{label:"\u7C7B\u578BA",value:"1"},{label:"\u7C7B\u578BB",value:"2"},{label:"\u7C7B\u578BC",value:"3"}],K=[{label:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5357\u5C71\u533A",value:"1"},{label:"\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A",value:"2"},{label:"\u4E0A\u6D77\u5E02\u5F90\u6C47\u533A",value:"3"},{label:"\u56DB\u5DDD\u7701\u6210\u90FD\u5E02\u9AD8\u65B0\u533A",value:"4"},{label:"\u5E7F\u4E1C\u7701\u5E7F\u5DDE\u5E02\u5929\u6CB3\u533A",value:"5"},{label:"\u9655\u897F\u7701\u897F\u5B89\u5E02\u9AD8\u65B0\u533A",value:"6"}],Q={name:"",type:""},Z={title:"",taxNum:"",address:"",bank:"",bankAccount:"",email:"",tel:""},uu={consignee:"",mobileNum:"",deliveryAddress:"",fullAddress:""},D=c=>(X("data-v-7e31d08b"),c=c(),Y(),c),eu={class:"form-step-container"},lu={class:"rule-tips"},tu=D(()=>m("p",null," 1\u3001\u7533\u8BF7\u5F00\u7968\u540E\uFF0C\u7535\u5B50\u53D1\u7968\u57281\uFF5E3\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5F00\u5177\uFF1B\u589E\u503C\u7A0E\u4E13\u7528\u53D1\u7968\uFF08\u7EB8\u8D28\uFF09\u5982\u8D44\u8D28\u5BA1\u6838\u901A\u8FC7\uFF0C\u5C06\u5728\u7535\u5B50\u53D1\u7968\u5F00\u5177\u540E10\u4E2A\u5DE5\u4F5C\u65E5\u5185\u4E3A\u60A8\u5BC4\u51FA\uFF1B ",-1)),au=D(()=>m("p",null,"2\u3001\u5F00\u7968\u91D1\u989D\u4E3A\u60A8\u5B9E\u9645\u652F\u4ED8\u91D1\u989D\uFF1B",-1)),ou=D(()=>m("p",null,"3\u3001\u5982\u6709\u7591\u95EE\u8BF7\u76F4\u63A5\u8054\u7CFB\uFF1A13300001111\u3002",-1)),su={class:"step-form-4"},nu=D(()=>m("p",{class:"text"},"\u5B8C\u6210\u5F00\u7968\u7533\u8BF7",-1)),du=D(()=>m("p",{class:"tips"},"\u9884\u8BA11\uFF5E3\u4E2A\u5DE5\u4F5C\u65E5\u4F1A\u5C06\u7535\u5B50\u53D1\u7968\u53D1\u81F3\u90AE\u7BB1\uFF0C\u53D1\u7968\u90AE\u5BC4\u8BF7\u8010\u5FC3\u7B49\u5F85",-1)),ru={class:"button-group"},mu={name:"FormStep"},Fu=M({...mu,setup(c){const F=y({...Q}),o=y({...Z}),d=y({...uu}),p=y(0),q=j(()=>F.value.name==="1"?"565421":F.value.name==="2"?"278821":F.value.name==="3"?"109824":"--"),g=(A,l)=>{A.validateResult===!0&&(p.value=l)},N=A=>{p.value=A},R=()=>{W().replace({path:"/detail/advanced"})};return(A,l)=>{const C=s("t-step-item"),O=s("t-steps"),L=s("t-card"),P=s("t-alert"),w=s("t-option"),k=s("t-select"),a=s("t-form-item"),i=s("t-button"),I=s("t-form"),r=s("t-input"),z=s("t-textarea"),$=s("t-icon");return B(),V("div",null,[m("div",eu,[v(" \u7B80\u5355\u6B65\u9AA4\u6761 "),u(L,{bordered:!1},{default:t(()=>[u(O,{class:"step-container",current:1,status:"process"},{default:t(()=>[u(C,{title:"\u63D0\u4EA4\u7533\u8BF7",content:"\u5DF2\u4E8E12\u670821\u65E5\u63D0\u4EA4"}),u(C,{title:"\u7535\u5B50\u4FE1\u606F",content:"\u9884\u8BA11-3\u4E2A\u5DE5\u4F5C\u65E5"}),u(C,{title:"\u53D1\u7968\u5DF2\u90AE\u5BC4",content:"\u7535\u5B50\u53D1\u7968\u5F00\u51FA\u540E\u8054\u7CFB"}),u(C,{title:"\u5B8C\u6210\u7533\u8BF7",content:"\u5982\u6709\u7591\u95EE\u8054\u7CFB\u5BA2\u670D"})]),_:1})]),_:1}),v(" \u5206\u6B65\u8868\u53551 "),b(m("div",lu,[u(P,{theme:"info",title:"\u53D1\u7968\u5F00\u5177\u89C4\u5219\uFF1A",close:!0},{message:t(()=>[tu,au,ou]),_:1})],512),[[f,p.value===0]]),b(u(I,{class:"step-form",data:F.value,rules:E(T),"label-align":"right",onSubmit:l[2]||(l[2]=e=>g(e,1))},{default:t(()=>[u(a,{label:"\u5408\u540C\u540D\u79F0",name:"name"},{default:t(()=>[u(k,{modelValue:F.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>F.value.name=e),style:{width:"480px"},class:"demo-select-base",clearable:""},{default:t(()=>[(B(!0),V(S,null,U(E(H),(e,_)=>(B(),h(w,{key:_,value:e.value,label:e.label},{default:t(()=>[n(x(e.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(a,{label:"\u53D1\u7968\u7C7B\u578B",name:"type"},{default:t(()=>[u(k,{modelValue:F.value.type,"onUpdate:modelValue":l[1]||(l[1]=e=>F.value.type=e),style:{width:"480px"},class:"demo-select-base",clearable:""},{default:t(()=>[(B(!0),V(S,null,U(E(J),(e,_)=>(B(),h(w,{key:_,value:e.value,label:e.label},{default:t(()=>[n(x(e.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(a,{label:"\u5F00\u7968\u91D1\u989D"},{default:t(()=>[n(x(E(q))+" \u5143 ",1)]),_:1}),u(a,null,{default:t(()=>[u(i,{theme:"primary",type:"submit"},{default:t(()=>[n(" \u63D0\u4EA4\u7533\u8BF7 ")]),_:1})]),_:1})]),_:1},8,["data","rules"]),[[f,p.value===0]]),v(" \u5206\u6B65\u8868\u53552 "),b(u(I,{class:"step-form",data:o.value,rules:E(T),"label-align":"left",onReset:l[10]||(l[10]=e=>N(0)),onSubmit:l[11]||(l[11]=e=>g(e,2))},{default:t(()=>[u(a,{label:"\u53D1\u7968\u62AC\u5934",name:"title"},{default:t(()=>[u(r,{modelValue:o.value.title,"onUpdate:modelValue":l[3]||(l[3]=e=>o.value.title=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u53D1\u7968\u62AC\u5934"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7",name:"taxNum"},{default:t(()=>[u(r,{modelValue:o.value.taxNum,"onUpdate:modelValue":l[4]||(l[4]=e=>o.value.taxNum=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u5355\u4F4D\u5730\u5740",name:"address"},{default:t(()=>[u(r,{modelValue:o.value.address,"onUpdate:modelValue":l[5]||(l[5]=e=>o.value.address=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u5730\u5740"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u5F00\u6237\u884C",name:"bank"},{default:t(()=>[u(r,{modelValue:o.value.bank,"onUpdate:modelValue":l[6]||(l[6]=e=>o.value.bank=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u5F00\u6237\u884C"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u94F6\u884C\u8D26\u53F7",name:"bankAccount"},{default:t(()=>[u(r,{modelValue:o.value.bankAccount,"onUpdate:modelValue":l[7]||(l[7]=e=>o.value.bankAccount=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u94F6\u884C\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u901A\u77E5\u90AE\u7BB1",name:"email"},{default:t(()=>[u(r,{modelValue:o.value.email,"onUpdate:modelValue":l[8]||(l[8]=e=>o.value.email=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u901A\u77E5\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u901A\u77E5\u624B\u673A",name:"tel"},{default:t(()=>[u(r,{modelValue:o.value.tel,"onUpdate:modelValue":l[9]||(l[9]=e=>o.value.tel=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u901A\u77E5\u624B\u673A"},null,8,["modelValue"])]),_:1}),u(a,null,{default:t(()=>[u(i,{type:"reset",theme:"default",variant:"base"},{default:t(()=>[n(" \u4E0A\u4E00\u6B65 ")]),_:1}),u(i,{theme:"primary",type:"submit"},{default:t(()=>[n(" \u4E0B\u4E00\u6B65 ")]),_:1})]),_:1})]),_:1},8,["data","rules"]),[[f,p.value===1]]),v(" \u5206\u6B65\u8868\u53553 "),b(u(I,{class:"step-form",data:d.value,rules:E(T),"label-align":"left",onReset:l[16]||(l[16]=e=>N(1)),onSubmit:l[17]||(l[17]=e=>g(e,6))},{default:t(()=>[u(a,{label:"\u6536\u8D27\u4EBA",name:"consignee"},{default:t(()=>[u(r,{modelValue:d.value.consignee,"onUpdate:modelValue":l[12]||(l[12]=e=>d.value.consignee=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u624B\u673A\u53F7\u7801",name:"mobileNum"},{default:t(()=>[u(r,{modelValue:d.value.mobileNum,"onUpdate:modelValue":l[13]||(l[13]=e=>d.value.mobileNum=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1}),u(a,{label:"\u6536\u8D27\u5730\u5740",name:"deliveryAddress"},{default:t(()=>[u(k,{modelValue:d.value.deliveryAddress,"onUpdate:modelValue":l[14]||(l[14]=e=>d.value.deliveryAddress=e),style:{width:"480px"},placeholder:"\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",class:"demo-select-base",clearable:""},{default:t(()=>[(B(!0),V(S,null,U(E(K),(e,_)=>(B(),h(w,{key:_,value:e.value,label:e.label},{default:t(()=>[n(x(e.label),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(a,{label:"\u8BE6\u7EC6\u5730\u5740",name:"fullAddress"},{default:t(()=>[u(z,{modelValue:d.value.fullAddress,"onUpdate:modelValue":l[15]||(l[15]=e=>d.value.fullAddress=e),style:{width:"480px"},placeholder:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"},null,8,["modelValue"])]),_:1}),u(a,null,{default:t(()=>[u(i,{type:"reset",theme:"default",variant:"base"},{default:t(()=>[n(" \u4E0A\u4E00\u6B65 ")]),_:1}),u(i,{theme:"primary",type:"submit"},{default:t(()=>[n(" \u4E0B\u4E00\u6B65 ")]),_:1})]),_:1})]),_:1},8,["data","rules"]),[[f,p.value===2]]),v(" \u5206\u6B65\u8868\u53554 "),b(m("div",su,[u($,{name:"check-circle-filled",style:{color:"green"},size:"52px"}),nu,du,m("div",ru,[u(i,{theme:"primary",onClick:l[18]||(l[18]=e=>N(0))},{default:t(()=>[n(" \u518D\u6B21\u7533\u8BF7 ")]),_:1}),u(i,{variant:"base",theme:"default",onClick:R},{default:t(()=>[n(" \u67E5\u770B\u8FDB\u5EA6 ")]),_:1})])],512),[[f,p.value===6]])])])}}});const iu=G(Fu,[["__scopeId","data-v-7e31d08b"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/form/step/index.vue"]]);export{iu as default};
