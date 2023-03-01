import{G as N,o as i,c as r,b as n,d as W,v as H,D as U,i as Y,y as P,x as q,z as O,l as o,e as p,w as e,a as u,B as w,q as E,F as x,m as $,A as R,t as D,N as j,p as X,f as J,_ as K}from"./index.59422791.js";import{L as Q}from"./date.7ad85cfa.js";import{bT as tt,M as t,u as et,i as ut,a as nt,b as st}from"./charts.408208fc.js";import{b as at,i as ot,a as it}from"./install.1b032746.js";const lt="/gsosweb/assets/assets-logo-full.63f438d0.png",ct=[{title:"\u624B\u673A",content:"+86 13923734567"},{title:"\u5EA7\u673A",content:"734567"},{title:"\u529E\u516C\u5BA4\u90AE\u7BB1",content:"test@test.com"},{title:"\u5EA7\u4F4D",content:"T32F 012"},{title:"\u7BA1\u7406\u4E3B\u4F53",content:"Gausium\u96C6\u56E2"},{title:"\u76F4\u5C5E\u4E0A\u7EA7",content:"Michael Wang"},{title:"\u804C\u4F4D",content:"\u9AD8\u7EA7 UI \u8BBE\u8BA1\u5E08"},{title:"\u5165\u804C\u65F6\u95F4",content:"2021-07-01"},{title:"\u6240\u5C5E\u56E2\u961F",content:"Gausium\u516C\u53F8/\u67D0\u4E8B\u4E1A\u7FA4/\u67D0\u4EA7\u54C1\u90E8/\u67D0\u8FD0\u8425\u4E2D\u5FC3/\u5546\u6237\u670D\u52A1\u7EC4",span:6}],rt=[{avatar:"https://avatars.githubusercontent.com/Wen1kang",title:"Lovellzhong \u949F\u67D0\u67D0",description:"\u76F4\u5BA2\u9500\u552E \u6E2F\u6FB3\u62D3\u5C55\u7EC4\u5458\u5DE5"},{avatar:"https://avatars.githubusercontent.com/pengYYYYY",title:"Jiajingwang \u5F6D\u67D0\u67D0",description:"\u524D\u7AEF\u5F00\u53D1 \u524D\u53F0\u7814\u53D1\u7EC4\u5458\u5DE5"},{avatar:"https://avatars.githubusercontent.com/u/24469546?s=96&v=4",title:"cruisezhang \u6797\u67D0\u67D0",description:"\u6280\u672F\u4EA7\u54C1 \u4EA7\u54C1\u7EC4\u5458\u5DE5"},{avatar:"https://avatars.githubusercontent.com/u/88708072?s=96&v=4",title:"Lovellzhang \u5546\u67D0\u67D0",description:"\u4EA7\u54C1\u8FD0\u8425 \u6E2F\u6FB3\u62D3\u5C55\u7EC4\u5458\u5DE5"}],dt=["a","b","c","d"];function A({dateTime:l=[],placeholderColor:a,borderColor:s}){let h=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"];return l.length>0&&(h=tt(l,7)),{color:N(),grid:{top:"5%",right:"10px",left:"30px",bottom:"60px"},legend:{left:"center",bottom:"0",orient:"horizontal",data:["\u676F\u5B50","\u8336\u53F6","\u8702\u871C","\u9762\u7C89"],textStyle:{fontSize:12,color:a}},xAxis:{type:"category",data:h,boundaryGap:!1,axisLabel:{color:a},axisLine:{lineStyle:{color:s,width:1}}},yAxis:{type:"value",axisLabel:{color:a},splitLine:{lineStyle:{color:s}}},tooltip:{trigger:"item"},series:[{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u676F\u5B50",stack:"\u603B\u91CF",data:[t(),t(),t(),t(),t(),t(),t()],type:"line",itemStyle:{borderColor:s,borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u8336\u53F6",stack:"\u603B\u91CF",data:[t(),t(),t(),t(),t(),t(),t()],type:"line",itemStyle:{borderColor:s,borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u8702\u871C",stack:"\u603B\u91CF",data:[t(),t(),t(),t(),t(),t(),t()],type:"line",itemStyle:{borderColor:s,borderWidth:1}},{showSymbol:!0,symbol:"circle",symbolSize:8,name:"\u9762\u7C89",stack:"\u603B\u91CF",data:[t(),t(),t(),t(),t(),t(),t()],type:"line",itemStyle:{borderColor:s,borderWidth:1}}]}}const _t={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"none"},ht=n("rect",{width:"49",height:"49",x:".5",y:".5",fill:"#0052D9",rx:"24.5"},null,-1),mt=n("path",{fill:"#fff",d:"M23.922 31h2.164l-4.008-11.273h-2.265l-4 11.273h2.039l.968-2.883h4.149L23.922 31Zm-3.086-9.125h.133l1.531 4.648h-3.21l1.546-4.648Zm9.797 7.742c-.86 0-1.477-.43-1.477-1.148 0-.696.508-1.086 1.594-1.157l1.93-.125v.68c0 .992-.875 1.75-2.047 1.75Zm-.57 1.524c1.117 0 2.054-.485 2.53-1.313h.134V31h1.867v-5.836c0-1.812-1.235-2.883-3.43-2.883-2.031 0-3.445.961-3.602 2.469h1.829c.18-.578.789-.89 1.68-.89 1.046 0 1.609.468 1.609 1.304v.719l-2.203.133c-2.079.125-3.243 1.015-3.243 2.562 0 1.563 1.18 2.563 2.828 2.563Z"},null,-1),pt=[ht,mt];function ft(l,a){return i(),r("svg",_t,pt)}const S={render:ft},gt={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"none"},Et=n("rect",{width:"49",height:"49",x:".5",y:".5",fill:"#0594FA",rx:"24.5"},null,-1),vt=n("path",{fill:"#fff",d:"M20.664 31c2.406 0 3.875-1.227 3.875-3.203 0-1.469-1.047-2.563-2.562-2.703v-.14c1.132-.18 2.007-1.227 2.007-2.415 0-1.734-1.289-2.812-3.43-2.812h-4.71V31h4.82Zm-2.805-9.672h2.203c1.22 0 1.93.578 1.93 1.57 0 1.016-.758 1.57-2.187 1.57h-1.946v-3.14Zm0 8.07v-3.476h2.266c1.54 0 2.352.594 2.352 1.719 0 1.148-.79 1.757-2.274 1.757H17.86Zm13.422 1.743c2.157 0 3.508-1.696 3.508-4.414 0-2.735-1.344-4.415-3.508-4.415-1.172 0-2.156.57-2.601 1.5h-.133v-4.664h-1.938V31h1.868v-1.352h.132c.485.938 1.477 1.493 2.672 1.493Zm-.61-7.18c1.321 0 2.126 1.047 2.126 2.766 0 1.718-.797 2.765-2.125 2.765-1.328 0-2.156-1.062-2.156-2.765 0-1.704.836-2.766 2.156-2.766Z"},null,-1),Ft=[Et,vt];function yt(l,a){return i(),r("svg",gt,Ft)}const bt={render:yt},wt={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"none"},xt=n("rect",{width:"49",height:"49",x:".5",y:".5",fill:"#7587DB",rx:"24.5"},null,-1),Bt=n("path",{fill:"#fff",d:"M21.117 31.281c2.602 0 4.508-1.554 4.774-3.86h-1.985c-.273 1.267-1.36 2.063-2.789 2.063-1.922 0-3.117-1.578-3.117-4.125 0-2.539 1.195-4.117 3.11-4.117 1.421 0 2.507.875 2.788 2.227h1.985c-.235-2.352-2.211-4.024-4.774-4.024-3.195 0-5.172 2.258-5.172 5.922 0 3.649 1.985 5.914 5.18 5.914Zm14.195-5.953c-.203-1.797-1.53-3.047-3.726-3.047-2.57 0-4.078 1.649-4.078 4.422 0 2.813 1.515 4.469 4.086 4.469 2.164 0 3.508-1.203 3.718-2.992H33.47c-.203.89-.875 1.367-1.883 1.367-1.32 0-2.117-1.047-2.117-2.844 0-1.773.789-2.797 2.117-2.797 1.062 0 1.703.594 1.883 1.422h1.843Z"},null,-1),Ct=[xt,Bt];function Dt(l,a){return i(),r("svg",wt,Ct)}const At={render:Dt},St={xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"none"},$t=n("rect",{width:"49",height:"49",x:".5",y:".5",fill:"#00A870",rx:"24.5"},null,-1),Lt=n("path",{fill:"#fff",d:"M15.875 19.727V31h4.227c3.375 0 5.304-2.07 5.304-5.688 0-3.539-1.953-5.585-5.304-5.585h-4.227Zm2.016 1.742h1.945c2.21 0 3.516 1.414 3.516 3.875 0 2.515-1.274 3.914-3.516 3.914H17.89v-7.79Zm12.703 9.672c1.187 0 2.172-.555 2.656-1.493h.133V31h1.875V19.148H33.32v4.665h-.133c-.453-.938-1.421-1.5-2.593-1.5-2.157 0-3.516 1.703-3.516 4.406 0 2.718 1.352 4.422 3.516 4.422Zm.601-7.18c1.328 0 2.149 1.062 2.149 2.766 0 1.718-.813 2.765-2.149 2.765-1.328 0-2.133-1.039-2.133-2.765 0-1.72.813-2.766 2.133-2.766Z"},null,-1),zt=[$t,Lt];function kt(l,a){return i(),r("svg",St,zt)}const It={render:kt},_=l=>(X("data-v-642c545b"),l=l(),J(),l),Zt=_(()=>n("div",{class:"user-left-greeting"},[n("div",null,[$(" Hi\uFF0CGausium "),n("span",{class:"regular"}," \u4E0B\u5348\u597D\uFF0C\u4ECA\u5929\u662F\u4F60\u52A0\u5165Gausium\u7684\u7B2C 100 \u5929\uFF5E")]),n("img",{src:lt,class:"logo"})],-1)),Mt={class:"contract-title"},Tt={class:"contract-detail"},Vt=_(()=>n("p",null,"\u5185\u5BB9\u5217\u8868",-1)),Gt=_(()=>n("div",{id:"lineContainer",style:{width:"100%",height:"328px"}},null,-1)),Nt=_(()=>n("p",null,"\u5185\u5BB9\u5217\u8868",-1)),Wt=_(()=>n("div",{class:"name"},"My Account",-1)),Ht=_(()=>n("div",{class:"position"},"XXG \u65E5\u672C\u4E1A\u52A1\u62D3\u5C55\u7EC4\u5458\u5DE5 \u76F4\u5BA2\u9500\u552E",-1)),Ut={name:"UserIndex"},Yt=W({...Ut,setup(l){et([at,ot,ut,nt,it]);let a,s;const h=H(),B=U(()=>h.chartColors),L=f=>{s.setOption(A(f))},z=()=>{a=document.getElementById("lineContainer"),s=st(a),s.setOption({grid:{x:30,y:30,x2:10,y2:30},...A({...B.value})})},C=()=>{s==null||s.resize({width:a.clientWidth,height:a.clientHeight})};Y(()=>{P(()=>{z()}),window.addEventListener("resize",C,!1)}),q(()=>{window.removeEventListener("resize",C)});const k=f=>{switch(f){case"a":return S;case"b":return bt;case"c":return At;case"d":return It;default:return S}};return O(()=>h.brandTheme,()=>{R([s])}),(f,Pt)=>{const v=o("t-icon"),F=o("t-button"),g=o("t-col"),y=o("t-row"),d=o("t-card"),b=o("t-tab-panel"),I=o("t-date-range-picker"),Z=o("t-tabs"),M=o("t-avatar"),T=o("t-list-item-meta"),V=o("t-list-item"),G=o("t-list");return i(),p(y,{gutter:[24,24]},{default:e(()=>[u(g,{flex:3},{default:e(()=>[Zt,u(d,{class:"user-info-list",title:"\u4E2A\u4EBA\u4FE1\u606F",bordered:!1},{actions:e(()=>[u(F,{theme:"default",shape:"square",variant:"text"},{default:e(()=>[u(v,{name:"ellipsis"})]),_:1})]),default:e(()=>[u(y,{class:"content",justify:"space-between"},{default:e(()=>[(i(!0),r(x,null,w(E(ct),(c,m)=>(i(),p(g,{key:m,class:"contract",span:c.span||3},{default:e(()=>[n("div",Mt,D(c.title),1),n("div",Tt,D(c.content),1)]),_:2},1032,["span"]))),128))]),_:1})]),_:1}),u(d,{class:"content-container",bordered:!1},{default:e(()=>[u(Z,{value:"second"},{default:e(()=>[u(b,{value:"first",label:"\u5185\u5BB9\u5217\u8868"},{default:e(()=>[Vt]),_:1}),u(b,{value:"second",label:"\u5185\u5BB9\u5217\u8868"},{default:e(()=>[u(d,{bordered:!1,class:"card-padding-no",title:"\u4E3B\u9875\u8BBF\u95EE\u6570\u636E",describe:"\uFF08\u6B21\uFF09"},{actions:e(()=>[u(I,{class:"card-date-picker-container","default-value":E(Q),theme:"primary",mode:"date",onChange:L},null,8,["default-value"])]),default:e(()=>[Gt]),_:1})]),_:1}),u(b,{value:"third",label:"\u5185\u5BB9\u5217\u8868"},{default:e(()=>[Nt]),_:1})]),_:1})]),_:1})]),_:1}),u(g,{flex:1},{default:e(()=>[u(d,{class:"user-intro",bordered:!1},{default:e(()=>[u(M,{size:"80px"},{default:e(()=>[$("T")]),_:1}),Wt,Ht]),_:1}),u(d,{title:"\u56E2\u961F\u6210\u5458",class:"user-team",bordered:!1},{actions:e(()=>[u(F,{theme:"default",shape:"square",variant:"text"},{default:e(()=>[u(v,{name:"ellipsis"})]),_:1})]),default:e(()=>[u(G,{split:!1},{default:e(()=>[(i(!0),r(x,null,w(E(rt),(c,m)=>(i(),p(V,{key:m},{default:e(()=>[u(T,{image:c.avatar,title:c.title,description:c.description},null,8,["image","title","description"])]),_:2},1024))),128))]),_:1})]),_:1}),u(d,{title:"\u670D\u52A1\u4EA7\u54C1",class:"product-container",bordered:!1},{actions:e(()=>[u(F,{theme:"default",shape:"square",variant:"text"},{default:e(()=>[u(v,{name:"ellipsis"})]),_:1})]),default:e(()=>[u(y,{class:"content",getters:16},{default:e(()=>[(i(!0),r(x,null,w(E(dt),(c,m)=>(i(),p(g,{key:m,span:3},{default:e(()=>[(i(),p(j(k(c))))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}});const Xt=K(Yt,[["__scopeId","data-v-642c545b"],["__file","/Users/tzz/src/enway/gsosweb/src/pages/user/index.vue"]]);export{Xt as default};