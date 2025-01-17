"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[9756],{85762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={description:"\u041c\u043e\u0434\u0435\u043b\u044c CenterNet \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445.",sidebar_label:"CenterNet",keywords:["CenterNet","CenterNet \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c","\u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection models","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},c="\u041c\u043e\u0434\u0435\u043b\u044c CenterNet",o={id:"Neural-networks/Object-detection/CenterNet",title:"\u041c\u043e\u0434\u0435\u043b\u044c CenterNet",description:"\u041c\u043e\u0434\u0435\u043b\u044c CenterNet \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445.",source:"@site/docs/Neural-networks/13-Object-detection/09-CenterNet.md",sourceDirName:"Neural-networks/13-Object-detection",slug:"/Neural-networks/Object-detection/CenterNet",permalink:"/docs/Neural-networks/Object-detection/CenterNet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"\u041c\u043e\u0434\u0435\u043b\u044c CenterNet \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445.",sidebar_label:"CenterNet",keywords:["CenterNet","CenterNet \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c","\u043c\u0435\u0442\u043e\u0434\u044b \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","object detection models","\u043d\u0435\u0439\u0440\u043e\u043d\u043d\u0430\u044f \u0441\u0435\u0442\u044c"]},sidebar:"Neural-networks",previous:{title:"CornerNet",permalink:"/docs/Neural-networks/Object-detection/CornerNet"},next:{title:"\u0414\u0432\u0443\u0445\u0441\u0442\u0430\u0434\u0438\u0439\u043d\u044b\u0435 \u0434\u0435\u0442\u0435\u043a\u0442\u043e\u0440\u044b",permalink:"/docs/Neural-networks/Object-detection/Two-stage-detectors"}},l={},d=[{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2},{value:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0443\u043b\u0438\u043d\u0433\u0430",id:"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435-\u0432\u0438\u0434\u044b-\u043f\u0443\u043b\u0438\u043d\u0433\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-centernet",children:"\u041c\u043e\u0434\u0435\u043b\u044c CenterNet"}),"\n",(0,r.jsx)(n.h2,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u041c\u043e\u0434\u0435\u043b\u044c ",(0,r.jsx)(n.strong,{children:"CenterNet"})," [",(0,r.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Duan_CenterNet_Keypoint_Triplets_for_Object_Detection_ICCV_2019_paper.html",children:"1"}),"] \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0430 \u0431\u0430\u0437\u0435 ",(0,r.jsx)(n.a,{href:"CornerNet",children:"CornerNet"}),", \u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0435\u0451 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0447\u0451\u0442 \u0440\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0445 \u0440\u0430\u043c\u043e\u043a \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0438\u0445 \u043b\u0435\u0432\u043e\u043c\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u0438 \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043d\u0438\u0436\u043d\u0435\u043c\u0443 \u0443\u0433\u043b\u0443, \u043d\u043e \u0438 \u043f\u043e ",(0,r.jsx)("u",{children:"\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u043c\u0443 \u0446\u0435\u043d\u0442\u0440\u0443 \u0440\u0430\u043c\u043a\u0438"}),", \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0435 [",(0,r.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Duan_CenterNet_Keypoint_Triplets_for_Object_Detection_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(43858).A+"",width:"1608",height:"400"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u0443\u0433\u043b\u043e\u0432 \u0445\u043e\u0440\u043e\u0448\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043e\u0434\u043d\u0430\u043a\u043e \u0434\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u0435\u043c\u0443 \u0432\u0441\u0451 \u0435\u0449\u0451 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0451\u0442 \u0437\u0430\u0433\u043b\u044f\u0434\u044b\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u043c\u043e\u0439 \u0440\u0430\u043c\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0446\u0435\u043b\u0435\u0432\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0442\u0430\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0412 CenterNet \u043f\u043e \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0435\u043f\u043b\u043e\u0432\u044b\u0435 \u043a\u0430\u0440\u0442\u044b (heatmaps) \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u043a\u0430\u043a \u043b\u0435\u0432\u043e\u0433\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0438 \u043f\u0440\u0430\u0432\u043e\u0433\u043e \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0443\u0433\u043b\u043e\u0432, \u0442\u0430\u043a \u0438 \u0446\u0435\u043d\u0442\u0440\u0430."}),"\n",(0,r.jsx)(n.p,{children:"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0440\u0442\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0439 (offsets) \u0434\u043b\u044f \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u0437\u0438\u0446\u0438\u0439 \u0443\u0433\u043b\u043e\u0432 \u0438 \u0446\u0435\u043d\u0442\u0440\u0430. \u0414\u0430\u043b\u0435\u0435 \u0443\u0433\u043b\u044b \u0438 \u0446\u0435\u043d\u0442\u0440\u044b \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0443\u0436\u0435 \u0441 \u0443\u0447\u0451\u0442\u043e\u043c \u044d\u0442\u0438\u0445 \u043f\u043e\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u044b\u0445 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0439."}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e \u0441 \u044d\u0442\u0438\u043c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u0440\u0442\u0430 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u043e\u0432 (\u0432\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430) \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438. \u041a\u0430\u043a \u0438 \u0432 CornerNet, \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u0443\u0433\u043b\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043e\u0434\u043d\u043e\u0439 \u0440\u0430\u043c\u043a\u0435, \u0435\u0441\u043b\u0438 \u0438\u0445 \u044d\u043c\u0431\u0435\u0434\u0434\u0438\u043d\u0433\u0438 \u0431\u043b\u0438\u0437\u043a\u0438. \u041d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u044d\u0442\u043e\u043c\u0443 \u0440\u0430\u043c\u043a\u0430 \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f, ",(0,r.jsx)("u",{children:"\u0435\u0441\u043b\u0438 \u0435\u0439 \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 \u0440\u0430\u043c\u043a\u0438"}),". \u042d\u0442\u043e \u0443\u0431\u0435\u0440\u0435\u0433\u0430\u0435\u0442 \u043c\u0435\u0442\u043e\u0434 \u043f\u043e\u0432\u044b\u0448\u0430\u0435\u0442 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u043e\u0442 \u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439 (",(0,r.jsx)(n.a,{href:"Quality-metrics",children:"false positives"}),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0442\u0441\u044f \u0432 CenterNet, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,r.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Duan_CenterNet_Keypoint_Triplets_for_Object_Detection_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(2991).A+"",width:"1254",height:"501"})}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u043f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u043e\u043d \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043a\u0443\u0434\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430,  \u0447\u0442\u043e\u0431\u044b \u0432 CenterNet \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430. \u0414\u043b\u044f 2-\u0445 \u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439 CornerNet \u0441\u043b\u0435\u0432\u0430 \u0446\u0435\u043d\u0442\u0440 \u0432 \u043d\u0435\u0433\u043e \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044d\u0442\u0438\u0445 \u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0439 \u0432 CenterNet \u043d\u0435 \u0431\u0443\u0434\u0435\u0442."}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435-\u0432\u0438\u0434\u044b-\u043f\u0443\u043b\u0438\u043d\u0433\u0430",children:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u043f\u0443\u043b\u0438\u043d\u0433\u0430"}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0446\u0435\u043d\u0442\u0440\u0430 \u0440\u0430\u043c\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434 \u043f\u0443\u043b\u0438\u043d\u0433\u0430 - ",(0,r.jsx)(n.strong,{children:"CenterPooling"}),". \u042d\u0442\u043e\u0442 \u043f\u0443\u043b\u0438\u043d\u0433 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0434\u043e\u043b\u044c \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0441\u0438;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0434\u043e\u043b\u044c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0441\u0438;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u0442 \u0434\u0432\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0443\u0433\u043b\u043e\u0432 \u0440\u0430\u043c\u043e\u043a \u0432\u043c\u0435\u0441\u0442\u043e ",(0,r.jsx)(n.a,{href:"CornerNet",children:"CornerPooling"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(n.strong,{children:"CascadeCornerPooling"}),". CornerPooling \u0445\u043e\u0440\u043e\u0448\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u0438 \u0433\u0440\u0430\u043d\u0438\u0446 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043d\u043e ",(0,r.jsx)("u",{children:"\u043d\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0437\u0430\u0433\u043b\u044f\u0434\u044b\u0432\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u044c \u043d\u0435\u0433\u043e"}),", \u0447\u0442\u043e \u043a\u0430\u043a \u0440\u0430\u0437 \u0438 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 CascadeCornerPooling, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0434\u043b\u044f \u043b\u0435\u0432\u043e\u0433\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0433\u043b\u0430 \u0440\u0430\u043c\u043a\u0438:"]}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043a\u0430\u0440\u0442\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0435\u0441\u043b\u0438 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432\u043f\u0440\u0430\u0432\u043e \u0434\u043e \u043a\u0440\u0430\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0435\u0441\u043b\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432\u043d\u0438\u0437;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u044b \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0448\u0430\u0433\u0430 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043a\u0430\u0440\u0442\u044b \u043f\u0440\u0438\u0437\u043d\u0430\u043a\u043e\u0432:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0435\u0441\u043b\u0438 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432\u043d\u0438\u0437 \u0434\u043e \u043a\u0440\u0430\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0438\u0449\u0435\u0442\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0435\u0441\u043b\u0438 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432\u043f\u0440\u0430\u0432\u043e;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u044b \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0438 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0448\u0430\u0433\u0430 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u043f\u0440\u0430\u0432\u043e\u0433\u043e \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0443\u0433\u043b\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0432 CascadeCornerPooling \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b, \u043d\u043e \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0441\u0434\u0432\u0438\u0433 \u0432\u043f\u0440\u0430\u0432\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0434\u0432\u0438\u0433 \u0432\u043b\u0435\u0432\u043e;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0441\u0434\u0432\u0438\u0433 \u0432\u043d\u0438\u0437 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0434\u0432\u0438\u0433 \u0432\u0432\u0435\u0440\u0445."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438 CenterPooling, CornerPooling \u0438 CascadeCornerPooling \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u043d\u0438\u0436\u0435 \u043d\u0430 \u0440\u0438\u0441\u0443\u043d\u043a\u0430\u0445 (a),(b),(c) [",(0,r.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Duan_CenterNet_Keypoint_Triplets_for_Object_Detection_ICCV_2019_paper.html",children:"1"}),"]:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(67524).A+"",width:"1532",height:"404"})}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 CenterNet \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u0441\u044f \u043a \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u0440\u0430\u0436\u0451\u043d\u043d\u043e\u043c\u0443, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u0440\u0430\u043b\u043e\u0441\u044c \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u0445. \u041a \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u043c \u0434\u0435\u0442\u0435\u043a\u0446\u0438\u044f\u043c \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u043b\u0441\u044f \u043c\u044f\u0433\u043a\u043e\u0435 \u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435-\u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u043e\u0432 (soft NMS)."}),"\n",(0,r.jsxs)(n.p,{children:["\u0412 \u0438\u0442\u043e\u0433\u0435 \u043d\u0430 \u0434\u0430\u0442\u0430\u0441\u0435\u0442\u0435 ",(0,r.jsx)(n.a,{href:"https://cocodataset.org/",children:"MS COCO"})," [",(0,r.jsx)(n.a,{href:"https://link.springer.com/chapter/10.1007/978-3-319-10602-1_48",children:"2"}),"] \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u043a\u0430\u0437\u0430\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 AP, \u0440\u0430\u0432\u043d\u043e\u0435 47%."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://openaccess.thecvf.com/content_ICCV_2019/html/Duan_CenterNet_Keypoint_Triplets_for_Object_Detection_ICCV_2019_paper.html",children:"Duan K. et al. Centernet: Keypoint triplets for object detection //Proceedings of the IEEE/CVF international conference on computer vision. \u2013 2019. \u2013 \u0421. 6569-6578."})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://link.springer.com/chapter/10.1007/978-3-319-10602-1_48",children:"Lin T. Y. et al. Microsoft coco: Common objects in context //Computer Vision\u2013ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part V 13. \u2013 Springer International Publishing, 2014. \u2013 \u0421. 740-755."})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},43858:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/CenterNet-40e03d4f492b0e8bdf6db2853cc27b22.jpg"},2991:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/CornerNet-vs-CenterNet-a92553ef98dc6f2f2a87f6a2441fed87.jpg"},67524:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/Pooling-types-9e711ea40f586d26f4b2c48cca3ee9cf.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);