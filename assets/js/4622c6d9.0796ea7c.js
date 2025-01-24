"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[183],{65248:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>h});var a=n(74848),i=n(28453);const l={description:"",keywords:["\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439","graph neural networks","\u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438","\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0433\u0440\u0430\u0444\u043e\u0432","\u0433\u0440\u0430\u0444 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438"]},t="\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439",r={id:"Neural-networks/Graph-processing/Training-graph-networks",title:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439",description:"",source:"@site/docs/Neural-networks/18-Graph-processing/06-Training-graph-networks.md",sourceDirName:"Neural-networks/18-Graph-processing",slug:"/Neural-networks/Graph-processing/Training-graph-networks",permalink:"/docs/Neural-networks/Graph-processing/Training-graph-networks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"",keywords:["\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439","graph neural networks","\u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438","\u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0433\u0440\u0430\u0444\u043e\u0432","\u0433\u0440\u0430\u0444 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438"]},sidebar:"Neural-networks",previous:{title:"C\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u0441\u0435\u0442\u0438",permalink:"/docs/Neural-networks/Graph-processing/Graph-convolutional-networks"},next:{title:"\u042d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0431\u043b\u0443\u0436\u0434\u0430\u043d\u0438\u0439",permalink:"/docs/Neural-networks/Graph-processing/Alternative-node-embeddings-extraction"}},c={},h=[{value:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439",id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439",level:2},{value:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u0433\u0440\u0430\u0444\u0430 \u0446\u0435\u043b\u0438\u043a\u043e\u043c",id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f-\u0433\u0440\u0430\u0444\u0430-\u0446\u0435\u043b\u0438\u043a\u043e\u043c",level:3},{value:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432",id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445-\u0443\u0437\u043b\u043e\u0432",level:3},{value:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function m(s){const e={a:"a",annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",ol:"ol",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435-\u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445-\u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439",children:"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439"}),"\n",(0,a.jsx)(e.h2,{id:"\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f-\u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439"}),"\n",(0,a.jsx)(e.p,{children:"\u0413\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438, \u043a\u0430\u043a \u0438 \u043b\u044e\u0431\u044b\u0435 \u0434\u0440\u0443\u0433\u0438\u0435, \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e \u043e\u0431\u0443\u0447\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0430\u0445."}),"\n",(0,a.jsx)(e.h3,{id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f-\u0433\u0440\u0430\u0444\u0430-\u0446\u0435\u043b\u0438\u043a\u043e\u043c",children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u0433\u0440\u0430\u0444\u0430 \u0446\u0435\u043b\u0438\u043a\u043e\u043c"}),"\n",(0,a.jsx)(e.p,{children:"\u0420\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0433\u0440\u0430\u0444\u043e\u0432 \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043a\u0430\u0436\u0434\u044b\u0439 \u0433\u0440\u0430\u0444 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443. \u0414\u043b\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u0432 \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0432 \u043e\u0434\u0438\u043d \u043c\u0435\u0442\u0430-\u0433\u0440\u0430\u0444 (\u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043d\u0435\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0445 \u0433\u0440\u0430\u0444\u043e\u0432), \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u043d\u0435\u043c\u0443 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043e\u0431\u043c\u0435\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c\u0438, \u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e/\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u0433\u0440\u0430\u0444\u0443 \u043c\u0435\u0442\u0430-\u0433\u0440\u0430\u0444\u0430."}),"\n",(0,a.jsx)(e.h3,{id:"\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445-\u0443\u0437\u043b\u043e\u0432",children:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432"}),"\n",(0,a.jsxs)(e.p,{children:["\u041f\u0440\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438/\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432 \u0433\u0440\u0430\u0444\u0430 \u043f\u0435\u0440\u0435\u0434 \u0441\u0442\u0430\u0440\u0442\u043e\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447 \u0438\u0437 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0432\u0435\u0440\u0448\u0438\u043d \u0433\u0440\u0430\u0444\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u0445 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432. \u0415\u0441\u043b\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0439, \u0442\u043e \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0433\u0440\u0430\u0444\u043e\u0432, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0432\u0435\u0440\u0448\u0438\u043d, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043d\u0435 \u043f\u0440\u0435\u0432\u043e\u0441\u0445\u043e\u0434\u044f\u0449\u0435\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043a\u0430\u0436\u0434\u0430\u044f \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u043d\u0430 \u043e\u0434\u0438\u043d \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043f\u043e \u0433\u0440\u0430\u0444\u0443. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u043c\u043e\u0436\u043d\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0432\u0435\u0440\u0448\u0438\u043d."]}),"\n",(0,a.jsxs)(e.p,{children:["\u0415\u0441\u043b\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0433\u0440\u0430\u0444 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e, \u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"K"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]})," \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0432\u0435\u043b\u0438\u043a\u043e, \u0442\u043e \u043f\u043e\u0434\u0433\u0440\u0430\u0444\u044b \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0430 \u0431\u0443\u0434\u0443\u0442 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438, \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u044f \u0432\u0435\u0441\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0433\u0440\u0430\u0444 \u0446\u0435\u043b\u0438\u043a\u043e\u043c. \u0427\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u043b\u043e, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0432\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0430:"]}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0435\u0440\u0448\u0438\u043d, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0433\u0440\u0430\u0444 \u043d\u0430 \u043d\u0443\u0436\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043d\u0435\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0433\u0440\u0430\u0444\u043e\u0432 (graph partitioning). \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0435\u0441\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0438\u0437 \u0442\u0435\u043e\u0440\u0438\u0438 \u0433\u0440\u0430\u0444\u043e\u0432. \u041f\u043e\u0441\u043b\u0435 \u0442\u0430\u043a\u043e\u0439 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0438\u043d\u0432\u0430\u0437\u0438\u0432\u043d\u043e\u0439 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u043c\u0438\u043d\u0438\u0431\u0430\u0442\u0447\u0435\u0439 \u0443\u0436\u0435 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0437\u0440\u0430\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u0432\u0441\u0435\u0433\u043e \u0433\u0440\u0430\u0444\u0430 \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043d\u0430\u0431\u043e\u0440\u0430 \u043d\u0435\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,a.jsx)(e.a,{href:"https://udlbook.github.io/udlbook/",children:"1"}),"]:",(0,a.jsx)(e.img,{src:n(40218).A+"",width:"845",height:"595"})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c DropOut, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u0438 \u043e\u0431\u043c\u0435\u043d\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c\u0438 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"S"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0441\u043e\u0441\u0435\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0448\u0438\u043d, \u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"S"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"S"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"S"})]})})]})," \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u0430\u043b\u044b\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0432\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0440\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432\u0441\u0435 \u0432\u0435\u0440\u0448\u0438\u043d\u044b, \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u043f\u0435\u0440\u0435\u0432\u0437\u0432\u0435\u0441\u0438\u0442\u044c \u0441\u0438\u0433\u043d\u0430\u043b\u044b, \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0449\u0438\u0435 \u043e\u0442 \u0441\u043e\u0441\u0435\u0434\u0435\u0439, \u0447\u0442\u043e\u0431\u044b \u0443\u0447\u0435\u0441\u0442\u044c, \u0447\u0442\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0430 \u043b\u0438\u0448\u044c \u0434\u043e\u043b\u044f \u043e\u0442 \u0432\u0441\u0435\u0445 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f",children:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsx)(e.p,{children:"\u0414\u043b\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0430 \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u0441\u0435\u0442\u0438 \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u043d\u0430 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438. \u0414\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439 \u043c\u043e\u0436\u043d\u043e"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"L"}),(0,a.jsx)(e.mn,{children:"1"})]}),(0,a.jsx)(e.mo,{separator:"true",children:","}),(0,a.jsxs)(e.msub,{children:[(0,a.jsx)(e.mi,{children:"L"}),(0,a.jsx)(e.mn,{children:"2"})]})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"L_1, L_2"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]}),(0,a.jsx)(e.span,{className:"mpunct",children:","}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(e.span,{className:"msupsub",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(e.span,{})})})]})})]})]})})]})," \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u043d\u0430 \u0432\u0435\u0441\u0430;"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u044f (\u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439) \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438;"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u043f\u0440\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c DropOut, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0432\u044f\u0437\u0435\u0439."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://udlbook.github.io/udlbook/",children:"Prince S. J. D. Understanding deep learning. \u2013 MIT press, 2023."})}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(m,{...s})}):m(s)}},40218:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/10-graph-partitioning-bf16250cdd925717c319cebefb57bde6.png"},28453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var a=n(96540);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);