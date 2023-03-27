"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[7274],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=f(e,["components","mdxType","originalType","parentName"]),p=l(t),h=i,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return t?a.createElement(d,r(r({ref:n},s),{},{components:t})):a.createElement(d,r({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=h;var f={};for(var c in n)hasOwnProperty.call(n,c)&&(f[c]=n[c]);f.originalType=e,f[p]="string"==typeof e?e:i,r[1]=f;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>f,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const o={title:"Zero boilerplate implementing state pattern in kotlin",authors:["dodalovic"],tags:["technology","patterns","kotlin"]},r=void 0,f={permalink:"/blog/state-pattern-in-kotlin",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/state-pattern-in-kotlin/index.mdx",source:"@site/blog/state-pattern-in-kotlin/index.mdx",title:"Zero boilerplate implementing state pattern in kotlin",description:"State pattern is a pretty nice solution for solving",date:"2023-03-27T05:49:54.000Z",formattedDate:"March 27, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"patterns",permalink:"/blog/tags/patterns"},{label:"kotlin",permalink:"/blog/tags/kotlin"}],readingTime:3.5153846153846153,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Zero boilerplate implementing state pattern in kotlin",authors:["dodalovic"],tags:["technology","patterns","kotlin"]},prevItem:{title:"Standardizing micro-service frameworks across development teams",permalink:"/blog/standardizing-micro-service-frameworks-across-development-teams"},nextItem:{title:"Stop reading technical books, read blogs",permalink:"/blog/stop-reading-technical-books-start-reading-blogs"}},c={authorsImageUrls:[void 0]},l=[],s={toc:l},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/State_pattern"},"State pattern")," is a pretty nice solution for solving\nproblems related to changing behavior of some component(class) at runtime, which varies depending on\ncurrent state of that object."),(0,i.kt)("p",null,"Clients of our class having dynamic behavior have an impression that,\nupon interaction with that class, it seems like there\u2019s different implementation of that object as of\nthat interaction. There\u2019s no magic involved \u2013 we\u2019re just using composition, and our dynamic object just\ndelegates call to ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," object it encapsulates. Interface of ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," object defines set of actions\n(methods) that change behavior of our wrapping class (set of actions that cause system to transition).\n",(0,i.kt)("inlineCode",{parentName:"p"},"State")," implementations are those that are in charge of making transitions from state to state."),(0,i.kt)("p",null,"Here\u2019s an example of coffee machine, that acts differently based on state it\u2019s currently in.\nHere, ",(0,i.kt)("inlineCode",{parentName:"p"},"CoffeeMachine")," is our dynamic class, and it encapsulates instance of our ",(0,i.kt)("inlineCode",{parentName:"p"},"CoffeeMachineState")," interface.\nWe initially set ",(0,i.kt)("inlineCode",{parentName:"p"},"Off")," implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," when starting our coffee machine. Then, our implementations\ntransition the state, based on different actions being performed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'package patterns.state\n\nclass CoffeeMachine {\n    var state: CoffeeMachineState\n    val MAX_BEANS_QUANTITY = 100\n    val MAX_WATER_QUANTITY = 100\n    var beansQuantity = 0\n    var waterQuantity = 0\n    val offState = Off(this)\n    val noIngredients = NoIngredients(this)\n    val ready = Ready(this)\n\n    init {\n        state = offState\n    }\n\n    fun turnOn() = state.turnOn()\n    fun fillInBeans(quantity: Int) = state.fillInBeans(quantity)\n    fun fillInWater(quantity: Int) = state.fillInWater(quantity)\n    fun makeCoffee() = state.makeCoffee()\n    fun turnOff() = state.turnOff()\n\n    override fun toString(): String {\n        return """COFFEE MACHINE \u2192 ${state::class.simpleName}\n        |   water quantity : $waterQuantity\n        |   beans quantity : $beansQuantity\n        |""".trimMargin()\n    }\n}\n\nabstract class CoffeeMachineState(val coffeeMachine: CoffeeMachine) {\n    open fun makeCoffee(): Unit = throw UnsupportedOperationException("Operation not supported")\n    open fun fillInBeans(quantity: Int): Unit = throw UnsupportedOperationException("Operation not supported")\n    open fun fillInWater(quantity: Int): Unit = throw UnsupportedOperationException("Operation not supported")\n    open fun turnOn(): Unit = throw UnsupportedOperationException("Operation not supported")\n    fun turnOff() {\n        coffeeMachine.state = coffeeMachine.offState\n    }\n}\n\nclass Off(coffeeMachine: CoffeeMachine) : CoffeeMachineState(coffeeMachine) {\n    override fun turnOn() {\n        coffeeMachine.state = coffeeMachine.noIngredients\n        println("Coffee machine turned on")\n    }\n}\n\nclass NoIngredients(coffeeMachine: CoffeeMachine) : CoffeeMachineState(coffeeMachine) {\n    override fun fillInBeans(quantity: Int) {\n        if ((coffeeMachine.beansQuantity + quantity) <= coffeeMachine.MAX_BEANS_QUANTITY) {\n            coffeeMachine.beansQuantity += quantity\n            println("Beans filled in")\n            if (coffeeMachine.waterQuantity > 0) {\n                coffeeMachine.state = coffeeMachine.ready\n            }\n        }\n    }\n\n    override fun fillInWater(quantity: Int) {\n        if ((coffeeMachine.waterQuantity + quantity) <= coffeeMachine.MAX_WATER_QUANTITY) {\n            coffeeMachine.waterQuantity += quantity\n            println("Water filled in")\n            if (coffeeMachine.beansQuantity > 0) {\n                coffeeMachine.state = coffeeMachine.ready\n            }\n        }\n    }\n}\n\nclass Ready(coffeeMachine: CoffeeMachine) : CoffeeMachineState(coffeeMachine) {\n    override fun makeCoffee() {\n        coffeeMachine.beansQuantity--\n        coffeeMachine.waterQuantity--\n        println("Making coffee ... DONE")\n        if (coffeeMachine.beansQuantity == 0 || coffeeMachine.waterQuantity == 0) {\n            coffeeMachine.state = coffeeMachine.noIngredients\n        }\n    }\n}\n\nfun main(args: Array<String>) {\n    val coffeeMachine = CoffeeMachine()\n    coffeeMachine.turnOn()\n    println(coffeeMachine)\n    coffeeMachine.fillInBeans(2)\n    println(coffeeMachine)\n    coffeeMachine.fillInWater(2)\n    println(coffeeMachine)\n    coffeeMachine.makeCoffee()\n    println(coffeeMachine)\n    coffeeMachine.makeCoffee()\n    println(coffeeMachine)\n    coffeeMachine.turnOff()\n    println(coffeeMachine)\n}\n')),(0,i.kt)("p",null,"That was all for today! Hope you liked it!"))}u.isMDXComponent=!0}}]);