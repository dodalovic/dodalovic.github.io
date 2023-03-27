"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[1577],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={title:"Using regular expressions for querying Mongodb documents",authors:["dodalovic"],tags:["technology","mongodb"]},l=void 0,i={permalink:"/blog/using-regular-expressions-for-querying-mongodb-documents",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/using-regular-expressions-for-querying-mongodb-documents/index.mdx",source:"@site/blog/using-regular-expressions-for-querying-mongodb-documents/index.mdx",title:"Using regular expressions for querying Mongodb documents",description:"Ladies and gents, here\u2019s one fairly short hint for anyone wondering how to query documents in Mongodb",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"mongodb",permalink:"/blog/tags/mongodb"}],readingTime:2.269230769230769,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Using regular expressions for querying Mongodb documents",authors:["dodalovic"],tags:["technology","mongodb"]},prevItem:{title:"Strategy pattern example using kotlin scripts",permalink:"/blog/strategy-pattern-example-using-kotlin-scripts"},nextItem:{title:"What is unit testing?",permalink:"/blog/what-is-unit-testing"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ladies and gents, here\u2019s one fairly short hint for anyone wondering how to query documents in ",(0,r.kt)("inlineCode",{parentName:"p"},"Mongodb"),"\nusing regular expressions. Let\u2019s get straight to the point:"),(0,r.kt)("p",null,"Let\u2019s start by inserting couple of documents (using ",(0,r.kt)("inlineCode",{parentName:"p"},"Mongodb")," shell) which we\u2019ll use for querying\nafterwards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.insertMany([\n  { name: "John", languages: ["java", "php", "javascript"] },\n  { name: "Johnny", languages: ["java", "c", "c++"] },\n  { name: "Jim", languages: ["node", "java"] }\n]);\n')),(0,r.kt)("p",null,"Now, when we run the following command in shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"db.developers.find();\n")),(0,r.kt)("p",null,"Command output confirms all test documents are successfully stored:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),\n    "name" : "John",\n    "languages" : [\n        "java",\n        "php",\n        "javascript"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),\n    "name" : "Johnny",\n    "languages" : [\n        "java",\n        "c",\n        "c++"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46934"),\n    "name" : "Jim",\n    "languages" : [\n        "node",\n        "java"\n    ]\n}\n')),(0,r.kt)("p",null,'Now, say you want to find all documents that have field name starting with some particular value,\nlet\u2019s say "Joh". The way to do is pretty straightforward:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"db.developers.find({ name: { $regex: /^Joh.*/ } }).pretty();\n")),(0,r.kt)("p",null,"Command output confirms we matched correct document(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),\n    "name" : "John",\n    "languages" : [\n        "java",\n        "php",\n        "javascript"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),\n    "name" : "Johnny",\n    "languages" : [\n        "java",\n        "c",\n        "c++"\n    ]\n}\n')),(0,r.kt)("p",null,'We could also try matching documents having some field ending with particular value, let\u2019s say\n"im", just by doing something like:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"db.developers.find({ name: { $regex: /^.*im$/ } }).pretty();\n")),(0,r.kt)("p",null,'which would match "Jim" in our case:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": ObjectId("587e6ec738cbd11c2dc46934"),\n  "name": "Jim",\n  "languages": ["node", "java"]\n}\n')),(0,r.kt)("p",null,"Regular expressions are sometimes the only way to go for particular problem sets, so I hope this\nhelps to understand mongodb ",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"s dealing with regular expressions."),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}p.isMDXComponent=!0}}]);