---
layout: post
title: Output Drafts and Collection Defaults
header: Output Drafts and Collection Defaults
category: Features
author: george
---

This week we have a smaller release for some highly requested configuration. CloudCannon is perfectly suited to running multiple sites for different environments. Draft post compiling has been added to allow quick previews and defaults for customised creation.

### Output Draft Posts

CloudCannon users can now preview draft posts in staging environments before publishing for the live site. This is configured within the site settings and adds the `--drafts` flag to any jekyll compile on that site. Enabling "output draft posts" will trigger a compile and the anywhere posts are output drafts will be included.

SCREENSHOT OF SETTINGS

In addition to the live site, these drafts can be previewed within the app. Just like posts, drafts will now have two editing options; visual editor and the markdown editor. This will help keep focused when writing blog posts.

### Collection Defaults

Prior to this release new collection items were created by cloning another item from the same collection and clearing the data. To allow a more custom creation process, developers can now create a `_defaults.EXTENSION` file within the collection folder. This file will be used to define new items by cloning both the contents and filetype into the new file. [Our documentation](http://docs.cloudcannon.com/editing/collection-defaults/) has been updated for this new feature. As this file begins with an underscore Jekyll will not output the file to the live site. As an exception draft posts will always read from `/_posts/` rather than `/_drafts/`.

SCREENSHOT OF FILE BROWSER

As always these changes have been inspired by your feedback. Our next release is focused on syncing performance and reliability. If you have anything get in touch at [support@cloudcannon.com](mailto:support@cloudcannon.com) or send us a message in app.

&nbsp;