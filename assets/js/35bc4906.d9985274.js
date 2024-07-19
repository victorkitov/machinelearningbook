"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[8973],{9231:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>m,metadata:()=>i,toc:()=>t});var n=a(4848),l=a(8453);const m={description:"\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 (support vector machine, SVM) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0415\u0433\u043e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u044f\u0434\u0440\u0430 \u041c\u0435\u0440\u0441\u0435\u0440\u0430 (kernel trick)."},c="\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432",i={id:"docs_ml/Linear-classification/SVM",title:"\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432",description:"\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 (support vector machine, SVM) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0415\u0433\u043e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u044f\u0434\u0440\u0430 \u041c\u0435\u0440\u0441\u0435\u0440\u0430 (kernel trick).",source:"@site/docs/docs_ml/09-Linear-classification/02-SVM.md",sourceDirName:"docs_ml/09-Linear-classification",slug:"/docs_ml/Linear-classification/SVM",permalink:"/docs/docs_ml/Linear-classification/SVM",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 (support vector machine, SVM) \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438. \u0415\u0433\u043e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u044f\u0434\u0440\u0430 \u041c\u0435\u0440\u0441\u0435\u0440\u0430 (kernel trick)."},sidebar:"docs_ml",previous:{title:"\u041c\u0435\u0442\u043e\u0434\u044b \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438",permalink:"/docs/docs_ml/Linear-classification/Linear-classifier-methods"},next:{title:"\u0411\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f",permalink:"/docs/docs_ml/Linear-classification/Binary-logistic-regression"}},r={},t=[];function h(s){const e={admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434-\u043e\u043f\u043e\u0440\u043d\u044b\u0445-\u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432",children:"\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432"}),"\n",(0,n.jsxs)(e.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0442\u0435\u0440\u044c hinge \u0432 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0438 \u0441 L2-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443 ",(0,n.jsx)(e.strong,{children:"\u043c\u0435\u0442\u043e\u0434\u0443 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432"})," (support vector machine, SVM). \u042d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0438\u043c\u0435\u0435\u0442 \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043e\u043d \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u044e\u0449\u0443\u044e \u0433\u0438\u043f\u0435\u0440\u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u044c \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0440\u0430\u0437\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0448\u0438\u0440\u043e\u043a\u043e\u0439 \u043f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u043d\u043e\u0439 \u043f\u043e\u043b\u043e\u0441\u043e\u0439 (\u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u043c\u044b), \u0447\u0442\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u043e\u0431\u043e\u0431\u0449\u0430\u044e\u0449\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0430."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"SVM.png",src:a(9748).A+"",width:"759",height:"305"})}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 ",(0,n.jsx)(e.strong,{children:"\u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432"})," (support vectors), \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u043e\u0442\u0441\u0442\u0443\u043f ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2264"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M(x,y)\\le 1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0432\u0435\u0441\u0430\u0445. \u041e\u0442 ",(0,n.jsx)(e.strong,{children:"\u043d\u0435\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"})," (non-informative objects) \u0441 \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u043c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"M(x,y)>1"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442. \u0418\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u0437 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u0435. \u041e\u043f\u043e\u0440\u043d\u044b\u0435 \u0432\u0435\u043a\u0442\u043e\u0440\u0430 \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 \u0432\u044b\u0448\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u044b \u0431\u043e\u043b\u0435\u0435 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u044b\u043c \u0446\u0432\u0435\u0442\u043e\u043c."]}),"\n",(0,n.jsxs)(e.p,{children:["\u0414\u0440\u0443\u0433\u0438\u043c \u0434\u043e\u0441\u0442\u043e\u0438\u043d\u0441\u0442\u0432\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0430 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f ",(0,n.jsx)(e.strong,{children:"\u043e\u0431\u043e\u0431\u0449\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 \u044f\u0434\u0440\u0430"})," (kernel trick), \u0442\u043e \u0435\u0441\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0447\u0442\u043e \u043e\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 \u043f\u043e\u043f\u0430\u0440\u043d\u044b\u0445 \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438:"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"F"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mo,{stretchy:"false",children:"\u27e8"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"\u27e9"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{stretchy:"false",children:"\u27e8"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"\u27e9"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}(x)=F(\\lang x,x_1 \\rang, \\lang x,x_2 \\rang,...)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(e.span,{className:"mopen",children:"(\u27e8"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"\u27e9"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"\u27e8"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"\u27e9"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u043e\u0431\u0449\u0438\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u0437\u0430\u043c\u0435\u043d\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f ",(0,n.jsx)(e.strong,{children:"\u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u044f\u0434\u0440\u0430 \u041c\u0435\u0440\u0441\u0435\u0440\u0430"})," (Mercer kernel):"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"F"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"K"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{separator:"true",children:","})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}(x)=F(K(x,x_1), K(x,x_2),...),"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"\u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0432 \u043c\u0435\u0442\u043e\u0434 \u0438\u0437 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0433\u043e \u0432 \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0439."}),"\n",(0,n.jsxs)(e.p,{children:["\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0437\u0430\u0439\u043c\u0451\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043f\u0440\u043e\u0433\u043d\u043e\u0437 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043d\u0435 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"x"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \u043d\u0430 \u0432\u0435\u0441\u0430 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"w"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"w"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"})]})})]}),", \u0430 \u043f\u043e \u043c\u043d\u043e\u0433\u0438\u043c \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u044b\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u043c \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438. \u041d\u043e \u044d\u0442\u043e \u0431\u0443\u0434\u0443\u0442 \u043d\u0435 \u0432\u0441\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u043e\u0440\u043d\u044b\u0435."]}),"\n",(0,n.jsx)(e.admonition,{title:"\u041c\u043d\u043e\u0433\u043e\u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0439 \u0441\u043b\u0443\u0447\u0430\u0439",type:"tip",children:(0,n.jsxs)(e.p,{children:["\u041c\u0435\u0442\u043e\u0434 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438 \u0434\u0440\u0443\u0433\u0443\u044e \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u0434\u0430\u0447\u0438 ",(0,n.jsx)(e.em,{children:"\u043c\u043d\u043e\u0433\u043e\u043a\u043b\u0430\u0441\u0441\u043e\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"}),"."]})})]})}function x(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},9748:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/SVM-524ef76205d743cdd2a77c5fc5191080.png"},8453:(s,e,a)=>{a.d(e,{R:()=>c,x:()=>i});var n=a(6540);const l={},m=n.createContext(l);function c(s){const e=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),n.createElement(m.Provider,{value:e},s.children)}}}]);