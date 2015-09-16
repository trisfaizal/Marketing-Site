---
layout: post
title: The big update. Two months of major feature releases and company direction to cover!
header: The big update. Two months of major feature releases and company direction to cover!
category: Features
author: sam
---

<!-- summary photo and summary here -->

![CloudCannon syncing with FTP](/img/blog/cloudcannon-direction-FTP-visual-editables/ftp-header.png "FTP Syncing with CloudCannon. It's a game changer")

We recently released four major product updates, (including FTP support!), [publicly announced our fundraising round and partnership with Rightside](http://techcrunch.com/2014/10/20/cloudcannon-raises-500k-to-make-designing-static-websites-simpler/).

We have a clear direction on where we are going with the company and the product. Read on to learn how these changes are going to make it easier get your static websites live and editable.

<!-- excerpt stop -->

The last two months have been crazy for CloudCannon.

We released four major product updates, [publicly announced our fundraising round and partnership with Rightside](http://techcrunch.com/2014/10/20/cloudcannon-raises-500k-to-make-designing-static-websites-simpler/).

We have a clear direction on where we are going with the company and the product. Today I'm going to cover our company direction and then we'll take a look at how they've influenced the product feature updates.

### CloudCannon direction

The team at CloudCannon has been looking hard at what we're doing, where we're going, and how we can make a difference to how people develop websites. Our vision is clear:

#### CloudCannon is an editing company, not a hosting company.

We found that people were in love with the workflow of CloudCannon which included hosting. But what if we could unleash that workflow allowing you to use any hosting you choose. We're super excited about FTP support because it allows us to add the CloudCannon editing experience to websites that are hosted elsewhere. Which brings me to my next point...

#### We want to grow by partnering.

Our focus is on a great editing experience and empowering you to work the way you want. As part of that we want to partner with services who are focused on simplifying other areas of the website experience. We have started with domain registration to make that really easy but we want to make everything as seamless. Whether it's eCommerce, website building or email newsletters we want to work together to create a better world for websites.

#### Shift in pricing to match
We used to have a pretty extensive free offering. You could make a website and basically have it live on the web with all the trimmings - the only thing that didn't work was that it didn't have a custom domain.

When we thought about it, adding a custom domain is a pretty arbitrary pay wall. That workflow was also more of a demo of what it's like to *host* a website, which caused confusion about what CloudCannon is about.

So we've changed the way free works; free focuses on editing. A website on our free plan is like a private sandbox for your changes.

In free websites you can add your files any way you want whether that's with a storage provider(FTP or Dropbox) or just drag and drop. You can share and tweak the website as much as you want. When you are ready to push changes live to your website you simply upgrade to be Published, which is just $9 a month.

<hr>
### Product feature update

#### FTP is here and it's awesome!

As mentioned above FTP support is an exciting feature for CloudCannon.

FTP means you can look after your own website hosting - supercharging, maintaining and SSL'ing it as you wish - but still get the awesome CloudCannon editing experience.

We have made it just the same as using Dropbox. When you connect your FTP we will pull out a copy and keep in sync. Any changes that you make we will publish right back to your FTP. You can keep working the way you were before CloudCannon only now you have a great editor.

<!--
	Every time you wish to make an edit, we'll suck your website out of your host via FTP, present it to you in the CloudCannon interface to make changes, and then save it all back to your host via FTP again.
-->

Linking your hosting FTP to your website is as simple as selecting it under the 'Storage Provider' options...

![FTP selectionn](/img/blog/cloudcannon-direction-FTP-visual-editables/FTP-Highlighted.png)

...then filling out your FTP server details. You'll need to get these from your hosting provider but you'll only have to enter them once :)

![FTP detail image](/img/blog/cloudcannon-direction-FTP-visual-editables/FTP-details.png)

#### Interface changes

The most visually obvious change recently has been the menu bar - it now sits on the left hand side rather than across the top and shall henceforth be known as the sidebar.

This new positioning was a design decision to maximize the available screen real estate for editing and viewing your website.

![Sidebar positioning](/img/blog/cloudcannon-direction-FTP-visual-editables/sidebar.png "Menu bar has moved from top to leftside ")

The tabs you are used to along the top haven't disappeared they've simply moved and been replaced by a set of icons George designed. Mousing over them still brings up their full names.

![Sidebar icon mouseover](/img/blog/cloudcannon-direction-FTP-visual-editables/mouseover-for-menu-detail.png)

The one thing that has stayed along the top of the screen is the new Breadcrumbs in the file browser. You won't get lost now and you can navigate back faster by clicking directly on the name of previous folders. Along with that the browser gets sexy new retina icons so it looks nice and crisp regardless of the device.

![Breadcrumbs](/img/blog/cloudcannon-direction-FTP-visual-editables/breadcrumbs.png)

** As a sneaky plus for our [Jekyll Beta](/jekyll) users I've made you a sexy special icon for editing Jekyll-style.

![Jekyll view icon](/img/blog/cloudcannon-direction-FTP-visual-editables/jekyll-icon.png)

#### Editing experience - incl. adding editable regions visually!

A significant piece of functionality added is - you can now add and remove editable regions visually.

To do this click the following button.

![Add editables button](/img/blog/cloudcannon-direction-FTP-visual-editables/add-editables-button.png)

Then select the regions you want to be editable.

![Adding editables](/img/blog/cloudcannon-direction-FTP-visual-editables/adding-editables.png)

You can then save them by clicking the disk.

#### Seamless switching and more editables

It was quite annoying having to save between visual and code views in the editor. So now you can now switch between adding editables, editing visually, and the code view without saving. You can see exactly whats going only looking at the HTML that is changing. Just remember to save changes before you leave the page entirely.

On top of that the editor is even better. We added another level of editing. You can now make "a", "span", "small", "strong", "em", "i", "b", "sub", "sup", "li", "dd", "dt", and "td" elements editable. These elements are span editables; this means that only the text can be updated.

#### Other things we've done

* Saving is way faster - you should notice that saving through the interface is much faster. We rebuilt some of our architecture and managed to speed it up massively. Enjoy!

* A new payment system is in place. We over hauled all those older interfaces and gave a fresh CloudCannon feel to make it easier to manage everything around payments.

* Additional file types - these have been requested by users and we're happy to deliver:
	.ai, .7z, .doc, .docx, .bmp, .csv, .eps, .svgz, .xls, .xlsx, .yaml, .rar, .gz, .text, .rss,
	.markdown, .mdown, .mkdn, .md, .mkd, .mdwn, .mdtxt, .mdtext,

General bug fixes - thanks for pushing through support tickets.

Sam
