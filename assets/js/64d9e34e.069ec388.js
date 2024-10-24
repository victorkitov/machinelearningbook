"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[2557],{46212:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(74848),t=n(28453);const i={description:""},r="\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",c={id:"Neural-networks/Semantic-segmentation/Semantic-segmentation-task",title:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",description:"",source:"@site/docs/Neural-networks/12-Semantic-segmentation/01-Semantic-segmentation-task.md",sourceDirName:"Neural-networks/12-Semantic-segmentation",slug:"/Neural-networks/Semantic-segmentation/Semantic-segmentation-task",permalink:"/docs/Neural-networks/Semantic-segmentation/Semantic-segmentation-task",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:""},sidebar:"Neural-networks",previous:{title:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",permalink:"/docs/category/\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f-\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"},next:{title:"\u041f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0440\u0435\u0448\u0435\u043d\u0438\u044e",permalink:"/docs/Neural-networks/Semantic-segmentation/Semantic-segmentation-approaches"}},m={},l=[];function h(s){const e={a:"a",annotation:"annotation",h1:"h1",img:"img",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"\u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f-\u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f",children:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"}),"\n",(0,a.jsxs)(e.p,{children:["\u0417\u0430\u0434\u0430\u0447\u0430 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u044f 3-\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432: \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434, \u0444\u043e\u043d (",(0,a.jsx)(e.a,{href:"https://www.jeremyjordan.me/semantic-segmentation/",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(41737).A+"",width:"734",height:"392"})}),"\n",(0,a.jsx)(e.p,{children:"\u041e\u0431\u0440\u0430\u0442\u0438\u043c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 \u043d\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u044e\u0442\u0441\u044f. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0448\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u043b\u044e\u0434\u0438 \u0438 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u044b \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u044b \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0430\u0441\u0441\u043e\u043c. \u042d\u0442\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u043e\u0442 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 (instance segmentation) \u0438 \u043f\u0430\u043d\u043e\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 (panoptic segmentation)."}),"\n",(0,a.jsx)(e.p,{children:"\u0421\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438\u043c\u0435\u0435\u0442 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445."}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445 \u0441\u043e \u0441\u043d\u0438\u043c\u043a\u0430 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u0437\u0430\u0441\u0442\u0440\u043e\u0439\u0435\u043a, \u0441\u0435\u043b\u044c\u0441\u043a\u043e\u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u043b\u043e\u0449\u0430\u0434\u0435\u0439 \u0438 \u0442\u0438\u043f\u043e\u0432 \u043f\u043e\u0441\u0435\u0432\u043e\u0432 \u043d\u0430 \u043d\u0438\u0445."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f\u0445 \u0438 \u0440\u0435\u043d\u0442\u0433\u0435\u043d\u043e\u0432\u0441\u043a\u0438\u0445 \u0441\u043d\u0438\u043c\u043a\u0430\u0445 \u0432 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0435."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u0412 \u0432\u0438\u0434\u0435\u043e\u043f\u043e\u0442\u043e\u043a\u0435, \u0441\u043d\u0438\u043c\u0430\u0435\u043c\u043e\u043c \u0430\u0432\u0442\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043c\u0430\u0448\u0438\u043d (self-driving cars) \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0434\u0435\u0439, \u043c\u0430\u0448\u0438\u043d\u044b, \u0437\u043d\u0430\u043a\u0438, \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0438\u044f."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u0421\u0435\u0433\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u043e\u0434\u0435\u0436\u0434\u044b \u0434\u043b\u044f \u0438\u0445 \u0437\u0430\u043c\u0435\u043d\u044b \u0432 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0447\u043d\u044b\u0445 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.jsx)(e.a,{href:"https://www.geekwire.com/2018/amazon-patents-blended-reality-mirror-shows-wearing-virtual-clothes-virtual-locales/",children:"Amazon\u2019s Virtual Mirror"}),")"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["\u0412\u044b\u0445\u043e\u0434\u043e\u043c \u043c\u043e\u0434\u0435\u043b\u0438, \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u044e\u0449\u0435\u0439 \u0441\u0435\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0442\u0440\u0438\u0446\u0430 \u0442\u043e\u0433\u043e \u0436\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u0447\u0442\u043e \u0438 \u0432\u0445\u043e\u0434\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0435 \u043c\u0435\u0442\u043a\u0438 \u043a\u043b\u0430\u0441\u0441\u0430 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0438\u043a\u0441\u0435\u043b\u044f (",(0,a.jsx)(e.a,{href:"https://www.jeremyjordan.me/semantic-segmentation/",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(59488).A+"",width:"1015",height:"671"})}),"\n",(0,a.jsxs)(e.p,{children:["\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u044d\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u043c, \u0447\u0442\u043e \u043c\u043e\u0434\u0435\u043b\u044c \u0432\u044b\u0434\u0430\u0451\u0442 \u0442\u0435\u043d\u0437\u043e\u0440 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"C"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"H"}),(0,a.jsx)(e.mo,{children:"\xd7"}),(0,a.jsx)(e.mi,{children:"W"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"C\\times H\\times W"})]})})}),(0,a.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,a.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})]})]}),", \u0433\u0434\u0435 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"C"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"C"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"})]})})]})," - \u0447\u0438\u0441\u043b\u043e \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u0430 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"H"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"H"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"})]})})]})," \u0438 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{children:"W"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"W"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"})]})})]})," - \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f (",(0,a.jsx)(e.a,{href:"https://www.jeremyjordan.me/semantic-segmentation/",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a"}),"):"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:n(34650).A+"",width:"929",height:"591"})}),"\n",(0,a.jsx)(e.p,{children:"\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u044d\u0442\u043e\u0442 \u0442\u0435\u043d\u0437\u043e\u0440 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0443\u043b\u044f\u043c\u0438 \u0438 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u043c\u0438, \u043d\u043e \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0442\u0430\u043c \u0431\u0443\u0434\u0443\u0442 \u0441\u0442\u043e\u044f\u0442 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u041a \u044d\u0442\u0438\u043c \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430\u043c \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f SoftMax, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u0432 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438."})]})}function o(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},41737:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/semantic-segmentation-example-be0af06bbfabc0708c3c7039bd360453.jpg"},59488:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/semantic-segmentation-output-d8d635ade2f3ea5937cf1825a60c1e9a.jpg"},34650:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/semantic-segmentation-probabilities-ce146d6f0a1ca5e348f29bcf0b920fa5.jpg"},28453:(s,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var a=n(96540);const t={},i=a.createContext(t);function r(s){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),a.createElement(i.Provider,{value:e},s.children)}}}]);