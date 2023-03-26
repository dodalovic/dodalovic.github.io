"use strict";(self.webpackChunkdodalovic_github_io=self.webpackChunkdodalovic_github_io||[]).push([[2089],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var r=a.createContext({}),h=function(e){var t=a.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=h(o),d=n,m=u["".concat(r,".").concat(d)]||u[d]||c[d]||i;return o?a.createElement(m,s(s({ref:t},p),{},{components:o})):a.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var h=2;h<i;h++)s[h]=o[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6249:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=o(7462),n=(o(7294),o(3905));const i={title:"Is Google Pixelbook software development ready",authors:["dodalovic"],tags:["technology"]},s=void 0,l={permalink:"/dodalovic.github.io/blog/is-pixelbook-software-development-ready",editUrl:"https://github.com/dodalovic/dodalovic.github.io/tree/main/blog/is-pixelbook-software-development-ready/index.mdx",source:"@site/blog/is-pixelbook-software-development-ready/index.mdx",title:"Is Google Pixelbook software development ready",description:"Last week I bought a second hand Google Pixelbook since I was quite intrigued by the fact that there is a Linux based OS, backed by Google, which I could at least test, after years spent with MacOS.",date:"2023-03-26T11:48:57.000Z",formattedDate:"March 26, 2023",tags:[{label:"technology",permalink:"/dodalovic.github.io/blog/tags/technology"}],readingTime:8.66,hasTruncateMarker:!1,authors:[{name:"Dusan Odalovic",url:"https://github.com/dodalovic",imageURL:"https://github.com/dodalovic.png",key:"dodalovic"}],frontMatter:{title:"Is Google Pixelbook software development ready",authors:["dodalovic"],tags:["technology"]},prevItem:{title:"Interesting way to assert thrown exceptions using Spring Boot and Assertj",permalink:"/dodalovic.github.io/blog/interesting-way-to-assert-thrown-exceptions-using-spring-boot-and-assertj"},nextItem:{title:"Java 8 flatMap stream operator",permalink:"/dodalovic.github.io/blog/java-8-flatmap-stream-operator"}},r={authorsImageUrls:[void 0]},h=[{value:"The machine specs",id:"the-machine-specs",level:2},{value:"Learning curve",id:"learning-curve",level:2},{value:"Promising project",id:"promising-project",level:2},{value:"The weird ecosystem of applications",id:"the-weird-ecosystem-of-applications",level:2},{value:"Sluggish, buggy at the time",id:"sluggish-buggy-at-the-time",level:2},{value:"Very lightweight",id:"very-lightweight",level:2},{value:"Bad sound and Bluetooth, not ideal WiFi",id:"bad-sound-and-bluetooth-not-ideal-wifi",level:2},{value:"Great keyboard",id:"great-keyboard",level:2},{value:"Touchpad almost as good as a Macbook&#39;s one",id:"touchpad-almost-as-good-as-a-macbooks-one",level:2},{value:"Good cooling",id:"good-cooling",level:2},{value:"Not yet there",id:"not-yet-there",level:2},{value:"Google&#39;s name is associated with this product",id:"googles-name-is-associated-with-this-product",level:2},{value:"Good as a replacement laptop",id:"good-as-a-replacement-laptop",level:2},{value:"What about Docker?",id:"what-about-docker",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:h},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Last week I bought a second hand ",(0,n.kt)("strong",{parentName:"p"},"Google Pixelbook")," since I was quite intrigued by the fact that there is a Linux based OS, backed by Google, which I could at least test, after years spent with MacOS."),(0,n.kt)("p",null,"macOS is a really fine polished product. And what about the ",(0,n.kt)("strong",{parentName:"p"},"Chrome OS"),"?"),(0,n.kt)("p",null,"Curious to read about my impressions so far, from the angle of a software developer?"),(0,n.kt)("p",null,"Let's dive in!"),(0,n.kt)("h2",{id:"the-machine-specs"},"The machine specs"),(0,n.kt)("p",null,"Here are the specs of the machine:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Android: 9\nProcessor: Intel(R) Core(TM) i5-7Y57 CPU @ 1.20GHz\nCPU Max Frequency: 3300 Mhz\nCPU Cores: 4\nSystem RAM: 7.69 GB\nGPU: Intel Open Source Technology Center Mesa DRI Intel(R) HD Graphics 615 (Kaby Lake GT2)\nAudio Chipset: Eve\nInternal Storage: 220.27 GB (208.36 GB Free)\nDisplay Size: 3000x2000 (14.99")\nScreen Density: 240 ppi (240 dpi)\n')),(0,n.kt)("p",null,"It's relatively decent piece of hardware, nothing fancy, machine capable of handling some decent workload."),(0,n.kt)("h2",{id:"learning-curve"},"Learning curve"),(0,n.kt)("p",null,"As with anything new, it takes some time to get used to something that looks and feels different from what you're used to."),(0,n.kt)("p",null,"It took me ",(0,n.kt)("strong",{parentName:"p"},"a day or two")," to get the idea of how things work in Chrome OS. Once you\nget the basics, you start to enjoy the built-in functionalities, such as built-in Google Assistant, easy search,\nnavigation, hybrid applications ecosystem, and so on."),(0,n.kt)("h2",{id:"promising-project"},"Promising project"),(0,n.kt)("p",null,"The fact that Google put their name next to this project may let us believe that Linux based OS (Chrome OS is based on ",(0,n.kt)("strong",{parentName:"p"},"Crostini OS"),") could be a more serious contender in the world of desktop operating systems."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Crostini is Google's umbrella term for making Linux application support easy to use and integrates well with Chrome OS.")),(0,n.kt)("p",null,"Right now, ",(0,n.kt)("strong",{parentName:"p"},"Chrome OS")," can't be compared to ",(0,n.kt)("strong",{parentName:"p"},"macOS")," and ",(0,n.kt)("strong",{parentName:"p"},"Windows")," in terms of features supported, stability, application ecosystem, etc."),(0,n.kt)("p",null,"The advantage of Chrome OS is that it might be the lightest of all the desktops at the moment, since it can be installed on the old machines as well, and should be quite decent."),(0,n.kt)("p",null,"If Chrome OS gets more stable and the application ecosystem gets way better, the fact that it can run on\nmoderate hardware as well could help it gain significant market share in the future."),(0,n.kt)("p",null,"If it's of any importance, even ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=P1wzIqgT6uY"},"Linus Torvalds said")," that Chrome OS might be the way for Linux to penetrate the desktop OS market."),(0,n.kt)("p",null,"Time will tell."),(0,n.kt)("h2",{id:"the-weird-ecosystem-of-applications"},"The weird ecosystem of applications"),(0,n.kt)("p",null,"The story about the Chrome OS application ecosystem is complicated. Chrome OS supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web applications (classical websites)"),(0,n.kt)("li",{parentName:"ul"},"Progressive web applications"),(0,n.kt)("li",{parentName:"ul"},"Linux (",(0,n.kt)("inlineCode",{parentName:"li"},".deb")," packaged) applications"),(0,n.kt)("li",{parentName:"ul"},"Android (Google Play) applications")),(0,n.kt)("p",null,"Having all of these applications available could be somewhat confusing for the users. When you\nwant to launch some applications using the application launcher, you are presented with all installed\napplications. You will not know, most of the time, which ",(0,n.kt)("strong",{parentName:"p"},"kind of app")," it is. In theory, you may not even\ncare, as long as they all look good and work great."),(0,n.kt)("p",null,"But that's not the case yet, since, for instance, Android applications are most of the time ",(0,n.kt)("strong",{parentName:"p"},"not responsive to the viewport given"),"."),(0,n.kt)("p",null,"Linux applications also for some reason do not look that good as well or lack quite some functionalities they have in MacOS."),(0,n.kt)("p",null,"We'll see how things will be in the future."),(0,n.kt)("h2",{id:"sluggish-buggy-at-the-time"},"Sluggish, buggy at the time"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Buggy at the time",src:o(4935).Z,width:"1920",height:"1303"})),(0,n.kt)("p",null,"Nothing is perfect, of course. Especially Chrome OS underneath."),(0,n.kt)("p",null,"Multiple times a day I can experience things freezing, getting slow, or similar."),(0,n.kt)("p",null,"Most of the time things get back to normal after I close and reopen the laptop lid."),(0,n.kt)("p",null,"Animations can also ",(0,n.kt)("strong",{parentName:"p"},"get slower"),", and response to my actions is delayed. It also happens that applications do not even launch after I click their launcher icon. They may launch with a significant delay eventually."),(0,n.kt)("p",null,"After every fresh boot, after I'm presented with a desktop, it takes a minute or so until my clicks on some apps are being processed. For instance, I usually open a terminal as soon as I'm logged in, but it takes around a minute\nor so until the terminal is usable."),(0,n.kt)("p",null,"In general, a couple of restarts a day and you survive this very unpleasant behavior."),(0,n.kt)("h2",{id:"very-lightweight"},"Very lightweight"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Very lightweight",src:o(3036).Z,width:"1920",height:"1371"})),(0,n.kt)("p",null,"This device is very portable, which I enjoy. It's slightly heavier than my IPad Pro but is a different kind of\ndevice."),(0,n.kt)("p",null,"Build quality is really good, it doesn't feel cheap, and all in all - this is a very pleasant piece of hardware\nto work with."),(0,n.kt)("h2",{id:"bad-sound-and-bluetooth-not-ideal-wifi"},"Bad sound and Bluetooth, not ideal WiFi"),(0,n.kt)("p",null,"You will probably not enjoy the sound coming from this box, but I don't care for this on this machine, and\nit's more than enough for my needs."),(0,n.kt)("p",null,"One thing that works badly at the time being is Bluetooth, and using my ",(0,n.kt)("strong",{parentName:"p"},"Bose QC35")," is just an unpleasant experience.\nThe connection often drops, there are some interruptions quite often, that you can hear as well. But the thing is that\nthe headphone jack is there, so you can use something else."),(0,n.kt)("p",null,"I also had issues when I connected to my home WiFi 5GHz network since it wasn't able to connect via 5GHz, rather defaulted to 2.4 GHz. This may have happened because I first time connected from a room that was a bit further away from the router. But, my ",(0,n.kt)("strong",{parentName:"p"},"IPad was able to connect")," from the same place to the 5GHz network without any issues.\nI disconnected and reconnected again while being close to the router, which made it work from then on somehow."),(0,n.kt)("p",null,"It's a bit weird but OK."),(0,n.kt)("h2",{id:"great-keyboard"},"Great keyboard"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Great keyboard",src:o(6621).Z,width:"1920",height:"1280"})),(0,n.kt)("p",null,"The keyboard is probably the most exciting part of this story. It's more than pleasant to work with. I don't\nknow about the exact key travel details for this device, but, in simple words - it works well."),(0,n.kt)("p",null,"It's also a backlit keyboard, and that's for me quite handy since I'm typing quite a lot in the evening."),(0,n.kt)("p",null,"The only drawback I see is that you can set that the keyboard's top row is interpreted as function keys, instead of standard volume up / down, brightness and such, but the issue is that there aren't 12 twelve buttons in total in this top row, and not sure how all of this would work. Some shortcuts I frequently use involve function keys (IntelliJ IDEA ones),\nand this is a productivity issue for me, which forces me to not use these shortcuts."),(0,n.kt)("h2",{id:"touchpad-almost-as-good-as-a-macbooks-one"},"Touchpad almost as good as a Macbook's one"),(0,n.kt)("p",null,"I'm satisfied in general with the way the Touchpad works on this machine. It's not exactly at the level of Macbook's one, especially in terms of size, but the overall feel and the precision weren't bad at all."),(0,n.kt)("p",null,"I'd say that the size is ok overall, and I didn't have any issues with that. Also, I got used to the fact that it's not ideally precise, but with the time I mastered it, so now I'm quite efficient using it."),(0,n.kt)("h2",{id:"good-cooling"},"Good cooling"),(0,n.kt)("p",null,"Another good thing about this product is that during this week, I wasn't hearing CPU fans at all, and I was using CPU intensively while\nusing IntelliJ, for instance. This is, indeed, very nice!"),(0,n.kt)("h2",{id:"not-yet-there"},"Not yet there"),(0,n.kt)("p",null,"As you may have guessed already, this device is ",(0,n.kt)("strong",{parentName:"p"},"not yet there"),". The reason I bought it was that it was a used one, and\nthe price was acceptable. The fact I could, in theory, use Linux and rely on Google having the interest to support this story made me believe the purchase of Pixelbook may be well worth it."),(0,n.kt)("p",null,"I believe that Chrome OS and the Linux beneath it will get mature with the time."),(0,n.kt)("p",null,"That's at least my hope."),(0,n.kt)("p",null,"Anyways, it's always good to have many competitors in the desktop operating systems space, so that it forces all the vendors to push harder to deliver us more for the money we give."),(0,n.kt)("h2",{id:"googles-name-is-associated-with-this-product"},"Google's name is associated with this product"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Google",src:o(270).Z,width:"1920",height:"1440"})),(0,n.kt)("p",null,"For me, it was very exciting to see that Linux based OS is trying to find its way to the end consumers. Right now, the percentage of people using Linux desktops is very low, close to non-existent."),(0,n.kt)("p",null,"I am hoping that Google has enough power and interest to push this story long-term and that the stability and quality of this new Linux distribution called ",(0,n.kt)("strong",{parentName:"p"},"Crostini")," will get way better than it is right now."),(0,n.kt)("p",null,"Now... there is a chance that this may become a dead-end project, since there were cases of some Linux based tablets in the past, and these projects got discontinued."),(0,n.kt)("p",null,"Here, the fact that Google is the authority behind the project may tell us that there's enough potential to make this a very successful project."),(0,n.kt)("p",null,"Time will tell."),(0,n.kt)("h2",{id:"good-as-a-replacement-laptop"},"Good as a replacement laptop"),(0,n.kt)("p",null,"Right now, I'm using my Google Pixelbook as a replacement laptop for my 2018 MacBook Pro. I can do my blogging with no hassle using it (my primary device for doing that, actually)."),(0,n.kt)("p",null,"My blogging platform of choice is ",(0,n.kt)("strong",{parentName:"p"},"Gatsby"),", so all I need is a terminal (I installed my favorite ",(0,n.kt)("a",{parentName:"p",href:"https://gnometerminator.blogspot.com/p/introduction.html"},"Terminator"),", ",(0,n.kt)("strong",{parentName:"p"},"gatsby-cli"),", and the ",(0,n.kt)("strong",{parentName:"p"},"Visual Studio Code"),"."),(0,n.kt)("p",null,"Sometimes, here and there I also check out some ",(0,n.kt)("strong",{parentName:"p"},"Github")," repositories and then browse it either using Visual Studio Code or the IntelliJ IDEA."),(0,n.kt)("p",null,"Both worked just fine, so far, although IntelliJ was, as expected, a bit heavier on the resources, but was able to compile, run or debug the projects without any functional issues."),(0,n.kt)("h3",{id:"what-about-docker"},"What about Docker?"),(0,n.kt)("p",null,"To be honest, I wasn't even trying to set it up. I came across some articles stating that it's doable, but running Docker is not high on my list right now on this machine."),(0,n.kt)("p",null,"So, in case you expect it to work for you, I suggest you do some googling before you decide to buy the Pixelbook (or any Chromebook)."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Overall, this laptop matched my expectations. I expected that the product is not fine polished at the moment. Apps are not ideal as well, but\nI can live with that.\nWhat matters to me, right now, is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check my mail"),(0,n.kt)("li",{parentName:"ul"},"Access Google services, which I heavily rely upon"),(0,n.kt)("li",{parentName:"ul"},"Have access to the Debian based Linux which is in beta still, but worked fine for the use-cases I have"),(0,n.kt)("li",{parentName:"ul"},"Can do my blogging completely using it")),(0,n.kt)("p",null,"I hope that helps!"))}c.isMDXComponent=!0},4935:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/despair-b3b626fa1f195c6b0c3586a5414910dd.jpg"},3036:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/feather-866724941cb8804b647e25de3553a421.jpg"},270:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/google-f11902b590b5a3a7b1598adba759afd7.jpg"},6621:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/keyboard-c87fa3261c868ab2e2c5370d4788718f.jpg"}}]);