"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5196],{87540:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(74848),i=n(28453);const r={description:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning) \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0445 \u0441\u0435\u0442\u0435\u0439. \u0412\u0438\u0434\u044b \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",sidebar_label:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",keywords:["\u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","transfer learning","transfer learning fine tuning","weight sharing","hard weight sharing","soft weight sharing","transfer learning","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c","\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},t="\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning)",l={id:"Neural-networks/Regularization/Weights-transfer",title:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning)",description:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning) \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0445 \u0441\u0435\u0442\u0435\u0439. \u0412\u0438\u0434\u044b \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",source:"@site/docs/Neural-networks/07-Regularization/04-Weights-transfer.md",sourceDirName:"Neural-networks/07-Regularization",slug:"/Neural-networks/Regularization/Weights-transfer",permalink:"/docs/Neural-networks/Regularization/Weights-transfer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning) \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0445 \u0441\u0435\u0442\u0435\u0439. \u0412\u0438\u0434\u044b \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",sidebar_label:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",keywords:["\u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435","transfer learning","transfer learning fine tuning","weight sharing","hard weight sharing","soft weight sharing","transfer learning","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c","\u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"]},sidebar:"Neural-networks",previous:{title:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0432\u0435\u0441\u043e\u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438",permalink:"/docs/Neural-networks/Regularization/Weights-regularization"},next:{title:"\u0420\u0430\u043d\u043d\u044f\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0438 \u0437\u0430\u0448\u0443\u043c\u043b\u0435\u043d\u0438\u0435 \u0432\u0445\u043e\u0434\u043e\u0432",permalink:"/docs/Neural-networks/Regularization/Early-stopping"}},h={},c=[{value:"\u0416\u0435\u0441\u0442\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432\u0435\u0441\u043e\u0432 (hard weight sharing)",id:"\u0436\u0435\u0441\u0442\u043a\u0438\u0439-\u043f\u0435\u0440\u0435\u043d\u043e\u0441-\u0432\u0435\u0441\u043e\u0432-hard-weight-sharing",level:2},{value:"\u0412\u044b\u0431\u043e\u0440 \u043f\u043e\u0445\u043e\u0436\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438",id:"\u0432\u044b\u0431\u043e\u0440-\u043f\u043e\u0445\u043e\u0436\u0435\u0439-\u0437\u0430\u0434\u0430\u0447\u0438",level:2},{value:"\u041c\u044f\u0433\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432\u0435\u0441\u043e\u0432 (soft weight sharing)",id:"\u043c\u044f\u0433\u043a\u0438\u0439-\u043f\u0435\u0440\u0435\u043d\u043e\u0441-\u0432\u0435\u0441\u043e\u0432-soft-weight-sharing",level:2}];function m(s){const e={a:"a",annotation:"annotation",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,i.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-transfer-learning",children:"\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 (transfer learning)"}),"\n",(0,a.jsx)(e.h2,{id:"\u0436\u0435\u0441\u0442\u043a\u0438\u0439-\u043f\u0435\u0440\u0435\u043d\u043e\u0441-\u0432\u0435\u0441\u043e\u0432-hard-weight-sharing",children:"\u0416\u0435\u0441\u0442\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432\u0435\u0441\u043e\u0432 (hard weight sharing)"}),"\n",(0,a.jsxs)(e.p,{children:["\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0440\u0435\u0448\u0438\u0442\u044c \u0443\u0437\u043a\u043e\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0443\u044e ",(0,a.jsx)(e.strong,{children:"\u0437\u0430\u0434\u0430\u0447\u0443 A"}),", \u0442\u0430\u043a\u0443\u044e \u043a\u0430\u043a \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e \u0435\u0451 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u0445\u043e\u0434\u0438\u0442 \u0440\u0435\u0447\u044c \u043e \u0437\u0430\u0434\u0430\u0447\u0435 \u0441 \u0443\u0437\u043a\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u043b\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0431\u043e\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0438 \u0438\u0445 \u0440\u0443\u0447\u043d\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 - \u044d\u0442\u043e \u0442\u0440\u0443\u0434\u043e\u0451\u043c\u043a\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441. \u0417\u0430\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u043e\u0445\u043e\u0436\u0435\u0439 ",(0,a.jsx)(e.strong,{children:"\u0437\u0430\u0434\u0430\u0447\u0435\u0439 B"}),", \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043d\u043e\u0433\u043e, \u0438 \u0435\u0441\u0442\u044c \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0438 \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u0430\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u0432\u0448\u0438\u0435 \u0441\u0435\u0431\u044f \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n",(0,a.jsxs)(e.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u043e\u043c ",(0,a.jsx)(e.a,{href:"https://www.image-net.org/",children:"ImageNet"}),", \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u0441\u0432\u044b\u0448\u0435 14 \u043c\u0438\u043b\u043b\u0438\u043e\u043d\u043e\u0432 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 1000 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u043c\u044b\u0435 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043a\u043e\u0448\u043a\u0438, \u0441\u043e\u0431\u0430\u043a\u0438, \u043c\u0430\u0448\u0438\u043d\u044b, \u0433\u0440\u0443\u0437\u043e\u0432\u0438\u043a\u0438, \u0434\u043e\u043c\u0430, \u043f\u0440\u0438\u0446\u0435\u043f\u044b, \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b \u0438 \u0442.\u0434. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0430\u0431\u043e\u0440 ",(0,a.jsx)(e.a,{href:"https://paperswithcode.com/sota/image-classification-on-imagenet",children:"\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"}),". \u041a\u043b\u0430\u0441\u0441\u044b ImageNet \u0445\u043e\u0442\u044f \u0438 \u043d\u0435 \u0441\u043e\u0432\u0441\u0435\u043c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0440\u0435\u0448\u0430\u0435\u043c\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u043a\u0438 \u043c\u0430\u0448\u0438\u043d\u044b \u043f\u043e \u0435\u0451 \u0444\u043e\u0442\u043e, \u043d\u043e \u0432 \u0446\u0435\u043b\u043e\u043c \u0438 \u0442\u0430, \u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043e\u043f\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0445\u043e\u0436\u0438\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 - \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0442\u044c \u043c\u0430\u0440\u043a\u0443 \u043c\u0430\u0448\u0438\u043d\u044b, \u043d\u0443\u0436\u043d\u043e \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0443\u0433\u043b\u044b \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0435\u0433\u043e \u0446\u0432\u0435\u0442, \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0442\u0438\u043f\u043e\u0432\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0435 \u0440\u0435\u0437\u0438\u043d\u0435 \u043a\u043e\u043b\u0451\u0441, \u0431\u043b\u0438\u043a\u0430\u043c \u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430\u0445, \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u043c \u043f\u0435\u0440\u0435\u043b\u0438\u0432\u0430\u043c \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 \u043a\u0443\u0437\u043e\u0432\u0430. \u0410 \u044d\u0442\u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043a\u0430\u043a \u0440\u0430\u0437 \u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442\u0441\u044f \u0432 \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u044f\u0445 \u043d\u0430 ImageNet."]}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u0443\u0447\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u0434 \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 \u0441 \u043d\u0443\u043b\u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 (high level features) \u0438\u0437 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432  \u0443\u0436\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0430 \u043f\u043e\u0445\u043e\u0436\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u043c \u043d\u0430\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (\u043a\u0430\u043a \u0434\u0430\u0442\u0430\u0441\u0435\u0442 ImageNet), \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u043d\u0430 \u0441\u0445\u0435\u043c\u0435 \u043d\u0438\u0436\u0435:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(79758).A+"",width:"835",height:"1443"})}),"\n",(0,a.jsxs)(e.p,{children:["\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u0435\u0441\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u043c\u043e\u0434\u0435\u043b\u0438, \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0443 B (\u043a\u0440\u0430\u0441\u043d\u044b\u0435), \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043b\u043e\u0438 \u043c\u043e\u0434\u0435\u043b\u0438, \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 A. \u042d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,a.jsx)(e.strong,{children:"\u0436\u0451\u0441\u0442\u043a\u0430\u044f \u043e\u0431\u0449\u043d\u043e\u0441\u0442\u044c \u0432\u0435\u0441\u043e\u0432"})," (hard weight sharing). \u041f\u043e\u0434 \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 A \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0441\u043b\u043e\u0438 (\u0441\u0438\u043d\u0438\u0435), \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c \u043d\u0430 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043e\u0431\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u043c\u0435\u043d\u044c\u0448\u0435\u0433\u043e \u043e\u0431\u044a\u0451\u043c\u0430. \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0440\u0430\u0437\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u044b \u0438\u043c\u0435\u0435\u043c \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 A, \u0442\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0441\u043b\u043e\u0451\u0432 \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e\u0434 \u044d\u0442\u0443 \u0437\u0430\u0434\u0430\u0447\u0443."]}),"\n",(0,a.jsx)(e.h2,{id:"\u0432\u044b\u0431\u043e\u0440-\u043f\u043e\u0445\u043e\u0436\u0435\u0439-\u0437\u0430\u0434\u0430\u0447\u0438",children:"\u0412\u044b\u0431\u043e\u0440 \u043f\u043e\u0445\u043e\u0436\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u043e\u0445\u043e\u0436\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 B \u043c\u043e\u0436\u0435\u0442 \u0432 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 A, \u043a\u0430\u043a \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435 - \u0438 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c, \u0438 \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445 \u0438 \u043a\u043b\u0430\u0441\u0441\u0430\u0445."}),"\n",(0,a.jsxs)(e.p,{children:["\u041d\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 B \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0434\u0440\u0443\u0433\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u0430\u0434\u0430\u0447\u0430 A - \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0430 \u0437\u0430\u0434\u0430\u0447\u0430 B - \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0432\u0442\u043e\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0438\u043b\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e-\u0441\u043e\u0441\u0442\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 (\u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0437\u0430\u0438\u043c\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f \u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043b\u043e\u0438 \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u0442\u043e\u0440\u0430). \u0414\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0433\u043e, \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043b\u0438 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u043e\u0431\u044a\u0435\u043a\u0442 (\u043f\u043e\u0434 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0443\u0433\u043b\u0430\u043c\u0438), \u0438\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.jsx)(e.a,{href:"../Special-architectures/Contrastive-learning",children:"\u0441\u0438\u0430\u043c\u0441\u043a\u0438\u0435 \u0441\u0435\u0442\u0438"})," (instance discrimination)."]}),"\n",(0,a.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 B \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,a.jsx)(e.a,{href:"../../Machine-learning/Base-concepts/Unsupervised-learning",children:"\u0437\u0430\u0434\u0430\u0447\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0443\u0447\u0438\u0442\u0435\u043b\u044f"})," (unsupervised learning), \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0430\u044f \u0432\u043d\u0435\u0448\u043d\u044e\u044e \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443, \u0442\u043e \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u0443\u0447\u0430\u0442\u044c \u0435\u0451 \u043e\u0447\u0435\u043d\u044c \u0442\u043e\u0447\u043d\u043e \u043d\u0430 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0440\u0443\u0447\u043d\u0430\u044f \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u043d\u0438\u0445 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f!"]}),"\n",(0,a.jsx)(e.h2,{id:"\u043c\u044f\u0433\u043a\u0438\u0439-\u043f\u0435\u0440\u0435\u043d\u043e\u0441-\u0432\u0435\u0441\u043e\u0432-soft-weight-sharing",children:"\u041c\u044f\u0433\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0432\u0435\u0441\u043e\u0432 (soft weight sharing)"}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0437\u0430\u0434\u0430\u0447\u0430 A \u0432\u0441\u0451 \u0436\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 B, \u0442\u043e \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c, \u0447\u0442\u043e \u0438 \u043d\u0438\u0437\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0451\u043d\u043d\u044b\u0435 \u0441 \u043f\u0435\u0440\u0432\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u0434\u043e\u043b\u0436\u043d\u044b  \u043a\u0430\u043a-\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f. \u041d\u043e \u043d\u0435\u0441\u0438\u043b\u044c\u043d\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0437\u0430\u0434\u0430\u0447\u0438 A \u0438 B \u043f\u043e\u0445\u043e\u0436\u0438. \u0414\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u0432\u0435\u0441\u043e\u0432 \u0434\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c ",(0,a.jsx)(e.em,{children:"\u0432\u0441\u0435 \u0432\u0435\u0441\u0430"})," \u043c\u043e\u0434\u0435\u043b\u0438, \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0439 \u0446\u0435\u043b\u0435\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443 A, ",(0,a.jsx)(e.strong,{children:"\u0441 \u043c\u0430\u043b\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"})," (learning rate), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.jsx)(e.strong,{children:"\u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439"}),". \u0422\u0430\u043a\u0430\u044f \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u0430\u044f \u0434\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0432\u0435\u0441\u0430, \u043d\u043e \u043d\u0435\u0441\u0438\u043b\u044c\u043d\u043e. \u0414\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0430\u043a \u0434\u043b\u044f \u0440\u0430\u043d\u043d\u0438\u0445, \u0442\u0430\u043a \u0438 \u0434\u043b\u044f \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0441\u043b\u043e\u0451\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0435\u0440\u0435\u043f\u0440\u0438\u0441\u043f\u043e\u0441\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u043a \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c \u0431\u043e\u043b\u0435\u0435 \u0440\u0430\u043d\u043d\u0438\u0445 \u0441\u043b\u043e\u0451\u0432."]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u041a\u0430\u043a \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430, \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u0432\u0435\u0441\u0430 \u0441 \u043e\u0431\u044b\u0447\u043d\u044b\u043c \u0448\u0430\u0433\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043d\u043e \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,a.jsx)(e.mi,{children:"w"}),(0,a.jsx)(e.mo,{children:"\u2212"}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"w"}),(0,a.jsx)(e.mi,{children:"B"})]}),(0,a.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,a.jsxs)(e.msup,{children:[(0,a.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,a.jsx)(e.mn,{children:"2"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"||w-w_B||^2"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord",children:"\u2223\u2223"}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05017em"},children:"B"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsx)(e.span,{className:"vlist-t",children:(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,a.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]}),", \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0441\u0438\u043b\u044c\u043d\u043e\u043c\u0443 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044e \u0432\u0435\u0441\u043e\u0432 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"w"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"w"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"})]})})]}),"\u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 A \u043e\u0442 \u0432\u0435\u0441\u043e\u0432 \u0440\u0435\u0444\u0435\u0440\u0435\u043d\u0441\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u0434\u0430\u0447\u0443 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"B"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"B"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})})]}),"."]}),"\n"]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}},79758:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/01-pretraining-499bc76796986f37e5956d4d670e6d59.png"},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>l});var a=n(96540);const i={},r=a.createContext(i);function t(s){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(r.Provider,{value:e},s.children)}}}]);