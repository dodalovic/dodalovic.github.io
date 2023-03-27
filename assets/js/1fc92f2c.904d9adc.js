"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"What is unit testing?",authors:["dodalovic"],tags:["technology","testing"],enableComments:!0},i=void 0,s={permalink:"/blog/what-is-unit-testing",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/what-is-unit-testing/index.mdx",source:"@site/blog/what-is-unit-testing/index.mdx",title:"What is unit testing?",description:"For all of you that are just new to the topic, I'll try to make a concise introduction to the idea of unit testing.",date:"2023-03-27T08:53:53.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"testing",permalink:"/blog/tags/testing"}],readingTime:4.823076923076923,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"What is unit testing?",authors:["dodalovic"],tags:["technology","testing"],enableComments:!0},prevItem:{title:"Using regular expressions for querying Mongodb documents",permalink:"/blog/using-regular-expressions-for-querying-mongodb-documents"},nextItem:{title:"Why Kotlin?",permalink:"/blog/why-kotlin"}},l={authorsImageUrls:[void 0]},c=[{value:"Arrange phase",id:"arrange-phase",level:2},{value:"Act phase",id:"act-phase",level:2},{value:"Assert phase",id:"assert-phase",level:2},{value:"Naming tests methods",id:"naming-tests-methods",level:2},{value:"Things to remember",id:"things-to-remember",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For all of you that are just new to the topic, I'll try to make a concise introduction to the idea of unit testing."),(0,r.kt)("p",null,"Unit testing allows us to test our functions (This is most often the case, but we can also unit test other things as well - e.g class instance state, etc) in isolation, so that we can verify implementation correctness."),(0,r.kt)("p",null,"In general, we should plan our test method implementation to be divided in three parts, like shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tripple A in unit testing",src:n(6354).Z,width:"589",height:"453"})),(0,r.kt)("h2",{id:"arrange-phase"},"Arrange phase"),(0,r.kt)("p",null,'In this phase we "emulate" execution environment of the function we are testing. What does that mean? Let\'s use a code snippet (Code is written in ',(0,r.kt)("inlineCode",{parentName:"p"},"Kotlin"),", but pretty much any object oriented language could be used as well) of\nthe function we want to unit test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProductService(\n    val shippingCostService: ShippingCostService,\n    val taxCalculationService: TaxCalculationService,\n    val productPriceService: PriceService) {\n\n    fun getPrice(productID: String): Long {\n        val basePrice: Long = priceService.getPrice(productID)\n        val shippingCosts: Long = shippingCostService.getShippingCosts(productID)\n        val taxes: Long = taxCalculationService.calculateTax(productID)\n        return basePrice + shippingCosts + taxes\n   }\n}\n")),(0,r.kt)("p",null,"Here we have imaginary ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductService")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrice")," method, which we'd like to test. Unfortunately -\nthere are already some complications: this method can't be tested in isolation! Why? Simply because our class\ndepends on other classes to fulfill it's responsibility: ",(0,r.kt)("inlineCode",{parentName:"p"},"ShippingCostService"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TaxCalculationService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceService"),". We can call them ",(0,r.kt)("strong",{parentName:"p"},"collaborators"),"."),(0,r.kt)("p",null,"Luckily - all modern programming languages support some kind of support for emulation of our collaborators.\nUsing these tools, we can give ",(0,r.kt)("strong",{parentName:"p"},"instructions to our test engine to emulate their particular behavior during test method execution"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Emulate your environment!",src:n(1640).Z,width:"599",height:"273"})),(0,r.kt)("p",null,"In our imaginary case - we could give such an instruction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class TestClass {\n    @Test\n    fun getPrice_when_shipping_cost_service_returns_proper_number_returns_positive_number() {\n        // arrange phase\n        val productID = UUID.randomUUID().toString()\n        when(priceService.getPrice(productID)).thenReturn(5L)\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"act-phase"},"Act phase"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Execute your function!",src:n(6802).Z,width:"526",height:"285"})),(0,r.kt)("p",null,"In this phase we actually call the function we want to test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ProductServiceTest {\n    @Test\n    fun myTestMethod() {\n        // act phase\n        val calculatedPrice = productService.getPrice("XY-123")\n        // assert phase\n        ...\n    }\n}\n')),(0,r.kt)("p",null,"Usually - as a consequence of invoking function we're testing - now we have to figure out how do we know if our function is correct or not. In\nour case, the function ",(0,r.kt)("strong",{parentName:"p"},"returns some value"),", which we can inspect and ",(0,r.kt)("strong",{parentName:"p"},"make a conclusion if the value is expected or not"),". Also, even in case that\nfunction we test returns no value, ",(0,r.kt)("strong",{parentName:"p"},"some state might have changed in the application"),", and we could inspect these state changes to verify our function\ncorrectness."),(0,r.kt)("h2",{id:"assert-phase"},"Assert phase"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Never forget verifying!",src:n(4294).Z,width:"568",height:"366"})),(0,r.kt)("p",null,"In this phase, we may want to do some of the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verify return value from the function we tested")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"...\nassertThat(calculatedPrice).isEqualTo(5)\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verify that we had proper interactions with our collaborators during our test execution")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"...\nverify(taxCalculationService, times(1)).calculateTax(productID)\n...\n")),(0,r.kt)("h2",{id:"naming-tests-methods"},"Naming tests methods"),(0,r.kt)("p",null,'One of the "patterns" I use when naming my test methods looks something like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun getPrice_whenShippingCostServiceReturnsProperNumber_returnsPositiveNumber() { }\n")),(0,r.kt)("p",null,"It consists of 3 parts, delimited with ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first part is ",(0,r.kt)("strong",{parentName:"li"},"the method name we test")),(0,r.kt)("li",{parentName:"ul"},"the middle part is ",(0,r.kt)("strong",{parentName:"li"},"the short description of emulated execution environment")),(0,r.kt)("li",{parentName:"ul"},"the last portion describes ",(0,r.kt)("strong",{parentName:"li"},"expected outcome"))),(0,r.kt)("p",null,"Couple of other examples of test methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Test\nfun getUserDetails_whenDatabaseDown_throwsException() {}\n@Test\nfun getNumberOfRegisteredUsers_whenNetworkError_returnsNull() {}\n")),(0,r.kt)("h2",{id:"things-to-remember"},"Things to remember"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each test method should be composed out of three code blocks - ",(0,r.kt)("strong",{parentName:"li"},"Arrange"),", ",(0,r.kt)("strong",{parentName:"li"},"Act"),", and ",(0,r.kt)("strong",{parentName:"li"},"Assert")),(0,r.kt)("li",{parentName:"ul"},"We should name our test methods so that it's enough to understand the test just be reading test method\nname"),(0,r.kt)("li",{parentName:"ul"},"We should have multiple scenarios where we execute our method, with various emulated environments which\nour function can exhibit during regular application usage")),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}h.isMDXComponent=!0},6354:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/testing-tripple-a-508a5455f467278dc56f8ad8607c8cbb.jpeg"},6802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tests-act-79684cf0be41d40a2f1c381b047eab3a.png"},4294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tests-always-verify-da2d1026cf0da512cae63cca43b203c0.png"},1640:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/when-foo-then-bar-920538b03673e796e9ed8b15fba6af7e.jpeg"}}]);