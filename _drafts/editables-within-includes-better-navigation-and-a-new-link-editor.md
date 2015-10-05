---
layout: post
title: "Editables Everywhere, Easier Navigation and Better Link Editing"
header: "Editables Everywhere, Easier Navigation and Better Link Editing"
category: feature
author: george
---

Over the last couple weeks we have released some big changes.

### Editables everywhere

Previously editable elements needed to be in the html page that was being rendered. Now editable elements can be in any layout&nbsp;or include. This opens the visual editor to be used on sidebars headers and footers consistent across multiple pages. CloudCannon will detect where the editables came from and save them back to the relevent&nbsp;files. Give it a try by adding `class="editable"` in an include or layout.

VIDEO HERE

### Better Navigation

Navigation and routing has been cleaned up every in the app. We removed the ugly hash that was in the url and changed that to a path everyone can understand. The developer views have all been refactored under the browser namespace. Easy to use breadcrumbs inside the code view have been added to transition back to the parent folders.

QUICK CODE VIDEO HERE

The Collection view got a similar refresh with a neat breadcrumb and nicer url.

QUICK COLLECTION VIDEO HERE

The visual editor has the biggest change, urls use the output url which allows all pages to be viewed within the app. The breadcrumb is replaced with the title of the page. The preview option was removed as the new link editor allows you to navigate using links inside editables. To preview, keep your mouse still and the yellow boxes go away.

QUICK EDITOR VIDEO HERE

### New Link Editor

Adding and updating links is an essential part of CloudCannon and&nbsp;needed a refresh. The new link editor:

* Allows navigating&nbsp;to the current link
* Understands the output of a jekyll site separating linking to a file and a page.
* Is consistent with the image editor controls


QUICK LINK EDITOR VIDEO HERE

--CLOSE--

&nbsp;