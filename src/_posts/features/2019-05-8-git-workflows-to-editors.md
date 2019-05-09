---
title: Bringing Git Workflows to Editors
author: mike
category: Features
image: /images/blog/bringing-git-workflows/collaboration.jpg
image_featured: true
---

We've talked about our mission of bringing [publishing workflows to non-technical editors](/tips/2017/11/29/publishing-workflows-for-jekyll-editors/)
in the past. This post is an update on some interesting new CloudCannon features
bringing us closer to fully realising this vision.

## Projects

A typical workflow for CloudCannon is to have a staging site where editors
make content changes, and a production site which serves the live site. This is
a great workflow because it allows editors to preview changes and iterate on content
before publishing to production. One issue of this approach is having multiple
sites in CloudCannon for each repository soon gets overwhelming.

[Projects](https://docs.cloudcannon.com/projects/introduction/) address this issue
by grouping your sites by their repository.

![Projects](/images/blog/bringing-git-workflows/projects.png){: .screenshot srcset="/images/blog/bringing-git-workflows/projects.png 800w, /images/blog/bringing-git-workflows/projects@2x.png 1600w" }

Selecting a project lists the sites connected to that repository.

![Sites](/images/blog/bringing-git-workflows/sites.png){: .screenshot srcset="/images/blog/bringing-git-workflows/sites.png 800w, /images/blog/bringing-git-workflows/sites@2x.png 1600w" }

In this example
the production branch has a lock icon which indicates an editing lock. In most
cases you'll want an editing lock for production sites to force content
changes to go through the staging branch.

![Edit Lock](/images/blog/bringing-git-workflows/edit-lock.png){: .screenshot srcset="/images/blog/bringing-git-workflows/edit-lock.png 800w, /images/blog/bringing-git-workflows/edit-lock@2x.png 1600w" }

## Branching

A staging/production workflow is fine for simple content changes but falls down
when you have multiple editors trying to time their content. For example, you might
spend a week overhauling a landing page, meanwhile your colleague needs to release
a blog post. You can't release a half finished landing page so your changes are
now blocking the blog post from releasing. These situations only get more
complicated and harder to resolve as you add more editors.

With Projects, editors can branch which gets around this limitation.
Editors click the + button and set a name which creates a branch on GitHub and completely isolated
site with its own URL on CloudCannon.

![Branch](/images/blog/bringing-git-workflows/branch.png){: .screenshot srcset="/images/blog/bringing-git-workflows/branch.png 800w, /images/blog/bringing-git-workflows/branch@2x.png 1600w" }

The editor is now free to update this site without blocking the main staging branch.

![Editing](/images/blog/bringing-git-workflows/editing.png){: .screenshot srcset="/images/blog/bringing-git-workflows/editing.png 800w, /images/blog/bringing-git-workflows/editing@2x.png 1600w" }

When the content is ready for primetime, editors can publish the content.
Behind the scenes the performs a Git merge into the staging branch.

![Publish](/images/blog/bringing-git-workflows/publish.png){: .screenshot srcset="/images/blog/bringing-git-workflows/publish.png 800w, /images/blog/bringing-git-workflows/publish@2x.png 1600w" }

## What's next?

We're excited at how these workflows are progressing for editors. The next
step is to provide more confidence and context to editors merging to another
branch. Stayed tuned to find out more!  
