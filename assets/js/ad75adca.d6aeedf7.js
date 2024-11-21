"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[5459],{9927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(74848),r=n(28453);const o={description:""},c="\u0414\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b",i={id:"Neural-networks/Object-detection/Two-stage-detectors",title:"\u0414\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b",description:"",source:"@site/docs/Neural-networks/13-Object-detection/10-Two-stage-detectors.md",sourceDirName:"Neural-networks/13-Object-detection",slug:"/Neural-networks/Object-detection/Two-stage-detectors",permalink:"/docs/Neural-networks/Object-detection/Two-stage-detectors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"CenterNet",permalink:"/docs/Neural-networks/Object-detection/CenterNet"},next:{title:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",permalink:"/docs/Neural-networks/conclusion"}},l={},d=[];function a(e){const t={h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u0434\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435-\u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b",children:"\u0414\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b"}),"\n",(0,s.jsx)(t.p,{children:"\u0420\u0430\u043d\u0435\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u043c\u0438 (one-stage detectors) - \u043e\u043d\u0438 \u043d\u0430 \u0432\u0445\u043e\u0434 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0430 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432\u044b\u0434\u0430\u044e\u0442 \u0440\u0430\u043c\u043a\u0438 \u0441 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u044d\u0442\u0438\u043c \u0440\u0430\u043c\u043a\u0430\u043c \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438."}),"\n",(0,s.jsx)(t.p,{children:"\u0414\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b (two-stage detectors) \u0436\u0435 \u0440\u0435\u0448\u0430\u044e\u0442 \u0437\u0430\u0434\u0430\u0447\u0443 \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0432 \u0434\u0432\u0430 \u0448\u0430\u0433\u0430:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c \u0448\u0430\u0433\u0435 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442 \u0440\u0435\u0433\u0438\u043e\u043d\u044b-\u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b (region proposals)"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u043c \u0448\u0430\u0433\u0435 \u043e\u0442\u043d\u043e\u0441\u044f\u0442 \u0438\u0437\u0432\u043b\u0435\u0447\u0451\u043d\u043d\u044b\u0435 \u0440\u0435\u0433\u0438\u043e\u043d\u044b-\u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u044b \u043a \u0442\u043e\u043c\u0443 \u0438\u043b\u0438 \u0438\u043d\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443 \u0438 \u0443\u0442\u043e\u0447\u043d\u044f\u044e\u0442 \u0438\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0435\u0440\u0432\u044b\u043c\u0438 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u043c\u0438 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u0430\u043c\u0438 \u0431\u044b\u043b\u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u0434\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);