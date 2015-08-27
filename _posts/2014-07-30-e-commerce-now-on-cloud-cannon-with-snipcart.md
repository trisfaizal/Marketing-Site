---
layout: post
title: Build e-commerce sites on CloudCannon with Snipcart
header: E-commerce now on CloudCannon with Snipcart
category: Tutorials
author: sam
---

![CloudCannon + Snipcart](/img/blog/snipcart-response/cloudcannon_and_snipcart.png)
We believe the approach we’ve taken with CloudCannon CMS is the right way to remove the technical junk that web designers shouldn't have to deal with when adding content management to their website, but we’ve struggled to find anyone who has the same philosophy when it comes to e-commerce. Until now.

####Behold:####

![Snipcart logo](/img/blog/snipcart-response/snipcart.png)

[Snipcart](http://www.snipcart.com) is the solution we’ve been waiting for! And now we reckon e-commerce on CloudCannon is going to be awesome!

### What’s Snipcart? ###

The team at Snipcart have created some Javascript magic so that with a single line of script and a few lines of markup you can make any link or HREF on your HTML website buyable.

That’s:

<pre class="prettyprint snipcart">
&lt;script type="text/javascript"
  id="snipcart"
  src="https://app.snipcart.com/scripts/snipcart.js"
  data-api-key="{YOUR_API_KEY}"&gt;
&lt;/script&gt;
</pre>

And

<pre class="prettyprint snipcart">
&lt;button class="snipcart-add-item"
  data-item-id="42"
  data-item-name="Bacon"
  data-item-price="10.00"
  data-item-url="/store"&gt;Buy Bacon&lt;/button&gt;
</pre>

BAM. Easy\*.

I'm far from a great web designer myself, but even I managed to knock a Snipcart website together on CloudCannon in an afternoon. Check out 'Steve’s Submarine Emporium' - [http://sse.cloudvent.net/](http://sse.cloudvent.net/)

\**But if you love the details you can [check out their docs](http://docs.snipcart.com/getting-started/installation).*

### Why Snipcart is going to be awesome on CloudCannon ####

The ability to sell things from your website, without databases, programming languages or unnecessary hassle is core to the Snipcart philosophy, and we’re excited at CloudCannon because we believe the same thing too.

We also think Snipcart rocks because it works everywhere. Just like us.

Snipcart hooks into 5 payment gateways - with more on the way they tell us - but all we reckon you need to know is that between [Stripe](https://stripe.com/) (easy, powerful, sexy, BUT not global yet) and [PayPal](https://www.paypal.com/) (not so easy, not so powerful, not so sexy, BUT global already) you’ve got your options covered.

### Excellent. Shut up and tell me how... ###

François over at Snipcart has just released an excellent tutorial on setting up Snipcart on CloudCannon.

Check out the link below:
<div>
	<a class="btn" href="https://snipcart.com/blog/how-to-sell-online-with-cloudcannon">Take me to the CloudCannon &amp; Snipcart tutorial</a>
</div>

Side notes:

+ The Snipcart guys called us out for not having any e-commerce template. Touche. We’ll get at least one out soon.

+ Attributes for Snipcart items are not currently integrated with CloudCannon’s Visual editor. You’ll have to make changes to the HTML manually.

+ **Do tell us** if you love using Snipcart on CloudCannon so we can put extra effort into working together on a much simpler integration.

Get designing, and get selling!
