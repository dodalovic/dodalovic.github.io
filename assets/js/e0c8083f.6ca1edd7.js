"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[9424],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(o),g=r,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},6303:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},a=void 0,l={permalink:"/dodalovic.github.io/blog/avoid-nullpointerexception-use-java-8-optional",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",source:"@site/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",title:"Avoid NullPointerException - use Java 8 Optional",description:"This blog post should start with a popular quote:",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"},{label:"java8",permalink:"/dodalovic.github.io/blog/tags/java-8"}],readingTime:3.98,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},prevItem:{title:"Asynchronous event publishing using Spring Boot",permalink:"/dodalovic.github.io/blog/asynchronous-event-publishing-using-spring-boot"},nextItem:{title:"Constructors in Kotlin",permalink:"/dodalovic.github.io/blog/constructors-in-kotlin"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This blog post should start with a popular quote:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tony Hoare introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," references in ALGOL W back in 1965 \u201csimply because it was so easy to implement\u201d, says Mr. Hoare. He talks about that decision considering it \u201cmy billion-dollar mistake\u201d.")),(0,r.kt)("p",null,"Instead of dealing with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"not-null")," references, ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 8 JDK")," ships with new type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<T>"),". How to use it?"))}d.isMDXComponent=!0}}]);