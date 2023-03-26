"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[4347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={title:"Spring boot and Spring JdbcTemplate example",authors:["dodalovic"],tags:["technology","spring-boot","database"]},i=void 0,p={permalink:"/dodalovic.github.io/blog/spring-boot-and-spring-jdbctemplate-example",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/spring-boot-and-spring-jdbctemplate-example/index.mdx",source:"@site/blog/spring-boot-and-spring-jdbctemplate-example/index.mdx",title:"Spring boot and Spring JdbcTemplate example",description:"Let's build some simple example that demonstrate ease of Spring Boot use when building applications that need to connect to, in this",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"},{label:"spring-boot",permalink:"/dodalovic.github.io/blog/tags/spring-boot"},{label:"database",permalink:"/dodalovic.github.io/blog/tags/database"}],readingTime:2.945,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Spring boot and Spring JdbcTemplate example",authors:["dodalovic"],tags:["technology","spring-boot","database"]},prevItem:{title:"Software development vocabulary for the newcomers",permalink:"/dodalovic.github.io/blog/shared-libraries-in-distributed-systems"},nextItem:{title:"Spring MVC JUnit testing",permalink:"/dodalovic.github.io/blog/spring-mvc-junit-testing"}},l={authorsImageUrls:[void 0]},s=[],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's build some simple example that demonstrate ease of ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Boot")," use when building applications that need to connect to, in this\ncase - ",(0,r.kt)("inlineCode",{parentName:"p"},"MySql")," database. Final output will be single - standalone jar file that can be executed as ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar my-boot-artifact.jar")," and\nwill be able to process http requests. Application is intentionally made simple, there's no big architecture inside it - you can see\ndatabase code inside Controller method, which you'd normally not use for real world projects."),(0,r.kt)("p",null,"Let's get started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create directory my-sample-boot-app"),(0,r.kt)("li",{parentName:"ul"},"Inside it create ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," file with the following content")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.test</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <name>demo</name>\n    <description>Demo project for Spring Boot</description>\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>1.2.5.RELEASE</version>\n        <relativePath/>\n        \x3c!-- lookup parent from repository --\x3e\n    </parent>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <java.version>1.8</java.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-jdbc</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>5.1.34</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-jdbc</artifactId>\n            <version>${spring.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')),(0,r.kt)("p",null,"We're including ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-parent")," to get all the intelligent defaults usually required. In order to get ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring MVC")," controllers\nand database access related code (",(0,r.kt)("inlineCode",{parentName:"p"},"Spring JDBC Template")," in this case), we include ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-web"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-jdbc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-connector-java"),"\ndependencies. \xa0In order to package application as standalone jar file, we're including ",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-maven-plugin"),". After that we can import this as project in your\nown ",(0,r.kt)("inlineCode",{parentName:"p"},"IDE"),". You should create directory structure such as the one given below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 main\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 demo\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 DemoApplication.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 web\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 Person.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 PersonController.java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 resources\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 application.properties\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 static\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 templates\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 java\n\u2502\xa0\xa0         \u2514\u2500\u2500 demo\n\u2502\xa0\xa0             \u2514\u2500\u2500 DemoApplicationTests.java\n")),(0,r.kt)("p",null,"Having maven installed on your machine, you can navigate to the root of your directory, and issue: ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn spring-boot:run")," command, which should start your application, with\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"Tomcat")," server instance inside ready to accept ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," requests."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DemoApplication")," is application entry class (contains main method). It is annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"SpringBootApplication")," which bootstraps application and tries to guess the\nintelligent defaults your app might want to use based on what dependencies you listed in ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.kt)("p",null,"Our request handler can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8099/person?id=1"),". It responds to ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," request with ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," response. You can use either browser or any ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP")," client,\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"CURL"),". Our ",(0,r.kt)("inlineCode",{parentName:"p"},"Spring")," ",(0,r.kt)("inlineCode",{parentName:"p"},"MVC")," controller looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package demo.web;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.jdbc.core.JdbcTemplate;\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.ResponseBody;\n\n@Controller\npublic class PersonController {\n\n    @Autowired\n    private JdbcTemplate jdbcTemplate;\n\n    @RequestMapping(value = "/person")\n    public\n    @ResponseBody\n    Person dailyStats(@RequestParam Integer id) {\n        String query = "SELECT first_name, last_name, age" +\n                " from person where person.id = " + id;\n\n        return jdbcTemplate.queryForObject(query, (resultSet, i) -> {\n            return new Person(resultSet.getString(1), resultSet.getString(2), resultSet.getInt(3));\n        });\n\n    }\n}\n')),(0,r.kt)("p",null,"You can see that actual ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," code is quite lightweight. Our\xa0example requires database table schema such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `person` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `first_name` varchar(30) NOT NULL,\n  `last_name` varchar(40) NOT NULL,\n  `age` int(11) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `unique_id` (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1\n")),(0,r.kt)("p",null,"Once database is set up, we can run our application via already mentioned ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn spring-boot:run")," shell command."),(0,r.kt)("p",null,"Initial call takes a bit longer, while maven downloads required dependencies, and assembles ",(0,r.kt)("inlineCode",{parentName:"p"},"jar"),", which is ran afterwards."),(0,r.kt)("p",null,"\u2757 This project requires ",(0,r.kt)("inlineCode",{parentName:"p"},"Java 8 JDK"),"."),(0,r.kt)("p",null,"Source code is hosted @ ",(0,r.kt)("u",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/spring-boot-jdbc-templates"},"Github"))),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);