"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[5228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",authors:["dodalovic"],tags:["technology","testing","java","junit"]},r=void 0,l={permalink:"/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing/index.mdx",source:"@site/blog/junit-testing\u2013part-two\u2013using-mockito-for-dependencies-stubbing/index.mdx",title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",description:"So, in case you haven\u2019t read the first part in this series,",date:"2023-03-27T08:46:47.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"testing",permalink:"/blog/tags/testing"},{label:"java",permalink:"/blog/tags/java"},{label:"junit",permalink:"/blog/tags/junit"}],readingTime:14.892307692307693,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"JUnit testing - part II \u2013 using mockito for dependencies stubbing",authors:["dodalovic"],tags:["technology","testing","java","junit"]},prevItem:{title:"JUnit testing - part I - setup with simple example",permalink:"/blog/junit-testing-part-one-setup-with-simple-example"},nextItem:{title:"Kotlin powered Spring Boot app consuming NBA Rest Api",permalink:"/blog/kotlin-powered-spring-boot-app-consuming-nba-rest-api"}},s={authorsImageUrls:[void 0]},p=[{value:"Key takeaways",id:"key-takeaways",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So, in case you haven\u2019t read ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"/blog/junit-testing-part-one-setup-with-simple-example"},"the first part"))," in this series,\nwhich is giving some basic introduction to the idea of ",(0,o.kt)("inlineCode",{parentName:"p"},"JUnit")," testing \u2013 go ahead, I\u2019ll wait till you\u2019re back so that we can\nproceed with the next steps."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Yes, I\u2019ve got the basics, go on.")),(0,o.kt)("p",null,"Great. Let\u2019s now proceed with getting testing support in case our ",(0,o.kt)("em",{parentName:"p"},"System Under Test (SUT)")," has some collaborator objects,\nwhich is the case most often, and we want to configure behavior of these objects in our ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," tests."),(0,o.kt)("p",null,"For such a thing we\u2019ll use ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," library. In real life our ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," depends on other collaborators to help him complete his\nresponsibility. Might be that we\u2019re about to build an app that is some sort of music streaming one, and we\u2019re creating ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService"),"\nto list favorite playlists for current user. It may be that we\u2019ll make ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService")," dependant on ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaylistService")," that is\ncapable of returning playlists for particular user."),(0,o.kt)("p",null,"So, in such a case, in order to test our ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService")," in isolation, we\u2019ll have to configure our collaborator \u2013 ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaylistService"),"\nin terms of behavior, so that we can test our ",(0,o.kt)("inlineCode",{parentName:"p"},"UserService")," for such a behavior(s)."),(0,o.kt)("p",null,"During application runtime, in various situations, our collaborators might return some values, sometimes they return empty collections,\nor might throw an exception. Idea is that we\u2019d like to mimic these kind of situations in our tests, so that we confirm our SUT works as\nplanned for different collaborators behaviors."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"OK.. How do I get ",(0,o.kt)("inlineCode",{parentName:"strong"},"Mockito"),"? Hope I don\u2019t need bunch of Jars downloaded and configured \u2013 just to get started.")),(0,o.kt)("p",null,"No, not at all. We\u2019ll continue coding from where we left off after completing the first part."),(0,o.kt)("p",null,"We\u2019ll use ",(0,o.kt)("inlineCode",{parentName:"p"},"Maven")," to help us do dependency setup, so we\u2019ll open our pom.xml and insert our dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.mockito</groupId>\n    <artifactId>mockito-core</artifactId>\n    <version>1.10.19</version>\n    <scope>test</scope>\n</dependency>\n")),(0,o.kt)("p",null,"All we had to do is inserting this snippet inside ",(0,o.kt)("inlineCode",{parentName:"p"},"<dependencies>")," tag of our ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Maven")," will get ",(0,o.kt)("inlineCode",{parentName:"p"},"mockito-core-1.10.19.jar"),"\ndownloaded for us and ready to use in our tests."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Can I see ",(0,o.kt)("inlineCode",{parentName:"strong"},"Mockito")," in action? You can explain me the details on the fly\u2026")),(0,o.kt)("p",null,"Sure. Once we did dependency setup, we can create simple test case to show the first basic steps. Let\u2019s create ",(0,o.kt)("inlineCode",{parentName:"p"},"MockListTest.java")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.mydomain.mock_list;\n\nimport org.JUnit.Before;\nimport org.JUnit.Test;\nimport org.mockito.BDDMockito;\nimport org.mockito.Mock;\nimport org.mockito.MockingDetails;\nimport org.mockito.MockitoAnnotations;\n\nimport java.util.List;\n\nimport static org.JUnit.Assert.assertTrue;\nimport static org.mockito.BDDMockito.given;\nimport static org.mockito.Mockito.mock;\n\npublic class MockListTest {\n\n    @Mock\n    List<Integer> integerList;\n\n    @Before\n    public void setUp() throws Exception {\n        MockitoAnnotations.initMocks(this);\n    }\n\n    @Test\n    public void mockListWithoutAnnotations() throws Exception {\n        /* given */\n        final List mockedList = mock(List.class);\n\n        given(mockedList.get(3)).willReturn(3);\n        given(mockedList.size()).willReturn(1);\n\n        mockedList.add(2);\n        mockedList.add(3);\n        mockedList.add(4);\n        mockedList.add(5);\n\n        /* when */\n        final int listSize = mockedList.size();\n\n        /* then */\n\n        final MockingDetails mockingDetails = BDDMockito.mockingDetails(mockedList);\n        assertTrue(mockingDetails.getInvocations().size() == 5);\n        assertTrue(listSize == 1);\n    }\n\n    @Test\n    public void useInjectedMock() throws Exception {\n        given(integerList.size()).willReturn(1, 2, 3);\n        integerList.add(3);\n        assertTrue(integerList.size() == 1);\n        integerList.add(4);\n        assertTrue(integerList.size() == 2);\n        integerList.add(5);\n        assertTrue(integerList.size() == 3);\n    }\n}\n")),(0,o.kt)("p",null,"Let\u2019s first analyze ",(0,o.kt)("inlineCode",{parentName:"p"},"mockListWithoutAnnotations()")," test method. We statically imported several ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," methods in imports area,\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito.mock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BDDMockito.given"),", so that our code is more readable. The first usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," API is a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"mock()"),"\nmethod, which creates mocked instance of given interface / class."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Mocked instance?")),(0,o.kt)("p",null,"Yes. In real life we mock our collaborator objects. Here we just mocked an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," interface. We use mocking to setup\nsome behavior of collaborators, and we want to check how our ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," behaves in such a case."),(0,o.kt)("p",null,"Tests given above are not realistic since they don\u2019t test any ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT"),", here we\u2019re just creating demo how to use APIs. ",(0,o.kt)("inlineCode",{parentName:"p"},"mock")," method\nreceives ",(0,o.kt)("inlineCode",{parentName:"p"},"Class")," parameter, which is the type we wan\u2019t to mock."),(0,o.kt)("p",null,"Another way is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mock")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," annotation. We can just have a class field annotated with annotation and some additional plumbing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we should call ",(0,o.kt)("inlineCode",{parentName:"li"},"MockitoAnnotations.initMocks(this)")," inside ",(0,o.kt)("inlineCode",{parentName:"li"},"@Before")," annotated setup method (it\u2019s called by framework once before every test method is executed)."),(0,o.kt)("li",{parentName:"ul"},"annotate Test class with ",(0,o.kt)("inlineCode",{parentName:"li"},"@RunWith(MockitoJUnitRunner.class)"))),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"What happens if we don\u2019t configure mocked object and it\u2019s methods get called?")),(0,o.kt)("p",null,"Non ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," methods return by default an \u201cempty\u201d value appropriate for its type (",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", empty collection)."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"You said we can configure behavior of collaborator objects\u2026 How?")),(0,o.kt)("p",null,"There\u2019s a sequence called ",(0,o.kt)("strong",{parentName:"p"},"Arrange \u2013 Act \u2013 Assert (AAA)")," which is to be followed in ",(0,o.kt)("inlineCode",{parentName:"p"},"JUnit")," tests implementation. In ",(0,o.kt)("strong",{parentName:"p"},"Arrange"),"\nphase we create mock instances, and configure their behavior. After that, in ",(0,o.kt)("strong",{parentName:"p"},"Act")," phase, we call ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," method we want tested. Finally,\nin ",(0,o.kt)("strong",{parentName:"p"},"Assert")," phase, we assert various conditions to check if ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," executed as expected in given context."),(0,o.kt)("p",null,"There\u2019s another way to express your tests, which is part of ",(0,o.kt)("strong",{parentName:"p"},"Behavior Driven Development"),", which states test steps as ",(0,o.kt)("strong",{parentName:"p"},"Given \u2013 When \u2013 Then (GWT)"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BDDMockito.given(mockedList.get(3)).willReturn(3)")," is an example of stubbing mocks for expected behavior using ",(0,o.kt)("inlineCode",{parentName:"p"},"GWT"),". Pretty self explanatory \u2013 we\nconfigure mock to return value 3 when mocked List instance is asked to return value at the index of 3."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BDDMockito.given")," returns as a result instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"BDDMyOngoingStubbing"),", which has the following API to use when stubbing mocks in our tests: ",(0,o.kt)("inlineCode",{parentName:"p"},"willAnswer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"will"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"willReturn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"willThrow"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"willCallRealMethod"),". Most often you\u2019ll probably use ",(0,o.kt)("inlineCode",{parentName:"p"},"willReturn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"willThrow")," when stubbing your collaborators."),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"AAA")," style, we can configure the same stubbing as ",(0,o.kt)("inlineCode",{parentName:"p"},"GWT")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito.when(mockedList.get(2)).thenReturn(2)")," syntax. We will not cover the differences\nbetween ",(0,o.kt)("inlineCode",{parentName:"p"},"AAA")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GWT")," styles. I use ",(0,o.kt)("inlineCode",{parentName:"p"},"GWT")," style but you can use the one you feel comfortable with."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"What about argument matching?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mockito"),", by default, uses equals() for arguments matching. Let\u2019s see it in action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void testArguments() throws Exception {\n    final String someString = "some string";\n    final String notMe = "not me";\n    final List<String> mockedList = (List<String>) mock(List.class);\n\n    given(mockedList.add(someString)).willReturn(true);\n    given(mockedList.add(Matchers.startsWith("can\'t add"))).willReturn(false);\n    given(mockedList.add(Matchers.eq(notMe))).willReturn(false);\n\n    assertTrue(mockedList.add(someString));\n    assertFalse(mockedList.add("can\'t add 1"));\n    assertFalse(mockedList.add("can\'t add 2"));\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Matchers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AdditionalMatchers")," APIs provide large set of useful matchers we can use. We have fine grained control of configuring\nmocks using these. Given above, we\u2019re using ",(0,o.kt)("inlineCode",{parentName:"p"},"Matchers.startsWith")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Matchers.eq"),". So, we can configure mocks to return specific value\nfor exact value of argument it receives, or some other value if argument is / isn\u2019t null, or in case of ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," we can configure behavior\ndepending on if argument starts with some sequence, ends with, and so forth. Quite often you may find useful family of ",(0,o.kt)("inlineCode",{parentName:"p"},"any()")," methods,\nso you can use it to mock methods of particular type, so if mock method receives ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," you can mock it using ",(0,o.kt)("inlineCode",{parentName:"p"},"Matchers.anyInt()")," matcher."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"What about stubbing ",(0,o.kt)("inlineCode",{parentName:"strong"},"void")," methods?")),(0,o.kt)("p",null,"Let\u2019s do it with an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void stubVoidMethods() throws Exception {\n    List<String> list = ((List<String>) mock(List.class));\n\n    BDDMockito.willDoNothing().given(list).clear();\n    BDDMockito.willThrow(Exception.class).given(list).clear();\n\n    Mockito.doNothing().when(list).clear();\n    Mockito.doThrow(Exception.class).when(list).clear();\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"List.clear()")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," method, and we can configure ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," methods to either do nothing (which is default, so we don\u2019t need to\nconfigure this) or to throw an exception, as shown in the snippet above."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"And how do I verify if mocked collaborators were actually called?")),(0,o.kt)("p",null,"For such a purpose we can call ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito.verify")," API. Verification example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Test\npublic void verificationExample() throws Exception {\n    final Calculator calculator = mock(Calculator.class);\n    verify(calculator, Mockito.never()).add(anyLong(), anyLong());\n    calculator.divide(2, 5);\n    verify(calculator, times(1)).divide(2, 5);\n    verify(calculator, atMost(0)).multiply(anyLong(), anyLong());\n    verify(calculator, never()).add(anyLong(), anyLong());\n    Mockito.verifyZeroInteractions(calculator);\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"verify")," has a following signature: ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito.verify(Mock mock,VerificationMode mode)"),". It receives ",(0,o.kt)("inlineCode",{parentName:"p"},"VerificationMode")," as second parameter,\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," class has some built-in verification modes at your disposal: ",(0,o.kt)("inlineCode",{parentName:"p"},"times(int)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"atMost(int)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"never()")," and so on. Given example\nabove should be pretty self-explanatory. Feel free to explore all verification modes and how to use them by reading ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," Javadoc.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," class also contains ",(0,o.kt)("inlineCode",{parentName:"p"},"verifyZeroInteractions")," static method that receives varargs of mocks, and returns true if there were no\ninteractions with given mocks, false otherwise."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Can I capture actual value passed to mock, in order to make some asserts on it?")),(0,o.kt)("p",null,"Great question! Mockito has ",(0,o.kt)("inlineCode",{parentName:"p"},"ArgumentCaptor<T>")," class that is to be used in such a case. Let\u2019s show how to do that with simple example.\nSay we have a class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package com.mydomain.sut_and_collaborator;\n\npublic class MySystemUnderTest {\n    private Collaborator collaborator;\n\n    public MySystemUnderTest(Collaborator collaborator) {\n        this.collaborator = collaborator;\n    }\n\n    public boolean doSomeStuff(String withArgument) {\n        return collaborator.doStuff(withArgument);\n    }\n}\n")),(0,o.kt)("p",null,"Our Collaborator looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.mydomain.sut_and_collaborator;\n\npublic class Collaborator {\n    public boolean doStuff(String withArgument) {\n        return withArgument.contains("some-thing");\n    }\n}\nFinally, we\u2019re testing our system under test:\n\n@Test\npublic void argumentCaptor() throws Exception {\n    final Collaborator collaborator = mock(Collaborator.class);\n    ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);\n    final boolean result = new MySystemUnderTest(collaborator).doSomeStuff("my param");\n    verify(collaborator).doStuff(captor.capture());\n    assertTrue(captor.getValue().equals("my param"));\n    assertFalse(result);\n}\n')),(0,o.kt)("p",null,"We\u2019re calling ",(0,o.kt)("inlineCode",{parentName:"p"},"doSomeStuff")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"MySystemUnderTest")," class. All it does is delegating a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Collaborator")," class. We want to assert that\ncollaborator object received expected value as an argument. In order to capture value that collaborator received, we need to create\n",(0,o.kt)("inlineCode",{parentName:"p"},"ArgumentCaptor<T>"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," is type of argument method of collaborator object receives. In our case what gets executed is ",(0,o.kt)("inlineCode",{parentName:"p"},"collaborator.doStuff(String arg)"),".\nSo, we need argument captor of ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," type. So, in order to capture value passed to collaborator during ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," method test, we need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"ArgumentCaptor<T>")," instance"),(0,o.kt)("li",{parentName:"ul"},"Execute method call on ",(0,o.kt)("inlineCode",{parentName:"li"},"SUT")," (that calls our collaborator method)"),(0,o.kt)("li",{parentName:"ul"},"verify collaborator method is executed passing ",(0,o.kt)("inlineCode",{parentName:"li"},"captor.capture()")," as a method argument"),(0,o.kt)("li",{parentName:"ul"},"call ",(0,o.kt)("inlineCode",{parentName:"li"},"captor.getValue()")," to obtain captured value")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ArgumentCaptor<T>")," has also ",(0,o.kt)("inlineCode",{parentName:"p"},"getAllValues() : List<T>")," method, that either returns all values if collaborator method receives varargs, or,\nin case method was called multiple times \u2013 list containing these values. Feel free to experiment with captor to get used to technique of\ncapturing mock method arguments. Argument captor can be created at a test class field level by just putting ",(0,o.kt)("inlineCode",{parentName:"p"},"@Captor")," annotation (note that\nthe same configuration is required as for ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mock")," usage \u2013 described above) on the field itself, e.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Captor\nArgumentCaptor captor;\n")),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Can I somehow stub real objects behavior, not mocked ones only?")),(0,o.kt)("p",null,"Yes, ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," provides support for that. Usually, you don\u2019t want to mock real objects, but in case you need that, ",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito")," has\n",(0,o.kt)("inlineCode",{parentName:"p"},"Mockito.spy")," API, as well as ",(0,o.kt)("inlineCode",{parentName:"p"},"@Spy")," annotation. Basic idea is that we need to create a spy (proxy object) that will delegate all\ncalls to real object, unless we say we want to override behavior of real object method(s). Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void spyExample() throws Exception {\n    final MySystemUnderTest realSUT = new MySystemUnderTest(new Collaborator());\n    final MySystemUnderTest spySUT = Mockito.spy(realSUT);\n    final String argument = "Argument";\n    doReturn(false).when(spySUT).doSomeStuff(argument);\n    final boolean result = spySUT.doSomeStuff(argument);\n    assertFalse(result);\n}\n')),(0,o.kt)("p",null,"An example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"Spy")," annotation (note that the same configuration is required as for ",(0,o.kt)("inlineCode",{parentName:"p"},"@Mock")," usage \u2013 described above) is having\na field of our Test case declared such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Spy\nMySystemUnderTest systemUnderTest = new MySystemUnderTest(new Collaborator());\n")),(0,o.kt)("p",null,"If we want to stub behavior of particular ",(0,o.kt)("inlineCode",{parentName:"p"},"SUT")," spy, we need to use either of ",(0,o.kt)("inlineCode",{parentName:"p"},"doXXX")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"willXXX")," methods family. In our case we called"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"doReturn(false).when(spySUT).doSomeStuff(argument);\n")),(0,o.kt)("p",null,"Using Behavior Driven style, we\u2019d accomplish the same using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"willReturn(false).given(spySUT).doSomeStuff(argument);\n")),(0,o.kt)("p",null,"This way, in case we really need this feature, we can override method behavior of real object."),(0,o.kt)("p",null,"\ud83d\udc69 ",(0,o.kt)("strong",{parentName:"p"},"Are there any limitations when using ",(0,o.kt)("inlineCode",{parentName:"strong"},"Mockito"),"?")),(0,o.kt)("p",null,"Yes. Although there are hacks how to make workarounds (which might lead to tests hard to understand / maintain), Mockito can\u2019t:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mock final classes and enums"),(0,o.kt)("li",{parentName:"ul"},"mock final / static / private methods")),(0,o.kt)("h2",{id:"key-takeaways"},"Key takeaways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mockito is a helper library tailored to perfectly fit ",(0,o.kt)("inlineCode",{parentName:"li"},"JUnit")," tests development"),(0,o.kt)("li",{parentName:"ul"},"It provides us facilities to configure behavior of our ",(0,o.kt)("inlineCode",{parentName:"li"},"SUT"),"\u2019s collaborator(s)"),(0,o.kt)("li",{parentName:"ul"},"With quite a lightweight syntax, it\u2019s pretty easy to use & configure for own needs"),(0,o.kt)("li",{parentName:"ul"},"Basic idea is to mock collaborator objects for a specific behavior and after that test our SUT for given collaborator behavior.")),(0,o.kt)("p",null,"Source code can be checked out from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dodalovic/blog-JUnit-testing"},"Github")),(0,o.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);