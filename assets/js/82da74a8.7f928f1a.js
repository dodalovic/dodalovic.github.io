"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[2121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Lightweight strategy pattern in Java 8",authors:["dodalovic"],tags:["technology","java8","patterns"]},s=void 0,o={permalink:"/blog/lightweight-strategy-pattern-in-java-8",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/lightweight-strategy-pattern-in-java-8/index.mdx",source:"@site/blog/lightweight-strategy-pattern-in-java-8/index.mdx",title:"Lightweight strategy pattern in Java 8",description:"In computer programming, the strategy pattern (also known as the policy pattern) is a software design pattern that enables an",date:"2023-03-26T11:58:45.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"java8",permalink:"/blog/tags/java-8"},{label:"patterns",permalink:"/blog/tags/patterns"}],readingTime:4.42,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Lightweight strategy pattern in Java 8",authors:["dodalovic"],tags:["technology","java8","patterns"]},prevItem:{title:"Kotlin powered Spring Boot app consuming NBA Rest Api",permalink:"/blog/kotlin-powered-spring-boot-app-consuming-nba-rest-api"},nextItem:{title:"Listing system and environment properties in Spring Boot",permalink:"/blog/listing-system-and-environment-properties-spring-boot"}},p={authorsImageUrls:[void 0]},l=[],u={toc:l},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In computer programming, the ",(0,a.kt)("strong",{parentName:"p"},"strategy pattern")," (also known as the ",(0,a.kt)("strong",{parentName:"p"},"policy pattern"),") is a software design pattern that enables an\nalgorithm's behavior ",(0,a.kt)("strong",{parentName:"p"},"to be selected at runtime"),". The strategy pattern. defines a family of algorithms, encapsulates each algorithm,\nand. makes the algorithms interchangeable within that family."),(0,a.kt)("p",null,"Let's start straight away with an example. The task is to build an application that would load a user information from arbitrary storage,\nlog user details using arbitrary logger and finally - save user using different persistence options. The application should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," console\napplication receiving input from the command line."),(0,a.kt)("p",null,"Say we have a main class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\n\nimport com.google.common.collect.ImmutableMap;\n\nimport java.util.Map;\nimport java.util.function.Consumer;\nimport java.util.function.Function;\n\npublic class UserPersistMain {\n\n    private static final Map<String, Function<Integer, User>> userProviderMapping = ImmutableMap.of(\n            "fs-provider", UserProviders.FILE_SYSTEM,\n            "web-service-provider", UserProviders.WEB_SERVICE\n    );\n\n    private static final Map<String, Consumer> userPersisterMapping = ImmutableMap.of(\n            "mongo-persister", UserPersisters.MONGO,\n            "mysql-persister", UserPersisters.MYSQL\n    );\n\n    private static final Map<String, Consumer> userLoggerMapping = ImmutableMap.of(\n            "console-logger", UserLoggers.CONSOLE,\n            "sentry-logger", UserLoggers.SENTRY\n    );\n\n    public static void main(String[] args) {\n\n        int userId = Integer.parseInt(args[0]);\n        final Function<Integer, User> userProvider = userProviderMapping.get(args[1]);\n        final Consumer userPersister = userPersisterMapping.get(args[2]);\n        final Consumer userLogger = args.length == 4 ? userLoggerMapping.get(args[3]) : UserLoggers.CONSOLE;\n\n        new UserPersistenceDirector(userId, userProvider, userPersister, userLogger).persist();\n    }\n}\n')),(0,a.kt)("p",null,"The first argument passed from command line is ",(0,a.kt)("inlineCode",{parentName:"p"},"userId"),". The second one is ",(0,a.kt)("inlineCode",{parentName:"p"},"userProvider"),", the next one is ",(0,a.kt)("inlineCode",{parentName:"p"},"userPersister"),", and\nfinally, let's say we can optionally pass ",(0,a.kt)("inlineCode",{parentName:"p"},"userLogger")," (in case we don't provide it via command line input, we default to console\nlogging)."),(0,a.kt)("p",null,"We have provided mappings from command line parameter names to different implementations (strategies) as static maps:\n",(0,a.kt)("inlineCode",{parentName:"p"},"userProviderMapping"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userPersisterMapping"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"userLoggerMapping"),". Depending on values passed from command line, we will choose\nappropriate implementation at program runtime."),(0,a.kt)("p",null,"Strategies implementations are encapsulated withing separate interfaces."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UserProviders")," contains implementations of various strategies\nfor loading user details. ",(0,a.kt)("inlineCode",{parentName:"p"},"UserPersisters")," interface contains implementations of different strategies that are taking care of\npersisting user details. ",(0,a.kt)("inlineCode",{parentName:"p"},"UserLoggers")," contains different strategies for logging user details."),(0,a.kt)("p",null,"These strategies are quite lightweight, since we're using ",(0,a.kt)("inlineCode",{parentName:"p"},"Java 8")," concepts of functional interfaces that come handy in our case.\nGiven below are our interfaces containing strategies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\nimport java.util.function.Function;\n\ninterface UserProviders {\n    Function<Integer, User> FILE_SYSTEM = userId -> {\n        System.out.println("Retrieving user data from file system...");\n        return new User(userId, "Mike", "United States");\n    };\n    Function<Integer, User> WEB_SERVICE = userId -> {\n        System.out.println("Retrieving user data from web service...");\n        return new User(userId, "Jane", "Canada");\n    };\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\nimport java.util.function.Consumer;\n\ninterface UserPersisters {\n    Consumer MONGO = user -> System.out.format("Persisting user [%s] to Mongo DB...%n", user.toString());\n    Consumer MYSQL = user -> System.out.format("Persisting user [%s] to MySQL DB...%n", user.toString());\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\nimport java.util.function.Consumer;\n\ninterface UserLoggers {\n    Consumer CONSOLE = user -> System.out.format("Logging user [%s] to console...%n", user.toString());\n    Consumer SENTRY = user -> System.out.format("Logging user [%s] to sentry...%n", user.toString());\n}\n')),(0,a.kt)("p",null,"Also, we have a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Java Bean"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\n\nclass User {\n    private final int id;\n    private final String username;\n    private final String location;\n\n    public User(int id, String username, String location) {\n        this.id = id;\n        this.username = username;\n        this.location = location;\n    }\n\n    @Override\n    public String toString() {\n        return String.format(\"User{id=%d, username='%s', location='%s'}\", id, username, location);\n    }\n}\n")),(0,a.kt)("p",null,"Important class in our case is ",(0,a.kt)("inlineCode",{parentName:"p"},"UserPersistenceDirector")," which takes care of entire process: loading, logging and finally - persisting\nuser. It's quite lightweight, since it just delegates persisting process steps to strategies we provide at runtime. Let's see the\nimplementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"package rs.dodalovic.design_patterns.behavioral.strategy.user_persistence;\n\nimport java.util.function.Consumer;\nimport java.util.function.Function;\n\nclass UserPersistenceDirector {\n\n    private final int userId;\n    private final Function<Integer, User> userProvider;\n    private final Consumer userPersister;\n    private Consumer userLogger;\n\n    public UserPersistenceDirector(int userId, Function<Integer, User> userProvider, Consumer userPersister) {\n        this.userId = userId;\n        this.userProvider = userProvider;\n        this.userPersister = userPersister;\n    }\n\n    public UserPersistenceDirector(int userId, Function<Integer, User> userProvider, Consumer userPersister,\n                                   Consumer userLogger) {\n        this(userId, userProvider, userPersister);\n        this.userLogger = userLogger;\n    }\n\n    public void persist() {\n        final User user = userProvider.apply(userId);\n        userLogger.accept(user);\n        userPersister.accept(user);\n    }\n}\n")),(0,a.kt)("p",null,"We can see that it has constructors receiving strategies. We inject strategies at runtime, depending on input parameters. We store\nstrategies as instance fields."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UserPersistenceDirector")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," method ",(0,a.kt)("inlineCode",{parentName:"p"},"persist()")," , which coordinates high level persistence mechanism. We can see in it's\nimplementation that all it does is delegating job to strategies that were given to it. So, this is a high level component that defines\nprocess and it's steps, and we can completely vary algorithm passing different strategies at runtime. So, client of ",(0,a.kt)("inlineCode",{parentName:"p"},"UserPersistenceDirector"),"\nhas complete control of picking the strategies it wants executed."),(0,a.kt)("p",null,"Advantage of using ",(0,a.kt)("inlineCode",{parentName:"p"},"Java 8")," is that it ships with functional interfaces, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer<T>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Function<T,R>")," which we can use for\ndefining strategies and we can use elegant ",(0,a.kt)("inlineCode",{parentName:"p"},"lambda")," syntax to provide strategies implementations."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Whenever we want the ability to execute some high level process that has well established steps, but we want to be able\nto control & vary implementation of these steps - ",(0,a.kt)("inlineCode",{parentName:"p"},"Strategy pattern")," comes handy.")),(0,a.kt)("p",null,"We can execute our application giving sample input parameters. If we want to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"userId:1")," , user provider as ",(0,a.kt)("inlineCode",{parentName:"p"},"fs-provider"),",\nuser persister as ",(0,a.kt)("inlineCode",{parentName:"p"},"mongo-persister"),", and user logger as  ",(0,a.kt)("inlineCode",{parentName:"p"},"sentry-logger"),", we can execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java rs.dodalovic.design_patterns.behavioral.strategy.user_persistence.UserPersistMain 1 fs-provider mongo-persister sentry-logger\nOutput:\nRetrieving user data from file system...\nLogging user [User{id=1, username='Mike', location='United States'}] to sentry...\nPersisting user [User{id=1, username='Mike', location='United States'}] to Mongo DB...\n")),(0,a.kt)("p",null,"Hope you liked the post. You can find sources at ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/dodalovic/99aff2a2e6407f196204"},"Github")),(0,a.kt)("p",null,"That was all for today! Hope you liked it!"))}c.isMDXComponent=!0}}]);