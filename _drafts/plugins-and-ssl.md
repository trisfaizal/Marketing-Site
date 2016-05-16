---
layout: post
title: Plugins and SSL Support
header: Plugins and SSL Support
category: Features
post_image: /img/blog/plugins/filetypes@2x.png
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: george
---

This week we are excited to announce the beginning of two features. The first is the ability to use plugins on any Jekyll site. The second is SSL support to serve sites over HTTPS. Both features are in private beta.

## Plugins Support

![The banner of the CloudCannon status page](/img/blog/plugins/filetypes.png){: srcset="/img/blog/plugins/filetypes.png 800w, /img/blog/plugins/filetypes@2x.png 1600w"}

Plugins support allows you to add custom plugins to any site and CloudCannon executes the custom code. Plugins are added using a Gemfile or with ruby files directly within the `_plugins` directory.

Plugins can be used for:

- Reducing the repetition across site
- Connect to external data sources
- Adding additional liquid tags
- Generating pages from data files
- And much more

Have the editing of CloudCannon and the full power of Jekyll. Get in touch If you want to try Jekyll plugins on CloudCannon.

## SSL Support

![The banner of the CloudCannon status page](/img/blog/plugins/https.png){: srcset="/img/blog/plugins/https.png 800w, /img/blog/plugins/https@2x.png 1600w"}

Our SSL Support is already in use by a dozen of our users. This allows you serve any traffic on your site over SSL. Simply upload your cert and connect it to your site. This will enable HTTPS for any traffic to your site.

Optionally, any site can be configured to force SSL. This will redirect any HTTP traffic to HTTPS.

---

For a full list of changes check out [the changelog](https://docs.cloudcannon.com/changelog/). If you want to help us in this early stage of either feature get in touch. We are extremely excited to see what you build with the new features.
