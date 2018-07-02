---
title: Free Automatic SSL
author: george
category: Features
image: /uploads/greenlock.png
image_featured: true
---

This week [Chrome is releasing an update](https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html) that will show "Not Secure" on any site that uses HTTP. This is part of an ongoing strategy to create a more secure web. To assist with this change, we have added free automatic SSL certificates on all CloudCannon connected domains. This draws our SSL private beta to a close making it available for all CloudCannon users.

![](/images/blog/free-automatic-ssl/treatment-of-http-pages1x.png)

### How it works

Once you add a domain name to CloudCannon we will attempt to generate an SSL certificate. We use [Let’s Encrypt](https://letsencrypt.org/)&nbsp;to author the certificate and plug them into our existing SSL system. Let’s Encrypt authorises us to do this by doing a request to that domain name. If the response matches what Let’s Encrypt expected, your certificate will be granted. This means that as soon as your DNS propagates to show your site, it will be protected with HTTPS.

![](/images/blog/free-automatic-ssl/f1c251082b2ed18c0769acfd4c61f8ad.png){: .screenshot}

HTTP will default to redirect to HTTPS for all CloudCannon sites. This can be configured using the *Site Settings*. Automatic generation can also be disabled which will enable a custom certificate upload option. If you have any issues, see the [documentation](https://docs.cloudcannon.com/ssl/letsencrypt/#doc) or [contact support](/contact/).

### What else is new
{: .present-before-paste}

Over the last month we have added four other features:

1. Post form hooks to enable custom form workflows. This is useful for connecting systems like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/).
2. Enable embeds within your editor experience. This allows your editors to add any custom HTML including Youtube, Vimeo or Twitter.
3. Improved on-boarding flow. This cuts down the number of options when creating a site to keep it focused. We hope to improve this by automatically detecting more environment requirements.
4. A new dashboard for developers. This displays a site's most important information including syncing and build state. We will add more to this as we learn more about common errors.

Our main goals for the next couple months is to improve editor UX and the performance of our entire platform. Thanks for the ongoing feedback and support.