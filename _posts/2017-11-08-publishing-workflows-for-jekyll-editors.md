---
title: Publishing Workflows for Jekyll Editors
author: mike
category: Tips
image:
image_featured: false
---


One of the reasons I love using Jekyll is my entire site can live in Git. With Git I can rollback to any previous version of my site, backup my repository to an offsite location and collaborate on my site with other developers. Developers understand and are empowered by Git but what about non-technical editors?

Our main goal at CloudCannon is to make collaboration between developers and non-technical editors seamless. To an extent we've achieved this with editing a Jekyll site; Editors can update HTML, Markdown, front matter, blog posts, collections and data files without knowing anything about Jekyll or HTML. Recently we've been working to achieve the same thing for Git workflows. In this post I'm going over some of the new workflows we support.

## Two way Git syncing

This isn't a new feature but it's worth mentioning as it's at the core of what we're trying to achieve. You can sync a repository from GitHub or Bitbucket to a site on CloudCannon. Developers work locally using their own tools, editors update on CloudCannon, everything stays in sync through a central Git repository.&nbsp;

![two way Git syncing](/images/blog/git-workflows/2-way-syncing.svg)

## Staging sites

You might want to preview new content or changes on a live testing website before pushing it to your production site. In CloudCannon, staging sites are achieved using Git branches.&nbsp;

The set up we typically see is you set up a CloudCannon site which syncs with the master branch on your repository. Editors can update this site without worrying about messing up the live site. They can see their changes on a live site with a testing domain. For the live site you create another CloudCannon site which syncs with a production branch in your repository. Editors wouldn't have access to this site and no changes should be made directly to it. When changes from the staging site need be pushed to production you simply merge master into production.

## Build options and environment variables

performance

## Merging

## Pull requests