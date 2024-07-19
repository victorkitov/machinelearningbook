"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5762],{1924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(4848),i=n(8453);const s={description:""},r="\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432",c={id:"docs_ml/Complex-models-interpretation/Fragments-impact",title:"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432",description:"",source:"@site/docs/docs_ml/18-Complex-models-interpretation/07-Fragments-impact.md",sourceDirName:"docs_ml/18-Complex-models-interpretation",slug:"/docs_ml/Complex-models-interpretation/Fragments-impact",permalink:"/docs/docs_ml/Complex-models-interpretation/Fragments-impact",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:""},sidebar:"docs_ml",previous:{title:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u044c\u044e",permalink:"/docs/docs_ml/Complex-models-interpretation/LIME"},next:{title:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u043e\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",permalink:"/docs/docs_ml/Complex-models-interpretation/Feature-dependency"}},a={},p=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u0432\u043b\u0438\u044f\u043d\u0438\u0435-\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432",children:"\u0412\u043b\u0438\u044f\u043d\u0438\u0435 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,o.jsxs)(t.p,{children:["\u0414\u043b\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0441\u0443\u043f\u0435\u0440\u043f\u0438\u043a\u0441\u0435\u043b\u0438 (\u0433\u0440\u0443\u043f\u043f\u044b \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439, \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u043f\u043e\u0445\u043e\u0436\u0438\u0445 \u043f\u043e \u0446\u0432\u0435\u0442\u0443), \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u043e\u043e\u0447\u0435\u0440\u0451\u0434\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u0443\u043f\u0435\u0440\u043f\u0438\u043a\u0441\u0435\u043b\u044c (\u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u043c \u0446\u0432\u0435\u0442\u043e\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f) \u0438 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u043c\u043e\u0434\u0435\u043b\u0438. \u0421\u0443\u043f\u0435\u0440\u043f\u0438\u043a\u0441\u0435\u043b\u0438, \u043f\u0440\u0438\u0432\u043e\u0434\u044f\u0449\u0438\u0435 \u043a \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430, \u043f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0446\u0432\u0435\u0442\u043e\u043c, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 (",(0,o.jsx)(t.a,{href:"https://www.albany.edu/faculty/mchang2/files/2018_08_ICPR_InterpretDNN.pdf",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,o.jsx)(t.p,{children:"\u041f\u043e \u0441\u0430\u043c\u044b\u043c \u0437\u043d\u0430\u0447\u0438\u043c\u044b\u043c \u0441\u0443\u043f\u0435\u0440\u043f\u0438\u043a\u0441\u0435\u043b\u044f\u043c \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u043e\u0431\u0443\u0447\u0438\u043b\u0430\u0441\u044c - \u043f\u0440\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043e\u043d\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u043d\u0430 \u043d\u0435\u0433\u043e, \u0430 \u043d\u0435 \u043d\u0430 \u0444\u043e\u043d."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"superpixel-interpretation.jpg",src:n(4414).A+"",width:"964",height:"488"})}),"\n",(0,o.jsx)(t.admonition,{title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0442\u0435\u043a\u0441\u0442\u043e\u0432",type:"tip",children:(0,o.jsx)(t.p,{children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0438 \u043a \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 - \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043e\u0447\u0435\u0440\u0451\u0434\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0441\u043b\u043e\u0432\u0430, \u0444\u0440\u0430\u0437\u044b \u0438\u043b\u0438 \u0446\u0435\u043b\u044b\u0435 \u043f\u0440\u0435\u0434\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437."})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4414:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/superpixel-interpretation-d5cb53beeef242ef669e2aaef31f05c9.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);