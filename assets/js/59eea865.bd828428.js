"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[7691],{3785:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var o=t(4848),s=t(8453);const c={description:""},i="\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430",r={id:"docs_ml/Boosting/GB-accuracy",title:"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430",description:"",source:"@site/docs/docs_ml/16-Boosting/99-GB-accuracy.md",sourceDirName:"docs_ml/16-Boosting",slug:"/docs_ml/Boosting/GB-accuracy",permalink:"/docs/docs_ml/Boosting/GB-accuracy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{description:""},sidebar:"docs_ml",previous:{title:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438",permalink:"/docs/docs_ml/Boosting/GB-implementations"},next:{title:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439",permalink:"/docs/category/\u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f-\u043f\u0440\u043e\u0441\u0442\u044b\u0445-\u043c\u043e\u0434\u0435\u043b\u0435\u0439"}},l={},d=[];function a(n){const e={admonition:"admonition",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c-\u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e-\u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430",children:"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u043e\u0433\u043e \u0431\u0443\u0441\u0442\u0438\u043d\u0433\u0430"}),"\n",(0,o.jsx)(e.p,{children:"\u0413\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u0431\u0443\u0441\u0442\u0438\u043d\u0433 \u043d\u0430\u0434 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u043c\u0438 \u0434\u0435\u0440\u0435\u0432\u044c\u044f\u043c\u0438 - \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0442\u043e\u0447\u043d\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0437\u0430\u0434\u0430\u0447, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u0440\u0430\u0442\u044c \u0432 \u0440\u0430\u0441\u0447\u0451\u0442 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b. \u041d\u043e \u0434\u0430\u0436\u0435 \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u043c\u0438 \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043c\u043e\u0435, \u0430 \u0447\u0430\u0441\u0442\u043e \u0434\u0430\u0436\u0435 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442.\u0435. \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0432\u0438\u0434\u0435 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u042d\u0442\u043e\u0442 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0438\u043c\u0435\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u0438\u043f\u044b - \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435, \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0435, \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0435, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439, \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u0440\u0430\u0437\u043d\u043e\u0440\u043e\u0434\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."}),"\n",(0,o.jsxs)(e.admonition,{title:"\u041d\u0435\u0442 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e \u0441\u0430\u043c\u043e\u0439 \u043b\u0443\u0447\u0448\u0435\u0439 \u043c\u043e\u0434\u0435\u043b\u0438",type:"note",children:[(0,o.jsx)(e.p,{children:"\u041e\u0442\u0434\u0430\u0432\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u043e\u0435 \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0447\u0430\u0441\u0442\u043e \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u0431\u0443\u0441\u0442\u0438\u043d\u0433 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u044b\u043c \u0442\u043e\u0447\u043d\u044b\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u043c (\u043f\u0440\u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435!), \u044d\u0442\u043e \u043d\u0435 \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432. \u041f\u043e\u0434 \u043a\u0430\u0436\u0434\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0442\u044c \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u043c\u0435\u043d\u043d\u043e \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0443\u0447\u0448\u0438\u043c \u0438\u0437 \u0432\u0441\u0435\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u043c\u0443 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0443. \u041d\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u0433\u043e\u0440\u0430\u0437\u0434\u043e \u0448\u0438\u0440\u0435:"}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043c\u043d\u043e\u0433\u043e, \u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u0439 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043c\u0430\u043b\u043e, \u0442\u043e \u043c\u0435\u0442\u043e\u0434 K \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0445 \u0441\u043e\u0441\u0435\u0434\u0435\u0439 \u0447\u0430\u0441\u0442\u043e \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043b\u0443\u0447\u0448\u0438\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0441 \u0432\u0441\u0435\u0433\u043e \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"\u041a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043c\u043d\u043e\u0433\u043e \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u0447\u0438\u0441\u043b\u043e\u043c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439, \u0442\u043e \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043a\u0430\u043a \u043c\u043e\u0434\u0435\u043b\u044c, \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0432\u0441\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0430\u043c\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 (\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439) \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0438, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0430\u0438\u043c\u0435\u043d\u0435\u0435 \u0441\u043a\u043b\u043e\u043d\u043d\u0430\u044f \u043a \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e."}),"\n"]}),"\n"]}),(0,o.jsx)(e.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u043c\u044b \u0438\u0437\u0443\u0447\u0438\u043b\u0438, \u0447\u0442\u043e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u043e\u0434\u043d\u0443, \u0430 \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0432 \u0430\u043d\u0441\u0430\u043c\u0431\u043b\u0435 (\u043e\u043f\u044f\u0442\u044c \u0436\u0435, \u043f\u0440\u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435), \u043a\u0443\u0434\u0430, \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u0430\u043a \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442\u043d\u044b\u0439 \u0431\u0443\u0441\u0442\u0438\u043d\u0433, \u0442\u0430\u043a \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."})]})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var o=t(6540);const s={},c=o.createContext(s);function i(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);