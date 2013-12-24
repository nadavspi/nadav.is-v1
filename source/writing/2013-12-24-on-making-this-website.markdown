---
title: On making this website
date: 2013-12-24
tags: Web
---

This is a website. There are many like it, but [this one is mine](!g "frank chimero homestead"). The source code is [available on GitHub](https://github.com/nadavspi/nadav.is.git).

## Typography

The typeface used on this site is the lovely [FF Tundra](!g) by [Ludwig Übele](!g).[^tundra] I'm in love with FF Tundra. I came across it a few months ago, became totally obsessed with it, and couldn't wait for an excuse to use it. When I decided to build this website, I immediately knew the time had come to use Tundra. It was the first design choice for this site, and the first time I ever purchased a font. I thought about using a second font with it and tried out a bunch of combinations, but ultimately decided to stick with Tundra for everything.[^fonts] 

I wanted a comfortable font size—large but not [Zeldman](!g) or [Trent Walton](!g) large[^large]—and settled on 22px at the largest breakpoint. Funny story: For the week I spent developing this site, I was viewing it at 110% zoom. Made for an interesting surprise when I deployed it.

I used a [modular scale](!g) for the site, using the ratio of a major third in music (4:5 or 1.25). Because who doesn't like a major third? And I double stop major tenths on the bass all the damn time.[^red] 

## Code

This website uses [Middleman](!g “Middleman app”), my static site generator of choice. [Jekyll](!g "jekyll site generator") seems to be getting more attention these days, but I feel most at home with Ruby and ERB templating, so I’m sticking with Middleman for now. It’s written in HTML5 and [Sass](!g), generally adhering to <span class="sc">[SMACSS](!g)</span> and <span class="sc">[BEM](!g)</span> principles as far as splitting things up into partials and naming classes descriptively. 

I feel like the <span class="sc">[OOCSS](!g)/BEM</span> thing can lead to an unnecessarily cluttered DOM with all of the class names, although I love the idea of abstracting reusable patterns. Preferring clean <span class="sc">HTML</span>, I tend to use [extend](!g “sass extend”) instead of applying a classw to every element. For now, anyway.


## Layout
This site was built *[mobile first](!g)* using [Susy](!g “Susy grid”) as the grid framework. I’m using the nifty *[magic grid](!g “suzy magic grid”)* thing that applies a breakpoint as soon as the specified number of columns can fit in the viewport. 

I sketched some mockups at 7am one morning during [Patterns](http://patterns.co) then put them away to work on the content. I played with some more complicated ideas for the home page before ending up with the simple layout it has now. 

<!-- add scan of first mockup -->

## Writing

Articles are written in [Markdown](!g). They usually start in [Byword](!g) on the Mac or [Editorial](!g "Editorial iPad") on the iPad[^notebook] until I’m ready to see them in context, at which point they're moved into the development branch in the repo and into [Sublime Text](!g) for editing. 

I'd like to give a special shout out to Brett Tersptra amazing [SearchLink](!g) OS X Service for making Markdown links so much easier. 

Getting the (unofficial) Markdown footnote syntax to work was kind of a bitch. I started out using the [redcarpet](!g “redcarpet markdown”) engine but it didn’t support them. I tried a few others and almost settled on [kramdown](!g) except it was stupidly difficult to get the figure/img/figcaption pattern to parse right. Eventually I found [a branch of redcarpet](https://github.com/vmg/redcarpet.git) that will support footnotes—and automatic [smart quotes](!g “jason santa maria smart quotes”)—within Middleman. Yay.[^detour] The footnotes display inline thanks to the awesome [Bigfoot](!g “Bigfoot footnote”) jQuery plugin. 


[^tundra]: [Here’s a cool article by Ludwig on the making of FF Tundra](!g “making ff tundra”).
[^fonts]: Honorable mentions for Museo Sans, FF Milo, Brandon Grotesque, and Tungsten. 
[^large]: Not that there’s anything wrong with that. 
[^notebook]: Well, half of the [Miles Davis post](/writing/miles-davis) was scribbled in a [Field Notes](!g) notebook on the Subway—because sometimes you can't interrupt the flow, but still have to get places.
[^detour]: I took a detour trying to make a Middleman helper function to generate my figure/img/figcaption blocks—borrowing from [Middleman Sushiplate](!g)—but that stuff seems to broken right now. Will try again some time. [There’s a working plugin for jekyll](!g “jekyll figure image tag github). :-(
[^red]: Thanks, [Red Mitchell](!g). I love you! 
