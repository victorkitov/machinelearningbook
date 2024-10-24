"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9218],{6452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=n(74848),r=n(28453);const s={description:"",sidebar_label:"LeNet"},o="\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 LeNet",c={id:"Neural-networks/Convolutional-architectures/LeNet",title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 LeNet",description:"",source:"@site/docs/Neural-networks/11-Convolutional-architectures/02-LeNet.md",sourceDirName:"Neural-networks/11-Convolutional-architectures",slug:"/Neural-networks/Convolutional-architectures/LeNet",permalink:"/docs/Neural-networks/Convolutional-architectures/LeNet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"",sidebar_label:"LeNet"},sidebar:"Neural-networks",previous:{title:"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f ImageNet",permalink:"/docs/Neural-networks/Convolutional-architectures/ImageNet"},next:{title:"AlexNet \u0438 ZFNet",permalink:"/docs/Neural-networks/Convolutional-architectures/AlexNet-ZFnet"}},l={},a=[{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-lenet",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 LeNet"}),"\n",(0,i.jsxs)(t.p,{children:["LeNet [",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/LeNet",children:"1"}),"] - \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0432\u044b\u0445 \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440 LeNet-1 - LeNet-5, \u043f\u043e\u044f\u0432\u0438\u0432\u0448\u0438\u0445\u0441\u044f \u0435\u0449\u0435 \u0432 1989 (LeNet-1). \u0421\u0430\u043c\u043e\u0439 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e LeNet, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,i.jsx)(t.a,{href:"https://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf",children:"LeNet-5"})," [2], \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043d\u0438\u0436\u0435 [2]:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(1903).A+"",width:"1398",height:"412"})}),"\n",(0,i.jsx)(t.p,{children:"LeNet \u043d\u0430\u0448\u043b\u0430 \u0448\u0438\u0440\u043e\u043a\u043e\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0438 \u0440\u0443\u043a\u043e\u043f\u0438\u0441\u043d\u044b\u0445 \u0446\u0438\u0444\u0440 \u0438 \u0431\u0443\u043a\u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f (32x32). \u041e\u043d\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u0443\u044e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443, \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u0434\u0443\u0442 \u0441\u0432\u0451\u0440\u0442\u043a\u0438 (convolutions) \u0438 \u0443\u0441\u0440\u0435\u0434\u043d\u044f\u044e\u0449\u0438\u0435 \u043f\u0443\u043b\u0438\u043d\u0433\u0438 \u0441 \u043f\u0435\u0440\u0435\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c (subsampling), \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0441\u043d\u0438\u0436\u0430\u044e\u0449\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u043d\u043e\u0441\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0430 \u043f\u044f\u0442\u043e\u043c \u0441\u043b\u043e\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0438\u0437\u0443\u0435\u0442\u0441\u044f, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043a \u043d\u0435\u043c\u0443 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0434\u0432\u0430 \u043f\u043e\u0441\u043b\u043d\u043e\u0441\u0432\u044f\u0437\u043d\u044b\u0445 \u0441\u043b\u043e\u044f."}),"\n",(0,i.jsx)(t.p,{children:"\u042d\u0442\u0430 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 10.000 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."}),"\n",(0,i.jsx)(t.p,{children:"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0443\u0436\u0435 \u0432 1990-\u0435 \u0433\u043e\u0434\u044b \u043d\u0435\u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0431\u044b\u043b\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u0438\u0441\u044c \u0432 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445. \u041d\u043e \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u0445 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u043b\u043e\u0441\u044c \u0441\u043b\u0430\u0431\u044b\u043c\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u044b\u043c\u0438 \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u0451\u043c\u0430\u043c\u0438 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0442\u0435\u0439 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0438 \u0441\u043b\u043e\u0451\u0432."}),"\n",(0,i.jsx)(t.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/LeNet",children:"https://en.wikipedia.org/wiki/LeNet"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://ieeexplore.ieee.org/abstract/document/726791",children:"LeCun Y. et al. Gradient-based learning applied to document recognition //Proceedings of the IEEE. \u2013 1998. \u2013 \u0422. 86. \u2013 \u2116. 11. \u2013 \u0421. 2278-2324."})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1903:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/LeNet-7c2da426e0450ea82808acc07f7fc426.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);