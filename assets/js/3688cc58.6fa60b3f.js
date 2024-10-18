"use strict";(self.webpackChunksite_new=self.webpackChunksite_new||[]).push([[3437],{96217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(74848),r=t(28453);const s={description:"",sidebar_label:"AlexNet \u0438 ZFNet"},l="\u041c\u043e\u0434\u0435\u043b\u0438 AlexNet \u0438 ZFNet",c={id:"Neural-networks/Conv-Architectures/AlexNet-ZFnet",title:"\u041c\u043e\u0434\u0435\u043b\u0438 AlexNet \u0438 ZFNet",description:"",source:"@site/docs/Neural-networks/11-Conv-Architectures/03-AlexNet-ZFnet.md",sourceDirName:"Neural-networks/11-Conv-Architectures",slug:"/Neural-networks/Conv-Architectures/AlexNet-ZFnet",permalink:"/docs/Neural-networks/Conv-Architectures/AlexNet-ZFnet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"",sidebar_label:"AlexNet \u0438 ZFNet"},sidebar:"Neural-networks",previous:{title:"LeNet",permalink:"/docs/Neural-networks/Conv-Architectures/LeNet"},next:{title:"VGG",permalink:"/docs/Neural-networks/Conv-Architectures/VGG"}},d={},o=[{value:"AlexNet",id:"alexnet",level:2},{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:3},{value:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f",id:"\u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0435-\u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f",level:3},{value:"\u041c\u043e\u0434\u0435\u043b\u044c ZFNet",id:"\u043c\u043e\u0434\u0435\u043b\u044c-zfnet",level:2},{value:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u043c\u043e\u0434\u0435\u043b\u0438-alexnet-\u0438-zfnet",children:"\u041c\u043e\u0434\u0435\u043b\u0438 AlexNet \u0438 ZFNet"}),"\n",(0,i.jsx)(n.h2,{id:"alexnet",children:"AlexNet"}),"\n",(0,i.jsxs)(n.p,{children:["\u0421\u0435\u0442\u044c AlexNet [",(0,i.jsx)(n.a,{href:"https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",children:"1"}),"] \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0433\u043b\u0443\u0431\u043e\u043a\u0443\u044e \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c, \u0438 \u043e\u043d\u0430 \u0441\u0442\u0430\u043b\u0430 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u0435\u043c \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0439 ILSVRC \u0432 2012 \u0433\u043e\u0434\u0443 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043e\u0442\u0440\u044b\u0432\u043e\u043c. \u042d\u0442\u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0435\u043c \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044d\u0442\u043e \u043f\u043e\u0431\u0435\u0434\u0430 AlexNet \u043f\u0440\u0438\u0432\u043b\u0435\u043a\u043b\u0430 \u043c\u0430\u0441\u0441\u043e\u0432\u043e\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043a \u0433\u043b\u0443\u0431\u043e\u043a\u0438\u043c \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u043c \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u043a\u0438\u0435 \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0438 \u0441\u0442\u0430\u043b\u0438 \u043f\u043e\u0431\u0435\u0436\u0434\u0430\u0442\u044c \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 ILSVRC \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f\u0445."]}),"\n",(0,i.jsx)(n.h3,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,i.jsxs)(n.p,{children:["\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u043e \u0441\u0435\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0443\u0441\u043b\u043e\u0436\u043d\u0451\u043d\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e LeNet [",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/AlexNet",children:"2"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(91262).A+"",width:"1280",height:"960"})}),"\n",(0,i.jsx)(n.p,{children:"\u0412 AlexNet \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u044b\u0445 \u0441\u043b\u043e\u0451\u0432, \u0441\u043b\u043e\u0451\u0432 \u043f\u0443\u043b\u0438\u043d\u0433\u0430, \u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u0441\u043b\u043e\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432."}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0442\u0430\u043a\u043e\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0435\u0442\u0438 \u0441\u0442\u0430\u043b\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c \u0437\u0430 \u0441\u0447\u0451\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442 (graphics processing unit,\xa0GPU), \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0432\u0448\u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0437\u0430 \u043e\u0434\u0438\u043d \u0442\u0430\u043a\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043c\u043d\u043e\u0433\u0438\u0445 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u044f\u0434\u0440\u0430\u0445. \u041f\u0430\u043c\u044f\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442 \u0442\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (GTX 580 \u0441 3 GB \u043f\u0430\u043c\u044f\xad\u0442\u0438) \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043b\u0430 \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0430\u0432\u0442\u043e\u0440\u0430\u043c \u043f\u0440\u0438\u0448\u043b\u043e\u0441\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u0441\u0432\u0435\u0440\u0442\u043a\u0438, \u0440\u0430\u0437\u0431\u0438\u0432 \u0447\u0438\u0441\u043b\u043e \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u043f\u043e\u043f\u043e\u043b\u0430\u043c \u0438 \u043a\u0430\u0436\u0434\u0443\u044e \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442\u0435, \u043a\u0430\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 [",(0,i.jsx)(n.a,{href:"https://libeldoc.bsuir.by/bitstream/123456789/39033/1/Prokopenya_Svertochnyye.pdf",children:"3"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(17093).A+"",width:"1022",height:"472"})}),"\n",(0,i.jsx)(n.h3,{id:"\u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0435-\u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f",children:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u044b\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(n.p,{children:"\u041f\u043e\u043c\u0438\u043c\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u043b\u0430 \u0441\u043b\u043e\u0451\u0432, \u0432 AlexNet (\u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 LeNet) \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u043d\u044b\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u0441\u0432\u0451\u0440\u0442\u043a\u0438 \u0438\u043c\u0435\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: 11x11, 5x5, 3x3;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0441\u0442\u0438 tangh (\u0432 LeNet) \u0431\u044b\u043b\u0438 \u0437\u0430\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0430 \u043d\u0435\u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0441\u0442\u0438 ReLU;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u0443\u0441\u0440\u0435\u0434\u043d\u044f\u044e\u0449\u0438\u0439 \u043f\u0443\u043b\u0438\u043d\u0433 \u0431\u044b\u043b \u0437\u0430\u043c\u0435\u043d\u0451\u043d \u043d\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0438\u0439;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u0441\u043b\u043e\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f DropOut \u0438 L2;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u0432 \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u0430\u0443\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445;"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u0432 \u043a\u043e\u043d\u0446\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 SoftMax \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f \u043d\u0430 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043c\u043e\u0434\u0435\u043b\u044c-zfnet",children:"\u041c\u043e\u0434\u0435\u043b\u044c ZFNet"}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 2013 \u0433\u043e\u0434\u0443 \u043d\u0430 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0438 ILSVRC \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0430 \u0441\u0435\u0442\u044c ZFNet [",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1311.2901v3",children:"4"}),"] \u043d\u0435 \u0441\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0442 AlexNet. \u0412 \u043d\u0435\u0439 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0431\u044b\u043b\u0438 7x7 (\u0441 \u0448\u0430\u0433\u043e\u043c 2), \u0430 \u043a\u0430\u043a \u0432 AlexNet 11x11 (\u0441 \u0448\u0430\u0433\u043e\u043c 4). \u041d\u0430 2\u043c \u0441\u0432\u0451\u0440\u0442\u043e\u0447\u043d\u043e\u043c \u0441\u043b\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b 5x5 \u0442\u0430\u043a\u0436\u0435 \u0441 \u0448\u0430\u0433\u043e\u043c 2. \u0412 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u043e\u0441\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0438 \u043d\u0435\u0439\u0440\u043e\u043d\u043e\u0432. \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0441\u0435\u0442\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043d\u0438\u0436\u0435 [",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1311.2901v3",children:"4"}),"]:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(76553).A+"",width:"1061",height:"255"})}),"\n",(0,i.jsx)(n.h2,{id:"\u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",children:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",children:"Krizhevsky A., Sutskever I., Hinton G. E. Imagenet classification with deep convolutional neural networks //Advances in neural information processing systems. \u2013 2012. \u2013 \u0422. 25."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/AlexNet",children:"https://en.wikipedia.org/wiki/AlexNet"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://libeldoc.bsuir.by/bitstream/123456789/39033/1/Prokopenya_Svertochnyye.pdf",children:"\u041f\u0440\u043e\u043a\u043e\u043f\u0435\u043d\u044f \u0410. \u0421., \u0410\u0437\u0430\u0440\u043e\u0432 \u0418. \u0421. \u0421\u0432\u0435\u0440\u0442\u043e\u0447\u043d\u044b\u0435 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438 \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439. \u2013 2020."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1311.2901v3",children:"Zeiler M. D., Fergus R. Visualizing and understanding convolutional networks //Computer Vision\u2013ECCV 2014: 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part I 13. \u2013 Springer International Publishing, 2014. \u2013 \u0421. 818-833."})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},17093:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/AlexNet-parallel-b7eac8052332045024d4d3703166e045.png"},91262:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/LeNet-vs-AlexNet-be38bc914ec78342e16b6f68790c90d0.png"},76553:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ZFnet-d4f148594fe7f04ce37790b949a45501.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);