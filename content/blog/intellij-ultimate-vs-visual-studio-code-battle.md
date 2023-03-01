---
external: false
draft: false
title: "The clash of the giants - IntelliJ Ultimate vs Visual Studio Code"
date: 2020-04-03
---

![Tools comparison](/images/choice.jpg "Tools comparison")

Lately, I was tempted to try out **Visual Studio Code (vscode)** editor, after years of using **IntelliJ IDEA (idea)** IDE.

> A very important thing to note here is that I’m comparing **vscode** to a **commercial product** which at the time costing 149 &euro; which you can renew yearly so that you get the updates, or you can perpetually stay with your purchased version for 12 months.

If I decided to compare **vscode** to the **idea community edition**, I’d only prefer to use the **idea** for **kotlin** and **android** development, **vscode** in all the other cases.

Detailed **idea** Ultimate vs Community edition comparison matrix you can find [on the official website](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html).

I’ve spent more than 5 years using **idea** (Before that, I was using NetBeans IDE and Apache Eclipse) and also more than two years of using **vscode**, so let’s break down my findings.

## Feature-rich idea

For more than five years I’m using the **idea**. Having tried out lots of tools before it, I can only say that this is a **very well designed and carefully thought software product** (read in more detail in [my previous blog post](/blog/primary-school-of-intellij-idea)).

