"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[8215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Strategy pattern example using kotlin scripts",authors:["dodalovic"],tags:["technology","kotlin","design-patterns"],enableComments:!0},o=void 0,l={permalink:"/blog/strategy-pattern-example-using-kotlin-scripts",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/strategy-pattern-example-using-kotlin-scripts/index.mdx",source:"@site/blog/strategy-pattern-example-using-kotlin-scripts/index.mdx",title:"Strategy pattern example using kotlin scripts",description:"I thought it would be nice to use advantages of Kotlin language to showcase strategy pattern implementation. In order to get the example",date:"2023-03-27T08:53:53.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"design-patterns",permalink:"/blog/tags/design-patterns"}],readingTime:3.3384615384615386,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Strategy pattern example using kotlin scripts",authors:["dodalovic"],tags:["technology","kotlin","design-patterns"],enableComments:!0},prevItem:{title:"Stop reading technical books, read blogs",permalink:"/blog/stop-reading-technical-books-start-reading-blogs"},nextItem:{title:"Using regular expressions for querying Mongodb documents",permalink:"/blog/using-regular-expressions-for-querying-mongodb-documents"}},s={authorsImageUrls:[void 0]},p=[{value:"Strategy pattern example",id:"strategy-pattern-example",level:2},{value:"Running the app",id:"running-the-app",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I thought it would be nice to use advantages of ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotlin")," language to showcase strategy pattern implementation. In order to get the example\nrunning \u2013 we need to install kotlin binaries (installation). I\u2019m running simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotlin")," ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/dodalovic/4ee9939ab645b9d9933da1b4f14edf7d"},"script")," in this example."),(0,i.kt)("p",null,"Having scripting support it makes it very easy to fire up some process with full ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotlin")," language capabilities. You could use it to do some\nkind of administrative tasks in your business environment."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"Kotlin")," scripts there's no need for ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," method, you just write code to execute directly (there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," variable available so that one can access command line arguments passed)")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"make sure to have ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlinc")," on your \\$PATH")),(0,i.kt)("h2",{id:"strategy-pattern-example"},"Strategy pattern example"),(0,i.kt)("p",null,"As stated on the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Strategy_pattern"},"Wikipedia"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting\nan algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of\nalgorithms to use")),(0,i.kt)("p",null,"Our example will demonstrate just that - we'll call our application providing some command line argument. Based on passed argument value, we'll pick on\nof available application strategies to build the town: ",(0,i.kt)("inlineCode",{parentName:"p"},"slow"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"medium")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"fast")," - different ways to build one town."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TownBuilder {\n        private val slow = { -> 3000L }\n        private val medium = { -> 1500L }\n        private val fast = { -> 50L }\n        val buildingStrategy: () -> Long\n\n        init {\n            buildingStrategy = when (args[0]) {\n                "slow" -> slow\n                "medium" -> medium\n                "fast" -> fast\n                else -> throw IllegalArgumentException("Invalid speed")\n            }\n        }\n\n        fun build() {\n            val pace = buildingStrategy.invoke()\n            Thread.sleep(pace)\n            println("Town built in $pace milliseconds!")\n        }\n    }\n    TownBuilder().build()\n')),(0,i.kt)("p",null,"As we can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"TownBuilder")," decides which town building strategy to use based in input command line argument. The strategy is, basically,\njust a function that returns how much the thread should sleep (emulating long process of building one town)."),(0,i.kt)("h2",{id:"running-the-app"},"Running the app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Without unsupported command line arguments")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kotlinc -script strategy.kts 200\njava.lang.IllegalArgumentException: Invalid speed\n        at Strategy.<init>(strategy.kts:9)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slow pace town building")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kotlinc -script strategy.kts slow\n\nBuilding at slow pace...\n\nTown built in 3000 milliseconds!\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Medium pace town building")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kotlinc -script strategy.kts medium\n\nBuilding at medium pace...\n\nTown built in 1500 milliseconds!\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fast pace town building")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kotlinc -script strategy.kts fast\n\nBuilding at fast pace...\n\nTown built in 50 milliseconds!\n")),(0,i.kt)("p",null,"Original Source Code can be found on GitHub as a ",(0,i.kt)("u",null,(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/dodalovic/4ee9939ab645b9d9933da1b4f14edf7d"},"Gist")),"."),(0,i.kt)("p",null,"That was all for today! Hope you liked it!"))}d.isMDXComponent=!0}}]);