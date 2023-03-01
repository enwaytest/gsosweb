import{d as H,v as Q,r as d,D as k,i as Z,j as J,Q as W,l as r,o as s,c as p,a as l,w as u,b as g,m as i,t as ee,n,q as a,Y as te,Z as C,e as h,$ as E,a0 as x,M as ue,_ as ae}from"./index.59422791.js";import{T as A}from"./index.e47dcb2f.js";import{g as se}from"./list.c109778b.js";const ne=[{colKey:"row-select",type:"multiple",width:64,fixed:"left"},{title:"\u5408\u540C\u540D\u79F0",align:"left",width:320,colKey:"name",fixed:"left"},{title:"\u5408\u540C\u72B6\u6001",colKey:"status",width:160},{title:"\u5408\u540C\u7F16\u53F7",width:160,ellipsis:!0,colKey:"no"},{title:"\u5408\u540C\u7C7B\u578B",width:160,ellipsis:!0,colKey:"contractType"},{title:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",width:160,ellipsis:!0,colKey:"paymentType"},{title:"\u5408\u540C\u91D1\u989D (\u5143)",width:160,ellipsis:!0,colKey:"amount"},{align:"left",fixed:"right",width:160,colKey:"op",title:"\u64CD\u4F5C"}],oe={class:"left-operation-container"},le={key:0,class:"selected-count"},ie={class:"search-input"},ce={key:0},de={key:1},re={key:2},pe={key:0,class:"payment-col"},_e={key:1,class:"payment-col"},fe=["onClick"],ve={name:"ListBase"},Ce=H({...ve,setup(he){const w=Q(),f=d([]),y=d({defaultPageSize:20,total:100,defaultCurrent:1}),F=d(""),T=d(!1),N=async()=>{T.value=!0;try{const{list:e}=await se();f.value=e,y.value={...y.value,total:e.length}}catch(e){console.log(e)}finally{T.value=!1}},_=d(-1),S=k(()=>{if(_.value>-1){const{name:e}=f.value[_.value];return`\u5220\u9664\u540E\uFF0C${e}\u7684\u6240\u6709\u5408\u540C\u4FE1\u606F\u5C06\u88AB\u6E05\u7A7A\uFF0C\u4E14\u65E0\u6CD5\u6062\u590D`}return""});Z(()=>{N()});const m=d(!1),c=d([1,2]),B=J(),b=()=>{_.value=-1},I=()=>{f.value.splice(_.value,1),y.value.total=f.value.length;const e=c.value.indexOf(_.value);e>-1&&c.value.splice(e,1),m.value=!1,ue.success("\u5220\u9664\u6210\u529F"),b()},P=()=>{b()},K="index",U=e=>{c.value=e},V=(e,o)=>{console.log("\u5206\u9875\u53D8\u5316",e,o)},M=(e,o)=>{console.log("\u7EDF\u4E00Change",e,o)},R=()=>{B.push("/detail/base")},L=()=>{B.push("/form/base")},O=e=>{_.value=e.rowIndex,m.value=!0},Y=k(()=>({offsetTop:w.isUseTabsRouter?48:0,container:`.${W}-layout`}));return(e,o)=>{const D=r("t-button"),$=r("t-input"),z=r("t-row"),v=r("t-tag"),G=r("t-table"),j=r("t-card"),X=r("t-dialog");return s(),p("div",null,[l(j,{class:"list-card-container",bordered:!1},{default:u(()=>[l(z,{justify:"space-between"},{default:u(()=>[g("div",oe,[l(D,{onClick:L},{default:u(()=>[i(" \u65B0\u5EFA\u5408\u540C ")]),_:1}),l(D,{variant:"base",theme:"default",disabled:!c.value.length},{default:u(()=>[i(" \u5BFC\u51FA\u5408\u540C ")]),_:1},8,["disabled"]),c.value.length?(s(),p("p",le,"\u5DF2\u9009"+ee(c.value.length)+"\u9879",1)):n("v-if",!0)]),g("div",ie,[l($,{modelValue:F.value,"onUpdate:modelValue":o[0]||(o[0]=t=>F.value=t),placeholder:"\u8BF7\u8F93\u5165\u4F60\u9700\u8981\u641C\u7D22\u7684\u5185\u5BB9",clearable:""},{"suffix-icon":u(()=>[l(a(te),{size:"16px"})]),_:1},8,["modelValue"])])]),_:1}),l(G,{data:f.value,columns:a(ne),"row-key":K,"vertical-align":"top",hover:!0,pagination:y.value,"selected-row-keys":c.value,loading:T.value,"header-affixed-top":a(Y),onPageChange:V,onChange:M,onSelectChange:U},{status:u(({row:t})=>[t.status===a(C).FAIL?(s(),h(v,{key:0,theme:"danger",variant:"light"},{default:u(()=>[i(" \u5BA1\u6838\u5931\u8D25 ")]),_:1})):n("v-if",!0),t.status===a(C).AUDIT_PENDING?(s(),h(v,{key:1,theme:"warning",variant:"light"},{default:u(()=>[i(" \u5F85\u5BA1\u6838 ")]),_:1})):n("v-if",!0),t.status===a(C).EXEC_PENDING?(s(),h(v,{key:2,theme:"warning",variant:"light"},{default:u(()=>[i(" \u5F85\u5C65\u884C ")]),_:1})):n("v-if",!0),t.status===a(C).EXECUTING?(s(),h(v,{key:3,theme:"success",variant:"light"},{default:u(()=>[i(" \u5C65\u884C\u4E2D ")]),_:1})):n("v-if",!0),t.status===a(C).FINISH?(s(),h(v,{key:4,theme:"success",variant:"light"},{default:u(()=>[i(" \u5DF2\u5B8C\u6210 ")]),_:1})):n("v-if",!0)]),contractType:u(({row:t})=>[t.contractType===a(E).MAIN?(s(),p("p",ce,"\u5BA1\u6838\u5931\u8D25")):n("v-if",!0),t.contractType===a(E).SUB?(s(),p("p",de,"\u5F85\u5BA1\u6838")):n("v-if",!0),t.contractType===a(E).SUPPLEMENT?(s(),p("p",re,"\u5F85\u5C65\u884C")):n("v-if",!0)]),paymentType:u(({row:t})=>[t.paymentType===a(x).PAYMENT?(s(),p("div",pe,[i(" \u4ED8\u6B3E"),l(A,{class:"dashboard-item-trend",type:"up"})])):n("v-if",!0),t.paymentType===a(x).RECEIPT?(s(),p("div",_e,[i(" \u6536\u6B3E"),l(A,{class:"dashboard-item-trend",type:"down"})])):n("v-if",!0)]),op:u(t=>[g("a",{class:"t-button-link",onClick:o[1]||(o[1]=q=>R())},"\u8BE6\u60C5"),g("a",{class:"t-button-link",onClick:q=>O(t)},"\u5220\u9664",8,fe)]),_:1},8,["data","columns","pagination","selected-row-keys","loading","header-affixed-top"])]),_:1}),l(X,{visible:m.value,"onUpdate:visible":o[2]||(o[2]=t=>m.value=t),header:"\u786E\u8BA4\u5220\u9664\u5F53\u524D\u6240\u9009\u5408\u540C\uFF1F",body:a(S),"on-cancel":P,onConfirm:I},null,8,["visible","body"])])}}});const Te=ae(Ce,[["__scopeId","data-v-7dd4f459"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/list/base/index.vue"]]);export{Te as default};
