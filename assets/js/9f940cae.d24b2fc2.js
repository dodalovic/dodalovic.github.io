"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[5195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"JUnit testing - part I - setup with simple example",authors:["dodalovic"],tags:["technology","testing","java","junit"]},s=void 0,o={permalink:"/blog/junit-testing-part-one-setup-with-simple-example",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/junit-testing-part-one-setup-with-simple-example/index.mdx",source:"@site/blog/junit-testing-part-one-setup-with-simple-example/index.mdx",title:"JUnit testing - part I - setup with simple example",description:"JUnit is one of available Java libraries we can use to test our application code. Let\u2019s get started by building",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"testing",permalink:"/blog/tags/testing"},{label:"java",permalink:"/blog/tags/java"},{label:"junit",permalink:"/blog/tags/junit"}],readingTime:10.707692307692307,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"JUnit testing - part I - setup with simple example",authors:["dodalovic"],tags:["technology","testing","java","junit"]},prevItem:{title:"Java 8 Stream API - reduce operator",permalink:"/blog/java-8-stream-api-reduce-operator"},nextItem:{title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",permalink:"/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing"}},l={authorsImageUrls:[void 0]},p=[{value:"Generating project with JUnit support",id:"generating-project-with-junit-support",level:2},{value:"Creating System Under Test (SUT) and Test case",id:"creating-system-under-test-sut-and-test-case",level:2},{value:"Running tests and verifying results",id:"running-tests-and-verifying-results",level:2},{value:"Key takeaways",id:"key-takeaways",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," is one of available Java libraries we can use to test our application code. Let\u2019s get started by building\nsimple project using ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven"),"."),(0,i.kt)("h2",{id:"generating-project-with-junit-support"},"Generating project with JUnit support"),(0,i.kt)("p",null,"Go generate simple ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," artifact using ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven"),", which can be done quite easily using command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate -DgroupId={GROUP_ID} -DartifactId={ARTIFACT_ID} -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false\n")),(0,i.kt)("p",null,"Just execute upper line in your console, giving it some ",(0,i.kt)("inlineCode",{parentName:"p"},"{GROUP_ID}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{ARTIFACT_ID}"),". Make sure you haven ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven"),"\ninstalled and on your path, so that you can run it as described. This is not related to ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," testing, just give\nit any values, I will use ",(0,i.kt)("inlineCode",{parentName:"p"},"com.mydomain")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"{GROUP_ID}"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"junit-demo")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"{ARTIFACT_ID}"),". That should generate\nnew ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," project ready to demo ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests. You can import generated application into IDE of your choice."),(0,i.kt)("p",null,"To confirm we have all we need, open generated ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file in the root of your project and verify there\u2019s dependency to\n",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," library in there (I\u2019m using 4.12 version which is the latest stable version of ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," at the time of writing this article)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.12</version>\n    <scope>test</scope>\n</dependency>\n")),(0,i.kt)("p",null,"Once we confirm there\u2019s given dependency, we will proceed with some theory alongside example code. We will create\nsimple calculator class which can do some basic operations as adding, subtracting, multiplying, dividing numbers.\nWe want to create ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests to make sure the calculator class is working as expected and has production ready\nquality."),(0,i.kt)("h2",{id:"creating-system-under-test-sut-and-test-case"},"Creating System Under Test (SUT) and Test case"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," testing takes care of testing our application at low level, meaning we want to make sure our class methods are tested against\ndifferent conditions, and they provide expected results in such a cases. Our methods we want to test can, during application runtime,\nreceive different values for input parameters. We want to make sure our method is tested against these. Of course \u2013 not against all\npossible values, since that\u2019s not possible, but against some meaningful values, as well as some edge cases where our methods can receive,\nlet\u2019s say ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as parameter, or some other value that could potentially crush our application. Let\u2019s start writing ",(0,i.kt)("inlineCode",{parentName:"p"},"com.mydomain.Calculator.java"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests for it, ",(0,i.kt)("inlineCode",{parentName:"p"},"com.mydomain.CalculatorTest.java"),". Test classes are also known as ",(0,i.kt)("em",{parentName:"p"},"Test cases"),"."),(0,i.kt)("p",null,"It\u2019s a common practice to name test class after class we\u2019re testing (sometimes referred to as ",(0,i.kt)("em",{parentName:"p"},"System Under Test \u2013 SUT"),"), by appending ",(0,i.kt)("inlineCode",{parentName:"p"},"Test"),"\nsuffix to it. In our case, our ",(0,i.kt)("inlineCode",{parentName:"p"},"SUT")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Calculator.java"),", so our test class should be ",(0,i.kt)("inlineCode",{parentName:"p"},"CalculatorTest.java"),". Also, common practice is that test\nclass should reside in same package as ",(0,i.kt)("inlineCode",{parentName:"p"},"SUT")," one (in our case, both are in ",(0,i.kt)("inlineCode",{parentName:"p"},"com.mydomain")," package, but test class is in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/test/java")," tree, and\nSUT is in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/java"),". These are maven defaults which state that application code should go to X, whereas test code should be inside src/test\npackages. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"Calculator.java")," class should look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.mydomain;\n\npublic class Calculator {\n\n    public long add(long first, long second) {\n        return first + second;\n    }\n\n    public long subtract(long first, long second) {\n        return first - second;\n    }\n\n    public long multiply(long first, long second) {\n        return first * second;\n    }\n\n    public long divide(long first, long second) {\n        return first / second;\n    }\n\n}\n")),(0,i.kt)("p",null,"Without writing ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests for given piece of code, we can only HOPE our code will work as expected. We should be able to\nexercise this piece of code before deploying it to production so that we can be confident code is working as expected."),(0,i.kt)("p",null,"Our application should have layout such as given below (",(0,i.kt)("inlineCode",{parentName:"p"},"target")," directory is incomplete here, but that\u2019s irrelevant):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 pom.xml\n\u251c\u2500\u2500 src\n\u2502 \u251c\u2500\u2500 main\n\u2502 \u2502 \u2514\u2500\u2500 java\n\u2502 \u2502 \u2514\u2500\u2500 com\n\u2502 \u2502 \u2514\u2500\u2500 mydomain\n\u2502 \u2502 \u251c\u2500\u2500 App.java\n\u2502 \u2502 \u2514\u2500\u2500 Calculator.java\n\u2502 \u2514\u2500\u2500 test\n\u2502 \u2514\u2500\u2500 java\n\u2502 \u2514\u2500\u2500 com\n\u2502 \u2514\u2500\u2500 mydomain\n\u2502 \u251c\u2500\u2500 AppTest.java\n\u2502 \u2514\u2500\u2500 CalculatorTest.java\n\u2514\u2500\u2500 target\n")),(0,i.kt)("p",null,"Let\u2019s now write some ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests in order to exercise our application. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"CalculatorTest.java")," class could look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.mydomain;\n\nimport org.junit.Test;\n\nimport static org.hamcrest.CoreMatchers.is;\nimport static org.junit.Assert.assertThat;\n\npublic class CalculatorTest {\n@Test\npublic void twoAndThreeIsFive() throws Exception {\nfinal long result = new Calculator().add(2, 3);\nassertThat(result, is(5L));\n}\n\n    @Test\n    public void twoAndZeroIsTwo() throws Exception {\n        final long result = new Calculator().add(2, 0);\n        assertThat(result, is(2L));\n    }\n\n    @Test\n    public void twoAndMinusTwoIsZero() throws Exception {\n        final long result = new Calculator().add(2, -2);\n        assertThat(result, is(0L));\n    }\n\n    @Test\n    public void threeMinusTwoIsOne() throws Exception {\n        final long result = new Calculator().subtract(3, 2);\n        assertThat(result, is(1L));\n    }\n\n    @Test\n    public void threeMinusThreeIsZero() throws Exception {\n        final long result = new Calculator().subtract(3, 3);\n        assertThat(result, is(0L));\n    }\n\n    @Test\n    public void threeMinusMinusThreeIsSix() throws Exception {\n        final long result = new Calculator().subtract(3, -3);\n        assertThat(result, is(6L));\n    }\n\n    @Test\n    public void threeXThreeIsNine() throws Exception {\n        final long result = new Calculator().multiply(3, 3);\n        assertThat(result, is(9L));\n    }\n\n    @Test\n    public void threeXZeroIsZero() throws Exception {\n        final long result = new Calculator().multiply(3, 0);\n        assertThat(result, is(0L));\n    }\n\n    @Test\n    public void threeXMinusThreeIsMinusNine() throws Exception {\n        final long result = new Calculator().multiply(3, -3);\n        assertThat(result, is(-9L));\n    }\n\n}\n")),(0,i.kt)("p",null,"Idea is to exercise our ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," methods present in ",(0,i.kt)("inlineCode",{parentName:"p"},"Calculator.java")," class. We should give it various inputs, and assert that\nresults are as expected. In order to create ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," test, we should just mark our method with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Test")," ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," annotation\n(",(0,i.kt)("inlineCode",{parentName:"p"},"org.junit.Test"),"). When we execute this set of tests we wrote, ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," will executed all methods marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Test")," annotation."),(0,i.kt)("p",null,"In each test method we have two phases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"SUT")," method for particular input (parameters)"),(0,i.kt)("li",{parentName:"ul"},"Assert that result matches our expectancy (e.g. we assert that 3 x 3 should be 9)")),(0,i.kt)("h2",{id:"running-tests-and-verifying-results"},"Running tests and verifying results"),(0,i.kt)("p",null,"The easy way to run all the tests is to package our application, using ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven")," command in our command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean package\n")),(0,i.kt)("p",null,"In console output, after our application code was compiled, we can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests are executed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n## T E S T S\n\nRunning com.mydomain.AppTest\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.013 sec - in com.mydomain.AppTest\nRunning com.mydomain.CalculatorTest\nTests run: 9, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.004 sec - in com.mydomain.CalculatorTest\nResults :\nTests run: 10, Failures: 0, Errors: 0, Skipped: 0\n")),(0,i.kt)("p",null,"We can see that there\u2019s total of 9 tests being run in ",(0,i.kt)("inlineCode",{parentName:"p"},"CalculatorTest.java")," and that there were no failures (",(0,i.kt)("inlineCode",{parentName:"p"},"Failures: 0"),"\nin log output). If some tests were failing, we would be presented with an error message, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven")," build would have\nfailed. Let\u2019s change implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"threeMinusMinusThreeIsSix")," method to wrongly assert that 3 multiplied by -3 should be 2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void threeMinusMinusThreeIsSix() throws Exception {\nfinal long result = new Calculator().subtract(3, -3);\nassertThat(result, is(2L));\n}\n")),(0,i.kt)("p",null,"When repeating upper ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven")," command to package app, we will get output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n## T E S T S\n\nRunning com.mydomain.AppTest\nTests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.013 sec - in com.mydomain.AppTest\nRunning com.mydomain.CalculatorTest\nTests run: 9, Failures: 1, Errors: 0, Skipped: 0, Time elapsed: 0.027 sec <<< FAILURE! - in com.mydomain.CalculatorTest\nthreeMinusMinusThreeIsSix(com.mydomain.CalculatorTest) Time elapsed: 0.005 sec <<< FAILURE!\njava.lang.AssertionError:\nExpected: is <2L>\nbut: was <6L>\n\n....\n\nTests run: 10, Failures: 1, Errors: 0, Skipped: 0\n\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD FAILURE<\n")),(0,i.kt)("p",null,"We clearly see that build failed, and what\u2019s causing build to fail. It\u2019s quite handy we can quickly execute tests and easily\nsee if something is failing and why. Test can fail if ",(0,i.kt)("inlineCode",{parentName:"p"},"SUT")," has issues, or ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests are not properly written (such as we did\nabove \u2013 just for demo purpose)."),(0,i.kt)("p",null,"Bare in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," test should have quality standards same as application code, so make sure you apply all the good practices\nyou already apply to application code. Also, ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," tests should be independent of each other, and must be able to run in any order\ngiven. They should also be quick to execute and easy to verify results."),(0,i.kt)("h2",{id:"key-takeaways"},"Key takeaways"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," is library for automated unit testing"),(0,i.kt)("p",null,"Idea is to exercise the application code for various cases before application goes live, thus preventing issues that might happen during\napplication runtime."),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," test should be independent of other tests, and should be able to run fast, so that we can execute them frequently."),(0,i.kt)("p",null,"The next post will be related to extending ",(0,i.kt)("inlineCode",{parentName:"p"},"JUnit")," test using ",(0,i.kt)("inlineCode",{parentName:"p"},"Mockito")," library."),(0,i.kt)("p",null,"Hope you liked the post and feel free to download application sources at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/blog-junit-testing"},"GitHub"),"."),(0,i.kt)("p",null,"That was all for today! Hope you liked it!"))}d.isMDXComponent=!0}}]);