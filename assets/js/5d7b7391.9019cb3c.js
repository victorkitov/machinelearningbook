"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[8031],{55339:(A,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const r={description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 (representation learning) \u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u0445. \u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043c\u044b\u0441\u043b \u0442\u0430\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044f\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432 \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 (low dimensional manifold). \u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438.",keywords:["\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439","representation learning","\u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435","low dimensional manifold","\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u0441\u0435\u0442\u0438"]},t="\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",a={id:"Neural-networks/MLP/Representation-learning",title:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 (representation learning) \u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u0445. \u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043c\u044b\u0441\u043b \u0442\u0430\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044f\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432 \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 (low dimensional manifold). \u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438.",source:"@site/docs/Neural-networks/04-MLP/08-Representation-learning.md",sourceDirName:"Neural-networks/04-MLP",slug:"/Neural-networks/MLP/Representation-learning",permalink:"/docs/Neural-networks/MLP/Representation-learning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"\u0417\u0430\u0434\u0430\u0447\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 (representation learning) \u0432 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u0445. \u0413\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043c\u044b\u0441\u043b \u0442\u0430\u043a\u0438\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044f\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043c\u043d\u043e\u0433\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0432 \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 (low dimensional manifold). \u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0439 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u043e\u0439 \u0441\u0435\u0442\u0438.",keywords:["\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439","representation learning","\u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435","low dimensional manifold","\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u0441\u0435\u0442\u0438"]},sidebar:"Neural-networks",previous:{title:"\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438",permalink:"/docs/Neural-networks/MLP/Modeling-ability"},next:{title:"\u0413\u0438\u043f\u0435\u0440\u0441\u0435\u0442\u044c",permalink:"/docs/Neural-networks/MLP/HyperNet"}},c={},l=[{value:"\u041f\u043e\u043d\u044f\u0442\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",id:"\u043f\u043e\u043d\u044f\u0442\u0438\u0435-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0418\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438",id:"\u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0435-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function o(A){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,i.R)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",children:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"}),"\n",(0,n.jsx)(e.h2,{id:"\u043f\u043e\u043d\u044f\u0442\u0438\u0435-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",children:"\u041f\u043e\u043d\u044f\u0442\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"}),"\n",(0,n.jsxs)(e.p,{children:["\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0432\u044b\u0441\u043e\u043a\u043e\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,n.jsx)(e.strong,{children:"\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"})," (representation learning) \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043b\u044e\u0447 \u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u041c\u043d\u043e\u0433\u043e \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d\u043e \u043f\u043e\u0434\u0431\u043e\u0440\u0443 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440 \u0438 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0438\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0449\u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u043d\u0438\u043c\u0438 \u0437\u0430\u0434\u0430\u0447."]}),"\n",(0,n.jsx)(e.p,{children:"\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u043c\u043e\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043c, \u0447\u0442\u043e \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u043d\u0435 \u0432\u0441\u0451 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e, \u0430 \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0435\u043d\u044b \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u043c \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0438 (low dimensional manifold) \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435."}),"\n",(0,n.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,n.jsxs)(e.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440 \u0447\u0451\u0440\u043d\u043e-\u0431\u0435\u043b\u044b\u0445 \u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u044b\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 150x150. \u042d\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u0435\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"15"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"0"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"22500"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"D=150^2=22500"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,n.jsx)(e.span,{className:"mord",children:"15"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"0"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"22500"})]})]})]}),", \u0442.\u0435. \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u0435\u043b\u0438\u043a\u0430. \u041d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:s(46438).A+"",width:"1170",height:"358"})}),"\n",(0,n.jsx)(e.p,{children:"\u041a\u0430\u043a \u0432\u0438\u0434\u0438\u043c, \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u043e\u0432\u0441\u0435\u043c \u043d\u0435 \u043f\u043e\u0445\u043e\u0436\u0438 \u043d\u0430 \u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u044b\u0435 \u0446\u0438\u0444\u0440\u044b, \u043a\u0430\u043a \u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438\u0440\u043e\u0434\u044b, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043b\u0430\u0432\u043d\u043e \u0438 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e."}),"\n",(0,n.jsx)(e.p,{children:"\u0421\u043a\u0430\u043d\u044b \u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u044b\u0445 \u0446\u0438\u0444\u0440 \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0442 \u043b\u0438\u0448\u044c \u043c\u0430\u043b\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0448\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u043b\u0435\u0436\u0430\u0442 \u043d\u0430 \u043c\u0430\u043b\u043e\u043c\u0435\u0440\u043d\u043e\u043c \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0438 (\u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u0438). \u041d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0446\u0438\u0444\u0440\u044b 3 \u043d\u0438\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c, \u0447\u0442\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0430, \u0430 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0432 \u043d\u0451\u043c \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0446\u0438\u0444\u0440\u044b \u0438 \u0443\u0433\u043b\u0430 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0435\u043f\u0435\u043d\u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u044b, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0435 \u043a\u0440\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0446\u0438\u0444\u0440\u044b, \u0436\u0438\u0440\u043d\u043e\u0441\u0442\u0438 \u0448\u0440\u0438\u0444\u0442\u0430 \u0438 \u043c\u0430\u043d\u0435\u0440\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:s(64870).A+"",width:"644",height:"404"})}),"\n",(0,n.jsxs)(e.p,{children:["\u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u044b\u0445 \u0446\u0438\u0444\u0440 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0430, \u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u044e\u0442 \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0432 \u0438\u0445 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0438 ",(0,n.jsx)(e.strong,{children:"\u0437\u0430 \u0441\u0447\u0451\u0442 \u044f\u0432\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u044f \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u043c\u0438 \u0441\u043b\u043e\u044f\u043c\u0438"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"\u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0435-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438",children:"\u0418\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438"}),"\n",(0,n.jsxs)(e.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445. \u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,n.jsx)(e.a,{href:"https://arxiv.org/pdf/1311.2901.pdf",children:"[1]"}),", \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0447\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u043b\u043e\u0438 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u0439 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b ",(0,n.jsx)(e.a,{href:"../ConvPool-Images/Conv-net",children:"\u0438\u0437\u0443\u0447\u0438\u043c \u0434\u0430\u043b\u0435\u0435"}),", \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u043e\u0432 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438, \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043b\u043e\u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442 \u0432\u0441\u0451 \u0431\u043e\u043b\u0435\u0435 \u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 ",(0,n.jsx)(e.a,{href:"https://arxiv.org/pdf/1311.2901.pdf",children:"[1]"}),":"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:s(79098).A+"",width:"835",height:"236"})}),"\n",(0,n.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"https://arxiv.org/abs/1311.2901",children:"Zeiler M. D., Fergus R. Visualizing and understanding convolutional networks //Computer Vision\u2013ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part I 13. \u2013 Springer International Publishing, 2014. \u2013 \u0421. 818-833."})}),"\n"]})]})}function d(A={}){const{wrapper:e}={...(0,i.R)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(o,{...A})}):o(A)}},64870:(A,e,s)=>{s.d(e,{A:()=>n});const n="data:image/png;base64,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LT49bVpr133uuYiHHuqs7b1AhbAECxc23kXhgAMibrop4gtfiDj44LGPWXfdYpboqDMVho5l2X+brRC+970R559ffntypf92LMv+26mnn4646650f3zd6yZebWAsL7yQxjv//d+nsNeMKVMi3vKWiEsvbb29dbV0/xUIC/LII+mHLCLiK1+JOPvs9s+13HIRG22UfmBbfSfTa9xQOpZl/xUI60H/7ViW/bcOliyJuPHG9OcHP9jcFprrrRfx8MPlt61bPDIuwQMPpO247rmnmPOtsUbEFVd4lAydeNObxq++A3mbNGl4HOFYj5jH8thjaUeTCy8c/Yi6X5hl3IHFiyPuvTfNdiwqDEZEPPpoGvt0++3p/M8+W9y5odc9/njE5z/f+LhZsyL+7u/Kbw/Q2772tTQOsZFFiyJ++tOIfi3o9mHG7Y5FiyJuu621mUqtWLw44g1vSB+fe27E61+fPl5jDWu6kZebb04V8yELFkR885vVtQfoL7vuGnHaaRFHHpmGao1n+vS0FE2/ju0XCFv0xBNpvOB990XsvXd3rvkP/zD88Wc/G3Hccd25LlTthhsiTjgh4rLLWvu+N74xDRgHaMauu6aJnBMFwkWLIq66KuId70iPnPuNQNiiyy5LC2RWZf78iN/8JmLVVSM23LC6dkDRvvOdZWfnX3llxI9/3Pq53vzm9EsboCjPPBPxgx9EfP3rVbekHAJhjzn77PR6+9sj/vu/q24NFOdLX0oTtDq13XZpKQqAIk2bFvHlL/dndTBCICzV6qunMQd/+EPE8stHbLXV2Mf95S8Rf/5za+d+8smI3/8+TT6BXjF3bhoTOJanny7mGvvtpzoIFG/q1IiPfazqVpRHIGzR9OkRm22WZv+OZ731ImbMiNhjj4jdd4/4xCfS940cGD/SeedFHHtsa9WRG26I2GefiO9/P2LrrVv7b4Buu/vu1Geuvba5/UjbNXt22poKoBXnnpuKLDkTCFu0xx5p/aHxBqxvskkKdwccMPy1X/5y4nPOmZMC43HHpTEKv/tdc225++5UCclhSx161913p8cs3Vgg+i1vSVtT3X9/6osAzTjvvIkD4Zprpr2Q+5mdStpw660Rn/zk2H/3+c+nqmC77rknTVq57bbmjl9//d4OhHY66Fit++8996SlHLq9KfycOWlbSNXCcum/Hat1/83BOedEPPVU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"},46438:(A,e,s)=>{s.d(e,{A:()=>n});const n=s.p+"assets/images/04-random-images-aa2ee6e05363bff407b5d0f468779cbe.jpg"},79098:(A,e,s)=>{s.d(e,{A:()=>n});const n=s.p+"assets/images/05-conv-visualization-454a071aa9dadd76ab0f0c7273c1ee62.png"},28453:(A,e,s)=>{s.d(e,{R:()=>t,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function t(A){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:t(A.components),n.createElement(r.Provider,{value:e},A.children)}}}]);