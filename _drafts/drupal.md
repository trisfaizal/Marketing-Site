---
layout: post
title: Drupal vs Jekyll and CloudCannon
header: Improved Pricing
category: Features
author: mike
---
In this series we're comparing traditional backend Content Management Systems with a static approach of Jekyll and CloudCannon. We'll take this free html5 template and implement it using two content management systems.

## Site Overview

The site is a basic material design blog template.

The home page lists all the blog posts:

![](/uploads/versions/home---x----900-563x---.jpg) There's an about page: ![](/uploads/versions/screen-shot-2015-09-23-at-2.40.19-pm---x----900-563x---.png) And a page to view a blog post: ![](/uploads/versions/screen-shot-2015-09-23-at-2.38.07-pm---x----900-563x---.png)

## Setup

Let's start with setting up Drupal.

I'm on Mac OSX so I decided to use [MAMP](https://www.mamp.info/en/) to set up my PHP environment. After a 240MB download I had a full PHP with MySQL environment ready to go. Next I downloaded Drupal 7.39, put it in my htdocs directory and loaded the quick installer in my browser.

![](/uploads/versions/drupal---x----900-563x---.png)

The quick install involved configuring the database and other site settings for my site.

Now let's look at Jekyll. I'm using Mac OSX so Ruby is already installed. To install Jekyll I open up my terminal and type:

{% highlight bash %}
sudo gem install jekyll
{% endhighlight %}

## Development

With Drupal, I made a copy of the Stark theme and started reading documentation about building themes on Drupal. After hours of messing around I added these files to the theme:

**html.tpl.php** - Is the outter most structure of the page. , and the footer all went in here along with place holders for css, js and content.

**node.tpl.php** - Has the HTML structure for listing blog posts on the front page, a normal page and a blog post.

**page--front.tpl.php** - Container for front page HTML. Sits between html.tpl.php and the front page code in node.tpl.php.

**page.tpl.php** - Container for page HTML. Sits between html.tpl.php and the page/blog entry code in node.tpl.php.

**region.tpl.php** - Was outputting unwanted HTML so I overrode it to output nothing.

**block.tpl.php** - Was outputting unwatned HTML so I ovverode it to output nothing.

**template.php** - Overrode the CSS and Javascript to prevent Drupal loading its default files. Also customised the menu item HTML output and added external CSS and Javascript files.

It took me a long time to figure out what file I needed to be editing or where particular HTML I didn't want was coming from. It felt like I was constantly fighting against Drupal to get the output I wanted.

The other gottcha I found is each time I made an update to the template I would have to go into the Drupal admin panel to refresh the cache before I could see the changes:

![](/uploads/versions/screen-shot-2015-09-23-at-3.05.30-pm---x----900-563x---.png)

Using Jekyll I created 3 layouts:

**default.html** - Contains the all HTML stucture which doesn't change from page to page. All other layouts use this as their parent layout.

**post.html** - Defines how a blog post it structured.

**page.html** - Defines how a normal page is structured.

The blog posts are created as markdown files. The title, author, header image and other metadata is defined using Frontmatter at the top of the file:

{% highlight liquid %}
{% raw %}
---
layout: post
title: On The Road
author: The Newist
header_image_url: '/images/road_big.jpg'
---

Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.

Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo. Incididunt eu enim enim ipsum Lorem commodo tempor duis eu ullamco tempor elit occaecat sit. Culpa eu sit voluptate ullamco ad irure. Anim commodo aliquip cillum ea nostrud commodo id culpa eu irure ut proident. Incididunt cillum excepteur incididunt mollit exercitation fugiat in. Magna irure laborum amet non ullamco aliqua eu. Aliquip adipisicing dolore irure culpa aute enim. Ullamco quis eiusmod ipsum laboris quis qui.

Cillum ullamco eu cupidatat excepteur Lorem minim sint quis officia irure irure sint fugiat nostrud. Pariatur Lorem irure excepteur Lorem non irure ea fugiat adipisicing esse nisi ullamco proident sint. Consectetur qui quis cillum occaecat ullamco veniam et Lorem cupidatat pariatur. Labore officia ex aliqua et occaecat velit dolor deserunt minim velit mollit irure. Cillum cupidatat enim officia non velit officia labore. Ut esse nisi voluptate et deserunt enim laborum qui magna sint sunt cillum. Id exercitation labore sint ea labore adipisicing deserunt enim commodo consectetur reprehenderit enim. Est anim nostrud quis non fugiat duis cillum. Aliquip enim officia ad commodo id.
{% endraw %}
{% endhighlight %}

To list the blog posts in index.html I create a forloop and reference the frontmatter in each blog post:

{% highlight liquid %}
{% raw %}
---
layout: default
title: Home
---

{% for post in site.posts %}
  <div class="mdl-card mdl-cell mdl-cell--12-col">
    <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url('{{ post.header_image_url }}')">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    </div>
    <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
      <div class="minilogo"></div>
      <div>
        <strong>{{ post.author }}</strong>
        <span>{{ post.date | date: "%-d %B %Y" }}</span>
      </div>
    </div>
  </div>
{% endfor %}
{% endraw %}
{% endhighlight %}

## Deployment

Updating content

Speed