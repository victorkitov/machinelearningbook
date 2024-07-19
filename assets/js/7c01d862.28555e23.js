"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[328],{7584:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>r});var n=a(4848),l=a(8453);const t={description:"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438."},i="\u041e\u0446\u0435\u043d\u043a\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435",c={id:"docs_ml/Regression-evaluation/regression-true-predicted-plot",title:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435",description:"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438.",source:"@site/docs/docs_ml/08-Regression-evaluation/03-regression-true-predicted-plot.md",sourceDirName:"docs_ml/08-Regression-evaluation",slug:"/docs_ml/Regression-evaluation/regression-true-predicted-plot",permalink:"/docs/docs_ml/Regression-evaluation/regression-true-predicted-plot",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0437\u0430\u0434\u0430\u0447\u0435 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438."},sidebar:"docs_ml",previous:{title:"\u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0440\u044b \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438",permalink:"/docs/docs_ml/Regression-evaluation/Real-vs-approximate-measures"},next:{title:"\u041b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",permalink:"/docs/category/\u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f-\u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"}},m={},r=[];function h(s){const e={admonition:"admonition",annotation:"annotation",h1:"h1",img:"img",math:"math",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",semantics:"semantics",span:"span",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043e\u0446\u0435\u043d\u043a\u0430-\u043d\u0430-\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c-\u0443\u0440\u043e\u0432\u043d\u0435",children:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435"}),"\n",(0,n.jsx)(e.p,{children:"\u0414\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432 \u043d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0447\u0430\u0441\u0442\u043e \u0441\u0442\u0440\u043e\u044f\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u043e\u0442\u043a\u043b\u0438\u043a\u043e\u0432 \u043e\u0442 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445, \u0442\u043e \u0435\u0441\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0447\u0435\u043a"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"}"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\{ y_n,\\hat{y}_n \\}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"{"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:"}"})]})})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043e\u0434\u043d\u043e\u043c\u0435\u0440\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u0430 \u043e\u0442 \u043e\u0442\u043a\u043b\u0438\u043a\u0430 \u0432 \u043e\u0441\u044f\u0445 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x,y"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]}),":"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"XY-dependency.png",src:a(8342).A+"",width:"602",height:"444"})}),"\n",(0,n.jsxs)(e.p,{children:["\u0422\u043e\u0433\u0434\u0430 \u0432 \u043e\u0441\u044f\u0445 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y,\\hat{y}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})})]})})]})," \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a:"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"YYhat-dependency.png",src:a(9594).A+"",width:"602",height:"444"})}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0442\u0435\u043c \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u043e\u043d\u0438 \u0431\u043b\u0438\u0436\u0435 \u043a \u0434\u0438\u0430\u0433\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u044f\u043c\u043e\u0439 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}=y"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u043e \u0433\u0440\u0430\u0444\u0438\u043a\u0443, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0438\u0434\u043d\u043e, \u0447\u0442\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u0437\u0430\u043d\u0438\u0436\u0430\u0435\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u044b \u0434\u043b\u044f \u043c\u0430\u043b\u044b\u0445 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"y"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})," \u0438 \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445, \u0430 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442 \u0437\u0430\u043d\u0438\u0436\u0430\u0435\u0442, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u043d\u043a\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438."]}),"\n",(0,n.jsx)(e.p,{children:"\u041f\u043e\u0434\u043e\u0431\u043d\u0430\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0443\u0434\u043e\u0431\u043d\u0430 \u0442\u0435\u043c, \u0447\u0442\u043e \u0435\u0451 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0432\u0438\u0434\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 (\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439, \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439) \u0438 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432."}),"\n",(0,n.jsx)(e.admonition,{title:"\u0412\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",type:"tip",children:(0,n.jsx)(e.p,{children:"\u0415\u0441\u043b\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e, \u0442\u043e \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0442\u043e\u0447\u0435\u0447\u043d\u043e\u0439 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u044d\u043c\u043f\u0438\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0442\u043e\u0447\u0435\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0432\u0438\u0434\u0435 \u0434\u0432\u0443\u043c\u0435\u0440\u043d\u043e\u0439 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b."})}),"\n",(0,n.jsxs)(e.p,{children:["\u041f\u043e\u0434\u043e\u0431\u043d\u043e \u0442\u043e\u043c\u0443, \u043a\u0430\u043a \u043c\u044b \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u043b\u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u0442\u044c \u0438 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e  \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u0432, \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u043a\u043b\u0438\u043a \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043e\u0434\u043d\u043e \u0438\u0437 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mtext,{children:"\u0421"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\u0421"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u0421"})]})})]})," \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"\u2208"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"{"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"}"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y\\in\\{1,2,...C\\}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7335em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2208"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"{"}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord",children:"..."}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"mclose",children:"}"})]})]})]}),'. \u042d\u0442\u043e\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0432\u044f\u0449\u0451\u043d \u0440\u0430\u0437\u0434\u0435\u043b "\u041e\u0446\u0435\u043d\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438".']})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},8342:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/XY-dependency-cbe75a018d1f3122bce27275fa347903.png"},9594:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/YYhat-dependency-a1da3344f9c8d43c79f00c724e5d4e92.png"},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>c});var n=a(6540);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);