"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[1387],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>g});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?t.createElement(g,l(l({ref:n},d),{},{components:a})):t.createElement(g,l({ref:n},d))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5079:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(7462),o=(a(7294),a(3905));const r={title:"Querying Mongodb documents for array properties",authors:["dodalovic"],tags:["technology","mongodb"],enableComments:!0},l=void 0,i={permalink:"/blog/querying-mongo-documents-for-array-properties",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/querying-mongo-documents-for-array-properties/index.mdx",source:"@site/blog/querying-mongo-documents-for-array-properties/index.mdx",title:"Querying Mongodb documents for array properties",description:"Ladies and gents, I\u2019m just posting one short reminder to myself and anyone keen to find out how do",date:"2023-03-27T08:53:53.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"mongodb",permalink:"/blog/tags/mongodb"}],readingTime:3.0923076923076924,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Querying Mongodb documents for array properties",authors:["dodalovic"],tags:["technology","mongodb"],enableComments:!0},prevItem:{title:"Primary school of IntelliJ IDEA",permalink:"/blog/primary-school-of-intellij-idea"},nextItem:{title:"Sending mail via GMail using Kotlin and commons-mail library",permalink:"/blog/sending-mail-via-gmail-using-kotlin-and-commons-mail-library"}},c={authorsImageUrls:[void 0]},s=[],d={toc:s},p="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ladies and gents, I\u2019m just posting one short reminder to myself and anyone keen to find out how do\nwe query array type fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"Mongodb"),"."),(0,o.kt)("p",null,"Let\u2019s start by inserting couple of documents (using ",(0,o.kt)("inlineCode",{parentName:"p"},"Mongodb")," shell) which we\u2019ll use for querying\nafterwards:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.insertMany([\n  { name: "John", languages: ["java", "php", "javascript"] },\n  { name: "Jack", languages: ["java", "c", "c++"] },\n  { name: "Jim", languages: ["node", "java"] }\n]);\n')),(0,o.kt)("p",null,"Now, when we run the following command in shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"db.developers.find();\n")),(0,o.kt)("p",null,"Command output confirms all test documents are successfully stored:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),\n    "name" : "John",\n    "languages" : [\n        "java",\n        "php",\n        "javascript"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),\n    "name" : "Jack",\n    "languages" : [\n        "java",\n        "c",\n        "c++"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46934"),\n    "name" : "Jim",\n    "languages" : [\n        "node",\n        "java"\n    ]\n}\n')),(0,o.kt)("p",null,"Now, say you want to find all documents that have \u201cjava\u201d as the first entry in languages array\nfield, we do by using following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.find({ "languages.0": "java" });\n')),(0,o.kt)("p",null,"Command output confirms we matched correct document(s):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),\n    "name" : "John",\n    "languages" : [\n        "java",\n        "php",\n        "javascript"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),\n    "name" : "Jack",\n    "languages" : [\n        "java",\n        "c",\n        "c++"\n    ]\n}\n')),(0,o.kt)("p",null,"Array position is indexed as expected starting by zero, so in case we want all docs having \u201cjava\u201d\nat second position, we do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.find({ "languages.1": "java" });\n')),(0,o.kt)("p",null,"Next, if we want to list all documents that contain \u201cjava\u201d at any position inside languages array\nfield, we do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.find({ languages: "java" });\n')),(0,o.kt)("p",null,"Command output lists all initially inserted documents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46932"),\n    "name" : "John",\n    "languages" : [\n        "java",\n        "php",\n        "javascript"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46933"),\n    "name" : "Jack",\n    "languages" : [\n        "java",\n        "c",\n        "c++"\n    ]\n}\n{\n    "_id" : ObjectId("587e6ec738cbd11c2dc46934"),\n    "name" : "Jim",\n    "languages" : [\n        "node",\n        "java"\n    ]\n}\n')),(0,o.kt)("p",null,"Finally, if we want to find all documents that have languages field exact to let\u2019s say:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'["java", "php", "javascript"]\n')),(0,o.kt)("p",null,"we do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'db.developers.find({ languages: ["java", "php", "javascript"] });\n')),(0,o.kt)("p",null,"Command output prints something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_id": ObjectId("587e6ec738cbd11c2dc46932"),\n  "name": "John",\n  "languages": ["java", "php", "javascript"]\n}\n')),(0,o.kt)("p",null,"I\u2019m primary keeping this as a quick reminder to myself, but will be very happy if someone else finds it useful!"),(0,o.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);