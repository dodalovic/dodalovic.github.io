"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[5824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={title:"Interesting way to assert thrown exceptions using Spring Boot and Assertj",authors:["dodalovic"],tags:["technology","spring-boot","testing"]},a=void 0,s={permalink:"/dodalovic.github.io/blog/interesting-way-to-assert-thrown-exceptions-using-spring-boot-and-assertj",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/interesting-way-to-assert-thrown-exceptions-using-spring-boot-and-assertj/index.mdx",source:"@site/blog/interesting-way-to-assert-thrown-exceptions-using-spring-boot-and-assertj/index.mdx",title:"Interesting way to assert thrown exceptions using Spring Boot and Assertj",description:"Traditional exception handling in JUnit tests",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"},{label:"spring-boot",permalink:"/dodalovic.github.io/blog/tags/spring-boot"},{label:"testing",permalink:"/dodalovic.github.io/blog/tags/testing"}],readingTime:1.56,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Interesting way to assert thrown exceptions using Spring Boot and Assertj",authors:["dodalovic"],tags:["technology","spring-boot","testing"]},prevItem:{title:"The clash of the giants - IntelliJ Ultimate vs Visual Studio Code",permalink:"/dodalovic.github.io/blog/intellij-ultimate-vs-visual-studio-code-battle"},nextItem:{title:"Is Google Pixelbook software development ready",permalink:"/dodalovic.github.io/blog/is-pixelbook-software-development-ready"}},l={authorsImageUrls:[void 0]},p=[{value:"Traditional exception handling in JUnit tests",id:"traditional-exception-handling-in-junit-tests",level:2},{value:"AssertJ approach",id:"assertj-approach",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"traditional-exception-handling-in-junit-tests"},"Traditional exception handling in JUnit tests"),(0,r.kt)("p",null,"You\u2019re probably used to testing code that throws exceptions in either one of the following two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JUnit"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"@Test")," annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"expected")," parameter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Test(expected = UserService.NoSuchUserException.class)\npublic void deletesExistingUser() {\n    final User existingUser = spy(new User());\n    given(userRepository.findOne(eq("123"))).willReturn(existingUser);\n    given(userRepository.save(eq(existingUser))).willReturn(existingUser);\n\n    userService.deleteUser("123");\n\n    verify(existingUser).setState(eq(User.State.DELETED));\n}\n')),(0,r.kt)("p",null,"The disadvantage of this approach is that we can't be sure that the exception thrown\nwas thrown by the code we expect to throw it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JUnit\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"ExpectedException @Rule"),":")),(0,r.kt)("p",null,"To gain control over which part of test should throw an exception, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpectedException"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"JUnit")," rule, here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Rule\nExpectedException thrown = ExpectedException.none();\n\n@Test\npublic void deletesExistingUser() {\n    thrown.expect(UserService.NoSuchUserException.class);\n    thrown.expectMessage(format("User with id %s doesn\'t exist!", userId));\n    final User existingUser = spy(new User());\n    given(userRepository.findOne(eq("123"))).willReturn(existingUser);\n    given(userRepository.save(eq(existingUser))).willReturn(existingUser);\n\n    userService.deleteUser("123");\n\n    verify(existingUser).setState(eq(User.State.DELETED));\n}\n')),(0,r.kt)("p",null,"Whereas the second approach gives more control over expressing where the test code should throw\nan exception, there's even better approach to design your ",(0,r.kt)("inlineCode",{parentName:"p"},"JUnit")," tests, using powerful\n",(0,r.kt)("a",{parentName:"p",href:"https://joel-costigliola.github.io/assertj/"},"AssertJ")," testing library."),(0,r.kt)("h2",{id:"assertj-approach"},"AssertJ approach"),(0,r.kt)("p",null,"The one I found quite elegant and easy to use and understand comes from powerful ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertJ"),"\nlibrary, using static ",(0,r.kt)("inlineCode",{parentName:"p"},"Assertions.assertThatThrownBy")," static method, as shown in the following\ntest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void failsDeletingUser() {\n    final String userId = "123";\n    given(userRepository.findOne(eq(userId))).willReturn(null);\n    assertThatThrownBy(() -> userService.deleteUser(userId))\n            .isInstanceOf(UserService.NoSuchUserException.class)\n            .hasMessage(format("User with id %s doesn\'t exist!", userId));\n}\n')),(0,r.kt)("p",null,"It receives instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ThrowingCallable")," functional interface (Java 8) which is quite handy\nsince you can pass lambda implementation (as shown). Given interface has only one method,\nwhich we implemented as lambda above. The interface looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"public interface ThrowingCallable {\n    void call() throws Throwable;\n}\n")),(0,r.kt)("p",null,"In upcoming version 5 of ",(0,r.kt)("inlineCode",{parentName:"p"},"JUnit")," framework there\u2019s no more option to use expected attribute in\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Test")," annotation. Having two options there, my favourite will be option coming from ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertJ"),"\nlibrary."),(0,r.kt)("p",null,"Let me know your thoughts!"),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}d.isMDXComponent=!0}}]);