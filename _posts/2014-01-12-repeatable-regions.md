---
layout: post
title: Clients can now update feature rich websites
header: Clients can now update feature rich websites
category: Features
author: mike
permalink: /features/2014/01/12/repeatable-regions.html 
---

Today we're releasing a game changing feature for CloudCannon, <strong>repeatable regions</strong>. With a single class you can now give your clients the ability to add, move and delete a repeating element. Repeatable regions will help in a number of situations such as updating photos in a photo gallery, adding a news section or updating staff profiles.

All you need to do is add a class of <code>repeatables</code> to an element in your HTML. The element's direct children then become repeatable regions which can be updated by the client.

I'll give a quick run through of how it works using a news section as an example. First, add the HTML for a single news item and then wrap it in a div with a class of <code>repeatables</code>:

{% highlight html %}
<div class="repeatables">
    <div class="editable">
        <h2>10/01/13 - Exciting News Item!</h2>
        <p>Text for the news item.</p>
    </div>
</div>
{% endhighlight %}

Save this and switch to the editor view. The news item now has a yellow icon at top left.

![Repeatables example](/img/blog/repeatables_1.png)

Click on the icon and the news item will be cloned. The HTML will now look like this:

{% highlight html %}
<div class="repeatables">
    <div class="editable">
        <h2>10/01/13 - Exciting News Item!</h2>
        <p>Text for the news item.</p>
    </div>
    <div class="editable">
        <h2>10/01/13 - Exciting News Item!</h2>
        <p>Text for the news item.</p>
    </div>
</div>
{% endhighlight %}

The editable class works with repeatable regions so the content can be updated using the normal editor. Hovering over the news items now displays arrow icons for reordering and a trash can to delete a news item.

![Repeatables example #2](/img/blog/repeatables_2.png)

This feature opens up a world of possibilities for you and your client to build feature rich websites in no time at all. Try it out and let us know what you think.

As always, we're here if you need any help.
