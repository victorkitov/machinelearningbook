"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[7857],{7742:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=s(4848),t=s(8453);const r={description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},o="\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",c={id:"docs_ml/Data-preprocessing/Data-imputation",title:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.",source:"@site/docs/docs_ml/04-Data-preprocessing/02-Data-imputation.md",sourceDirName:"docs_ml/04-Data-preprocessing",slug:"/docs_ml/Data-preprocessing/Data-imputation",permalink:"/docs/docs_ml/Data-preprocessing/Data-imputation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u041c\u0435\u0442\u043e\u0434\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."},sidebar:"docs_ml",previous:{title:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432",permalink:"/docs/docs_ml/Data-preprocessing/Outlier-filtering"},next:{title:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430",permalink:"/docs/docs_ml/Data-preprocessing/Time-preprocessing"}},l={},d=[{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445-\u0438-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",level:2},{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",level:2}];function a(n){const e={admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432"}),"\n",(0,i.jsx)(e.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445 \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0435\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 (missing values). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0435\u0441\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c \u0430\u043d\u043a\u0435\u0442\u044b, \u0442\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0435\u0441\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044f \u0430\u043d\u043a\u0435\u0442\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c. \u041d\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u043d\u044b\u0439 \u0432\u0435\u043a\u0442\u043e\u0440 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u0431\u0435\u0437 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432."}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0438\u043c \u043f\u0440\u0438\u0451\u043c\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d. \u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u0451\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0431\u0449\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0432\u044b\u0431\u043e\u0440\u043a\u0438. \u0415\u0441\u043b\u0438 \u0436\u0435 \u0442\u0430\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043c\u043d\u043e\u0433\u043e, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (missing values imputation)."}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445-\u0438-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",children:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445"}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445, \u0435\u0441\u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439 \u0440\u0430\u0432\u043d\u043e \u0434\u0432\u0443\u043c) \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0447\u0430\u0441\u0442\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 (\u0432 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0435 \u044d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,i.jsx)(e.strong,{children:"\u043c\u043e\u0434\u043e\u0439 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f"}),", mode imputation)"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0435\u0439 [\u043f\u0440\u043e\u043f\u0443\u0441\u043a]"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0411\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c, \u0432\u044b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u043c\u0438 \u043f\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043e\u0439, \u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u043e\u0439 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0433 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043b\u0438\u0431\u043e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d \u0441\u0442\u0435\u0441\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0442\u043e\u0442 \u043d\u0438\u0437\u043a\u0438\u0439, \u043b\u0438\u0431\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u043b\u0435\u043d\u0438\u043b\u0441\u044f \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c (\u0445\u043e\u0442\u044f \u043e\u043d \u043c\u043e\u0433 \u0431\u044b\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0438\u043c). \u0412\u0430\u0436\u043d\u043e \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0432\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b."}),"\n",(0,i.jsx)(e.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u0443\u044e\u0449\u0438\u0439 \u0431\u044b\u043b\u043e \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0438\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u043e. \u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0432\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438 \u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u044c\u0441\u044f \u043a \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043d\u0435\u0434\u043e\u0432\u0435\u0440\u0438\u0435\u043c."}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438-\u0432-\u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445-\u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445",children:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0432 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u0445"}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u043b\u044f \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u043c \u0441\u0440\u0435\u0434\u043d\u0438\u043c"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0430\u043d\u043e\u0439"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0412\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0445. \u041c\u0435\u0434\u0438\u0430\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0435\u0440\u043e\u0439 \u043e\u0446\u0435\u043d\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0439 \u043a \u043d\u0430\u043b\u0438\u0447\u0438\u044e \u0432\u044b\u0431\u0440\u043e\u0441\u043e\u0432 (robust to outliers), \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e."}),"\n",(0,i.jsx)(e.admonition,{title:"\u0417\u0430\u0434\u0430\u0447\u0430",type:"note",children:(0,i.jsx)(e.p,{children:"\u041e\u0446\u0435\u043d\u0438\u0442\u0435, \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0438\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0438 \u043c\u0435\u0434\u0438\u0430\u043d\u0430 \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0438\u043b\u0438 \u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0433\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435."})}),"\n",(0,i.jsx)(e.p,{children:'\u0427\u0430\u0441\u0442\u043e \u043e\u0434\u043d\u0430\u043a\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c "\u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0430\u043c \u0444\u0430\u043a\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e, \u043c\u043e\u0436\u0435\u0442 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0433 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0443 \u0441\u0432\u043e\u0435\u0439 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u044b, \u0435\u0441\u043b\u0438 \u0435\u043c\u0443 \u043a\u0430\u0436\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043e\u043d\u0430 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0438\u043b\u0438 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0430\u044f. \u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c, \u0440\u0435\u0448\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0443 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438.'}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0433\u043e\u0432\u043e\u0440\u044f\u0449\u0438\u0439 \u043e \u0442\u043e\u043c, \u0431\u044b\u043b\u043e \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u043e \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0438\u043b\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043c\u043e\u0434\u0435\u043b\u044c \u0432\u043f\u043e\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043c\u043e\u0433\u043b\u0430 \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0434\u0432\u0430 \u0441\u043b\u0443\u0447\u0430\u044f."})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);