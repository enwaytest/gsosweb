import{d as y,v as B,r as T,D as S,i as z,y as O,x as I,z as v,A as W,l as r,o as D,e as N,w as e,a as t,s as b,q as L,b as s,m,p as $,f as V,_ as U}from"./index.797845a3.js";import{L as E}from"./date.bbeb8424.js";import{T as C}from"./index.8229ff39.js";import{b as w}from"./index.f39b7445.js";import{u as q,i as H,a as M,b as Y}from"./charts.68b236ac.js";import{i as j,a as G,b as J}from"./install.1fde41b5.js";const x=d=>($("data-v-eb334740"),d=d(),V(),d),K={class:"inner-card__content"},P=x(()=>s("div",{class:"inner-card__content-title"},"1726",-1)),Q={class:"inner-card__content-footer"},R={class:"inner-card__content"},X=x(()=>s("div",{class:"inner-card__content-title"},"226",-1)),Z={class:"inner-card__content-footer"},ee={name:"DashboardBase"},te=y({...ee,setup(d){q([j,G,J,H,M]);const u=B(),l=T(1),p=S(()=>u.chartColors);let a,o;const F=()=>{a||(a=document.getElementById("stokeContainer")),o=Y(a),o.setOption(w({dateTime:E,...p.value}))},f=()=>{F()},_=()=>{document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?l.value=Number((document.documentElement.clientWidth/2080).toFixed(2)):document.documentElement.clientWidth<1080?l.value=Number((document.documentElement.clientWidth/1080).toFixed(2)):l.value=1,o.resize({width:a.clientWidth,height:a.clientHeight})};z(()=>{f(),O(()=>{_()}),window.addEventListener("resize",_,!1)}),I(()=>{window.removeEventListener("resize",_)}),v(()=>u.brandTheme,()=>{W([o])}),v(()=>u.mode,()=>{[o].forEach(c=>{c.dispose()}),f()});const g=c=>{o.setOption(w({dateTime:c,...p.value}))};return(c,se)=>{const k=r("t-date-range-picker"),n=r("t-card"),i=r("t-col"),A=r("t-button"),h=r("t-row");return D(),N(n,{bordered:!1},{default:e(()=>[t(h,null,{default:e(()=>[t(i,{xs:12,xl:9},{default:e(()=>[t(n,{bordered:!1,title:"\u51FA\u5165\u5E93\u6982\u89C8",subtitle:"(\u4EF6)",class:b({"dashboard-overview-card":!0,"overview-panel":!0})},{actions:e(()=>[t(k,{class:"card-date-picker-container",theme:"primary",mode:"date","default-value":L(E),onChange:g},null,8,["default-value"])]),default:e(()=>[s("div",{id:"stokeContainer",ref_key:"stokeContainer",ref:a,style:{width:"100%",height:"351px"},class:"dashboard-chart-container"},null,512)]),_:1})]),_:1}),t(i,{xs:12,xl:3},{default:e(()=>[t(n,{bordered:!1,class:b({"dashboard-overview-card":!0,"export-panel":!0})},{actions:e(()=>[t(A,null,{default:e(()=>[m("\u5BFC\u51FA\u6570\u636E")]),_:1})]),default:e(()=>[t(h,null,{default:e(()=>[t(i,{xs:6,xl:12},{default:e(()=>[t(n,{bordered:!1,subtitle:"\u672C\u6708\u51FA\u5E93\u603B\u8BA1\uFF08\u4EF6\uFF09",class:"inner-card"},{default:e(()=>[s("div",K,[P,s("div",Q,[m(" \u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765 "),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1})]),_:1}),t(i,{xs:6,xl:12},{default:e(()=>[t(n,{bordered:!1,subtitle:"\u672C\u6708\u5165\u5E93\u603B\u8BA1\uFF08\u4EF6\uFF09",class:"inner-card"},{default:e(()=>[s("div",R,[X,s("div",Z,[m(" \u81EA\u4ECE\u4E0A\u5468\u4EE5\u6765 "),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const ie=U(te,[["__scopeId","data-v-eb334740"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/dashboard/base/components/OutputOverview.vue"]]);export{ie as default};