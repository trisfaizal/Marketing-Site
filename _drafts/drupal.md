---
layout: post
title: Drupal vs Jekyll + CloudCannon
header: Drupal vs Jekyll + CloudCannon
category: Features
author: mike
---
In this series we're comparing traditional backend CMSs with a static approach of [Jekyll](http://jekyllrb.com) + [CloudCannon](http://cloudcannon.com). We'll take a free HTML5 template and integrate it with two content management systems.

## Site Overview

The site is a [basic material design blog template](https://github.com/CloudCannon/jekyll-material-design-lite).

The home page lists all the blog posts.

![](/uploads/versions/home---x----900-563x---.jpg){:.screenshot}

There's an about page.

![](/uploads/versions/screen-shot-2015-09-23-at-2.40.19-pm---x----900-563x---.png){:.screenshot}

And a page to view a blog post.

![](/uploads/versions/screen-shot-2015-09-23-at-2.38.07-pm---x----900-563x---.png){:.screenshot}

## Setup

#### Drupal

I'm on Mac OSX so I decided to use [MAMP](https://www.mamp.info/en/) to set up my PHP environment. After a 240MB download I had a full PHP with MySQL environment. Next I downloaded Drupal 7, unzipped it to the htdocs directory inside MAMP and loaded the quick installer in my browser.

![](/uploads/versions/drupal---x----900-563x---.png){:.screenshot}

The quick install involved configuring the database and other site settings for my site.

#### Jekyll

Again, I'm using Mac OSX so Ruby is already installed. To install Jekyll I open up my terminal and type:

{% highlight bash %}
sudo gem install jekyll
{% endhighlight %}

Then I can run Jekyll using:

{% highlight bash %}
jekyll serve
{% endhighlight %}

## Development

#### Drupal

With Drupal, I made a copy of the Stark theme and read documentation on building Drupal themes. After hours of messing around I added these files to the theme:

**html.tpl.php** - The outer most structure of the page and asset loading.

**node.tpl.php** - HTML structure for listing blog posts on the front page, normal pages and blog posts.

{% highlight php %}
{% raw %}
<?php if ($teaser) { ?>
  <div class="mdl-card mdl-cell mdl-cell--12-col">
      <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url('<?php echo file_create_url($content['field_image'][0]['#item']['uri']); ?>')">

        <h3><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h3>
      </div>
      <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
        <div class="minilogo"></div>
        <div>
          <strong><?php echo $name ?></strong>
          <span><?php print format_interval((time() - $node->created) , 2) . t(' ago'); ?></span>
        </div>
      </div>
    </div>
<?php } elseif ($page) { ?>
  <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
    <div class="mdl-card__media mdl-color-text--grey-50">
      <h3>About Me</h3>
    </div>
    <div class="mdl-color-text--grey-700 formatted-text mdl-card__supporting-text no-flex">
      <?php print render($content); ?>
    </div>
  </div>
<?php } else { ?>
  <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
    <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url('<?php echo file_create_url($content['field_image'][0]['#item']['uri']); ?>')">
      <h3><?php print $title; ?></h3>
    </div>
    <div class="mdl-color-text--grey-700 mdl-card__supporting-text meta">
      <div class="minilogo"></div>
      <div>
        <strong><?php echo $name ?></strong>
        <span><?php print format_interval((time() - $node->created) , 2) . t(' ago'); ?></span>
      </div>
      <div class="section-spacer"></div>
      <div class="meta__favorites">
        425 <i class="material-icons" role="presentation">favorite</i>
        <span class="visuallyhidden">favorites</span>
      </div>
      <div>
        <i class="material-icons" role="presentation">bookmark</i>
        <span class="visuallyhidden">bookmark</span>
      </div>
      <div>
        <i class="material-icons" role="presentation">share</i>
        <span class="visuallyhidden">share</span>
      </div>
    </div>
    <div class="mdl-color-text--grey-700 formatted-text mdl-card__supporting-text">
      <?php
        hide($content['field_image']);
        hide($content['comments']);
        hide($content['links']);
        print render($content);
      ?>
    </div>
  </div>
<?php } ?>
{% endraw %}
{% endhighlight %}


**page--front.tpl.php** - Container for front page HTML. Sits between html.tpl.php and the front page code in node.tpl.php.

**page.tpl.php** - Container for page HTML. Sits between html.tpl.php and the page/blog entry code in node.tpl.php.

**region.tpl.php** - Was outputting unwanted HTML so I overrode it to output nothing.

{% highlight php %}
{% raw %}
<?php print $content ?>
{% endraw %}
{% endhighlight %}

**block.tpl.php** - Was outputting unwanted HTML so I ovverode it to output nothing.

**template.php** - Overrode the CSS and Javascript to prevent Drupal loading its default files. Also customised the menu item HTML output and added external CSS and Javascript files.

It took me a long time and a lot of reading to figure out which files to edit or where generated HTML I didn't want was coming from. It felt like I was constantly fighting against Drupal to get the output I wanted.

The other gotcha is each time I made an update to the template I would have to go into the Drupal admin panel to clear the cache before I could see the changes:

![](/uploads/versions/screen-shot-2015-09-23-at-3.05.30-pm---x----900-563x---.png){:.screenshot}

[Source for Drupal Theme](https://github.com/CloudCannon/Drupal-material-theme)

#### Jekyll

Using Jekyll, most of the static html files remained exactly the same. I pulled out the layouts into separate files to use on multiple pages:

**default.html** - Contains the basic HTML structure. All other layouts use this as their parent layout.

**post.html** - DDefines the structure of blog posts.

**page.html** - Defines the structure of normal pages.

Blog posts are markdown files. The title, author, header image and other metadata is set using Frontmatter at the top of the file:

{% highlight liquid %}
{% raw %}
---
layout: post
title: Shopping
author: The Newist
header_image_path: '/images/shopping.jpg'
---

Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.

Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo. Incididunt eu enim enim ipsum Lorem commodo tempor duis eu ullamco tempor elit occaecat sit. Culpa eu sit voluptate ullamco ad irure. Anim commodo aliquip cillum ea nostrud commodo id culpa eu irure ut proident. Incididunt cillum excepteur incididunt mollit exercitation fugiat in. Magna irure laborum amet non ullamco aliqua eu. Aliquip adipisicing dolore irure culpa aute enim. Ullamco quis eiusmod ipsum laboris quis qui.

Cillum ullamco eu cupidatat excepteur Lorem minim sint quis officia irure irure sint fugiat nostrud. Pariatur Lorem irure excepteur Lorem non irure ea fugiat adipisicing esse nisi ullamco proident sint. Consectetur qui quis cillum occaecat ullamco veniam et Lorem cupidatat pariatur. Labore officia ex aliqua et occaecat velit dolor deserunt minim velit mollit irure. Cillum cupidatat enim officia non velit officia labore. Ut esse nisi voluptate et deserunt enim laborum qui magna sint sunt cillum. Id exercitation labore sint ea labore adipisicing deserunt enim commodo consectetur reprehenderit enim. Est anim nostrud quis non fugiat duis cillum. Aliquip enim officia ad commodo id.
{% endraw %}
{% endhighlight %}

To list the blog posts in index.html I create a forloop and reference the Frontmatter:

{% highlight liquid %}
{% raw %}
---
layout: default
title: Home
---

{% for post in site.posts %}
  <div class="mdl-card mdl-cell mdl-cell--12-col">
    <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url('{{ post.header_image_path }}')">
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

[Jekyll site source](https://github.com/CloudCannon/jekyll-material-design-lite)

## Deployment

#### Drupal

To deploy Drupal to a production server I set up an EC2 server with Ubuntu 14.04. Then I SSHed in to install the PHP/MySQL environment using [this guide](http://www.comtechies.com/2012/12/how-to-install-drupal-on-amazon-ec2.html). Finally I downloaded Drupal, ran the installer to setup my site and configure the database then transferred my theme across.

The part of I found trickiest was getting the content I'd written in development onto the production site. I exported my development database but Drupal didn't like me just importing an existing database. With enough tinkering I eventually got this to work.

#### Jekyll

I used CloudCannon deploy and host the Jekyll site. To do this I created a GitHub repository with my source files, then connected that repository to a new site in CloudCannon.

![](/img/blog/drupal-jekyll/connect-github.png){:.screenshot}

The files sync to CloudCannon and are live on a generated testing domain.

![](/img/blog/drupal-jekyll/file-browser.png){:.screenshot}

All the content is part of the site so there's no separate database to import.


## Updating content

#### Drupal

To update content in Drupal you use the admin panel. You can see existing articles and pages.

![](/img/blog/drupal-jekyll/content.png){:.screenshot}

Update content using a text area.

![](/img/blog/drupal-jekyll/update-content.png){:.screenshot}

And update other meta data.

![](/img/blog/drupal-jekyll/update-content-2.png){:.screenshot}

#### Jekyll

In CloudCannon, editing is all inline. You can update content on the about page by clicking and entering new content.

![](/img/blog/drupal-jekyll/cc-edit.png){:.screenshot}

Going to the collections view displays all the blog posts.

![](/img/blog/drupal-jekyll/cc-edit-blog-list.png){:.screenshot}

You write and update blog posts in a simple editor.

![](/img/blog/drupal-jekyll/cc-edit-blog.png){:.screenshot}

Update Frontmatter in the settings sidebar.

![](/img/blog/drupal-jekyll/cc-edit-frontmatter.png){:.screenshot}

All changes made on CloudCannon get committed back to the repository so I can always pull in a production copy of the site to my local computer.

## Speed

CloudCannon serves static files and all assets are minified, compressed and delivered on a CDN. All this gives CloudCannon a significant speed advantage over Drupal.

![](/img/blog/drupal-jekyll/speed.png)

## Conclusion

I felt like I was fighting against Drupal each every step of the way. It was hard to take a static page and convert it into a Drupal theme, deployment required setting up an entire server, the client editing was powerful but displayed many complicated options and the end website was more than 6x slower.

Jekyll was a small step from the static website, deployment was a simple git push, the editing was all inline and the website was significantly faster.

I've tried to be as fair as I can with this comparison. It's the first time I've used Drupal so there might be better ways of doing things. If you can see an improvement leave a comment below.

All the source files are available on GitHub:

 * [Static Site](https://github.com/CloudCannon/jekyll-material-design-lite)
 * [Drupal Theme](https://github.com/CloudCannon/Drupal-material-theme)
 * [Jekyll Site](https://github.com/CloudCannon/jekyll-material-design-lite)
