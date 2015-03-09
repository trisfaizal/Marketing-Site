---
layout: post
title: 5 common Jekyll traps (and help to overcome them!)
header: 5 common Jekyll traps
category: Jekyll
author: sam
quotes:
  harry:
    text: Porting WordPress content over. Luckily there are/were a number of open-source tools to help me, but it wasn’t necessarily simple, and brought a fairly long-tail of legacy with it (code blocks incorrectly formatted, WP meta data being crammed into Jekyll’s YML front matter).
    name: Harry Roberts
    twitter_path: https://twitter.com/csswizardry
    image_path: https://pbs.twimg.com/profile_images/378800000842511021/741a0a2593ea55bbd6238f8705c7074f_400x400.jpeg
    work_title: Jekyll blog post
    work_path: http://csswizardry.com/2012/12/a-new-css-wizardry/
  paul:
    text: With over 1,000 blog posts on my site when I moved from WordPress to Jekyll, it takes some time to generate my site. That was a minor annoyance which has gotten better over the years with faster computers and more performant Jekyll updates.
    name: Paul Stamatiou
    twitter_path: https://twitter.com/stammy
    image_path: https://pbs.twimg.com/profile_images/1778867511/Screen_Shot_2012-01-24_at_2.03.52_PM_400x400.png
    work_title: WordPress to Jekyll blog post
    work_path: http://paulstamatiou.com/how-to-wordpress-to-jekyll/
  brett:
    text: The lack of documentation surrounding the site payload and methods available to the various object. It took some digging to write my first plugin.
    name: Brett Terpstra
    twitter_path: https://twitter.com/ttscoff
    image_path: https://pbs.twimg.com/profile_images/564842329714851840/qqDLuEwd_400x400.jpeg
    work_title: Jekyll CDN blog post
    work_path: http://brettterpstra.com/2014/02/21/a-jekyll-cdn-with-cloudfront/
  johan:
    text: The setup is kind of hard with the ruby dependencies/rvm/gemfiles/gem bundles. Now there are some decent guides I guess but when I was starting there was no solid guide to explain how it worked, there was a lot of assumed knowledge from being a Ruby developer even though I used Jekyll as a web designer. Setting Jekyll up in Windows is also painful on its own (I don't use Windows primarily but used Jekyll in a coding workshop I gave, not everyone has a Mac)
    name: Johan Ronsse
    twitter_path: https://twitter.com/johan_ronsse
    image_path: https://pbs.twimg.com/profile_images/528173675183235075/COCkQ3PO_400x400.jpeg
    work_title: Intro to Jekyll video
    work_path: https://www.youtube.com/watch?v=O7NBEFmA7yA
  michael:
    text: Getting my Ruby environment setup and figuring out problems with gems and other dependencies installing. Jekyll was straightforward enough, it was all the mess that comes with Ruby that wasn't.
    name: Michael Rose
    twitter_path: https://twitter.com/mmistakes
    image_path: https://pbs.twimg.com/profile_images/560937271042797568/m5VndD_B.jpeg
    work_title: Jekyll themes
    work_path: https://mademistakes.com/work/
  john:
    text: Dealing with silent/undescriptive errors with liquid. Though, the majority of those seem to be remedied in later versions.
    name: John Otander
    twitter_path: https://twitter.com/4lpine
    image_path: https://pbs.twimg.com/profile_images/1685588137/thumb_400x400.jpg
    work_title: Jekyll Pixyll theme
    work_path: http://pixyll.com/
  travis:
    text: Using Jekyll was the first time I had to use the terminal. I am a designer first, and that tends to scare our kind, but its no so bad. Another thing was trying to get my dev environment perfect. But now Jekyll handles SASS and there is an adequate Jade plugin. Still no live-reload without going to gulp/grunt route, and compile times could be faster.
    name: Travis Neilson
    twitter_path: https://twitter.com/travisneilson
    image_path: https://pbs.twimg.com/profile_images/378800000534594497/ff6e59ec85e5f439931a13a11e7e5212_400x400.jpeg
    work_title: DevTips "Jon doesn't like Jekyll" video
    work_path: https://www.youtube.com/watch?v=u22CLlw4_hg
  adam:
    text: Local installation. You know that Steve Jobs quote from an Apple Q&A; "if you see a stylus, they blew it." I have that feeling with platforms that pertain to be user friendly, but the install process involves dicking around with the terminal prompt.   
    name: Adam Wilcox
    twitter_path: https://twitter.com/adamwilcox
    image_path: https://pbs.twimg.com/profile_images/569370919701733376/SZzuCEB-_400x400.jpeg
    work_title: Podcasting with Jekyll tutorial
    work_path: http://www.adamwilcox.org/2013/01/17/from-the-pub/
  richard:
    text: Installing it on a Windows machine. Adding Search functionality. Incorporating Tags to posts.    
    name: Richard Bray
    twitter_path: https://twitter.com/ceiga
    image_path: https://pbs.twimg.com/profile_images/378800000748566726/83e335bc62829792ef3fa876463bb7e3_400x400.jpeg
    work_title: Muffin Jekyll theme
    work_path: http://richbray.me/muffin/
  alan:
    text: Getting the file structure right. Figuring out how to get the index page to paginate through posts. Using an .html extension instead of .md and being confused about why the translation didn't happen.
    name: Alan W. Smith
    twitter_path: https://twitter.com/TheIdOfAlan
    image_path: https://pbs.twimg.com/profile_images/2396971629/1z2l22mqcpqvhlv3hs9t_400x400.jpeg
    work_title: Date formatting in Jekyll
    work_path: http://alanwsmith.com/jekyll-liquid-date-formatting-examples
  dave:
    text: It was the data folder, though now that's not a problem.   
    name: David Zvenyach
    twitter_path: https://twitter.com/vdavez
    image_path: https://pbs.twimg.com/profile_images/1114190642/27397_8639519_5240_n_400x400.jpg
    work_title: Jekyll data_source tutorial
    work_path: https://esq.io/blog/posts/dogfooding-with-jekyll/
  mike:
    text: I haven't run into any major hurdles lately, most of the growing pains came from just trying to get a firm grasp on the basics.  Does Jekyll process a page through Markdown or Liquid first?  Why can't I use Liquid tags in excerpts?  Why can't I specify a permalink in my blog index front-matter?  The documentation for Jekyll is great, but some things just need to be learned through experimentation.    
    name: Mike Greiling
    twitter_path: https://twitter.com/mikegreiling
    image_path: https://pbs.twimg.com/profile_images/3665350757/672d30f885ed73aa4e1d7d8d87289649_400x400.png
    work_title: Jekyll intro tutorial
    work_path: http://pixelcog.com/blog/2013/jekyll-from-scratch-introduction/
  anon1:
    text: Well, there's Jekyll, and then there's Github Pages Jekyll. Jekyll itself is pretty straightforward, but Github Pages doesn't have great error messaging on build fail. It has gotten a bit better over the years, but still... Jekyll itself was pretty easy to work with once you figured out the basic config setup (which, if you've never used a config file before, takes a little learning, but not too bad).
    name: Anonymous
    twitter_path: 
    image_path: https://www.regenes.is/wp-content/uploads/2015/01/person-placeholder-400x400.png
    work_title: 
    work_path: 

