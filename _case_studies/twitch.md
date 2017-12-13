---
name: Twitch
title: CloudCannon Case Study - Twitch
brand_color: "#6441A4"
logo: twitch
logo_dark: purple-twitch
tagline: Empowering marketers to push content without involving developers
featured:
  image: /images/case-studies/twitch/home.png
  url: https://www.twitchcon.com/
testimonial:
  text_markdown: "I knew a static site generator was the way to go for Twitch's informational websites, we just needed a way for the marketing team to update content. CloudCannon provides a quality editing interface for our marketing team while allowing developers to use the tools and workflows they know."
  image_path: /images/case-studies/twitch/sam.jpg
  name: Sam Harnack
  work_title: ‎Technical Marketing Director
  work_path: https://twitch.tv
---

## Challenge

Twitch is the world’s leading social video service and community for video games. To support their 15 million daily active users and 2.2 million content creators, they have an array of informational websites with fresh, update-to-content.

In the past these informational websites were built using Ruby on Rails. The marketing team updated content by pasting HTML into an Active Admin text box. They had no way of knowing what was changing until it was on the live website. For each new site the developers had to spin up and maintain infrastructure.

Twitch needs to:

* Provide an editing interface marketers find easy to use
* Have marketers publish content without involving developers
* Preview content before its pushed live
* Host the websites on their own Amazon S3 Buckets

## How CloudCannon helps

Twitch converted a portion of their informational websites to Jekyll/CloudCannon. The marketing team can now keep content fresh across all the websites and the developers can iterate faster on brining new sites online.

{% include components/case-study/quote.html case=page %}

## Editing

The marketing team no longer needs to understand HTML, with CloudCannon they update content by typing directly on the page. The developer team control what and how content is edited to ensure marketers can't break the site and the branding remains consistent.

![TwitchCon Editing](/images/case-studies/twitch/editing.png){: .screenshot }

## Publishing Workflows

Marketers edit content on staging sites hosted by CloudCannon. They can navigate a live version of the staging site to see exactly what is changing. When they're ready to push content live they click a publish button. In the background this creates a GitHub Pull Request which triggers a Travis CI build to check for broken links and other problems. If all the tests pass, the PR can then be merged in CloudCannon. This triggers Travis CI again and deploy the website to Twitch's production Amazon S3 servers.

![TwitchCon Publishing](/images/case-studies/twitch/publish.png){: .screenshot }

## Plugins

Twitch has extended Jekyll's functionality with custom built Ruby plugins. One plugin downloads speaker data from an external source and formats it into the speaker schedule for TwitchCon. By doing this Twitch doesn't need to keep two copies of data in sync, it happens automatically when they build the site.

![TwitchCon Speakers](/images/case-studies/twitch/plugin.png){: .screenshot }

## Share levels

Twitch changes the editors available in CloudCannon depending on the person's technical ability. Non-technical editors update content using an easy-to-use interface while technical editors have full access to write their own code.

{% include components/case-study/quote.html case=page quote="Twitch is an engineering heavy company so I knew I had to find something that works for engineers and marketers. Engineers don’t want to use a visual editor because it’s faster for them to write code. With CloudCannon, I give developers access to the code while keeping the visual editor for marketers." %}


![Twitch Markdown](/images/case-studies/twitch/markdown.png){: .screenshot }
