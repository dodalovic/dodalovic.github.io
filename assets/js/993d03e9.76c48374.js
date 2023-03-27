"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[2507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),g=o,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={title:"Listing system and environment properties in Spring Boot",authors:["dodalovic"],tags:["technology","spring-boot"]},a=void 0,p={permalink:"/blog/listing-system-and-environment-properties-spring-boot",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/listing-system-and-environment-properties-spring-boot/index.mdx",source:"@site/blog/listing-system-and-environment-properties-spring-boot/index.mdx",title:"Listing system and environment properties in Spring Boot",description:"Ladies & Gents, I prototyped just a small app that could help you print out some basic",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"spring-boot",permalink:"/blog/tags/spring-boot"}],readingTime:3.269230769230769,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Listing system and environment properties in Spring Boot",authors:["dodalovic"],tags:["technology","spring-boot"]},prevItem:{title:"Lightweight strategy pattern in Java 8",permalink:"/blog/lightweight-strategy-pattern-in-java-8"},nextItem:{title:"Make your first days as developer easier",permalink:"/blog/make-your-first-days-as-developer-easier"}},s={authorsImageUrls:[void 0]},l=[{value:"Running the app",id:"running-the-app",level:2},{value:"Listing system environment",id:"listing-system-environment",level:2},{value:"Listing custom spring properties",id:"listing-custom-spring-properties",level:2}],u={toc:l},m="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ladies & Gents, I prototyped just a small app that could help you print out some basic\nenvironment related information by exposing a few Rest controller endpoints."),(0,o.kt)("h2",{id:"running-the-app"},"Running the app"),(0,o.kt)("p",null,"The easiest way is to run the app using Spring boot maven plugin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ mvn spring-boot:run \\\n  -Drun.jvmArguments="\\\n    -Dfoo=foo \\\n    -Dbar=bar \\\n    -Dbaz=baz \\\n    -Dserver.port=8080 \\\n    -agentlib:jdwp=transport=dt_socket,server=y,address=1044,suspend=n"\n')),(0,o.kt)("p",null,"Here, we specify some ",(0,o.kt)("inlineCode",{parentName:"p"},"Java")," properties that will be used by the application:"),(0,o.kt)("p",null,"foo, bar, baz custom properties\nserver.port \u2013 which is the way to instruct ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," which port to use\nwe also specify to start with remote debug capabilities (if we\u2019d like to do some remote\ndebugging with our IDE)"),(0,o.kt)("p",null,"Rest controller exposing various system / spring properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.envprops;\n\nimport com.google.common.collect.ImmutableMap;\nimport lombok.AllArgsConstructor;\nimport lombok.val;\nimport org.springframework.core.env.Environment;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport java.util.Map;\n\n@RestController\n@AllArgsConstructor\npublic class EnvPropertiesController {\n    private final Environment environment;\n\n    @GetMapping("/sys/props")\n    public Map<String, Object> getSysProperties() {\n        val builder = ImmutableMap.builder();\n        System.getProperties().stringPropertyNames().forEach(name -> {\n            builder.put(name, environment.getProperty(name));\n        });\n        val systemProperties = builder.build();\n        return ImmutableMap.of(\n                "size", systemProperties.size(),\n                "values", systemProperties\n        );\n    }\n\n    @GetMapping("/sys/props/custom")\n    public Map<String, Object> getCustomEnvProperties() {\n        val builder = ImmutableMap.builder();\n        builder.put("properties.key1", environment.getProperty("properties.key1"));\n        builder.put("properties.key2", environment.getProperty("properties.key2"));\n\n        builder.put("foo", environment.getProperty("foo"));\n        builder.put("bar", environment.getProperty("bar"));\n        builder.put("baz", environment.getProperty("baz"));\n\n        val customProperties = builder.build();\n\n        return ImmutableMap.of(\n                "size", customProperties.size(),\n                "values", customProperties\n        );\n    }\n\n    @GetMapping("/sys/env")\n    public Map<String, Object> get() {\n        val env = System.getenv();\n        return ImmutableMap.of(\n                "size", env.size(),\n                "values", env\n        );\n    }\n}\n')),(0,o.kt)("p",null,"Highlighted are lines used to get insights from running application environment. We are injecting\n",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," implementation which gives us access to environment properties, and application\nprofiles."),(0,o.kt)("p",null,"Here's how ",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties")," look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"properties.key1=properties.val1\nproperties.key2=properties.val2\n")),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties")," (main ",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot")," configuration file) we define two custom\n",(0,o.kt)("inlineCode",{parentName:"p"},"Spring")," environment properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"properties.key1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"properties.key2"),"."),(0,o.kt)("h1",{id:"listing-system-properties"},"Listing system properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -s 'http://localhost:8080/sys/props' | jq .\n")),(0,o.kt)("p",null,"Here's a response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": 63,\n  "values": {\n    "java.runtime.name": "Java(TM) SE Runtime Environment",\n    "sun.boot.library.path": "/Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Home/jre/lib",\n    "java.vm.version": "25.121-b13"\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"listing-system-environment"},"Listing system environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -s 'http://localhost:8080/sys/env' | jq .\n")),(0,o.kt)("p",null,"Here's a response, once again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": 46,\n  "values": {\n    "M2": "/usr/local/Cellar/maven/3.5.0/libexec/bin",\n    "GREP_COLOR": "1;33",\n    "JENV_FORCEJDKHOME": "true"\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"listing-custom-spring-properties"},"Listing custom spring properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"$ curl -s 'http://localhost:8080/sys/props/custom' | jq .\n")),(0,o.kt)("p",null,"A response would be something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "size": 5,\n  "values": {\n    "properties.key1": "properties.val1",\n    "properties.key2": "properties.val2",\n    "foo": "foo",\n    "bar": "bar",\n    "baz": "baz"\n  }\n}\n')),(0,o.kt)("p",null,"Here we see merged collection of environment properties we either passed via command line\nor defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"."),(0,o.kt)("p",null,"You can checkout source code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/env-properties-demo"},"GitHub")),(0,o.kt)("p",null,"That was all for today! Hope you liked it!"))}c.isMDXComponent=!0}}]);