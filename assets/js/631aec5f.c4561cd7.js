"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[2589],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?i.createElement(g,a(a({ref:t},p),{},{components:o})):i.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<r;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6369:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const r={title:"Microservices with Spring Boot, Netflix Zuul, Kotlin, Docker and MongoDB",authors:["dodalovic"],tags:["technology","spring-boot","kotlin","docker","mongodb","microservices"]},a=void 0,l={permalink:"/dodalovic.github.io/blog/microservices-with-spring-boot-netflix-zuul-kotlin-docker-and-mongodb",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/microservices-with-spring-boot-netflix-zuul-kotlin-docker-and-mongodb/index.mdx",source:"@site/blog/microservices-with-spring-boot-netflix-zuul-kotlin-docker-and-mongodb/index.mdx",title:"Microservices with Spring Boot, Netflix Zuul, Kotlin, Docker and MongoDB",description:"Recently I've started playing with Kotlin programming language, and wanted to give it a try. Kotlin gives us possibility to write quite concise code.",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"},{label:"spring-boot",permalink:"/dodalovic.github.io/blog/tags/spring-boot"},{label:"kotlin",permalink:"/dodalovic.github.io/blog/tags/kotlin"},{label:"docker",permalink:"/dodalovic.github.io/blog/tags/docker"},{label:"mongodb",permalink:"/dodalovic.github.io/blog/tags/mongodb"},{label:"microservices",permalink:"/dodalovic.github.io/blog/tags/microservices"}],readingTime:.935,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Microservices with Spring Boot, Netflix Zuul, Kotlin, Docker and MongoDB",authors:["dodalovic"],tags:["technology","spring-boot","kotlin","docker","mongodb","microservices"]},prevItem:{title:"Make your first days as developer easier",permalink:"/dodalovic.github.io/blog/make-your-first-days-as-developer-easier"},nextItem:{title:"Mocking same method multiple times using Mockito? Can't be easier than that!",permalink:"/dodalovic.github.io/blog/mocking-same-method-multiple-times-using-mockito"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Recently I've started playing with Kotlin programming language, and wanted to give it a try. Kotlin gives us possibility to write quite concise code."),(0,n.kt)("p",null,"I've built sample, small micro-service, composed of some kind of simple ",(0,n.kt)("inlineCode",{parentName:"p"},"api-gateway")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"proxy")," server, implemented using ",(0,n.kt)("inlineCode",{parentName:"p"},"Spring Boot")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Netflix/zuul"},"Netflix Zuul"),"\nlibrary for proxying requests to downstream servers."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"api-gateway")," which is public facing proxy server doesn't do more than just forwarding request to downstream ",(0,n.kt)("inlineCode",{parentName:"p"},"user-service micro-service"),"."),(0,n.kt)("p",null,"User service is implemented in ",(0,n.kt)("inlineCode",{parentName:"p"},"Spring Boot"),", using ",(0,n.kt)("inlineCode",{parentName:"p"},"Kotlin")," as a language of choice, having ",(0,n.kt)("inlineCode",{parentName:"p"},"MongoDB")," as persistent storage. It has only two ",(0,n.kt)("inlineCode",{parentName:"p"},"APIs")," - ",(0,n.kt)("strong",{parentName:"p"},"create user")," and ",(0,n.kt)("strong",{parentName:"p"},"retrieve user"),".\nI'm using command line to test these ",(0,n.kt)("inlineCode",{parentName:"p"},"APIs"),". Idea is to call ",(0,n.kt)("inlineCode",{parentName:"p"},"api-gateway")," that just downstream request to ",(0,n.kt)("inlineCode",{parentName:"p"},"user-service"),". This kind\nof simulates some real-life scenarios of how you might organize your service oriented architectures."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose")," comes quite handy to start / shutdown all the services with simple commands and orchestrate them via ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," configuration file."),(0,n.kt)("p",null,"You can find and download source code from ",(0,n.kt)("u",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/kotlin-microservices"},"GitHub")),". Readme file there explains how to start & use services."),(0,n.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);