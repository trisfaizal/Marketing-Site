---
layout: post
title: Output Drafts and Collection Defaults
header: Output Drafts and Collection Defaults
category: Features
author: george
---

This week we have a smaller release for some highly requested configuration. CloudCannon is perfectly suited to running multiple sites for different environments. We added draft post compiling and defaults for creating collection items.

### Output Draft Posts

CloudCannon users can now preview draft posts in staging environments before publishing for the live site. Configure this in the&nbsp;*Site Settings*&nbsp;to add the `--drafts` flag to any Jekyll compile on that site. Enabling **Output draft posts**&nbsp;will trigger a compile and include drafts with posts.

SCREENSHOT OF SETTINGS

In addition to the live site, you can preview drafts within the app. Just like posts, drafts now have the visual and markdown editor options. This will help keep you focused when writing blog posts.

### Collection Defaults

Before this release, new collection items were pre-populated with cleared data from another item. Developers can now create a &nbsp;file within the collection folder to control default values. This file is used to define new items by cloning both the contents and filetype into the new file. Our documentation includes this new feature. Since this file begins with an underscore Jekyll will not output the file to the live site. As an exception, draft posts will always read from `/_posts/` rather than `/_drafts/`.

SCREENSHOT OF FILE BROWSER

As always, these changes were inspired by your feedback. Syncing performance and reliability is the focus of our next release. If you have anything get in touch at [support@cloudcannon.com](mailto:support@cloudcannon.com)&nbsp;or send us a message in app.