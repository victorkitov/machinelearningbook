"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8521],{9198:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>t,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var n=a(5893),l=a(1151);const i={description:""},t="\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e",c={id:"Multiclass-with-binary-classifiers/One-vs-one",title:"\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e",description:"",source:"@site/docs/09-Multiclass-with-binary-classifiers/02-One-vs-one.md",sourceDirName:"09-Multiclass-with-binary-classifiers",slug:"/Multiclass-with-binary-classifiers/One-vs-one",permalink:"/machinelearningbook/docs/Multiclass-with-binary-classifiers/One-vs-one",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:""},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u0432\u0441\u0435\u0445",permalink:"/machinelearningbook/docs/Multiclass-with-binary-classifiers/One-vs-all"},next:{title:"\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043e\u0448\u0438\u0431\u043e\u043a",permalink:"/machinelearningbook/docs/Multiclass-with-binary-classifiers/Binary-embeddings"}},m={},r=[];function h(s){const e={admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",math:"math",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.a)(),...s.components},{Details:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u043c\u0435\u0442\u043e\u0434-\u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e",children:"\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e"})," (one-vs-one) \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u043c\u043d\u043e\u0433\u043e\u043a\u043b\u0430\u0441\u0441\u043e\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043d\u0430\u0431\u043e\u0440\u0430 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432."]}),"\n",(0,n.jsxs)(e.p,{children:["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u043e\u0445\u043e\u0436\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443, \u043a\u043e\u0433\u0434\u0430 \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"C"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434, \u0438 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0440\u0435\u0434\u0438 \u043d\u0438\u0445 \u0441\u0430\u043c\u0443\u044e \u0441\u0438\u043b\u044c\u043d\u0443\u044e. \u041c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0434\u0432\u0443\u0445 \u043a\u043e\u043c\u0430\u043d\u0434, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u043c \u043c\u0430\u0442\u0447\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434. \u0412\u0441\u0435\u0433\u043e \u0442\u0430\u043a\u0438\u0445 \u043f\u0430\u0440 \u0431\u0443\u0434\u0435\u0442 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"C(C-1)/2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"/2"})]})]})]}),". \u0421\u0430\u043c\u043e\u0439 \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u0442\u043e\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0430 \u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043c\u0430\u0442\u0447\u0435\u0439. \u0415\u0441\u043b\u0438 \u043b\u0443\u0447\u0448\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u043b\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437, \u0442\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u043c \u0441\u0430\u043c\u043e\u0439 \u043b\u0443\u0447\u0448\u0435\u0439 \u0441\u0440\u0435\u0434\u0438 \u043d\u0438\u0445 \u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0435\u0449\u0451 \u0437\u0430\u0431\u0438\u043b\u0430 \u0432\u043e \u0432\u0441\u0435\u0445 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f\u0445 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0433\u043e\u043b\u043e\u0432."]}),"\n",(0,n.jsxs)(e.p,{children:["\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0438 \u043c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e. \u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mtext,{children:"\u0421"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mtext,{children:"\u0421"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\u0421(\u0421-1)/2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u0421"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u0421"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"/2"})]})]})]})," \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445, \u043a\u0430\u043a\u043e\u0439 \u043a\u043b\u0430\u0441\u0441 \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u0443, ",(0,n.jsxs)(e.em,{children:["\u0435\u0441\u043b\u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u0435\u0436\u0434\u0443 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"-\u043c \u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"j"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"-\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u043c"]}),":"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"^"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"j"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\hat{y}=sign(g_{ij}(x))"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]}),(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1944em"},children:(0,n.jsx)(e.span,{className:"mord",children:"^"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1944em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"ij"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mclose",children:"))"})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0430\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u043f\u043e\u0434\u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u043b\u0438\u0431\u043e ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"i"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]}),"-\u043c\u0443, \u043b\u0438\u0431\u043e ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"j"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"j"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"})]})})]}),"-\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443."]}),"\n",(0,n.jsxs)(e.p,{children:["\u0414\u0430\u043b\u0435\u0435 \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0442 \u043a\u043b\u0430\u0441\u0441, ",(0,n.jsx)(e.em,{children:"\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0432 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043f\u043e\u043f\u0430\u0440\u043d\u044b\u0445 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0439 \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438"}),". \u0415\u0441\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u044e\u0442 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0440\u0430\u0437, \u0442\u043e \u0441\u0440\u0435\u0434\u0438 \u043d\u0438\u0445 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 ",(0,n.jsx)(e.em,{children:"\u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0443\u043c\u043c\u043e\u0439 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0438\u0441\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043d\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430."})]}),"\n",(0,n.jsxs)(e.admonition,{title:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u043d\u0438\u044f",type:"tip",children:[(0,n.jsxs)(e.p,{children:["\u041c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0446\u0435\u043d\u043a\u0438 ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mtext,{children:"\u0421"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mtext,{children:"\u0421"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\u0421(\u0421-1)/2"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u0421"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord cyrillic_fallback",children:"\u0421"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"/2"})]})]})]})," \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u043c\u0435\u0442\u043e\u0434 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u0432\u0441\u0435\u0445 - \u0442\u043e\u043b\u044c\u043a\u043e ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"C"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432. \u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435 \u043e\u0446\u0435\u043d\u043a\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u043e \u043f\u043e\u0434\u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0434\u0432\u0443\u0445 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0432 \u0442\u043e\u043c \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u0435 - \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043f\u043e \u0432\u0441\u0435\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),(0,n.jsx)(e.p,{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u043d\u0443\u0436\u043d\u043e \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435, \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0446\u0435\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043c\u0435\u043d\u044c\u0448\u0435, \u0435\u0441\u043b\u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u0435\u0442 \u0441 \u043e\u0431\u044a\u0435\u043c\u043e\u043c \u043e\u0431\u0443\u0447\u0430\u044e\u0449\u0435\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u043a\u0430\u043a \u0432 \u044f\u0434\u0435\u0440\u043d\u043e\u043c \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u043c\u0435\u0442\u043e\u0434\u0430 \u043e\u043f\u043e\u0440\u043d\u044b\u0445 \u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432."})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"\u041a\u0430\u043a\u0438\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c, \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043e\u0434\u043d\u0438\u043c-\u043f\u0440\u043e\u0442\u0438\u0432-\u0432\u0441\u0435\u0445, \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437? "}),(0,n.jsx)("p",{children:(0,n.jsx)(e.p,{children:"\u041c\u0435\u0442\u043e\u0434\u043e\u043c \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u043e\u0434\u043d\u043e\u0433\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0434\u043b\u044f \u043d\u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u0447\u0435\u0440\u0435\u0437 C(C-1)/2 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432. \u0412 \u043c\u0435\u0442\u043e\u0434\u0435 \u043e\u0434\u0438\u043d-\u043f\u0440\u043e\u0442\u0438\u0432-\u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 C \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432. \u041f\u0440\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0447\u0442\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u0430\u0436\u0434\u044b\u043c \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u043c \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u0430\u044f."})})]})]})}function x(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},1151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>t});var n=a(7294);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);