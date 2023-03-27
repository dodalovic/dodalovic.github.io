"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[7704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Football application using  Spring boot, Thymeleaf and Spring RestTemplate",authors:["dodalovic"],tags:["technology","spring-boot"]},r=void 0,l={permalink:"/blog/football-application-using-spring-boot-thymeleaf-and-spring-resttemplate",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/football-application-using-spring-boot-thymeleaf-and-spring-resttemplate/index.mdx",source:"@site/blog/football-application-using-spring-boot-thymeleaf-and-spring-resttemplate/index.mdx",title:"Football application using  Spring boot, Thymeleaf and Spring RestTemplate",description:"As part of my effort to adopt Spring Boot I noticed that I need to learn new view technology in Java ecosystem, since Spring Boot doesn't promote JSP, which I was",date:"2023-03-27T06:23:26.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"spring-boot",permalink:"/blog/tags/spring-boot"}],readingTime:2.4923076923076923,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Football application using  Spring boot, Thymeleaf and Spring RestTemplate",authors:["dodalovic"],tags:["technology","spring-boot"]},prevItem:{title:"Factory method pattern in Kotlin",permalink:"/blog/factory-method-pattern-in-kotlin"},nextItem:{title:"Inject language / reference feature of Intellij IDEA",permalink:"/blog/inject-language-reference-feature-of-intellij-idea"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As part of my effort to adopt ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," I noticed that I need to learn new view technology in ",(0,o.kt)("inlineCode",{parentName:"p"},"Java")," ecosystem, since ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," doesn't promote ",(0,o.kt)("inlineCode",{parentName:"p"},"JSP"),", which I was\nused to using. I've explored alternatives a bit, and decided to give a shot to ",(0,o.kt)("inlineCode",{parentName:"p"},"Thymeleaf")," as templating engine."),(0,o.kt)("p",null,"I was exploring a bit what it offers, and seems that I'll stick to it in the future - based on set of nice features it has. I am providing you a ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," application\nusing the ",(0,o.kt)("a",{parentName:"p",href:"https://www.thymeleaf.org"},"Thymeleaf")," as a view technology so that you can take a look at it and see it if it suits your needs."),(0,o.kt)("p",null,"Additionally, to make it non trivial application, I've decided to demonstrate usage of Thymeleaf by building football (soccer) application that integrates with ",(0,o.kt)("a",{parentName:"p",href:"http://api.football-data.org/index"},"free football api"),".\nJust go ahead and register quickly for free api token that your app can use to communicate to the external service. My application communicates with 3rd party using ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"RestTemplate")," ",(0,o.kt)("inlineCode",{parentName:"p"},"API"),"."),(0,o.kt)("p",null,"After registering with ",(0,o.kt)("inlineCode",{parentName:"p"},"API"),", you'll get ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," key, which you need to pass it as ",(0,o.kt)("inlineCode",{parentName:"p"},"JVM")," argument when starting application (see below)."),(0,o.kt)("p",null,"In the upcoming posts I will give my best to present most important aspects of Thymeleaf itself. In a meanwhile, feel free to download application sources and take a look at it."),(0,o.kt)("p",null,"In order to run the application, you need to go to app's root directory and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"Maven")," command (make sure to exchange ",(0,o.kt)("inlineCode",{parentName:"p"},"ABCDEF")," with your ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," key):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"spring-boot:run -Dsoccerapis_token=ABCDEF\n")),(0,o.kt)("p",null,"which will start embedded ",(0,o.kt)("inlineCode",{parentName:"p"},"Tomcat")," container running on ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")," port. After application is started, you can access it via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"http://localhost:8080/\n")),(0,o.kt)("p",null,"Application displays european soccer leagues. By choosing league, you can further drill down to teams in given league, and finally - by choosing particular league - you\ncan see the players squad with player details."),(0,o.kt)("p",null,"You can download application sources at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/boot-soccer"},"Github"),"."),(0,o.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);