[JetBrains](https://www.jetbrains.com/) is a company that offers lots of IDEs for different programming languages, one of which is **idea**. All those tools share the common codebase, which means that if you have some feature in **idea**, most likely you may also find it in other tools as well.

### Idea is just super-smart...

Ability to **reliably refactor code** (not only in static languages world!), workspace ergonomics, code hints, amazing **version control diff, merge and conflict resolution** and **database** clients and so on are the things that are hard to find elsewhere.

Workspace ergonomics allowed me to completely ditch my mouse, I was able to use solely keyboard in my day to day development.

Code hints are so numerous, and if you pay attention to them, you can interactively learn many things that you didn't even know are considered bad practice, are deprecated, etc.

### Version control

Working with `git` in **idea** is such a smooth experience, it offers such an intuitive diff viewer (compared to **vscode** one, which I find confusing), merge conflict resolution window, that helps you easily spot and fix any conflicts.

Here is, for instance, how diff looks like in **idea**

![Idea diff viewer](/images/intellij-idea-diff.png "Idea diff viewer")

**vscode**, on the other hand, shows it like:

![Vscode diff viewer](/images/vscode-diff.png "Vscode diff viewer")

### Refactoring

When talking about refactoring in **idea** this deserves a separate post on its own. Extracting methods to base class, creating interfaces out of classes, using composition instead of inheritance refactoring hints are just amazing. I could not find these goodies in **vscode**.

![Idea refactoring menu](/images/intellij-idea-refactoring.png "Idea refactoring menu")

I’ve had many cases that things I assumed the IDE would do for me - just weren’t there in **vscode**! Like, renaming some _symbol_ (class, variable or interface name or the name of `CSS` class) wouldn’t propagate the change to the places where the symbol was used! IMHO - this is the thing you don’t want to deal with.

### Nothing is perfect, though

Also, I had a bad experience searching for some _symbol_ usage in **vscode** and being unable to find it unless I do a generic text search for the symbol (`⌘ + ⇧ + F`). Seems there are some indexing issues in **vscode** in this sense, since when I manually find the usage of some symbol, I can later find it using Find symbol (`⌘ + T`) feature.

On the other hand, I’ve also experienced difficulties dealing with **ReactJS** based project which included **Prettify** formatting plugin, which pretty much works nicely out of the box in **vscode** but wasn’t able to make it work (I gave up after 10 minutes of trying to configure it) in **idea**.

I believe **vscode** and **idea** teams will sort these things out.

## Java specifics

When talking about `JVM` based applications development, **idea** shines when developing **Spring Boot** applications, **Java**, **Kotlin**, so making any comparison between the two is very troublesome.

One thing I dislike in **vscode** is that everything is just a file. **vscode** doesn't know you want to create a `java` interface, class, or enum for instance. Yes - you can create a file and then do the coding inside yourself, but this is something which is just another distraction point. I prefer having **right-click - Create java interface** option instead.

**idea's** debugger is also better than **vscode's**, but this is not a big deal, since what **vscode** offers, is pretty much what people mostly need when debugging their applications.

Although there’s a significant amount of work being put by Microsoft and Redhat into making **vscode** getting good in this space, **idea** is so much ahead. Having said that, I’m quite convinced that the gap will significantly decrease with time.

## Idea's opinionated setup

One thing that differs **idea** and **vscode** is that **idea's** installation is quite opinionated so that everything is in place at the time you download it. Compared to **vscode** which comes with no extensions pre-installed, so you have to find out what's the best setup. This is understandable, since **vscode** is a more generic tool than **idea**, so they do not want to enforce any extension upfront.

On one hand, having extensions pre-installed gives you the ability to focus on your work immediately, rather than looking for which extensions to install.

On the other hand, of course, someone may have decided to pre-install some extension(s) you don't need. That may affect IDE startup time, memory and CPU usage and you may even be affected by the bug in the extension that you don't even need.

So - it's hard to say here which approach is better. When I was starting frontend development in **vscode** I had to chase around to find the extensions I need, which took some time (not too much, though).

## The mind-blowing potential of the vscode platform

Having a chance to use **vscode** exclusively for the last couple of months, I realised that some of the features that it brings along might be the things that will be the future of programming editors/IDEs.

Both tools are, as you may guess, extensible using extensions/plugins. I also spotted that **vscode** has much more high-quality themes, just as a note for the ones that care. **idea** has fewer extensions than **vscode**, and more likely you will find some extension missing in **idea** than the other way round.

Also, I prefer a font rendering in **vscode** compared to **idea** somehow.

One feature that **idea** lacks right now is **Live share** functionality of **vscode**. This functionality allows you to share your workspace with your colleagues so that you can collaborate on your codebase simultaneously!

I’ve had a chance to test it many times so far, I’ve had great code review and debugging sessions where it was so easy to invite anyone by just sharing a collaboration link as well, and then they can join the session in their **vscode** instance!

One thing that’s probably even more amazing is the ability to join the collaboration session right from your browser! At the time of writing this, this feature is still in beta, and probably not all the browsers are supported and all the features are stable, but no doubt that Microsoft with the support of the **vscode** community will make this stable at some point.

I strongly encourage you to try the new [Live share feature](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare).

Another very useful extension for **vscode** is [Codetour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour&ssr=false&utm_source=jsjoeio&utm_medium=email&utm_campaign=learning-rust-code-tour-github-cli-and-habitica) which allows describing some codebase as a series of steps, and eventually, you can guide someone through your code in an easy and share-able way.

## Configuration

I’d vote for **idea** here since the tool configuration can be completely be done via UI, whereas with the **vscode** you still need to resort to dealing with `JSON` configuration, which sometimes you just don’t feel like doing.

## Embedded terminal

Both tools provide the ability to stay within your IDE when you need a terminal. Nevertheless, I prefer **vscode** due to its lightweight nature (toggling terminal and switching around active shells is much faster in **vscode**), and, on top, horizontal tab splitting support, on top of multiple terminals, which both tools support.

I can imagine that both tools need to become much better in this area since I often need to resort to **ITerm2** external terminal, whenever there's some more complex interaction with the terminal needed.

![Multiple terminal panes](/images/vscode-multiple-terminal-panes.png "Multiple terminal panes")

> **EDIT (10.04.2020)** As documented in [What's new in **idea 2020.1**](https://www.jetbrains.com/idea/whatsnew/#terminal), now both vertical and horizontal splitting are supported!

## Database client

### Relational databases

Although there are database clients for **vscode**, I can't enough emphasize how good **idea** is in this aspect. Apart from being able to deal with databases via UI, you also get good IntelliSense when wanting to do that via `SQL`.

Renaming tables, columns, finding columns usages in the code, offering IntelliSense inside strings in the code... All of that is possible with **idea**, whereas I was able to see that **vscode** only offers a limited subset of these features, most basic ones - creating connections, listing databases and tables, etc.

### NoSQL databases

Although NoSQL databases are not as popular as SQL ones, I feel like both IDEs need to offer better user experience when working with them. That's why I mostly resorted to [Robo 3T](https://robomongo.org/).

## Under the hood - Electron vs Java virtual machine

**vscode** is built on top of the [Electron](https://www.electronjs.org/) platform, whereas **idea** is running on much older product [Java Virtual Machine (JVM)](https://en.wikipedia.org/wiki/Java_virtual_machine).

Although **JVM** is making steady progress and is being wildly used - it’s a very heavyweight platform, in terms of resources it requires. It’s getting better, but still - it’s a resource hog. The situation gets even worse when building a desktop application, the industry just never used Java to build desktop applications.

Electron seems to be a very popular tool to build cross-platform desktop applications. It’s powered by open source projects **Chromium** and **NodeJS**. Compared to **JVM**, Electron is a lightweight platform, which for you means that you don’t need to invest in a new computer to run **vscode**.

Also, if you need to open two windows when coding, you are paying a significant penalty when using **idea**, whereas you don’t even notice these things in **vscode**.

That was all for today! Hope you liked it!