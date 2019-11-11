---
title: Build the fastest websites in the world
author: mike
category: Jekyll
image: /images/blog/speed/banner.jpg
image_featured: true
---

The speed of your website impacts many aspects of your business. [Google found](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/)
that going from a load time of one second to five increased the bounce rate by 90%.

Not only will you lose customers on a slow website but it will rank lower in
search engines, conversions will suffer, as will customer happiness.

We strive to make CloudCannon Hosting one of the fastest out there. Today we're
looking at how we achieve fast load times and how it benefits your business and
customers.

## Cloudflare Partnership

One of our main focusses of CloudCannon Hosting is delivering files as quickly as
possible, anywhere in the world. Previously our infrastructure served sites out of San Jose on the west coast.
This was fast if you were viewing a site while in the bay area, but slow viewing
it from anywhere else.

To solve this issue, we set out to partner with a CDN provider to serve CloudCannon
websites from edge nodes around the world. After testing
all of the major CDN providers out there, we settled on Cloudflare.

Last month we rolled Cloudflare out across the majority
of sites hosted on CloudCannon and the speeds speak for themselves. On our old infrastructure
the full download of an HTML file could be upwards of 500ms. With
Cloudflare we're seeing this consistently drop to under 20ms around the globe.

It's worth noting you don't need your own Cloudflare account to take advantage of this.
Either use CloudCannon DNS or CNAME your subdomain to sites.cloudcannon.com and
your site will serve through Cloudflare's super fast network.

## Asset Finger Printing

The cache control header defines how long an asset should be cached before attempting
to request it from the server again. Ideally you want to cache assets for as long
as possible as it greatly reduces requests while browsing a website. The downside
of caching for too long is if you do change the asset, it might take a while
before everyone has the new version.

CloudCannon performs automatic asset finger printing which gets around serving
stale assets. It works by renaming the asset to include a fingerprint of the
contents. For example a file called `style.css` might become `style-74b87337454200d4d33f80c4663dc5e5.css`
after finger printing. If the contents changes so will the file name which
forces the browser to request the new file. This allows CloudCannon to
cache these files for years without it going stale.

## Asset Optimisations

Descriptive variable names and plenty of white space are great ways to make your
CSS and JavaScript easier to understand for humans. When it comes to computers,
having the source code nicely formatted and readable code has no impact on how it's
processed yet adds to the file size which impacts load time.

Minifiers help solve this problem by turning a nice human readable file into a
condensed file that basically only a computer can understand. CloudCannon automatically
minifies JavaScript files using [Uglifier](https://github.com/lautis/uglifier) and
CSS using [clean-css](https://github.com/jakubpawlowicz/clean-css).

## Compression

In the past, internet speeds were slower so it was common to run zip a document
before emailing it to someone to reduce the file size. Compression on a web server
works in a similar way, when the browser requests a file it adds a header defining
which compression algorithms (if any) it understands. Before the server sends
the response it compresses the body which greatly reduces the file size. Once the
browser has the response it can uncompress the body to get the original response.

CloudCannon automatically runs gzip or brotli compression for supported content
types which greatly reduces the file size meaning faster load times for your
customers.

## Path Rewriting

Every time you make a request to a URL, the browser sends the cookies it has
for that domain. If you're using the cookies for authentication, analytics or
some other use this is a necessary overhead. However, there are many situations
where you don't need the cookies. It's rare that you would need
to process cookies when requesting an asset like an image or CSS file so the
overhead of sending them is wasted.

By default CloudCannon rewrites asset paths to serve them from a custom CDN domain.
The browser won't have any cookies for the CDN domain so the overhead is avoided
altogether.

## Summary

We're constantly striving to make CloudCannon Hosting the fastest on the internet
and to do it automatically. Keep an eye out for future performance improvements
we have in the pipeline.
