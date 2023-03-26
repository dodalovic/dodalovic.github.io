"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[3202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Sending mail via GMail using Kotlin and commons-mail library",authors:["dodalovic"],tags:["technology","gmail","kotlin","open-source"]},i=void 0,l={permalink:"/blog/sending-mail-via-gmail-using-kotlin-and-commons-mail-library",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/sending-mail-via-gmail-using-kotlin-and-commons-mail-library/index.mdx",source:"@site/blog/sending-mail-via-gmail-using-kotlin-and-commons-mail-library/index.mdx",title:"Sending mail via GMail using Kotlin and commons-mail library",description:"Continuing series of blog posts related to Kotlin, today we\u2019ll together make a sample application showing us how we could automate",date:"2023-03-26T11:58:45.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"gmail",permalink:"/blog/tags/gmail"},{label:"kotlin",permalink:"/blog/tags/kotlin"},{label:"open-source",permalink:"/blog/tags/open-source"}],readingTime:1.65,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Sending mail via GMail using Kotlin and commons-mail library",authors:["dodalovic"],tags:["technology","gmail","kotlin","open-source"]},prevItem:{title:"Querying Mongodb documents for array properties",permalink:"/blog/querying-mongo-documents-for-array-properties"},nextItem:{title:"Software development vocabulary for the newcomers",permalink:"/blog/shared-libraries-in-distributed-systems"}},s={authorsImageUrls:[void 0]},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Continuing series of blog posts related to ",(0,r.kt)("inlineCode",{parentName:"p"},"Kotlin"),", today we\u2019ll together make a sample application showing us how we could automate\nemail sending \u2013 using ",(0,r.kt)("inlineCode",{parentName:"p"},"Kotlin")," programming language. Example is quite simple, and surely \u2013 you can enhance it with own features. Application\nmostly demonstrates compact ",(0,r.kt)("inlineCode",{parentName:"p"},"Kotlin")," syntax, as well as full compatibility with Java or 3rd party libraries (in this case Apache ",(0,r.kt)("inlineCode",{parentName:"p"},"commons-mail")," library)."))}u.isMDXComponent=!0}}]);