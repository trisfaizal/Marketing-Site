---
title: G Suite Authenticated Sites with CloudCannon and SAML
staff_member: george-phillips
category: Tutorials
image:
image_featured: false
---

Internally at CloudCannon, we use G Suite to manage all of our emails. This allows us to work together on products like Google Drive and Google Meet. When a new member joins our team, they need to access all of the relevant documentation. Some of our internal documentation is as you'd expect, a Jekyll site hosted on CloudCannon. This site is only accessible to people within our organisation using Google authentication. When a staff member leaves, we disable their email and the internal documentation is restricted to them once again. This blog post will guide you through the process of adding Google Authentication to one of your&nbsp; CloudCannon sites.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-21-55.png){: .screenshot width="2880" height="1800"}

## Creating a SAML app in the G Suite Admin console

Once you have your site ready to go, we will need to add authentication to the site. To achieve this, we will need to go to the [G Suite Admin console](https://admin.google.com/ac/home).

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-48-27.png){: .screenshot width="2880" height="1800"}

Select Apps

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-48-46.png){: .screenshot width="2880" height="1800"}

Select SAML apps

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-48-57.png){: .screenshot width="2880" height="1800"}

Here will be a list of existing SAML applications. Click the yellow plus in the bottom right of the screen.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-49-26.png){: .screenshot width="2880" height="1800"}

Click SETUP MY OWN CUSTOM APP.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-49-37.png){: .screenshot width="2880" height="1800"}

Here some information is provided. Save the SSO URL and Download the Certificate. Once you have those saved click NEXT.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-50-05.png){: .screenshot width="2880" height="1800"}

You can now customise your App with a name, description and logo. Take care to add this information as you will be unable to update this point. Once completed click NEXT.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-55-02.png){: .screenshot width="2880" height="1800"}

Now we need to add the CloudCannon specific information. Below are the details for a site at example.com. Replace example.com with the domain name of your site.

| ACS URL \* | https://example.com/login/consume |
| Entity ID \* | cloudcannon.com |
| Start URL | https://example.com/ |
| Signed Response | Checked |
| Name ID | Basic Information, Primary Email |
| Name ID Format | EMAIL |

Once the information is correct, click NEXT. On the next slide, click FINISH.

## Configuring a CloudCannon site with SAML

Open CloudCannon at your site, visit *Site Settings / Authentication* and select SAML Authentication.

![](/images/blog/gsuite-authenticated-sites-with-cloudcannon-and-saml/screen-shot-2020-01-30-at-20-46-19.png){: .screenshot width="2880" height="1800"}

In here you will need to paste the following information:

* The copied "SSO URL" into "SAML 2.0 Endpoint (HTTP)"
* The downloaded certificate files contents into "X.509 Certificate"

Scroll down and click "Update SAML Configuration". 🎉 Congratulations, your site is now restricted to your team members in your Google organisation. Try visiting your site and logging in. Reach out to support if you have any questions.