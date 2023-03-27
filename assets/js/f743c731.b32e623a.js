"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[6606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",authors:["dodalovic"],tags:["technology","testing","java","junit"]},a=void 0,l={permalink:"/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing/index.mdx",source:"@site/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing/index.mdx",title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",description:"So, in case you haven\u2019t read the first part in this series,",date:"2023-03-27T08:46:47.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"testing",permalink:"/blog/tags/testing"},{label:"java",permalink:"/blog/tags/java"},{label:"junit",permalink:"/blog/tags/junit"}],readingTime:14.892307692307693,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",authors:["dodalovic"],tags:["technology","testing","java","junit"]},prevItem:{title:"JUnit testing - part I - setup with simple example",permalink:"/blog/junit-testing-part-one-setup-with-simple-example"},nextItem:{title:"Kotlin powered Spring Boot app consuming NBA Rest Api",permalink:"/blog/kotlin-powered-spring-boot-app-consuming-nba-rest-api"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So, in case you haven\u2019t read ",(0,i.kt)("u",null,(0,i.kt)("a",{parentName:"p",href:"/blog/junit-testing-part-one-setup-with-simple-example"},"the first part"))," in this series,\nwhich is giving some basic introduction to the idea of ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," testing \u2013 go ahead, I\u2019ll wait till you\u2019re back so that we can\nproceed with the next steps."))}g.isMDXComponent=!0}}]);