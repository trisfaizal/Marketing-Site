---
title: Free Automatic SSL
author: george
category: Features
image:
image_featured: false
---

This week [chrome is releasing an update](https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html) that will show "Not Secure" on any site that uses HTTP. This is part of an ongoing strategy to create a&nbsp;more secure web. To solve this issue we have added free automatic SSL certificates on all CloudCannon connected domains. This draws our SSL private beta to a close making it available for all CloudCannon users.
{: .present-before-paste}

![](/images/blog/free-automatic-ssl/treatment-of-http-pages1x.png)
{: .present-before-paste}

### How it works

Once you add a domain name to CloudCannon we will attempt to generate an SSL certificate. We use [LetsEncrypt](https://letsencrypt.org/)&nbsp;to author the certificate and plug them into our existing SSL system. LetsEncrypt authorises us to do this by doing a request to that domain name. If the response matches what LetsEncrypt expected, your cert will be granted. This means that as soon as your DNS propagates to show the site, it will be available and protected with HTTPS.
{: .present-before-paste}

![](/images/blog/free-automatic-ssl/f1c251082b2ed18c0769acfd4c61f8ad.png){: .screenshot}
{: .present-before-paste}

HTTP will default to redirect to HTTPS for all CloudCannon sites. This can be configured using the Site Settings. Automatic generation can also be disabled which will enable a custom certificate upload option. If you have any issues, see the [documentation](https://docs.cloudcannon.com/ssl/custom-certificate/#doc) or contact support.
{: .present-before-paste}

### What else is new
{: .present-before-paste}

Over the last month we have added four other features:

1. Post form hooks to enable custom form workflows. This is useful for connecting systems like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/).
2. Enable embeds within your editor experience. This allows your editors to add any custom html including Youtube, Vimeo or Twitter.
3. Improved on-boarding flow. This cuts down the number of options when creating a site to keep it focused. We hope to improve this with more automatic detections of environment requirements.
4. A new dashboard for developers. This displays a sites most important information including syncing and build state. We will add more to this as we learn more about common errors.

Our main goals for the next couple months is to improve editor UX and the performance of our entire platform. Thanks for the ongoing feedback and support.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
{: .present-before-paste}

&nbsp;
{: .present-before-paste}