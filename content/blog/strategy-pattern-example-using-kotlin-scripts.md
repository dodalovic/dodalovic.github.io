---
external: false
draft: false
title: Strategy pattern example using kotlin scripts
date: 2018-07-30
---

I thought it would be nice to use advantages of `Kotlin` language to showcase strategy pattern implementation. In order to get the example
running – we need to install kotlin binaries (installation). I’m running simple `Kotlin` [script](https://gist.github.com/dodalovic/4ee9939ab645b9d9933da1b4f14edf7d) in this example.

Having scripting support it makes it very easy to fire up some process with full `Kotlin` language capabilities. You could use it to do some
kind of administrative tasks in your business environment.

> :bulb: Using `Kotlin` scripts there's no need for `main` method, you just write code to execute directly (there's a `args` variable available so
> that one can access command line arguments passed)

:exclamation: make sure to have `kotlinc` on your \$PATH

## Strategy pattern example

As stated on the [Wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern):

> In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting
> an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of
> algorithms to use

Our example will demonstrate just that - we'll call our application providing some command line argument. Based on passed argument value, we'll pick on
of available application strategies to build the town: `slow`, `medium` or `fast` - different ways to build one town.

```kotlin
class TownBuilder {
        private val slow = { -> 3000L }
        private val medium = { -> 1500L }
        private val fast = { -> 50L }
        val buildingStrategy: () -> Long

        init {
            buildingStrategy = when (args[0]) {
                "slow" -> slow
                "medium" -> medium
                "fast" -> fast
                else -> throw IllegalArgumentException("Invalid speed")
            }
        }

        fun build() {
            val pace = buildingStrategy.invoke()
            Thread.sleep(pace)
            println("Town built in $pace milliseconds!")
        }
    }
    TownBuilder().build()
```

As we can see the `TownBuilder` decides which town building strategy to use based in input command line argument. The strategy is, basically,
just a function that returns how much the thread should sleep (emulating long process of building one town).

## Running the app

- Without unsupported command line arguments

```bash
$ kotlinc -script strategy.kts 200
java.lang.IllegalArgumentException: Invalid speed
        at Strategy.<init>(strategy.kts:9)
```

- Slow pace town building

```bash
$ kotlinc -script strategy.kts slow

Building at slow pace...

Town built in 3000 milliseconds!
```

- Medium pace town building

```bash
kotlinc -script strategy.kts medium

Building at medium pace...

Town built in 1500 milliseconds!
```

- Fast pace town building

```bash
kotlinc -script strategy.kts fast

Building at fast pace...

Town built in 50 milliseconds!
```

Original Source Code:

{% githubgist id="4ee9939ab645b9d9933da1b4f14edf7d" /%}

That was all for today! Hope you liked it!
