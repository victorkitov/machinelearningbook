"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[2039],{7238:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>t});var n=a(4848),r=a(8453);const l={description:"\u041f\u0440\u0438\u0451\u043c\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature engineering) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},i="\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",m={id:"docs_ml/Data-preprocessing/Feature-generation",title:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",description:"\u041f\u0440\u0438\u0451\u043c\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature engineering) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",source:"@site/docs/docs_ml/04-Data-preprocessing/06-Feature-generation.md",sourceDirName:"docs_ml/04-Data-preprocessing",slug:"/docs_ml/Data-preprocessing/Feature-generation",permalink:"/docs/docs_ml/Data-preprocessing/Feature-generation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"\u041f\u0440\u0438\u0451\u043c\u044b \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (feature engineering) \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},sidebar:"docs_ml",previous:{title:"\u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",permalink:"/docs/docs_ml/Data-preprocessing/Feature-normalization"},next:{title:"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",permalink:"/docs/docs_ml/Data-preprocessing/Feature-reduction"}},c={},t=[{value:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",id:"\u043f\u043e\u0434\u0445\u043e\u0434\u044b-\u0434\u043b\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u043d\u043e\u0432\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",level:2}];function h(s){const e={admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,r.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432"}),"\n",(0,n.jsxs)(e.p,{children:["\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u0443\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u0430 \u043e\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435\u0442\u043e\u0447\u043d\u043e. \u0414\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 ",(0,n.jsx)(e.strong,{children:"\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044e\u0442 \u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438"})," \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 (feature engineering). \u041f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0438 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u0447\u043d\u0435\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u043c \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u044c \u0443\u0436\u0435 \u0441\u043e\u0431\u0435\u0440\u0451\u0442 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043e\u0446\u0435\u043d\u043a\u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 \u043d\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430 \u0434\u043b\u0438\u043d\u0430 \u0438 \u0448\u0438\u0440\u0438\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430. \u041b\u043e\u0433\u0438\u0447\u043d\u043e \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0440\u0430\u0432\u043d\u044b\u0439 \u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043f\u043b\u043e\u0449\u0430\u0434\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430, \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432\u043b\u0438\u044f\u044e\u0449\u0435\u0439 \u043d\u0430 \u0435\u0433\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c."]}),"\n",(0,n.jsx)(e.h2,{id:"\u043f\u043e\u0434\u0445\u043e\u0434\u044b-\u0434\u043b\u044f-\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438-\u043d\u043e\u0432\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432",children:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u043c \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u043c, \u0432\u043b\u0438\u044f\u044e\u0449\u0438\u043c \u043d\u0430 \u043e\u0442\u043a\u043b\u0438\u043a. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u0443\u0447\u0430\u0441\u0442\u043a\u0430, \u043a\u0430\u043a \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0435\u0433\u043e \u0434\u043b\u0438\u043d\u044b \u043d\u0430 \u0448\u0438\u0440\u0438\u043d\u0443 \u0443\u0447\u0430\u0441\u0442\u043a\u0430. \u041f\u0440\u0438  \u043e\u0446\u0435\u043d\u043a\u0435 \u043a\u0432\u0430\u0440\u0442\u0438\u0440 - \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0436\u0438\u043b\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u0438 \u043a \u0447\u0438\u0441\u043b\u0443 \u043a\u043e\u043c\u043d\u0430\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043d\u044f\u0442\u044c \u0441\u0440\u0435\u0434\u043d\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043c\u043d\u0430\u0442\u044b \u0438 \u0442.\u0434. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u0438\u0441\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0438\u0437 \u043e\u0431\u0449\u0435\u0439 \u043b\u043e\u0433\u0438\u043a\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043a\u043b\u0430\u0441\u0441\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043f\u0430\u043b \u043e\u0431\u044a\u0435\u043a\u0442."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u041f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0430\u043c\u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b \u043b\u0438\u0448\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043d\u0438\u043c\u0438. \u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 ",(0,n.jsx)(e.strong,{children:"\u043f\u043e\u043b\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438"})," (polynomial features) - \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430 (\u0441 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f\u043c\u0438) \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430. \u0414\u043b\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0430 ",(0,n.jsx)(e.strong,{children:"\u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432"})," (feature discretization), \u043a\u043e\u0433\u0434\u0430 \u043f\u043e \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u043c\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0443, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430\u0431\u043e\u0440 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432-\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043c\u043e\u0436\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0432\u0438\u0434\u0430"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"double-struck",children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"\u2264"}),(0,n.jsx)(e.mn,{children:"18"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"}"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"double-struck",children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(e.mn,{children:"18"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"65"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"}"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"double-struck",children:"I"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mn,{children:"65"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"}"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\mathbb{I}\\{age \\le 18\\}, \\mathbb{I}\\{18<age<=65\\}, \\mathbb{I}\\{age>65\\}."})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathbb",children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"{"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"18"}),(0,n.jsx)(e.span,{className:"mclose",children:"}"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathbb",children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"{"}),(0,n.jsx)(e.span,{className:"mord",children:"18"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"65"}),(0,n.jsx)(e.span,{className:"mclose",children:"}"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathbb",children:"I"}),(0,n.jsx)(e.span,{className:"mopen",children:"{"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"65"}),(0,n.jsx)(e.span,{className:"mclose",children:"}"}),(0,n.jsx)(e.span,{className:"mord",children:"."})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u043b\u0435\u0442\u043d\u0438\u0445, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u043b\u044e\u0434\u0435\u0439 \u0438 \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u0435\u0440\u043e\u0432. \u0427\u0430\u0449\u0435 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0442\u0440\u0435\u0437\u043a\u043e\u0432 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043d\u0435 \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u044e\u0442 \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u0430 \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u044e\u0442 \u043d\u0430 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u044b\u0435 \u043e\u0442\u0440\u0435\u0437\u043a\u0438. \u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438, \u043d\u043e \u0438\u043c \u0441\u043b\u043e\u0436\u043d\u043e \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438\u043c \u043d\u0430 \u0432\u0445\u043e\u0434 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0430\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u0432 \u044f\u0432\u043d\u043e\u043c \u0432\u0438\u0434\u0435 \u043a\u0430\u043a \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438 \u0438 \u0441\u0443\u043c\u043c\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0438\u043c\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u041c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043e\u0442\u043a\u043b\u0438\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043f\u043e\u043f\u0430\u0440\u043d\u044b\u0445 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0438\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043e\u0439\u0442\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043a\u0430\u043a \u0438\u0445 \u0440\u0430\u0437\u0443\u043c\u043d\u043e\u0439 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u0438\u0437\u0430\u0446\u0438\u0435\u0439, \u0442\u0430\u043a \u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u043c\u0438 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f\u043c\u0438 \u043d\u0430\u0434 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438. \u0412 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u043c \u043c\u043e\u0434\u0435\u043b\u044f\u043c \u0438 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u043c \u0434\u0435\u0440\u0435\u0432\u044c\u044f\u043c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e \u0446\u0435\u043d\u0442\u0440\u043e\u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432 \u043f\u0440\u0438 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0442\u044c \u0434\u0430\u0436\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439. \u0422\u043e\u0433\u0434\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u044d\u0442\u0438\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0438 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f ",(0,n.jsx)(e.strong,{children:"\u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435\u043c"})," \u0438\u043b\u0438 ",(0,n.jsx)(e.strong,{children:"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0435\u0439"})," (model ensemble). \u0427\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0437\u0430 \u0441\u0447\u0451\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u0445, \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u0443\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0432\u044b\u0431\u043e\u0440\u043a\u0430\u0445."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{title:"\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043b\u0443\u0447\u0448\u0435",type:"danger",children:(0,n.jsxs)(e.p,{children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u043b\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0445\u0432\u0430\u0442\u0438\u0442\u044c ",(0,n.jsx)(e.strong,{children:"\u043b\u043e\u0436\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c"})," (false dependency) \u043c\u0435\u0436\u0434\u0443 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0437 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0430 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u043c\u0443 \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044e \u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0435\u043a\u0442\u043e\u0440 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432 \u0438 \u043f\u043e \u043d\u0435\u043c\u0443 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0438\u0437 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0442\u043e \u043c\u043d\u043e\u0433\u0438\u0435 \u0438\u0437 \u043d\u0438\u0445 \u0431\u0443\u0434\u0443\u0442 \u0441\u0438\u043b\u044c\u043d\u043e \u0441\u043a\u043e\u0440\u0440\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0441 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c. \u041d\u043e \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043b\u043e\u0436\u043d\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u0441\u0445\u043e\u0434\u043d\u043e ",(0,n.jsx)(e.em,{children:"\u0432\u0441\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0431\u044b\u043b\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b"}),"."]})})]})}function d(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>m});var n=a(6540);const r={},l=n.createContext(r);function i(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);