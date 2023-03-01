import{d as F,l as s,o as l,e as p,w as u,a as o,q as c,n as v,a1 as j,m as D,t as k,b as g,a2 as O,_ as S,r,D as Y,i as G,c as z,Y as H,F as E,B as J,M as K}from"./index.13b914b0.js";import Q from"./shop.ecde5c28.js";import R from"./service.dc79e98e.js";import W from"./user-avatar.c8014178.js";import X from"./laptop.83acf2e6.js";import Z from"./more.051d46dd.js";import ee from"./DialogForm.ece920b7.js";import{a as te}from"./list.208f0328.js";const ae={class:"list-card-item_detail--name"},oe={class:"list-card-item_detail--desc"},ue=F({__name:"index",props:{product:{type:Object}},emits:["manage-product","delete-item"],setup(a,{emit:f}){const t=["A","B","C","D","E"],m=d=>{f("manage-product",d)},y=d=>{f("delete-item",d)};return(d,B)=>{const b=s("t-avatar"),x=s("t-tag"),C=s("t-avatar-group"),_=s("t-button"),h=s("t-dropdown"),A=s("t-card");return l(),p(A,{theme:"poster2",bordered:!1},{avatar:u(()=>[o(b,{size:"56px"},{icon:u(()=>[a.product.type===1?(l(),p(c(Q),{key:0})):v("v-if",!0),a.product.type===2?(l(),p(c(j),{key:1})):v("v-if",!0),a.product.type===3?(l(),p(c(R),{key:2})):v("v-if",!0),a.product.type===4?(l(),p(c(W),{key:3})):v("v-if",!0),a.product.type===5?(l(),p(c(X),{key:4})):v("v-if",!0)]),_:1})]),status:u(()=>[o(x,{theme:a.product.isSetup?"success":"default",disabled:!a.product.isSetup},{default:u(()=>[D(k(a.product.isSetup?"\u8BA4\u8BC1\u540E\u4FEE\u6539":"\u672A\u8BA4\u8BC1"),1)]),_:1},8,["theme","disabled"])]),content:u(()=>[g("p",ae,k(a.product.name),1),g("p",oe,k(a.product.description),1)]),footer:u(()=>[o(C,{cascading:"left-up",max:2},{default:u(()=>[o(b,null,{default:u(()=>[D(k(t[a.product.type-1]),1)]),_:1}),o(b,null,{icon:u(()=>[o(c(O))]),_:1})]),_:1})]),actions:u(()=>[o(h,{disabled:!a.product.isSetup,trigger:"click",options:[{content:"\u7BA1\u7406",value:"manage",onClick:()=>m(a.product)},{content:"\u5220\u9664",value:"delete",onClick:()=>y(a.product)}]},{default:u(()=>[o(_,{theme:"default",disabled:!a.product.isSetup,shape:"square",variant:"text"},{default:u(()=>[o(c(Z))]),_:1},8,["disabled"])]),_:1},8,["disabled","options"])]),_:1})}}});const ne=S(ue,[["__scopeId","data-v-0ce9e723"],["__file","/Users/tzz/src/enway/gsosweb/src/components/product-card/index.vue"]]),se={class:"list-card-operation"},le={class:"search-input"},ie={class:"list-card-items"},ce={class:"list-card-pagination"},de={key:1,class:"list-card-loading"},re={name:"ListCard"},pe=F({...re,setup(a){const f={name:"",status:"",description:"",type:"",mark:"",amount:0},t=r({current:1,pageSize:12,total:0}),m=r(void 0),y=r([]),d=r(!0),B=async()=>{try{const{list:e}=await te();y.value=e,t.value={...t.value,total:e.length}}catch(e){console.log(e)}finally{d.value=!1}},b=Y(()=>m.value?`\u786E\u8BA4\u5220\u9664\u540E${m.value.name}\u7684\u6240\u6709\u4EA7\u54C1\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A, \u4E14\u65E0\u6CD5\u6062\u590D`:"");G(()=>{B()});const x=r(!1),C=r(""),_=r(!1),h=r({...f}),A=e=>{t.value.pageSize=e,t.value.current=1},V=e=>{t.value.current=e},w=e=>{_.value=!0,m.value=e},I=()=>{const{index:e}=m.value;y.value.splice(e-1,1),_.value=!1,K.success("\u5220\u9664\u6210\u529F")},M=()=>{m.value=void 0,h.value={...f}},U=e=>{x.value=!0,h.value={...e,status:e!=null&&e.isSetup?"1":"0"}};return(e,i)=>{const L=s("t-input"),P=s("t-col"),N=s("t-row"),$=s("t-pagination"),T=s("t-loading"),q=s("t-dialog");return l(),z("div",null,[g("div",se,[v(' <t-button @click="formDialogVisible = true"> \u65B0\u5EFA\u4EA7\u54C1 </t-button> '),g("div",le,[o(L,{modelValue:C.value,"onUpdate:modelValue":i[0]||(i[0]=n=>C.value=n),placeholder:"\u8BF7\u8F93\u5165\u4F60\u9700\u8981\u641C\u7D22\u7684\u5185\u5BB9",clearable:""},{"suffix-icon":u(()=>[C.value===""?(l(),p(c(H),{key:0,size:"var(--td-comp-size-xxxs)"})):v("v-if",!0)]),_:1},8,["modelValue"])])]),o(ee,{visible:x.value,"onUpdate:visible":i[1]||(i[1]=n=>x.value=n),data:h.value},null,8,["visible","data"]),t.value.total>0&&!d.value?(l(),z(E,{key:0},[g("div",ie,[o(N,{gutter:[16,16]},{default:u(()=>[(l(!0),z(E,null,J(y.value.slice(t.value.pageSize*(t.value.current-1),t.value.pageSize*t.value.current),n=>(l(),p(P,{key:n.index,lg:4,xs:6,xl:3},{default:u(()=>[o(ne,{class:"list-card-item",product:n,onDeleteItem:w,onManageProduct:U},null,8,["product"])]),_:2},1024))),128))]),_:1})]),g("div",ce,[o($,{modelValue:t.value.current,"onUpdate:modelValue":i[2]||(i[2]=n=>t.value.current=n),"page-size":t.value.pageSize,"onUpdate:pageSize":i[3]||(i[3]=n=>t.value.pageSize=n),total:t.value.total,"page-size-options":[12,24,36],onPageSizeChange:A,onCurrentChange:V},null,8,["modelValue","page-size","total"])])],64)):d.value?(l(),z("div",de,[o(T,{size:"large",text:"\u52A0\u8F7D\u6570\u636E\u4E2D..."})])):v("v-if",!0),o(q,{visible:_.value,"onUpdate:visible":i[4]||(i[4]=n=>_.value=n),header:"\u786E\u8BA4\u5220\u9664\u6240\u9009\u4EA7\u54C1\uFF1F",body:c(b),"on-cancel":M,onConfirm:I},null,8,["visible","body"])])}}});const Ce=S(pe,[["__scopeId","data-v-909588c5"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/list/card/index.vue"]]);export{Ce as default};
