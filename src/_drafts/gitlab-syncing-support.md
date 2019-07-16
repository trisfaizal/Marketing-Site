---
title: GitLab syncing support
author: mike
category: Features
image:
image_featured: false
---

We've seen GitLab grow from a self hosted alternative to GitHub to an entire suite of tools to build and deploy software used by some of the largest companies in the world.GitLab support is one of our most hotly requested features for CloudCannon. Today, I'm happy to announce CloudCannon now has full GitLab integration\!

## How does it work?

First create a new site on CloudCannon and select the GitLab Repository button.

![](/images/blog/gitlab-support/2@2x.png){: width="1600" height="1000"}

If it's your first time connecting a GitLab repository you will need to authenticate. After authenticating, CloudCannon shows a list of your repositories. Select your desired repository and branch.

![](/images/blog/gitlab-support/1@2x.png){: width="1600" height="1000"}

CloudCannon syncs the files from your repository, builds the Jekyll site and serves it live. Updates made on CloudCannon sync back to GitLab repository and vice-versa for changes made to the GitLab repository. Branching and publishing workflows are fully supported with this integration too.

![](/images/blog/gitlab-support/3@2x.png){: width="1600" height="1000"}

## Wrap up

One caveat is this only works with GitLab.com repositories, we do not currently support self hosted instances of GitLab.