---
external: false
draft: false
title: "Organize your aliases with .bash_aliases file"
date: 2020-06-06
---

Up until recently, I was organizing my `bash` aliases by putting them directly into my `$USER/.zshrc` file. While this works, I came across better way to keep the things neatly organized.

## .bash_aliases file

`.bash_aliases` file, located in your user's `HOME` directory, **is the proper place** to put all your aliases.

Your shell will **automatically load this file**, and all your aliases will be available with every new shell session started.

One such `.bash_aliases` file could look like:

```bash
alias mkctl="microk8s kubectl"
alias ll="ls -alhtr"
```

So, `mkctl` and `ll` aliases will be there for you.

## zsh setup

In case  you're using [zsh shell](https://ohmyz.sh/), instead of `bash`, you can load your aliases automatically but putting the following snippet into your `$USER/.zshrc` file:

```bash
source $HOME/.bash_aliases
```

That way you will have the aliases loaded in your `zsh` sessions.

`$USER/.zshrc` file contains many configuration options and I found it useful to keep my own aliases separately.

## Conclusion

Keep the things neatly organized by using `.bash_aliases`.

That was all for today! Hope you liked it!