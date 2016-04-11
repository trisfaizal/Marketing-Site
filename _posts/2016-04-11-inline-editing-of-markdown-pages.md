---
layout: post
title: Inline Editing of Markdown Pages
header: Inline Editing of Markdown Pages
category: Features
post_image: /img/blog/inline-editing/markdown-editable@2x.png
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: george
---

This week we announce a long awaited feature, Inline editing of markdown files. This feature means that any post, collection item or page written in Markdown are editable in the visual editor automatically. The ability to edit posts in context has been requested since the introduction of blogging.

This feature works for all existing and new sites. The only requirement of this feature is that the `{% raw %}{{ content }}{% endraw %}` block is the only child of its parent element. For example:


{% highlight html %}
{% raw %}
<div>{{ content }}</div>
{% endraw %}
{% endhighlight %}

The controls available to the editable region are decided by the parent element. `span` have less controls than a `p` which have less controls than a `div`. See our [Editable Regions documentation](https://docs.cloudcannon.com/editing/editable-regions/) for more information.

![CloudCannon inline editing of our blog](/img/blog/inline-editing/markdown-editable.png){: .screenshot srcset="/img/blog/inline-editing/markdown-editable.png 800w, /img/blog/inline-editing/markdown-editable@2x.png 1600w"}


The Content Editor is still available for sites that are not set up for inline editing. Existing sites will need to trigger a recompile to access the new feature.

---

If you need any help or have any feedback you can always contact support.
Alternatively let us know in the comments below.
