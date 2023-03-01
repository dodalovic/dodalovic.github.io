---
external: false
draft: false
title: Stop reading technical books, read blogs
date: 2020-04-24
---

In this article my goal is to help you become a very pragmatic software developer.

Someone may find this article way too opinionated. I'm fine with that, since it is.

Although this article is not strictly deeply technical, by reading it and sticking to the advices I'm giving you, you will benefit on your productivity side in the long run.

## A bit of history

![Monolith](/images/monolith-elephant.png)

Let's talk about a backend development.

In the last couple of years, we're witnessing a significant shift in our industry in terms of how we organize and write our software. Predominant software architecture model, mostly due to historical reasons are - **software monoliths**.

In such a software architectures, we have a **one codebase** where we develop our entire product. One of the consequences of such an approach is that we will most likely use a **single programming language** for our software product.
This also implies a set of available frameworks particular to the chosen language.

We deploy such a deployable in **one go**, which is not a resource-wise lightweight process, and is not necessarily efficient in terms of **time** needed to deploy.

In such a code-bases, where (depending on complexity) we can have **hundreds of use-cases** implemented, we are forced to care about how we organize it in a maintainable way.

Even organizing simple files somewhat interconnected on your local file system is not a trivial task to do. Now, software modules are relatively complex entities, and organizing hundreds of relatively dependent software components can become quite a challenge.

Putting a business pressure on top of software development doesn’t make this task any easier.

Given such constraints, we as engineers need to have quite some experience to maintain such a code-bases, in order to be able to run it on the long run.
Proper layering of the components, loose coupling between them, and setting proper module boundaries are some
issues **we need to take care of**. This is definitely doable, but imposes significant constraints and makes adopting new technologies relatively hard.

Taking this into consideration, many businesses nowadays go a different path, so called **micro-services** architectures, in order
to **get more agile** when delivering software to their clients.

## Microservices

![Microservices](/images/microservices-apps.jpg)

How do these two approaches, **monolithic** and **micro-services** differ in their nature?

If you decide to go for micro-services, you basically develop **many smaller apps** instead of one big software codebase.

One of the benefits is that you no longer need to choose **one programming language** to write the software. Also, by having many small applications, you can benefit more from the rich ecosystem of frameworks available (node, spring, .net etc).

Very often, using **micro-services**, those little applications we write are so small in their scope and size, that, very often, we have just **a small amount of real business logic** in them.

Most of the time the most of magic comes from the frameworks we use, where they sort out persistence, web, security layers for us.

Given **micro-services**, we are also exposed to very opinionated **framework authors**, which have very opinionated way how should we design and deploy our software in the real world, without knowing all the specifics of our particular businesses. They often provide integrations with the cloud platforms, so that you can deploy it very easily to the cloud of your choice.

It’s clear these framework vendors **provide a significant amount of functionality** out of the box. It’s also clear the companies do not want to repeat that development, but rather use and combine these already provided goodies.

Let me outline some missing steps when adopting these frameworks:

- Deeper analysis of frameworks and libraries on the market and **how they fit and solve business needs**
- Rough analysis of the actual **operational costs** if we decide to choose particular cloud and technology stack
- **Education and training** for the engineers, so that they have as much control and understanding as possible when using these libraries

I believe no (average) company does this. When talking about understanding some technology, it’s mostly left to the engineers to pick it up during working hours, and, more often, in own spare time. That’s perfectly fine, the only downside is that you rely on the engineer’s **capability and motivation to do that**.

I can bet that **two out of three engineers** will not care too much to do that, mostly due to the fact that demand for developers is still high, and not only the good engineers are able to get the job today.

## Blindly follow what others are doing

Let me tell you about my experience lately, based on the last 4 or 5 years working in the industry.

Since I was mostly doing **Java** based programming, we were using nothing but the predominant **Spring Boot** framework.

Why was it chosen? Well, I'd say by just choosing something what others are using as well.

Currently, in the **Java** world, there is no serious competitor to the **Spring Boot** framework. There might be **Vert.x** framework, plus some others that are popping up, here and there, but no serious competition right now.

**Spring Boot** is the framework with an enormous amount of goodies you get for free. Everything from a web layer, web security, persistence, caching, transactions, health-checks and so on.

One issue here is that the applications written in this framework can be **very operationally expensive**, since they require **quite some memory** to be able to provide us with all these little things we get.

![Microservices](/images/spring-boot-fat.jpg)

This particularly becomes an issue in the **micro-services** design, where we need to **replicate** each of these small apps, to be able to have them **highly available**, so that our backends can run smoothly.

In case of just a few small apps this is not such a big deal. If you have a dozen of them, and you want at least 2 replicas of each, you can **end up paying significant amount of money**, especially in the cloud environments of your choice.

