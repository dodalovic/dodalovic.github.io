"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},o=void 0,i={permalink:"/blog/avoid-nullpointerexception-use-java-8-optional",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",source:"@site/blog/avoid-nullpointerexception-use-java-8-optional/index.mdx",title:"Avoid NullPointerException - use Java 8 Optional",description:"This blog post should start with a popular quote:",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"java8",permalink:"/blog/tags/java-8"}],readingTime:6.123076923076923,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Avoid NullPointerException - use Java 8 Optional",authors:["dodalovic"],tags:["technology","java8"]},prevItem:{title:"Asynchronous event publishing using Spring Boot",permalink:"/blog/asynchronous-event-publishing-using-spring-boot"},nextItem:{title:"Constructors in Kotlin",permalink:"/blog/constructors-in-kotlin"}},p={authorsImageUrls:[void 0]},s=[{value:"\ud83c\udf00 Optional.ifPresent",id:"-optionalifpresent",level:2},{value:"\ud83c\udf00 Optional.map",id:"-optionalmap",level:2},{value:"\ud83c\udf00 Optional.orElse",id:"-optionalorelse",level:2},{value:"\ud83c\udf00 Optional.orElseGet",id:"-optionalorelseget",level:2},{value:"\ud83c\udf00 Optional.filter",id:"-optionalfilter",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This blog post should start with a popular quote:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tony Hoare introduced ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," references in ALGOL W back in 1965 \u201csimply because it was so easy to implement\u201d, says Mr. Hoare. He talks about that decision considering it \u201cmy billion-dollar mistake\u201d.")),(0,r.kt)("p",null,"Instead of dealing with ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"not-null")," references, ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 8 JDK")," ships with new type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<T>"),". How to use it?"),(0,r.kt)("p",null,"Say we have a use-case where our client code calls some ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," which can return some value which is optional:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'User user = userService.getUser("username", "password");\nSystem.out.println(user.getLastName());\n')),(0,r.kt)("p",null,"Might be that there's no user with given credentials. In that case user reference might be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", but our client code forgot to check that one\n",(0,r.kt)("inlineCode",{parentName:"p"},"NullPointerException")," will occur when trying to print out that user, when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getLastName()")," method."),(0,r.kt)("p",null,"In such a cases,",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<T>")," comes to the rescue. So, we could use it and rewrite upper snippet using it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Optional user = new UserService().getUser("username", "password");\nif (user.isPresent()) {\n    System.out.println(user.get().getLastName());\n}\n')),(0,r.kt)("p",null,"Important thing to notice is that whenever you see ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," is returning ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<T>")," value, it should be very obvious that we should check value\nfor presence before calling ",(0,r.kt)("inlineCode",{parentName:"p"},".get()")," because if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," instance is empty, calling ",(0,r.kt)("inlineCode",{parentName:"p"},".get()")," in such a case will result in ",(0,r.kt)("inlineCode",{parentName:"p"},"NoSuchElementException"),"\nbeing thrown."),(0,r.kt)("p",null,"We can see that we should design our ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," not to use null reference in case when data is missing, rather using ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," type in such a case.\nGiven snippet above, we can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"isPresent()")," method which helps us checking if value is there or not. In case value is present,\nwe can unwrap the value using ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," call on ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),"."),(0,r.kt)("p",null,"If we're designing ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," that can return some value optionally, we should do it the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class UserService {\n\n    public Optional getUser(String username, String password) {\n        // assume legacy userDao could return null for user\n        User user = userDao.getUser(username, password);\n        if (user != null) {\n            return Optional.of(user);\n        }\n        return Optional.empty();\n    }\n}\n")),(0,r.kt)("p",null,"In case return value from some, let's say legacy code, can be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", we should first check that fact, and in case of not ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value, we should\nwrap value using ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional.of"),", or in other case we should return empty optional, using ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional.empty()"),"."),(0,r.kt)("p",null,"There are several interesting methods present in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"API"),", and we'll demo their usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public void ifPresent(Consumer consumer) {\npublic<u> Optional<u> map(Function mapper) {\npublic T orElse(T other) {\npublic T orElseGet(Supplier other)\npublic Optional filter(Predicate predicate) {\n")),(0,r.kt)("h2",{id:"-optionalifpresent"},"\ud83c\udf00 Optional.ifPresent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If a value is present, invoke the specified consumer with the value, otherwise do nothing.Parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"consumer")," - block to be executed if a value is present")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'new UserService().getUser("username", "password")\n        .ifPresent(System.out::println);\n/* System.out.println is Consumer<User> and will receive\n non empty User instance as parameter */\n')),(0,r.kt)("h2",{id:"-optionalmap"},"\ud83c\udf00 Optional.map"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If a value is present, apply the provided mapping function to it, and if the result is non-null, return an Optional describing the result.\nOtherwise return an empty Optional.Parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"mapper")," - a mapping function to apply to the value, if present")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final String username = Optional.of(new User("username", "password"))\n                .map(User::getName)\n                .orElse("Fallback username");\n/* In case optional is not empty, mapping function will be applied,\n  otherwise empty optional will be returned */\n')),(0,r.kt)("h2",{id:"-optionalorelse"},"\ud83c\udf00 Optional.orElse"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return the value if present, otherwise return other.Parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"other")," - the value to be returned if there is no value present, may be null")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final User user = new UserService().getUser("username", "password")\n.orElse(new User("root", "generic"));\n\n/* In case userService.getUser returns empty optional,\n\'root\' user will be returned and assigned to user variable */\n')),(0,r.kt)("h2",{id:"-optionalorelseget"},"\ud83c\udf00 Optional.orElseGet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Return the value if present, otherwise invoke other and return the result of that invocation.Parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"other")," - a Supplier whose result is returned if no value is present")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'new UserService().getUser("username", "password")\n                .orElseGet(() -> FallbackUserService.getUser("username", "password"));\n\n/* In case userService.getUser returns empty optional,\nwe\'ll try to get user calling FallbackUserService.getUser API */\n')),(0,r.kt)("h2",{id:"-optionalfilter"},"\ud83c\udf00 Optional.filter"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If a value is present, and the value matches the given predicate, return an Optional describing the value, otherwise return an empty Optional.Parameters:\n",(0,r.kt)("inlineCode",{parentName:"p"},"predicate")," - a predicate to apply to the value, if present")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'new UserService().getUser("username", "password")\n                .filter(user -> user.getName().length() > 5)\n                .ifPresent(System.out::println);\n/* In case userService.getUser returns non empty optional,\nwe\'ll first make sure to check if user\'s name is longer than 5 characters */\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"If we're writing ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," that can in some cases return meaningful value, and in other ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", we should, instead of returning ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\nreference - return ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," with wrapped value or empty ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),". Same applies if we have some legacy code that could return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}m.isMDXComponent=!0}}]);