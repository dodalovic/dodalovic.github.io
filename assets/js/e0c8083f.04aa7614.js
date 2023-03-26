"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[9424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},i=void 0,l={permalink:"/blog/avoid-nullpointerexception-use-java-8-optional",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",source:"@site/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",title:"Avoid NullPointerException - use Java 8 Optional",description:"This blog post should start with a popular quote:",date:"2023-03-26T11:58:45.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"java8",permalink:"/blog/tags/java-8"}],readingTime:3.98,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},prevItem:{title:"Asynchronous event publishing using Spring Boot",permalink:"/blog/asynchronous-event-publishing-using-spring-boot"},nextItem:{title:"Constructors in Kotlin",permalink:"/blog/constructors-in-kotlin"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This blog post should start with a popular quote:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tony Hoare introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," references in ALGOL W back in 1965 \u201csimply because it was so easy to implement\u201d, says Mr. Hoare. He talks about that decision considering it \u201cmy billion-dollar mistake\u201d.")),(0,r.kt)("p",null,"Instead of dealing with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"not-null")," references, ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 8 JDK")," ships with new type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<T>"),". How to use it?"))}d.isMDXComponent=!0}}]);