Another thing is that the startup time of such applications **is not fast**, usually due to some database schema operations that need to be asserted before the app actually starts, or quite some object instantiation
needs to happen for all the goodies to magically happen. All of that causes increased deployment time.

When we add startup time and memory required by the framework to provide all these facilities for us, things can easily get relatively expensive. In the **Java** world, on top, the **Java runtime environment** itself is not a lightweight component at all, and thus adds to the overall memory consumption.

In theory, **micro-services** should be lightweight components in terms of resources, and fast to start.

Personally, I feel what **Spring Boot** is providing doesn’t address perfectly these micro-services guidelines.

## Horizontal vs vertical knowledge scaling

So, assuming what I told you so far matches your experience, or you feel like it makes sense what I said, let’s see **what you can do** from your side to best accommodate to the reality.

Let me define two terms, by borrowing terminology from the computer science, horizontal vs vertical scalability:

> **Horizontal knowledge scaling** - learning new technologies with a goal to become a full-stack developer
>
> **Vertical knowledge scaling** - further enhancing your existing skill-set by digging deeper and becoming an expert in some particular area

I've read many authors here giving advices that we should never just scratch the surface of some technology, but rather **going into details** and learning how the things actually work.

Speaking from own experience, also discussing with very experienced colleagues of mine about this topic, we came up with a conclusion that a vast majority of companies nowadays **do not expect any kind of deep expertize from their engineers**.

What do I mean by that?

Well, in simple terms, companies seem to favor the **horizontal knowledge scaling** from their engineers, which means that they prefer having **fewer people with a broader, but more average, skill set**.

Most of the businesses produce a software that, sort of, just needs to work, and that's it. Most of the businesses today aren't high performance systems which will impress their customers. Errors here and there are also acceptable, nothing that will make their customers so unhappy. Also, not everything needs to run that fast, really.

From the economy standpoint, this strategy brings some **significant savings** to the company, while still delivering a value to their customers.

I have a feeling, especially due to the present **Covid 19 virus** affecting the entire globe, and the economy worldwide, companies may try to **downsize their technical staff**, and for the engineers that would mean being truly full-stack, rather than being specialized for either frontend or backend engineering.

Current state of the tools and frameworks supports this model, since no matter if we’re talking about a frontend, backend, mobile or whatever programming area, there are tools that tend to simplify development, so that building these layers is very straightforward and agile (if you accept lack of control and understanding in that case).

## Reading books vs blogs

![Reading](/images/knowledge-growth.jpg)

I've read a good deal of software development and design related books in my life. That kind of made sense, that was a habit carried over from the university. In order to understand something, you used to read a book about it.

The issue here is that number of concepts you deal with in your university **is lower** than the number in the real life software development, so you just can’t read the whole book to grasp some technology.

Sometime it looks like that by the time you finish reading, the technology you’re trying to grasp will be considered deprecated :smiley:.

Being more than a decade in the industry, I believe I was reading **way too much**. Especially since I've read quite some books getting deep into details of particular technologies.

> **The more you read, the less you practice**

Please, don’t get me wrong here: **there is nothing wrong with reading books**. I just think that an average engineer working for an average company **can’t keep up** with ever-changing world of technologies efficiently by reading them.

The books I consider worth reading right now are the ones explaining **people, their behaviors and software development processes in companies**. This knowledge seems to be more universal, stable and worth spending your time.

Let me state something I firmly believe in:

> Hands-on experience **is the only** way to learn technical things.

Real hands-on, not doing some tutorials, which gives you an impression that you're dealing with the real world application development, which mostly is just a small subset of requirements you normally deal with.

## My learning algorithm

So, I’m presenting you **my way of learning technical things**:

- I go and find some blog post (I usually go to [medium.com](https://www.medium.com)) and find some hello world example demonstrating the tech I'd like to master
- I start a new, real project which I'll implement using the tech from the previous step
- I master given technology by getting into the real world trouble and finding the solution for it

If you decide to adopt the same pattern, you might end up feeling upset with the fact that **you're learning things in an unstructured way**, compared to reading books, which
usually have a well-defined structure.

Don’t worry! You'll get the knowledge good enough to be employed by the most companies out there, majority of which, anyways, do not care about the structure of your knowledge. In simple terms, for the most companies out there you just need to - make it work!.

I’ve also seen very pragmatic developers that go even one step ahead: they first checkout some project from **Github** and then try to figure out what’s inside and have some assumptions how given technology works and how to tweak them.

This is, however, mostly the case with very experienced engineers, who, most likely, already saw something similar before.

## Conclusion

Congrats! Now you understand the value of being pragmatic in the software development nowadays, let’s recap our learning algorithm:

> - Read short blogs introducing the technology of interest
> - Create sample projects based on given technology (ideally you’d like to deploy the software and use it eventually)
> - Google / StackOverflow are (as always) your best friends to deal with any obstacle along the way
> - Repeat

