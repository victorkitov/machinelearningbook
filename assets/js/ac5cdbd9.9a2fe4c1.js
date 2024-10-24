"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[1520],{88675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453);const c={description:""},r="\u0414\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",d={id:"Neural-networks/Object-detection/Object-detection-task",title:"\u0414\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",description:"",source:"@site/docs/Neural-networks/13-Object-detection/01-Object-detection-task.md",sourceDirName:"Neural-networks/13-Object-detection",slug:"/Neural-networks/Object-detection/Object-detection-task",permalink:"/docs/Neural-networks/Object-detection/Object-detection-task",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u041f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0430\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c",permalink:"/docs/category/\u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0430\u044f-\u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c"},next:{title:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438",permalink:"/docs/Neural-networks/Object-detection/Quality-metrics"}},o={},l=[{value:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438",id:"\u043f\u0440\u043e\u0441\u0442\u043e\u0439-\u043f\u043e\u0434\u0445\u043e\u0434-\u043a-\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f-\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",children:"\u0414\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0437\u0430\u0434\u0430\u0447\u0435 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 (object detection) \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u043e\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0439\u0442\u0438 \u0438 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u043c\u043a\u043e\u0439 \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 (",(0,s.jsx)(n.a,{href:"https://medium.com/@henriquevedoveli/metrics-matter-a-deep-dive-into-object-detection-evaluation-ef01385ec62",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4317).A+"",width:"720",height:"484"})}),"\n",(0,s.jsx)(n.p,{children:"\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u0434\u0441\u0447\u0451\u0442 \u0447\u0438\u0441\u043b\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043e\u0446\u0435\u043d\u043a\u0430 \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u043e\u043f\u043e\u0442\u043e\u043a\u0430 \u0432 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0414\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043b\u044e\u0434\u0435\u0439 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438, \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u0435\u0449\u0451\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0414\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0430 \u043f\u043e\u043b\u043a\u0430\u0445 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u0438 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0430\u0445 \u0432 \u0446\u0435\u043b\u044f\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u043a\u0438."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0414\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0448\u0438\u043d, \u043f\u0435\u0448\u0435\u0445\u043e\u0434\u043e\u0432, \u0441\u0432\u0435\u0442\u043e\u0444\u043e\u0440\u043e\u0432 \u0438 \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 \u0432 \u0430\u0432\u0442\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043c\u0430\u0448\u0438\u043d\u0430\u0445 (self-driving cars)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u043e\u0441\u0442\u043e\u0439-\u043f\u043e\u0434\u0445\u043e\u0434-\u043a-\u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438",children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsx)(n.p,{children:"\u0414\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0435\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u043e\u0431\u0440\u0430\u0437\u0435\u0446 \u0438 \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u0446\u043e\u043c \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u044f \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044e \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0441 \u043a\u0430\u0436\u0434\u044b\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u043c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u0412\u044b\u0441\u043e\u043a\u0430\u044f \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043e \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0440\u0430\u043c\u043a\u043e\u0439, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(49466).A+"",width:"1386",height:"911"})}),"\n",(0,s.jsx)(n.p,{children:"\u041e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0436\u0435 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0432\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445."}),"\n",(0,s.jsx)(n.p,{children:"\u0423\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0435\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0432\u0438\u0434 - \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435 \u0431\u0443\u043a\u0432\u044b \u0438 \u0446\u0438\u0444\u0440\u044b \u043f\u0440\u0438 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0438 \u0442\u0435\u043a\u0441\u0442\u0430, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u043f\u0435\u0447\u0430\u0442\u043d\u043e\u0433\u043e. \u0412 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043d \u0438\u043c\u0435\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0443\u044e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u044c:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0432\u0445\u043e\u0434\u043d\u0430\u044f \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u043e\u0433\u043b\u0430 \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u0430 \u0432 \u0440\u0430\u0437\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0441\u0443\u0442\u043e\u043a, \u043f\u043e-\u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043e\u0441\u0432\u0435\u0449\u0451\u043d\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f;"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u0434 \u0443\u0433\u043b\u043e\u043c, \u0447\u0442\u043e \u0442\u043e\u0436\u0435 \u0441\u043d\u0438\u0437\u0438\u0442 \u043a\u043e\u0440\u0440\u0435\u043b\u044f\u0446\u0438\u044e \u0441 \u043e\u0431\u0440\u0430\u0437\u0446\u043e\u043c;"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u0435\u0441\u043b\u0438 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u043c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u0430\u0448\u0438\u043d\u0443, \u0442\u043e \u043e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0445 \u0446\u0432\u0435\u0442\u043e\u0432, \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u0435 \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0432 \u0431\u043e\u043b\u0435\u0435 \u043e\u0431\u0449\u0435\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4317:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/object-detection-892abba98cd27008b6179f6ff640fd32.jpg"},49466:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/traffic-signs-fb5d638961c34b89105d8fd7c649f600.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const i={},c=s.createContext(i);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);