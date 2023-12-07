"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[238],{6581:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var a=n(5893),i=n(1151);const t={description:""},c="\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",r={id:"Decision-trees/Prediction-specifics",title:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",description:"",source:"@site/docs/12-Decision-trees/02-Prediction-specifics.md",sourceDirName:"12-Decision-trees",slug:"/Decision-trees/Prediction-specifics",permalink:"/machinelearningbook/docs/Decision-trees/Prediction-specifics",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:""},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f",permalink:"/machinelearningbook/docs/Decision-trees/Decision-trees"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430",permalink:"/machinelearningbook/docs/Decision-trees/Tree-fitting"}},l={},h=[{value:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b-\u0434\u043b\u044f-\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b-\u0434\u043b\u044f-\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",level:2}];function d(s){const e={a:"a",admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",h2:"h2",img:"img",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,i.a)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432-\u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e-\u0434\u0435\u0440\u0435\u0432\u0430",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430"}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u0441\u0438\u043b\u0443 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430, \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u0435\u043b\u0438\u0442 \u0432\u0441\u0451 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043d\u0430 \u043d\u0435\u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438, \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0432\u043e\u0435\u043c\u0443 \u043b\u0438\u0441\u0442\u0443 \u0434\u0435\u0440\u0435\u0432\u0430. \u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0432\u044b\u0442\u044f\u043d\u0443\u0442\u044b\u0435 \u0441\u0442\u043e\u0440\u043e\u043d\u044b. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0435 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."}),"\n",(0,a.jsx)(e.h2,{id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b-\u0434\u043b\u044f-\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"}),"\n",(0,a.jsx)(e.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0437\u0430\u0434\u0430\u0447\u0443 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0430 \u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u0438 \u0441\u0438\u043d\u0438\u0439 \u043a\u043b\u0430\u0441\u0441 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0432\u0443\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432."}),"\n",(0,a.jsx)(e.p,{children:"\u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430 \u0433\u043b\u0443\u0431\u0438\u043d\u044b 1,2,3,10:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DT-forecast-depth-1.png",src:n(4674).Z+"",width:"525",height:"519"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DT-forecast-depth-2.png",src:n(9010).Z+"",width:"523",height:"520"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DT-forecast-depth-3.png",src:n(2649).Z+"",width:"522",height:"518"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DT-forecast-depth-10.png",src:n(8735).Z+"",width:"523",height:"522"})}),"\n",(0,a.jsx)(e.p,{children:"\u041a\u0430\u043a \u0432\u0438\u0434\u0438\u043c, \u0434\u0435\u0440\u0435\u0432\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u043f\u0440\u0438 \u0433\u043b\u0443\u0431\u0438\u043d\u0435 1,2, \u0430 \u043f\u0440\u0438 \u0433\u043b\u0443\u0431\u0438\u043d\u0435 10 \u0443\u0436\u0435 \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0430\u0435\u0442\u0441\u044f."}),"\n",(0,a.jsxs)(e.p,{children:["\u0421\u0442\u043e\u0440\u043e\u043d\u044b \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u043f\u0435\u0440\u043f\u0435\u043d\u0434\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u044b \u043e\u0441\u044f\u043c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0430\u043c\u0438 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u0438 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0443\u043f\u0435\u0440\u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439 (\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435\u043c) \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mo,{children:"\u2264"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\le"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"\u2264"})]})})]})," \u043f\u043e\u0440\u043e\u0433\u0430 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043a>\u043f\u043e\u0440\u043e\u0433\u0430. \u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u0438\u043c\u0435\u0435\u0442 \u0441\u0442\u0443\u043f\u0435\u043d\u0447\u0430\u0442\u044b\u0439 \u043a\u0443\u0441\u043e\u0447\u043d\u043e-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439 \u0432\u0438\u0434."]}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0438\u0440\u0443\u0435\u0442 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043c\u0435\u0436\u0434\u0443 \u043e\u0442\u043a\u043b\u0438\u043a\u0430\u043c\u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438) \u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 (\u0432 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438) \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435  \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0435\u0437\u043a\u043e \u0432\u0434\u043e\u043b\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u0415\u0441\u043b\u0438 \u0436\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e \u0438\u043b\u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (\u043a\u043e\u0433\u0434\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438 \u0438\u0434\u0451\u0442 \u043f\u043e\u0434 \u043d\u0430\u043a\u043b\u043e\u043d\u043e\u043c \u043a \u043e\u0441\u044f\u043c), \u0442\u043e \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u043c\u0443 \u0434\u0435\u0440\u0435\u0432\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u0435\u0433\u043e \u043f\u0440\u043e\u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0430 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438 \u0443 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0432\u0441\u0451 \u0440\u0430\u0432\u043d\u043e \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0432\u044b\u0441\u043e\u043a\u043e\u0439."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"DT-linear-dependency.png",src:n(3259).Z+"",width:"603",height:"428"})}),"\n",(0,a.jsx)(e.h2,{id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b-\u0434\u043b\u044f-\u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438"}),"\n",(0,a.jsx)(e.p,{children:"\u041f\u0443\u0441\u0442\u044c \u0446\u0435\u043b\u0435\u0432\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u0430\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u043c\u0435\u0435\u0442 \u0432\u0438\u0434"}),"\n",(0,a.jsx)(e.span,{className:"katex-display",children:(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"y"}),(0,a.jsx)(e.mo,{children:"="}),(0,a.jsx)(e.mi,{children:"sin"}),(0,a.jsx)(e.mo,{children:"\u2061"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mi,{children:"x"}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"}),(0,a.jsx)(e.mo,{children:"+"}),(0,a.jsx)(e.mi,{children:"\u03b5"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=\\sin(x)+\\varepsilon"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"="}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mop",children:"sin"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,a.jsx)(e.span,{className:"mclose",children:")"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"+"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})]})]})}),"\n",(0,a.jsxs)(e.p,{children:["\u0433\u0434\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"x"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," - \u043e\u0434\u043d\u043e\u043c\u0435\u0440\u043d\u044b\u0439 \u043f\u0440\u0438\u0437\u043d\u0430\u043a, \u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"\u03b5"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\varepsilon"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",children:"\u03b5"})]})})]})," - \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0413\u0430\u0443\u0441\u0441\u043e\u0432 \u0448\u0443\u043c. \u041f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u0440\u0435\u0448\u0430\u044e\u0449\u0435\u0435 \u0434\u0435\u0440\u0435\u0432\u043e \u0433\u043b\u0443\u0431\u0438\u043d\u044b 1,2,3,4,5,10. \u0426\u0435\u043b\u0435\u0432\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0438\u043c \u043f\u0443\u043d\u043a\u0442\u0438\u0440\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0435\u0439, \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b - \u0447\u0435\u0440\u043d\u044b\u043c\u0438 \u0442\u043e\u0447\u043a\u0430\u043c\u0438, \u0430 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0434\u0435\u0440\u0435\u0432\u0430 - \u0441\u0438\u043d\u0435\u0439 \u043a\u0440\u0438\u0432\u043e\u0439. \u0422\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u043c \u0434\u0435\u0440\u0435\u0432\u043e\u043c \u0440\u0430\u0437\u043d\u043e\u0439 \u0433\u043b\u0443\u0431\u0438\u043d\u044b:"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Regression-predictions.png",src:n(332).Z+"",width:"772",height:"562"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Regression-predictions2.png",src:n(3545).Z+"",width:"769",height:"562"})}),"\n",(0,a.jsx)(e.p,{children:"\u0412\u0438\u0434\u0438\u043c, \u0447\u0442\u043e \u043f\u0440\u0438 \u0433\u043b\u0443\u0431\u0438\u043d\u0435 1,2 \u0434\u0435\u0440\u0435\u0432\u043e \u043d\u0435\u0434\u043e\u043e\u0431\u0443\u0447\u0435\u043d\u043e, \u0430 \u043f\u0440\u0438 \u0433\u043b\u0443\u0431\u0438\u043d\u0435 10 \u0443\u0436\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u043e\u0431\u0443\u0447\u0435\u043d\u043e. \u041f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438\u043c\u0435\u0435\u0442 \u043a\u0443\u0441\u043e\u0447\u043d\u043e-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439 \u0432\u0438\u0434."}),"\n",(0,a.jsx)(e.p,{children:"\u0414\u043b\u044f \u043c\u043d\u043e\u0433\u0438\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u0440\u0435\u0434\u0438\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043a\u0443\u0441\u043e\u0447\u043d\u043e-\u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0441 \u0440\u0435\u0437\u043a\u0438\u043c\u0438 \u043f\u0435\u0440\u0435\u043f\u0430\u0434\u0430\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432\u0434\u043e\u043b\u044c \u043e\u0441\u0435\u0439. \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0434\u0435\u0440\u0435\u0432\u0443 \u0441\u043b\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u0430 \u043e\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 \u043e\u0431\u0449\u0435\u0433\u043e \u0432\u0438\u0434\u0430 - \u0434\u043b\u044f \u0438\u0445 \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0439."}),"\n",(0,a.jsx)(e.admonition,{title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432",type:"tip",children:(0,a.jsxs)(e.p,{children:["\u0420\u0435\u0448\u0430\u044e\u0449\u0435\u043c\u0443 \u0434\u0435\u0440\u0435\u0432\u0443 \u0441\u043b\u043e\u0436\u043d\u043e \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c\u0438 \u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u043c, \u043d\u043e \u044d\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u043c \u043c\u043e\u0434\u0435\u043b\u044f\u043c. \u0417\u0430\u0442\u043e \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f \u043b\u0435\u0433\u043a\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0438 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430 \u043e\u0442\u043a\u043b\u0438\u043a (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0443\u0447\u0430\u0439, \u043a\u043e\u0433\u0434\u0430 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043a \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0443>0 \u0438 \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mo,{children:"<"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"<"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,a.jsx)(e.span,{className:"mrel",children:"<"})]})})]})," 10.000). \u041b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0436\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442 \u0432\u043a\u043b\u0430\u0434 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432. \u0417\u0430 \u0441\u0447\u0451\u0442 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0435\u043b\u0438 \u0445\u043e\u0440\u043e\u0448\u043e \u043a\u043e\u043c\u043f\u0435\u043d\u0441\u0438\u0440\u0443\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u0435\u0441\u043b\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c. \u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u0443\u0447\u0435\u043d\u044b \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0433\u043b\u0430\u0432\u0435."]})}),"\n",(0,a.jsx)(e.admonition,{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432",type:"note",children:(0,a.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0438 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0445 \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c ",(0,a.jsx)(e.a,{href:"https://arxiv.org/abs/0811.1679",children:"RuleFit"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0448\u0430\u044e\u0449\u0438\u0435 \u0434\u0435\u0440\u0435\u0432\u044c\u044f, \u043f\u043e \u043d\u0438\u043c \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u043d\u0430\u0431\u043e\u0440 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432 (\u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0443\u0437\u043b\u043e\u0432 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0432\u0448\u0438\u0445\u0441\u044f \u0434\u0435\u0440\u0435\u0432\u044c\u0435\u0432), \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u0441\u0442\u0440\u043e\u0438\u0442 \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430\u043c ",(0,a.jsx)(e.em,{children:"\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u043c"}),"."]})})]})}function m(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(d,{...s})}):d(s)}},4674:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DT-forecast-depth-1-976604c72d46a0f9b8ba9fb7c080d2c1.png"},8735:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DT-forecast-depth-10-3b107b5c8d2994e16f1906ff93d843a6.png"},9010:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DT-forecast-depth-2-1cf17c946e6c3894751ba959115aeb85.png"},2649:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DT-forecast-depth-3-f0ffba4db44ad0e291edbb1054509f3e.png"},3259:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DT-linear-dependency-563782253bfb11858bd4d738cc7745de.png"},332:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Regression-predictions-5d8ad9e2b0e158f4df4604c0439f3b11.png"},3545:(s,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Regression-predictions2-d92665aea8db0f33cc213547547de92a.png"},1151:(s,e,n)=>{n.d(e,{Z:()=>r,a:()=>c});var a=n(7294);const i={},t=a.createContext(i);function c(s){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:c(s.components),a.createElement(t.Provider,{value:e},s.children)}}}]);