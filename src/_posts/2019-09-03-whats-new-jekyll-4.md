---
title: What's new in Jekyll 4
author: mike
category: Jekyll
image: /images/blog/jekyll-4/banner.jpg
image_featured: true
---

Jekyll 4 is here! It's been a long time coming but the wait it worth it. Let's get down to the details.

## Build Speed Improvements

Build speed has always been a major pain point for Jekyll developers, we've seen large websites on CloudCannon take minutes to build. Slow builds are a pain to work on as you 
have to wait every time you make a change.

Jekyll 4 makes huge strides in speeding up builds. It's fantastic to see Jekyll make this a priority, a trend we hope continues into the future! 

### Utterson

You can't improve what you can't measure.

In the past, Jekyll had no way of knowing the performance impact of new features and changes. We felt the first step to making Jekyll builds faster was to build a performance testing suite to see the performance impact of Pull Requests.

We sponsored Pat Hawks on the Jekyll Core team to work on this idea. A few months Pat launched [Utterson](https://github.com/jekyll/Utterson), a tool which compares the build
time of a suite of sites between different Jekyll versions (or even specific PRs/commits).

Utterson has been a huge help in identifying performance issues and testing the performance of fixes. We hope Utterson continues to help improve Jekyll performance in the future. 

### Cache API

While working with Pat, we identified parts of the Jekyll build which could be saved between builds. Processing liquid templates and converting markdown files don't change between builds (unless underlying code has changed), so they're a perfect candidate for caching. 

Pat created the [Cache API](https://jekyllrb.com/tutorials/cache-api/) so Jekyll and Jekyll Plugins can cache data between builds. Caching the liquid templates and converted markdown files resulted in a 20%-30% performance increase in testing. Since adding this 
feature, Ashwin Maroli has cached other parts of the Jekyll build resulting in more
performance gains.  

Jekyll plugins have been left to their own devices for caching content. We're looking 
forward to seeing plugins use the cache API so all caches can live in one place.

### Memoization

Memoization is a form of caching where you save the return value of a function for future calls to that function. Ashwin has been on a storm finding areas all over Jekyll's core which can take advantage of this caching strategy. 

### Liquid C

The team at Shopify released Liquid 4 at the end of 2016 which introduced performance
increases and bug fixes in liquid processing. Unfortunately for Jekyll users this didn't make it to the `liquid-c` gem (the liquid gem Jekyll uses) until the end of 2018. Long story short, this new version should bring a 10% increase in liquid processing.

### Drop support for old Ruby versions

The easiest way to increase your build performance is to make sure you're using the latest version of Ruby. The Jekyll team has dropped support for Ruby 2.3 and below in Jekyll 4 which will force developers to use a faster version of Ruby.
	
## Sass

Sass processing has moved from the `sass` gem to `sassc`. `sassc` is maintained by the 
Sass team so we should see better support here in the long run. It also claims to be 4000% faster the `sass` so faster builds too!

## New Features

Jekyll 4 is mostly about performance but there are a few new features:

* You can disable liquid on a page by having `render_with_liquid: false` in the front matter
* You can use `and` and `or` operations with `where_exp`
* The `link` tag understands Liquid variables
* The `link` and `post_url` tags no longer need `site.baseurl` prepended every time they’re used

## Thank you Core Team

Jekyll 4 is a massive improvement over previous versions. We want to thank all the hard work Ashwin, Frank, Matt and Pat on the core team have put in to get Jekyll 4 released. We're big fans of the focus on build performance are excited to see what comes with the next version.