---
I recently reached out to people that I consider to be influencers in the Jekyll community. I asked them to share their opinions and experiences of Jekyll. Last week I shared their top [5 most common reasons for loving Jekyll](http://cloudcannon.com/jekyll/2015/03/04/5-reasons-you-should-use-jekyll.html).

The natural curious follow up question to 'what works?' is 'what doesn't?'. But I didn't want to ask that question - it's rather un-constructive. Instead I think new users might be more encouraged to hear the initial hurdles other users have overcome to get started. If they can overcome their's so might you Jekyll padawan!

So without further ado*...
*and remembering that some users began years ago and the Jekyll dev's have been doing a great job of fixing these issues or [have plans to](https://github.com/jekyll/jekyll/issues/3324).

My second big survey question was "What was the first roadblock/hurdle/facepalm moment you had to overcome to begin using Jekyll?"

#### The TL;DR:

Top 5 most common Jekyll hurdles starting out:

1. Initial setup is a pain (getting dev environment just right)
2. Understanding site structure
3. Windows support
4. Compile speed
5. GUI lacking (command line interface scares some users)

#### In their own words:

{% include /quote.html quote=page.quotes.harry%}

{% include /quote.html quote=page.quotes.paul%}

{% include /quote.html quote=page.quotes.brett%}

{% include /quote.html quote=page.quotes.johan%}

{% include /quote.html quote=page.quotes.michael%}

{% include /quote.html quote=page.quotes.john%}

{% include /quote.html quote=page.quotes.travis%}

{% include /quote.html quote=page.quotes.adam%}

{% include /quote.html quote=page.quotes.richard%}

{% include /quote.html quote=page.quotes.alan%}

{% include /quote.html quote=page.quotes.dave%}

{% include /quote.html quote=page.quotes.mike%}

{% include /quote.html quote=page.quotes.anon1%}

#### Help for getting through these initial Jekyll issues:

Identifying shared initial frustrations with Jekyll might make you feel better about encountering them. But better than a problem shared is a problem solved! Below is a collection of info on identified issues:

1. Initial setup is a pain (getting dev environment just right)
- The Jekyll Core Team is putting lots of effort into making local installs easier. [Have your say on a solution](https://talk.jekyllrb.com/t/poll-installation-priorities-for-3-0/106)
- Watch Travis Neilson's [AWESOME intro video for local installation](https://www.youtube.com/watch?v=iWowJBRMtpc).
- Move your compile to the cloud. See CloudCannon notes below.

2. Understanding site structure
- The [Jekyll docs](http://jekyllrb.com/docs/structure/) do cover this well so give them another read.
- Andrew Munsell's [Jekyll by Example](https://www.andrewmunsell.com/tutorials/jekyll-by-example/tutorial) tutorial gives a great overview of concepts in action

3. Windows support
- This is the [official-unofficial guide by @juthilo](http://jekyll-windows.juthilo.com/)

4. Compile speed
- Not a lot of quick wins available here at the moment, but it has been and is a top priority for the Jekyll Core Team. In fact in the [latest Jekyll 3.0.0 beta release notes](https://github.com/jekyll/jekyll/blob/v3.0.0.beta1/History.markdown#head) incremental regeneration is item number one. 

5. GUI lacking (command line interface scares some users)
- [Prose.io](http://prose.io/) is a solution that some Jekyll users have turned to to assist with editing markdown and the publishing process.
- CloudCannon is looking to nail this! See below.

#### Plug from CloudCannon:

Avoid the initial Jekyll environment setup by moving your compilation to the cloud. Add non-tech friendly GUIs to your Jekyll workflow. Check out [CloudCannon's Jekyll beta overview video](https://www.youtube.com/watch?v=Fjd0V_pET5E) and then [join the beta](http://app.cloudcannon.com/jekyll_beta).

Next week I'll be exploring how YOU can best help the Jekyll community.