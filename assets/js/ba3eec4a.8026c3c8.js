"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[3091],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>g});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(o),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return o?n.createElement(g,i(i({ref:t},h),{},{components:o})):n.createElement(g,i({ref:t},h))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4946:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={title:"Stop reading technical books, read blogs",authors:["dodalovic"],tags:["technology"]},i=void 0,s={permalink:"/blog/stop-reading-technical-books-start-reading-blogs",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/stop-reading-technical-books-start-reading-blogs/index.mdx",source:"@site/blog/stop-reading-technical-books-start-reading-blogs/index.mdx",title:"Stop reading technical books, read blogs",description:"In this article my goal is to help you become a very pragmatic software developer.",date:"2023-03-26T11:58:45.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"}],readingTime:10.325,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Stop reading technical books, read blogs",authors:["dodalovic"],tags:["technology"]},prevItem:{title:"Zero boilerplate implementing state pattern in kotlin",permalink:"/blog/state-pattern-in-kotlin"},nextItem:{title:"Strategy pattern example using kotlin scripts",permalink:"/blog/strategy-pattern-example-using-kotlin-scripts"}},l={authorsImageUrls:[void 0]},p=[{value:"A bit of history",id:"a-bit-of-history",level:2},{value:"Microservices",id:"microservices",level:2},{value:"Blindly follow what others are doing",id:"blindly-follow-what-others-are-doing",level:2},{value:"Horizontal vs vertical knowledge scaling",id:"horizontal-vs-vertical-knowledge-scaling",level:2},{value:"Reading books vs blogs",id:"reading-books-vs-blogs",level:2},{value:"My learning algorithm",id:"my-learning-algorithm",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this article my goal is to help you become a very pragmatic software developer."),(0,a.kt)("p",null,"Someone may find this article way too opinionated. I'm fine with that, since it is."),(0,a.kt)("p",null,"Although this article is not strictly deeply technical, by reading it and sticking to the advices I'm giving you, you will benefit on your productivity side in the long run."),(0,a.kt)("h2",{id:"a-bit-of-history"},"A bit of history"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Monolith",src:o(3339).Z,width:"1920",height:"1472"})),(0,a.kt)("p",null,"Let's talk about a backend development."),(0,a.kt)("p",null,"In the last couple of years, we're witnessing a significant shift in our industry in terms of how we organize and write our software. Predominant software architecture model, mostly due to historical reasons are - ",(0,a.kt)("strong",{parentName:"p"},"software monoliths"),"."),(0,a.kt)("p",null,"In such a software architectures, we have a ",(0,a.kt)("strong",{parentName:"p"},"one codebase")," where we develop our entire product. One of the consequences of such an approach is that we will most likely use a ",(0,a.kt)("strong",{parentName:"p"},"single programming language")," for our software product.\nThis also implies a set of available frameworks particular to the chosen language."),(0,a.kt)("p",null,"We deploy such a deployable in ",(0,a.kt)("strong",{parentName:"p"},"one go"),", which is not a resource-wise lightweight process, and is not necessarily efficient in terms of ",(0,a.kt)("strong",{parentName:"p"},"time")," needed to deploy."),(0,a.kt)("p",null,"In such a code-bases, where (depending on complexity) we can have ",(0,a.kt)("strong",{parentName:"p"},"hundreds of use-cases")," implemented, we are forced to care about how we organize it in a maintainable way."),(0,a.kt)("p",null,"Even organizing simple files somewhat interconnected on your local file system is not a trivial task to do. Now, software modules are relatively complex entities, and organizing hundreds of relatively dependent software components can become quite a challenge."),(0,a.kt)("p",null,"Putting a business pressure on top of software development doesn\u2019t make this task any easier."),(0,a.kt)("p",null,"Given such constraints, we as engineers need to have quite some experience to maintain such a code-bases, in order to be able to run it on the long run.\nProper layering of the components, loose coupling between them, and setting proper module boundaries are some\nissues ",(0,a.kt)("strong",{parentName:"p"},"we need to take care of"),". This is definitely doable, but imposes significant constraints and makes adopting new technologies relatively hard."),(0,a.kt)("p",null,"Taking this into consideration, many businesses nowadays go a different path, so called ",(0,a.kt)("strong",{parentName:"p"},"micro-services")," architectures, in order\nto ",(0,a.kt)("strong",{parentName:"p"},"get more agile")," when delivering software to their clients."),(0,a.kt)("h2",{id:"microservices"},"Microservices"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microservices",src:o(9391).Z,width:"1920",height:"1320"})),(0,a.kt)("p",null,"How do these two approaches, ",(0,a.kt)("strong",{parentName:"p"},"monolithic")," and ",(0,a.kt)("strong",{parentName:"p"},"micro-services")," differ in their nature?"),(0,a.kt)("p",null,"If you decide to go for micro-services, you basically develop ",(0,a.kt)("strong",{parentName:"p"},"many smaller apps")," instead of one big software codebase."),(0,a.kt)("p",null,"One of the benefits is that you no longer need to choose ",(0,a.kt)("strong",{parentName:"p"},"one programming language")," to write the software. Also, by having many small applications, you can benefit more from the rich ecosystem of frameworks available (node, spring, .net etc)."),(0,a.kt)("p",null,"Very often, using ",(0,a.kt)("strong",{parentName:"p"},"micro-services"),", those little applications we write are so small in their scope and size, that, very often, we have just ",(0,a.kt)("strong",{parentName:"p"},"a small amount of real business logic")," in them."),(0,a.kt)("p",null,"Most of the time the most of magic comes from the frameworks we use, where they sort out persistence, web, security layers for us."),(0,a.kt)("p",null,"Given ",(0,a.kt)("strong",{parentName:"p"},"micro-services"),", we are also exposed to very opinionated ",(0,a.kt)("strong",{parentName:"p"},"framework authors"),", which have very opinionated way how should we design and deploy our software in the real world, without knowing all the specifics of our particular businesses. They often provide integrations with the cloud platforms, so that you can deploy it very easily to the cloud of your choice."),(0,a.kt)("p",null,"It\u2019s clear these framework vendors ",(0,a.kt)("strong",{parentName:"p"},"provide a significant amount of functionality")," out of the box. It\u2019s also clear the companies do not want to repeat that development, but rather use and combine these already provided goodies."),(0,a.kt)("p",null,"Let me outline some missing steps when adopting these frameworks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deeper analysis of frameworks and libraries on the market and ",(0,a.kt)("strong",{parentName:"li"},"how they fit and solve business needs")),(0,a.kt)("li",{parentName:"ul"},"Rough analysis of the actual ",(0,a.kt)("strong",{parentName:"li"},"operational costs")," if we decide to choose particular cloud and technology stack"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Education and training")," for the engineers, so that they have as much control and understanding as possible when using these libraries")),(0,a.kt)("p",null,"I believe no (average) company does this. When talking about understanding some technology, it\u2019s mostly left to the engineers to pick it up during working hours, and, more often, in own spare time. That\u2019s perfectly fine, the only downside is that you rely on the engineer\u2019s ",(0,a.kt)("strong",{parentName:"p"},"capability and motivation to do that"),"."),(0,a.kt)("p",null,"I can bet that ",(0,a.kt)("strong",{parentName:"p"},"two out of three engineers")," will not care too much to do that, mostly due to the fact that demand for developers is still high, and not only the good engineers are able to get the job today."),(0,a.kt)("h2",{id:"blindly-follow-what-others-are-doing"},"Blindly follow what others are doing"),(0,a.kt)("p",null,"Let me tell you about my experience lately, based on the last 4 or 5 years working in the industry."),(0,a.kt)("p",null,"Since I was mostly doing ",(0,a.kt)("strong",{parentName:"p"},"Java")," based programming, we were using nothing but the predominant ",(0,a.kt)("strong",{parentName:"p"},"Spring Boot")," framework."),(0,a.kt)("p",null,"Why was it chosen? Well, I'd say by just choosing something what others are using as well."),(0,a.kt)("p",null,"Currently, in the ",(0,a.kt)("strong",{parentName:"p"},"Java")," world, there is no serious competitor to the ",(0,a.kt)("strong",{parentName:"p"},"Spring Boot")," framework. There might be ",(0,a.kt)("strong",{parentName:"p"},"Vert.x")," framework, plus some others that are popping up, here and there, but no serious competition right now."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spring Boot")," is the framework with an enormous amount of goodies you get for free. Everything from a web layer, web security, persistence, caching, transactions, health-checks and so on."),(0,a.kt)("p",null,"One issue here is that the applications written in this framework can be ",(0,a.kt)("strong",{parentName:"p"},"very operationally expensive"),", since they require ",(0,a.kt)("strong",{parentName:"p"},"quite some memory")," to be able to provide us with all these little things we get."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Microservices",src:o(471).Z,width:"5184",height:"3456"})),(0,a.kt)("p",null,"This particularly becomes an issue in the ",(0,a.kt)("strong",{parentName:"p"},"micro-services")," design, where we need to ",(0,a.kt)("strong",{parentName:"p"},"replicate")," each of these small apps, to be able to have them ",(0,a.kt)("strong",{parentName:"p"},"highly available"),", so that our backends can run smoothly."),(0,a.kt)("p",null,"In case of just a few small apps this is not such a big deal. If you have a dozen of them, and you want at least 2 replicas of each, you can ",(0,a.kt)("strong",{parentName:"p"},"end up paying significant amount of money"),", especially in the cloud environments of your choice."),(0,a.kt)("p",null,"Another thing is that the startup time of such applications ",(0,a.kt)("strong",{parentName:"p"},"is not fast"),", usually due to some database schema operations that need to be asserted before the app actually starts, or quite some object instantiation\nneeds to happen for all the goodies to magically happen. All of that causes increased deployment time."),(0,a.kt)("p",null,"When we add startup time and memory required by the framework to provide all these facilities for us, things can easily get relatively expensive. In the ",(0,a.kt)("strong",{parentName:"p"},"Java")," world, on top, the ",(0,a.kt)("strong",{parentName:"p"},"Java runtime environment")," itself is not a lightweight component at all, and thus adds to the overall memory consumption."),(0,a.kt)("p",null,"In theory, ",(0,a.kt)("strong",{parentName:"p"},"micro-services")," should be lightweight components in terms of resources, and fast to start."),(0,a.kt)("p",null,"Personally, I feel what ",(0,a.kt)("strong",{parentName:"p"},"Spring Boot")," is providing doesn\u2019t address perfectly these micro-services guidelines."),(0,a.kt)("h2",{id:"horizontal-vs-vertical-knowledge-scaling"},"Horizontal vs vertical knowledge scaling"),(0,a.kt)("p",null,"So, assuming what I told you so far matches your experience, or you feel like it makes sense what I said, let\u2019s see ",(0,a.kt)("strong",{parentName:"p"},"what you can do")," from your side to best accommodate to the reality."),(0,a.kt)("p",null,"Let me define two terms, by borrowing terminology from the computer science, horizontal vs vertical scalability:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Horizontal knowledge scaling")," - learning new technologies with a goal to become a full-stack developer"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Vertical knowledge scaling")," - further enhancing your existing skill-set by digging deeper and becoming an expert in some particular area")),(0,a.kt)("p",null,"I've read many authors here giving advices that we should never just scratch the surface of some technology, but rather ",(0,a.kt)("strong",{parentName:"p"},"going into details")," and learning how the things actually work."),(0,a.kt)("p",null,"Speaking from own experience, also discussing with very experienced colleagues of mine about this topic, we came up with a conclusion that a vast majority of companies nowadays ",(0,a.kt)("strong",{parentName:"p"},"do not expect any kind of deep expertize from their engineers"),"."),(0,a.kt)("p",null,"What do I mean by that?"),(0,a.kt)("p",null,"Well, in simple terms, companies seem to favor the ",(0,a.kt)("strong",{parentName:"p"},"horizontal knowledge scaling")," from their engineers, which means that they prefer having ",(0,a.kt)("strong",{parentName:"p"},"fewer people with a broader, but more average, skill set"),"."),(0,a.kt)("p",null,"Most of the businesses produce a software that, sort of, just needs to work, and that's it. Most of the businesses today aren't high performance systems which will impress their customers. Errors here and there are also acceptable, nothing that will make their customers so unhappy. Also, not everything needs to run that fast, really."),(0,a.kt)("p",null,"From the economy standpoint, this strategy brings some ",(0,a.kt)("strong",{parentName:"p"},"significant savings")," to the company, while still delivering a value to their customers."),(0,a.kt)("p",null,"I have a feeling, especially due to the present ",(0,a.kt)("strong",{parentName:"p"},"Covid 19 virus")," affecting the entire globe, and the economy worldwide, companies may try to ",(0,a.kt)("strong",{parentName:"p"},"downsize their technical staff"),", and for the engineers that would mean being truly full-stack, rather than being specialized for either frontend or backend engineering."),(0,a.kt)("p",null,"Current state of the tools and frameworks supports this model, since no matter if we\u2019re talking about a frontend, backend, mobile or whatever programming area, there are tools that tend to simplify development, so that building these layers is very straightforward and agile (if you accept lack of control and understanding in that case)."),(0,a.kt)("h2",{id:"reading-books-vs-blogs"},"Reading books vs blogs"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reading",src:o(7390).Z,width:"1920",height:"1280"})),(0,a.kt)("p",null,"I've read a good deal of software development and design related books in my life. That kind of made sense, that was a habit carried over from the university. In order to understand something, you used to read a book about it."),(0,a.kt)("p",null,"The issue here is that number of concepts you deal with in your university ",(0,a.kt)("strong",{parentName:"p"},"is lower")," than the number in the real life software development, so you just can\u2019t read the whole book to grasp some technology."),(0,a.kt)("p",null,"Sometime it looks like that by the time you finish reading, the technology you\u2019re trying to grasp will be considered deprecated \ud83d\ude03."),(0,a.kt)("p",null,"Being more than a decade in the industry, I believe I was reading ",(0,a.kt)("strong",{parentName:"p"},"way too much"),". Especially since I've read quite some books getting deep into details of particular technologies."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"The more you read, the less you practice"))),(0,a.kt)("p",null,"Please, don\u2019t get me wrong here: ",(0,a.kt)("strong",{parentName:"p"},"there is nothing wrong with reading books"),". I just think that an average engineer working for an average company ",(0,a.kt)("strong",{parentName:"p"},"can\u2019t keep up")," with ever-changing world of technologies efficiently by reading them."),(0,a.kt)("p",null,"The books I consider worth reading right now are the ones explaining ",(0,a.kt)("strong",{parentName:"p"},"people, their behaviors and software development processes in companies"),". This knowledge seems to be more universal, stable and worth spending your time."),(0,a.kt)("p",null,"Let me state something I firmly believe in:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hands-on experience ",(0,a.kt)("strong",{parentName:"p"},"is the only")," way to learn technical things.")),(0,a.kt)("p",null,"Real hands-on, not doing some tutorials, which gives you an impression that you're dealing with the real world application development, which mostly is just a small subset of requirements you normally deal with."),(0,a.kt)("h2",{id:"my-learning-algorithm"},"My learning algorithm"),(0,a.kt)("p",null,"So, I\u2019m presenting you ",(0,a.kt)("strong",{parentName:"p"},"my way of learning technical things"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I go and find some blog post (I usually go to ",(0,a.kt)("a",{parentName:"li",href:"https://www.medium.com"},"medium.com"),") and find some hello world example demonstrating the tech I'd like to master"),(0,a.kt)("li",{parentName:"ul"},"I start a new, real project which I'll implement using the tech from the previous step"),(0,a.kt)("li",{parentName:"ul"},"I master given technology by getting into the real world trouble and finding the solution for it")),(0,a.kt)("p",null,"If you decide to adopt the same pattern, you might end up feeling upset with the fact that ",(0,a.kt)("strong",{parentName:"p"},"you're learning things in an unstructured way"),", compared to reading books, which\nusually have a well-defined structure."),(0,a.kt)("p",null,"Don\u2019t worry! You'll get the knowledge good enough to be employed by the most companies out there, majority of which, anyways, do not care about the structure of your knowledge. In simple terms, for the most companies out there you just need to - make it work!."),(0,a.kt)("p",null,"I\u2019ve also seen very pragmatic developers that go even one step ahead: they first checkout some project from ",(0,a.kt)("strong",{parentName:"p"},"Github")," and then try to figure out what\u2019s inside and have some assumptions how given technology works and how to tweak them."),(0,a.kt)("p",null,"This is, however, mostly the case with very experienced engineers, who, most likely, already saw something similar before."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congrats! Now you understand the value of being pragmatic in the software development nowadays, let\u2019s recap our learning algorithm:"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Read short blogs introducing the technology of interest"),(0,a.kt)("li",{parentName:"ul"},"Create sample projects based on given technology (ideally you\u2019d like to deploy the software and use it eventually)"),(0,a.kt)("li",{parentName:"ul"},"Google / StackOverflow are (as always) your best friends to deal with any obstacle along the way"),(0,a.kt)("li",{parentName:"ul"},"Repeat"))))}u.isMDXComponent=!0},7390:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/knowledge-growth-b23e25501d7467ba9b21a2238b7ae485.jpg"},9391:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/microservices-apps-0acc33586dafa29f0d0c0f34dcbb9d41.jpg"},3339:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/monolith-elephant-4be94ea80472042563b8e3a2597ef9f1.png"},471:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/spring-boot-fat-0a67bdf27fd2b83726999cb802f69120.jpg"}}]);