"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[9392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={title:"Extension functions in kotlin",authors:["dodalovic"],tags:["technology","kotlin"]},i=void 0,l={permalink:"/blog/extension-functions-in-kotlin",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/extension-functions-in-kotlin/index.mdx",source:"@site/blog/extension-functions-in-kotlin/index.mdx",title:"Extension functions in kotlin",description:"Kotlin language recently gained some traction owing to Google promoting it as a primary language for",date:"2023-03-26T11:58:45.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"kotlin",permalink:"/blog/tags/kotlin"}],readingTime:1.865,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Extension functions in kotlin",authors:["dodalovic"],tags:["technology","kotlin"]},prevItem:{title:"Easy way to contribute to the Github open-source project",permalink:"/blog/easy-way-to-contribute-to-github-project"},nextItem:{title:"Factory method pattern in Kotlin",permalink:"/blog/factory-method-pattern-in-kotlin"}},s={authorsImageUrls:[void 0]},p=[{value:"About extension functions",id:"about-extension-functions",level:2},{value:"Running sample application",id:"running-sample-application",level:2},{value:"Calling extensions on null references",id:"calling-extensions-on-null-references",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Kotlin")," language recently gained some traction owing to ",(0,o.kt)("em",{parentName:"p"},"Google")," promoting it as a primary language for\nwriting android apps. ",(0,o.kt)("em",{parentName:"p"},"Kotlin")," has already been for a while in production owing to it\u2019s creator ",(0,o.kt)("em",{parentName:"p"},"JetBrains"),"\nincorporating it in own tools, such as ",(0,o.kt)("em",{parentName:"p"},"Intellij IDEA")," and so forth."),(0,o.kt)("p",null,"One, amongst many other neat features, is extension functions. In depth documentation can be found on official\nkotlin ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/extensions.html"},"website"),"."),(0,o.kt)("h2",{id:"about-extension-functions"},"About extension functions"),(0,o.kt)("p",null,"In short \u2013 extension functions provide us useful tool to extend any existing class, no matter if it\u2019s part of JDK,\nsome 3rd party library or even own, custom ones."),(0,o.kt)("p",null,"Example, taken from this project, is the following one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Random.betweenInclusive(lower: Int, upper: Int) = this.nextInt(upper - lower) + lower\n")),(0,o.kt)("p",null,"Here we extend ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.Random")," class from the ",(0,o.kt)("inlineCode",{parentName:"p"},"JDK"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"betweenInclusive(lower: Int, upper: Int)"),"\nextension function. This method helps us generate random integer between two numbers, lower and upper\nbounds, inclusive. Project contains couple of useful extension functions, implemented in\n",(0,o.kt)("inlineCode",{parentName:"p"},"rs/dodalovic/extension_functions/Students.kt")," kotlin file. Other examples are extending ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util.List")," with\nadditional capabilities, taking advantage of functional programming applied on collections."),(0,o.kt)("h2",{id:"running-sample-application"},"Running sample application"),(0,o.kt)("p",null,"Application has ",(0,o.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle")," build tool packaged inside application, so you\u2019re good to go:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"\n# execute from project root\n\n./gradlew -q -PmainClass=rs.dodalovic.extension_functions.StudentsKt execute\n")),(0,o.kt)("p",null,"Output would be similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"\n\\***\\* Students average: 3.22 \\*\\***\n\nAbove average:\n[\n{'name':'name_4','lastname':'lastname_4','average':'4.0','marks':'[5, 2, 4, 4, 5]'}\n,\n{'name':'name_5','lastname':'lastname_5','average':'4.4','marks':'[5, 5, 4, 4, 4]'}\n,\n{'name':'name_7','lastname':'lastname_7','average':'3.4','marks':'[1, 4, 2, 5, 5]'}\n]\n\nBelow average:\n[\n{'name':'name_1','lastname':'lastname_1','average':'2.6','marks':'[2, 3, 2, 2, 4]'}\n,\n{'name':'name_2','lastname':'lastname_2','average':'3.2','marks':'[1, 5, 2, 5, 3]'}\n,\n{'name':'name_3','lastname':'lastname_3','average':'2.6','marks':'[4, 1, 2, 1, 5]'}\n,\n{'name':'name_6','lastname':'lastname_6','average':'2.8','marks':'[1, 4, 5, 2, 2]'}\n,\n{'name':'name_8','lastname':'lastname_8','average':'3.2','marks':'[4, 3, 4, 4, 1]'}\n,\n{'name':'name_9','lastname':'lastname_9','average':'3.2','marks':'[1, 4, 5, 5, 1]'}\n,\n{'name':'name_10','lastname':'lastname_10','average':'2.8','marks':'[5, 5, 1, 2, 1]'}\n]\n\nHighest mark:\n5\n\nBest student:\n\n{'name':'name_5','lastname':'lastname_5','average':'4.4','marks':'[5, 5, 4, 4, 4]'}\n")),(0,o.kt)("h2",{id:"calling-extensions-on-null-references"},"Calling extensions on null references"),(0,o.kt)("p",null,"It is even possible to call extension on a ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," reference. In extension implementation, we\ncan, using ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," keyword, check if reference was ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or not, and perform any logic based\nupon that."),(0,o.kt)("p",null,"Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun <T> T?.nullSafeToString(): String {\n  return this?.toString() ?: "NULL"\n}\n\nfun main() {\n  println(null.nullSafeToString())\n  println("Kotlin".nullSafeToString())\n}\n')),(0,o.kt)("p",null,"Source code can be checked out from GitHub ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/kotlin-extension-functions"},"repository")),(0,o.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);