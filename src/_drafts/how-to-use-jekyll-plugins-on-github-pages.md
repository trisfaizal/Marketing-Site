---
title: How to use custom Jekyll plugins on GitHub Pages
author: mike
category: Features
image:
image_featured: false
---

[GitHub Pages](https://pages.github.com/){: target="_blank"} is a reliable, performant Jekyll hosting provider which has [recently added support for SSL](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/){: target="_blank"}. It's a great hosting platform but has a major limitation, you can't use custom Jekyll plugins. Today we're looking at how CloudCannon can help resolve this limitation.

CloudCannon works nicely with GitHub Pages, you connect your \`gh-pages\` branch up to a site on CloudCannon and everything will be in sync. Making a change in CloudCannon triggers a build on GitHub Pages, which then pushes the change to your live site. This is a great workflow when you need a CMS for non-developers and still want to use GitHub Pages hosting. However, you'll still have no support for custom Jekyll plugins.

To get around this we'll use a new CloudCannon feature, [Outputs](https://docs.cloudcannon.com/syncing/output/){: target="_blank"}. With Outputs, CloudCannon pushes the static output of a build to a branch in addition to pushing changes back to your Jekyll source. This is useful for GitHub Pages as CloudCannon supports custom plugins. CloudCannon can build the Jekyll site and output the static site to the `gh-pages`&nbsp;branch.

Here's a basic setup for using Outputs with GitHub Pages:

1. Move your Jekyll source code to the `master`&nbsp;branch in your GitHub repository.
2. Create a site in CloudCannon and connect it to the `master`&nbsp;branch.
3. Add an [Output](https://docs.cloudcannon.com/syncing/output/){: target="_blank"}&nbsp;to the `gh-pages`&nbsp;branch.