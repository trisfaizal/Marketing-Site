---
title: Three New Jekyll Templates
header: Three New Jekyll Templates
category: Announcements
post_image: /img/blog/3-new-jekyll-templates/base/1.jpeg
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: mike
extra_google_fonts: "|Material+Icons"
templates:
  - name: Base
    repository: https://github.com/CloudCannon/base-jekyll-template
    demo_url: https://orange-ape.cloudvent.net/
    description: |-
      Knowledge base template for Jekyll.

      * Categories to help organise content.
      * Fully integrated search allows your customers to find the content they're looking for.
      * Smart sidebar to help navigation tutorials.
    images:
      - image: /img/blog/3-new-jekyll-templates/base/1.jpeg
      - image: /img/blog/3-new-jekyll-templates/base/2.jpeg
      - image: /img/blog/3-new-jekyll-templates/base/3.jpeg
      - image: /img/blog/3-new-jekyll-templates/base/4.jpeg
      - image: /img/blog/3-new-jekyll-templates/base/5.jpeg
  - name: Treat
    repository: https://github.com/CloudCannon/treat-jekyll-template
    demo_url: https://spring-bat.cloudvent.net/
    description: |-
      Food/baking blog template for Jekyll.

      * Share your best recipes with the world.
      * Beautifully structured recipe and ingredient lists.
      * Build a community through a mailing list.
    images:
      - image: /img/blog/3-new-jekyll-templates/treat/1.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat/2.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat/3.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat/4.jpeg
      - image: /img/blog/3-new-jekyll-templates/treat/5.jpeg
  - name: Fur
    repository: https://github.com/CloudCannon/fur-jekyll-template
    demo_url: https://turquoise-rook.cloudvent.net/
    description: |-
      E-Commerce template for Jekyll.

      * Accept purchases using Snipcart.
      * Add products and variations.
      * Have customers ask questions on the contact page.
    images:
      - image: /img/blog/3-new-jekyll-templates/fur/1.jpeg
      - image: /img/blog/3-new-jekyll-templates/fur/2.jpeg
      - image: /img/blog/3-new-jekyll-templates/fur/3.jpeg
      - image: /img/blog/3-new-jekyll-templates/fur/4.jpeg
      - image: /img/blog/3-new-jekyll-templates/fur/5.jpeg
---

It's great to see the different ways people are using the [Jekyll templates we launched late last year](/announcements/2016/12/05/free-jekyll-templates/). To continue this success, we've put together three new templates ready for your next site. These are licensed under MIT to feel free to use them on client/commercial projects.

<link type="text/css" rel="stylesheet" href="/css/lightslider.css" />

### The Templates

{% for template in page.templates %}
<h4>
	<a href="{{ template.repository }}">{{ template.name }}</a>
	<small><a class="external" href="{{ template.demo_url }}" target="_blank">live demo</a> <i class="material-icons">launch</i></small>
</h4>

{{ template.description | markdownify }}

<ul class="photo-gallery">
	{% for image in template.images %}
		<li><img class="screenshot" src="{{ image.image }}" alt="{{ template.name }} Jekyll template"></li>
	{% endfor %}
</ul>
{% endfor %}

### Usage

To use the new templates in CloudCannon, create a new site and select the **Choose a Template** option.

![Choose a jekyll template](/img/blog/7-free-jekyll-templates/choose.jpeg){:class="screenshot"}

From here you can browse through the templates and select your favourite.

![List of jekyll templates](/img/blog/7-free-jekyll-templates/templates.jpeg){:class="screenshot"}

These templates also work without CloudCannon, just fork the template repository on GitHub or download a zip.

### What's Next?

We have more Jekyll templates in the works. If there's a use case a Jekyll template would help you solve let us know in the comments below.

<script src="/js/lightslider.js"></script>

<script type="text/javascript">
	$(document).ready(function () {
		$(".photo-gallery img").each(function() {
			var $this = $(this);
			var src = $this.attr('src');
			$this.parent().attr('data-thumb', src);
			$this.parent().attr('data-src', src);
		});

		$(".photo-gallery").lightSlider({
			gallery: true,
			item: 1,
			loop: true,
			thumbItem: 5,
			thumbMargin: 20,
			slideMargin: 0,
			enableDrag: false,
			currentPagerPosition: "left",
		});
	});
</script>
