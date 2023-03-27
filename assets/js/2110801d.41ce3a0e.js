"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[7366],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(o),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return o?n.createElement(m,s(s({ref:t},h),{},{components:o})):n.createElement(m,s({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1955:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={title:"Impact of decisions at software companies",authors:["dodalovic"],tags:["technology","business"]},s=void 0,r={permalink:"/blog/decisions-impact-at-software-companies",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/decisions-impact-at-software-companies/index.mdx",source:"@site/blog/decisions-impact-at-software-companies/index.mdx",title:"Impact of decisions at software companies",description:"The focus of this article is to cover some pros and cons of various decisions one software company can take. Software companies",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"business",permalink:"/blog/tags/business"}],readingTime:11.446153846153846,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Impact of decisions at software companies",authors:["dodalovic"],tags:["technology","business"]},prevItem:{title:"Constructors in Kotlin",permalink:"/blog/constructors-in-kotlin"},nextItem:{title:"Decorator pattern in kotlin",permalink:"/blog/decorator-pattern-in-kotlin"}},l={authorsImageUrls:[void 0]},c=[{value:"Unification of software artifacts",id:"unification-of-software-artifacts",level:2},{value:"Internal (shared) libraries",id:"internal-shared-libraries",level:2},{value:"The Architects",id:"the-architects",level:2},{value:"Promoting people",id:"promoting-people",level:2},{value:"Obligatory time tracking",id:"obligatory-time-tracking",level:2}],h={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The focus of this article is to cover some pros and cons of various decisions one software company can take. Software companies\nneed to make decisions to move forward, and as we are about to see - they rarely bring only benefits to the company."),(0,a.kt)("p",null,"Let's analyze the impact of various decisions software companies tend to make. Listed are some decisions, that never came with only\npositive effects, and, quite frequently, cons are outweighing all the pros."),(0,a.kt)("p",null,"Ready? Let's get started!"),(0,a.kt)("h2",{id:"unification-of-software-artifacts"},"Unification of software artifacts"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Waiter - same as before!",src:o(3147).Z,width:"1611",height:"790"})),(0,a.kt)("p",null,"Many companies nowadays, when designing the software, move towards so-called ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-services"),". For those that are not familiar with it -\n",(0,a.kt)("inlineCode",{parentName:"p"},"micro-services")," allow that software that the company produces is composed of many small software pieces that are wired up to work together."),(0,a.kt)("p",null,"There are known pros and cons of having entire company software developed as a single software artifact. If a decision is taken towards employing\n",(0,a.kt)("inlineCode",{parentName:"p"},"micro-services"),", the top technology executives in many companies try to optimize the structure of these small software components so that these\nlittle pieces need to be as similar as possible to each other."),(0,a.kt)("p",null,"What does that mean in practice? One of the advantages of going ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-services")," way is that these small applications can be developed independently\nin terms of the programming language being used."),(0,a.kt)("p",null,"Companies often try to enforce programming language being used, so that it allows for better developer utilization. In theory - if we have two\nteams, each developing own ",(0,a.kt)("inlineCode",{parentName:"p"},"micro-service"),', we can more easily "borrow" available developers from the other team, if he already knows the\nprogramming language our team uses.'),(0,a.kt)("h2",{id:"internal-shared-libraries"},"Internal (shared) libraries"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shared libs",src:o(9302).Z,width:"2169",height:"1362"})),(0,a.kt)("p",null,"It\u2019s not so uncommon that some companies, with the best intent, tend to produce some kind of ",(0,a.kt)("strong",{parentName:"p"},"company libraries"),", which should, in theory,\nhelp to eliminate redundant work that would need to be done by many teams otherwise."),(0,a.kt)("p",null,"So, we come across libraries that are wrapping interactions with external systems, such as databases, messaging systems, etc. They provide facilities that could be some of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Providing solutions for some legal requirements that need to be fulfilled when talking to third party systems. They often do some kind of encryption/decryption mechanisms, etc."),(0,a.kt)("li",{parentName:"ul"},"Sometimes business is unsure whether some technology should be used and wants to build an abstraction layer in front so that if there\u2019s a need to change to some other technology, the impact would be (in theory) smaller since abstraction in front is guarding against changes. The issue with this approach is that it is very hard to build abstractions and at the same time keep all the features that underlying technology provides."),(0,a.kt)("li",{parentName:"ul"},"Sometimes there are team members that are still juniors, and the business believes that underlying technology is out of their reach, so that\nproviding abstraction layer in front should simplify interactions with such a system.")),(0,a.kt)("p",null,"The issue with these, internal libraries, is that they fail to deliver what they claim to offer. Underlying technologies features leak out\nof these abstractions."),(0,a.kt)("p",null,"These libraries often reduce features of the things they abstract away. Most often, the things abstracted away offer specific features, which\nare very useful, but if they would be exposed - it would be hard to replace them later with the technology that doesn't offer that."),(0,a.kt)("p",null,"The developers that developed them move to new projects and can\u2019t even maintain them anymore."),(0,a.kt)("p",null,"As soon as they are started being used, maintainers of these abstractions are not comfortable making changes knowing that there are quite some\nclients using them."),(0,a.kt)("p",null,"Clients of such libraries come with requirements for particular features that are not supported, and these libraries are soon getting tons of\nconfiguration options to support some features."),(0,a.kt)("p",null,"Long story short here - there are numerous articles nowadays emphasizing issues with internally created libraries. Technologies are to be used\ndirectly. Shared libraries are considered an anti-pattern nowadays in the world of ",(0,a.kt)("inlineCode",{parentName:"p"},"microservices"),"."),(0,a.kt)("p",null,"The best strategy to mitigate such an invention is to form well-structured teams that understand well the constraints they need to respect\nbut are skilled to overcome them. Also, when having multiple teams that need to fulfill the same requirements may lead to sharing code\nsnippets that other teams can just use, without dealing with shared libraries, which release is the one they need, etc."),(0,a.kt)("p",null,"Long story short - internal inventions are rarely a good thing."),(0,a.kt)("h2",{id:"the-architects"},"The Architects"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Let&#39;s decide upfront!",src:o(7833).Z,width:"953",height:"549"})),(0,a.kt)("p",null,"Mid or big size companies some times have a special team, which is formed out of senior engineers (sometimes even ex engineers included, often\nwithout clear criteria who should be the member) who are there to regulate technology rules within the company. Decisions scope can vary\nsignificantly, but it\u2019s not uncommon that they provide the list of supported databases, programming languages to be used, frameworks to be\nchosen from, etc."),(0,a.kt)("p",null,"This, on the first go, sounds sane to let senior people regulate rules."),(0,a.kt)("p",null,"But, there are many issues with such an approach. Very often - such groups upfront makes decisions without enough context for making such a decision.\nDecisions such as which storages are supported can be brought even before the applications landscape has been designed which\nwould give way better context for making wise choices."),(0,a.kt)("p",null,"It is not uncommon that there are whitelisted technologies to be used, and for extending such lists special kinds of meetings are organized so\nthat when the particular team needs a new tool to use, discussions often take place around why such a tool needs to be used."),(0,a.kt)("p",null,"For larger companies, this is a significant impediment, since modern software developments require efficient decision making."),(0,a.kt)("p",null,"The key to overcoming such regulatory bodies is to form such a culture of independent and responsible teams, that are capable and mature enough to take decisions which are in the best interests of their company."),(0,a.kt)("p",null,"One important aspect of organizing the technology department would be a complete focus on equally distributing people that are the most experienced.\nFor such a role, there needs to be s compromise made, since often the best team leads are not the ones that are technically superior,\nrather ones that have a good balance of technology and social skills."),(0,a.kt)("p",null,"Such a person usually encourages others to take more and more responsibilities, which produces new team leads in the future. There\u2019s\na time needed for such a process, but this the only way to scale technology organizations to meet company demands."),(0,a.kt)("h2",{id:"promoting-people"},"Promoting people"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"And now - something completely different!",src:o(4880).Z,width:"1280",height:"1002"})),(0,a.kt)("p",null,"Inevitably, many companies that start growing, are faced with the fact that they need to position the right amount of people\non an optimal number of positions. So, now we have a situation that small teams of a couple of engineers start growing: new people\nare being hired to keep up with an aggressive amount of business features needed."),(0,a.kt)("p",null,"What happens often in such a case is that companies do not pay enough attention to the fact that ",(0,a.kt)("strong",{parentName:"p"},"people that are best skilled for the roles should be put in place"),"."),(0,a.kt)("p",null,"Such organizations tend to make mistake to promote excellent engineers to become no technical, like product owners, etc. The biggest\nissue they tend to make is that they do not feel the necessity to invest in transitioning these people into new roles."),(0,a.kt)("p",null,"These transitions are all but trivial: new roles require a lot more social skills, which can\u2019t be built overnight."),(0,a.kt)("p",null,"Often, equally problematic, these ex engineers do not ask for help. They believe they would just make it somehow and that soon they will\nfeel in the new role equally comfortable as they used to feel not so long time ago."),(0,a.kt)("p",null,"The point here would be: companies need to be prepared for the fact that scaling may happen and that as the business grows - internal organizational\nstructure needs to be planned. This is not a trivial task, but just promoting people without investing in their ability to deal with\nthe kinds of things they never dealt with before will have a high chance of having them fail eventually."),(0,a.kt)("h2",{id:"obligatory-time-tracking"},"Obligatory time tracking"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Time first - software last!",src:o(3039).Z,width:"1000",height:"698"})),(0,a.kt)("p",null,"To get an overview of their employee's activities, many companies make obligatory time tracking. Speaking from own experience, most productive\ncompanies I worked for didn't force us to fill in our timesheets."),(0,a.kt)("p",null,"My honest opinion is that the only way for a company to be successful is that each activity that an employee does is either ",(0,a.kt)("strong",{parentName:"p"},"employee-centric"),"\nor ",(0,a.kt)("strong",{parentName:"p"},"customer-centric")),(0,a.kt)("p",null,"I can't find any correlation between time tracking and either employee or customer satisfaction. Speaking from the perspective of an employee,\nI can see the following negative impact of time tracking:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It requires discipline, and discipline often fails."),(0,a.kt)("li",{parentName:"ul"},"The time spent on time tracking or even thinking about it (in the background) is the time that could have been used towards maximizing value for\nthe customer.")),(0,a.kt)("p",null,"That was all for today! Hope you liked it!"))}d.isMDXComponent=!0},3147:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/generate-project-80d76b4f1addda9c6a9ea5f33eddf5ed.png"},7833:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/meeting-a6d35919346286b6848b2f855e7da648.png"},4880:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/promotions-6c2e4626cc154a333bc16ab8a8316227.png"},9302:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shared-libs-01fe382348e20ce43e762ba300d3ea2a.png"},3039:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/time-tracking-5cdfe03da2e9a252d66394d1a3d3d90e.png"}}]);