"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[8429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"Java 8 Stream API - reduce operator",authors:["dodalovic"],tags:["technology","java8"],enableComments:!0},o=void 0,l={permalink:"/blog/java-8-stream-api-reduce-operator",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/java-8-stream-api-reduce-operator/index.mdx",source:"@site/blog/java-8-stream-api-reduce-operator/index.mdx",title:"Java 8 Stream API - reduce operator",description:"Right after blog post covering Stream.flatMap() operator, we'll also cover another important Stream operator called - reduce. We'll go straight away with an example.",date:"2023-03-27T08:53:53.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"java8",permalink:"/blog/tags/java-8"}],readingTime:7.984615384615385,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Java 8 Stream API - reduce operator",authors:["dodalovic"],tags:["technology","java8"],enableComments:!0},prevItem:{title:"Java 8 flatMap stream operator",permalink:"/blog/java-8-flatmap-stream-operator"},nextItem:{title:"JUnit testing - part I - setup with simple example",permalink:"/blog/junit-testing-part-one-setup-with-simple-example"}},s={authorsImageUrls:[void 0]},p=[{value:"Key takeaways",id:"key-takeaways",level:2}],m={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Right after blog post covering ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream.flatMap()")," operator, we'll also cover another important ",(0,r.kt)("inlineCode",{parentName:"p"},"Stream")," operator called - reduce. We'll go straight away with an example."),(0,r.kt)("p",null,"Say we have a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Java Bean"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package rs.dodalovic.streams.reduce;\n\nclass Person {\n    private String name;\n    private Gender gender;\n    private Integer age;\n\n    public Person(String name, Gender gender, Integer age) {\n        this.name = name;\n        this.gender = gender;\n        this.age = age;\n    }\n\n    static enum Gender {\n        MALE, FEMALE;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public Gender getGender() {\n        return gender;\n    }\n\n    public Integer getAge() {\n        return age;\n    }\n\n    public void setAge(Integer age) {\n        this.age = age;\n    }\n\n    @Override\n    public String toString() {\n        return \"Person{\" +\n                \"name='\" + name + '\\'' +\n                \", gender=\" + gender +\n                '}';\n    }\n}\n")),(0,r.kt)("p",null,"Our task is to iterate through list of persons and find:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Female person with the longest name and print the details"),(0,r.kt)("li",{parentName:"ul"},"Longest female name only and print the details"),(0,r.kt)("li",{parentName:"ul"},"Youngest male and print his/her age")),(0,r.kt)("p",null,"Here's our reduce operator showcase right below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package rs.dodalovic.streams.reduce;\n\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Optional;\nimport java.util.OptionalInt;\nimport java.util.function.Predicate;\n\npublic class ReduceDemo {\n    public static void main(String[] args) {\n\n        final List<Person> persons = Arrays.asList(\n                new Person("Jeanny", Person.Gender.FEMALE, 22),\n                new Person("Jim", Person.Gender.MALE, 25),\n                new Person("Alicia", Person.Gender.FEMALE, 32),\n                new Person("Jennifer", Person.Gender.FEMALE, 38),\n                new Person("Anastasia", Person.Gender.FEMALE, 19),\n                new Person("John", Person.Gender.MALE, 22),\n                new Person("Jimmy", Person.Gender.MALE, 38),\n                new Person("Michael", Person.Gender.MALE, 15)\n        );\n        printFemaleWithLongestName(persons);\n        printLongestFemaleNameOnly(persons);\n        printYoungestMaleAge(persons);\n        printYoungestMaleAgeUsingMin(persons);\n    }\n\n    private static void printFemaleWithLongestName(List<Person> persons) {\n        final Optional<Person> personWithLongestName = persons.stream()\n                .filter(onlyGender(Person.Gender.FEMALE))\n                .reduce((person, person2) -> person.getName().length() > person2.getName().length() ? person : person2);\n        personWithLongestName.ifPresent(person -> System.out.printf("Person with longest female name %s%n",\n                personWithLongestName));\n    }\n\n    private static void printLongestFemaleNameOnly(List<Person> persons) {\n        persons.stream()\n                .filter(onlyGender(Person.Gender.FEMALE))\n                .map(Person::getName)\n                .reduce((person1Name, person2Name) -> person1Name.length() > person2Name.length() ? person1Name :\n                        person2Name)\n                .ifPresent(longestName -> System.out.printf("Longest female name: %s%n", longestName));\n    }\n\n    private static void printYoungestMaleAge(List<Person> persons) {\n        final Integer youngestMaleAge = persons.stream()\n                .filter(onlyGender(Person.Gender.MALE))\n                .map(Person::getAge)\n                .reduce(Integer.MAX_VALUE, (age1, age2) -> age1 < age2 ? age1 : age2);\n        System.out.printf("Youngest male age: %d%n", youngestMaleAge);\n    }\n\n    private static void printYoungestMaleAgeUsingMin(List<Person> persons) {\n        final OptionalInt youngest = persons.stream()\n                .filter(onlyGender(Person.Gender.MALE))\n                .mapToInt(Person::getAge)\n                .min();\n        youngest.ifPresent(value -> System.out.printf("Youngest male age: %d", value));\n    }\n\n    private static Predicate<Person> onlyGender(Person.Gender gender) {\n        return person -> person.getGender() == gender;\n    }\n}\n')),(0,r.kt)("p",null,"First - we initialize our sample person list that we'll operate on. To find the person with the longest name, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"printFemaleWithLongestName()")," method. What we do there is first taking stream out of list\n(call to ",(0,r.kt)("inlineCode",{parentName:"p"},"stream()")," method), followed by filtering stream to keep ",(0,r.kt)("inlineCode",{parentName:"p"},"Gender.FEMALE")," persons only and then calling our ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," method. The parameter it receives is ",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryOperator<T, T, T>"),", which is\nbasically a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," receiving two (same type) parameters, and returning value of that same type. This ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," will be called either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n-1")," times, where ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," is number of elements in underlying collection, in case we didn't supply initial / default value to ",(0,r.kt)("inlineCode",{parentName:"li"},"reduce()")," call"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n")," times otherwise")),(0,r.kt)("p",null,"So, in case we have collection of elements ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," - function will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," times (if we haven't supplied initial value to ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()"),") with parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first call will be with ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"B")," elements of collection"),(0,r.kt)("li",{parentName:"ul"},"the second call will take result of previous function call as the first value, and ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," as the second"),(0,r.kt)("li",{parentName:"ul"},"similarly, the third call will take result of second function call as the first value, and ",(0,r.kt)("inlineCode",{parentName:"li"},"D")," as the second")),(0,r.kt)("p",null,"If we passed the initial/default value, function would have been called ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," times, with the only difference that the first call will have that initial/default value as the first parameter, and ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," as the\nsecond one. Afterwards algorithm stays the same."),(0,r.kt)("p",null,"In case of ",(0,r.kt)("inlineCode",{parentName:"p"},"printFemaleWithLongestName()")," function, for each pair of persons combinations we ask:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"(person, person2) -> person.getName().length() > person2.getName().length() ? person : person2\n")),(0,r.kt)("p",null,"In case ",(0,r.kt)("inlineCode",{parentName:"p"},"person"),"'s name is longer than person2",(0,r.kt)("inlineCode",{parentName:"p"},"'s - we return the first person, otherwise - person2"),". So, after traversing each two pairs of persons, we'll at the end have as a result of call to ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Optional"),".")),(0,r.kt)("p",null,"Returning ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," is fine since it might be the case that list we're streaming through might be empty one, so we can't actually get the person with longest name there. That's why, in this case, we\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"ifPresent()")," at the end - passing it ",(0,r.kt)("inlineCode",{parentName:"p"},"Consumer")," to do with our ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," object whatever we like."),(0,r.kt)("p",null,"The other example, ",(0,r.kt)("inlineCode",{parentName:"p"},"printLongestFemaleNameOnly")," , only differs that we're calling ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," to transform ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," instances to ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," instance name field. After that we similarly call reduce operator,\ncomparing lengths in there, and the same as the first time, if underlying collection wasn't empty, we extract from resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," value, which represents longest female name in given list."),(0,r.kt)("p",null,"In case of ",(0,r.kt)("inlineCode",{parentName:"p"},"printYoungestMaleAge")," method, we're first filter to keep males only by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate")," ",(0,r.kt)("inlineCode",{parentName:"p"},"onlyGender(Person.Gender.FEMALE)")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"filter()")," call. Afterwards, we're transform underlying\nlist ato convert to list of person ages by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," passing ",(0,r.kt)("inlineCode",{parentName:"p"},"Person::getAge")," conversion function to it. After that we're calling ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," function with slightly overloaded signature.\nThis one accepts initial / default value as a first parameter, and ",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryOperator")," as second one. If underlying collection is empty, ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," will return initial/default value passed to\nit (",(0,r.kt)("inlineCode",{parentName:"p"},"Integer.MAX_VALUE"),"), otherwise - similarly what we had in our previous cases, we iterate through all pairs of Persons and return finally the one that's the youngest. The only difference,\nin this case is that if underlying collection is ",(0,r.kt)("inlineCode",{parentName:"p"},"empty()"),", we won't return empty ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," but rather default value we passed as the first parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce()")," function."),(0,r.kt)("p",null,"Another, slightly easier way to achieve minimum age calculation is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"min()")," terminal operator on ",(0,r.kt)("inlineCode",{parentName:"p"},"IntStream"),". This is demonstrated in ",(0,r.kt)("inlineCode",{parentName:"p"},"printYoungestMaleAgeUsingMin")," method. The only differences\nare that instead of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),", we call ",(0,r.kt)("inlineCode",{parentName:"p"},"mapToInt()")," which converts existing stream to ",(0,r.kt)("inlineCode",{parentName:"p"},"IntStream"),", which is convenient since it has methods such as ",(0,r.kt)("inlineCode",{parentName:"p"},"sum()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"min()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max()"),"."),(0,r.kt)("p",null,"Source code as Github ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/dodalovic/50aafc5d9ff65255e314"},"gist")),(0,r.kt)("h2",{id:"key-takeaways"},"Key takeaways"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reduce")," operator is terminal operator that helps us extract single value from underlying stream. Accumulator function is called either ",(0,r.kt)("inlineCode",{parentName:"p"},"n-1")," times for collection of n elements if we haven't provided\ninitial / default value as the first parameter, or ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," times - if we did (see algorithm description above)."),(0,r.kt)("p",null,"That was all for today! Hope you liked it!"))}c.isMDXComponent=!0}}]);