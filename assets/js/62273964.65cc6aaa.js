"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[1280],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var o=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(i),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||n;return i?o.createElement(m,r(r({ref:t},p),{},{components:i})):o.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<n;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4473:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=i(7462),a=(i(7294),i(3905));const n={title:"Why Kotlin?",authors:["dodalovic"],tags:["technology","kotlin"],image:"why-kotlin.png"},r=void 0,l={permalink:"/dodalovic.github.io/blog/why-kotlin",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/why-kotlin/index.mdx",source:"@site/blog/why-kotlin/index.mdx",title:"Why Kotlin?",description:"Why Kotlin",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"},{label:"kotlin",permalink:"/dodalovic.github.io/blog/tags/kotlin"}],readingTime:5.925,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Why Kotlin?",authors:["dodalovic"],tags:["technology","kotlin"],image:"why-kotlin.png"},prevItem:{title:"What is unit testing?",permalink:"/dodalovic.github.io/blog/what-is-unit-testing"}},s={authorsImageUrls:[void 0]},c=[{value:"Positive sides",id:"positive-sides",level:2},{value:"Statically typed language",id:"statically-typed-language",level:3},{value:"Nullability in the type system",id:"nullability-in-the-type-system",level:3},{value:"Adoption in existing frameworks/tooling",id:"adoption-in-existing-frameworkstooling",level:3},{value:"IDE support",id:"ide-support",level:3},{value:"Kotlin coroutines",id:"kotlin-coroutines",level:3},{value:"Functions as a first-grade citizens",id:"functions-as-a-first-grade-citizens",level:3},{value:"The standard library replaces Apache, Guava, Lombok",id:"the-standard-library-replaces-apache-guava-lombok",level:3},{value:"Negative sides",id:"negative-sides",level:2},{value:"Slower compilation time compared to Java",id:"slower-compilation-time-compared-to-java",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Why Kotlin",src:i(8774).Z,width:"1910",height:"1261"})),(0,a.kt)("p",null,"In this, relatively short post, I\u2019ll try to cover some aspects of programming in ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/"},"Kotlin programming language")," that may give you a better context when deciding upon whether you may like to use it for your next project."),(0,a.kt)("p",null,"Let\u2019s get started."),(0,a.kt)("h2",{id:"positive-sides"},"Positive sides"),(0,a.kt)("p",null,"Kotlin, owing mostly to the Android community, has now gone a long way from its inception.\nThis language is not a new thing. Like many other languages - it\u2019s been used by\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@daveford/who-is-using-kotlin-84b11b4fb51a"},"many big companies")," nowadays. It is a very\nactive Open Source project, on top."),(0,a.kt)("p",null,"From my own experience, listed just below could be the most compelling reasons to go for Kotlin."),(0,a.kt)("h3",{id:"statically-typed-language"},"Statically typed language"),(0,a.kt)("p",null,"Kotlin is often compared to Java, and one commonality between the two is that they are both statically typed languages, where the type of each variable is known at the compile time.\nThe advantage of statically typed languages comes into the picture on medium to large size projects where having dynamic language instead would require great discipline and even greater - testing. People are not known for their discipline, so that\u2019s why I go for statically typed languages."),(0,a.kt)("h3",{id:"nullability-in-the-type-system"},"Nullability in the type system"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nullability in the type system",src:i(360).Z,width:"1878",height:"763"})),(0,a.kt)("p",null,"Kotlin, compared to Java, for instance, has nullability expressed in its ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/null-safety.html"},"type system"),". That means that, when using Kotlin, you constantly need to think about the nullability of your variables. This may be, in the beginning, a bit frustrating, coming from Java, which has no such a concept.\nWhen writing applications, completely written in Kotlin, you will eliminate runtime exceptions, which is great. Most of the time, however, you need to interact with Java libraries, which makes things a bit more complicated, since Kotlin compiler needs some help from your side, to decide on the nullability of some variables (see ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/java-interop.html"},"platform types"),"). The good thing about the Kotlin compiler is that it respects nullability annotations found in byte-code of the Java code we are using, so that helps it to decide on nullability of variables when interacting with Java."),(0,a.kt)("h3",{id:"adoption-in-existing-frameworkstooling"},"Adoption in existing frameworks/tooling"),(0,a.kt)("p",null,"By analyzing current frameworks in the JVM ecosystem, we can spot that Kotlin is an officially supported language in all the major players in this area: ",(0,a.kt)("strong",{parentName:"p"},"Spring"),", ",(0,a.kt)("strong",{parentName:"p"},"Vert.x"),", ",(0,a.kt)("strong",{parentName:"p"},"Micronaut"),", ",(0,a.kt)("strong",{parentName:"p"},"Quarkus")," (Considered technology preview), etc."),(0,a.kt)("p",null,"Gradle build tool has promoted Kotlin as a tool to describe build scripts, instead of Groovy. The community out there is, from my personal experience, quite big, so you won\u2019t be left alone in case you come across some difficulty when using Kotlin in your favorite framework."),(0,a.kt)("h3",{id:"ide-support"},"IDE support"),(0,a.kt)("p",null,"As expected, Intellij IDEA could be considered the right tool when developing applications using Kotlin. The good news is that Kotlin's support is shipped with the Community edition of Intellij, so purchasing a license is not required."),(0,a.kt)("p",null,"The developer experience using Kotlin in IDEA is quite impressive. From my own experience, IDEA gives you a lot of hints on how to improve your existing code, which helps you learn the most idiomatic way to write Kotlin code. If I may say - the way IDEA assists when coding Kotlin is even better than Java support if that is possible, at all \ud83d\ude0a !"),(0,a.kt)("p",null,"No need to panic - Kotlin support is provided for Eclipse as well."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There is no support for Visual Studio Code at the moment")),(0,a.kt)("h3",{id:"kotlin-coroutines"},"Kotlin coroutines"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotiln coroutines")," are the way to tackle concurrency from another perspective. Coroutines are not a part of the standard library, but rather an additional library you need to include in case you need it for your projects."),(0,a.kt)("p",null,"Coroutines are the concept that is not new at all and has been used by many other languages. In its shortest form, coroutines could be explained as a tool to write highly concurrent software, using a relatively small number of native threads, using a familiar programming model that resembles sequential processing."),(0,a.kt)("p",null,"Concurrent programming using APIs from the standard Java SDK is not something most engineers enjoy using. Another alternative would be to use ",(0,a.kt)("a",{parentName:"p",href:"http://reactivex.io/"},"reactive extensions")," which allow for a rich set of transformations on asynchronous data, combining multiple asynchronous executions, error handling, etc."),(0,a.kt)("p",null,"The issue with reactive extensions is that their APIs are not intuitive, they are far away from the most intuitive programming model of synchronous execution."),(0,a.kt)("p",null,"Having said all of this - Kotlin's coroutines are a very powerful tool to use, but they require time and practice to master them."),(0,a.kt)("h3",{id:"functions-as-a-first-grade-citizens"},"Functions as a first-grade citizens"),(0,a.kt)("p",null,"As opposed to Java - functions in Kotlin are first-class citizens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"variables can be of a function type"),(0,a.kt)("li",{parentName:"ul"},"functions can receive other functions as parameters"),(0,a.kt)("li",{parentName:"ul"},"classes can implement functions, etc.")),(0,a.kt)("p",null,"This feature provides us a really powerful tool to design complex systems with a minimum boilerplate.\nWe can implement software patterns with zero overhead."),(0,a.kt)("h3",{id:"the-standard-library-replaces-apache-guava-lombok"},"The standard library replaces Apache, Guava, Lombok"),(0,a.kt)("p",null,"Kotlin standard library is a feature-rich library that ships with the features which Java developers used to find by integrating various third-party libraries in their projects. So, in most Java projects one could find libraries such as various Apache libraries, Guava, Lombok, etc. Kotlin's standard library pretty much eliminates the need for such libraries. Standard library, with less than 1MB size additionally shrinks down the size of your deliverables, making it, even more, container friendly."),(0,a.kt)("h2",{id:"negative-sides"},"Negative sides"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cons of Kotlin",src:i(3060).Z,width:"640",height:"426"})),(0,a.kt)("p",null,"As with any other technology, Kotlin must also have some disadvantages.\nTalking from personal experience, I was able to come up with only one single drawback when using it."),(0,a.kt)("h3",{id:"slower-compilation-time-compared-to-java"},"Slower compilation time compared to Java"),(0,a.kt)("p",null,"One downside I experienced was the fact that compilation time was higher compared to pure Java-based projects. This was especially the case when I developed mixed Java and Kotlin codebase. This increased compilation time was something that the developer gets affected with, but that\u2019s something that is not so significant that it would be a deal-breaker.\nIn pure Kotlin projects, the compilation was decently faster but still slower than Java project compilation."),(0,a.kt)("p",null,"It is expected that Kotlin compiler needs to work hard to translate all the feature-rich code into Java bytecode, and Kotlin team is working hard on improving compile time."),(0,a.kt)("p",null,"Compile-time on the other side, is already dramatically improved when compared to previous Kotlin releases. Recently they published information that they are organizing hackatons where people will try to find creative ways to significantly improve current compile times."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Speaking from own experience - good developers build quality software, bad ones develop bad software. In no matter which language used."),(0,a.kt)("p",null,"But what is nice about Kotlin as such is that it had enough time to address some issues that the software development industry was facing so far and they decided to design the language around some best practices which emerged, like immutability, nullability in the type system, etc."),(0,a.kt)("p",null,"Due to seamless interoperability with the existing Java ecosystem and having an opportunity to use this enormous power it brings, Kotlin these days shows the potential to become a mainstream JVM programming language sometime in the future."),(0,a.kt)("p",null,"That was all for today! Hope you liked it!"))}h.isMDXComponent=!0},3060:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/negative-b0f19a1acd61bb5bc32f16eefefa0835.png"},360:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/nullability-ea07090fd90a9fde35c144dcd92bcba8.png"},8774:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/why-kotlin-9b5d556309186c134a70a105d8406c57.png"}}]);