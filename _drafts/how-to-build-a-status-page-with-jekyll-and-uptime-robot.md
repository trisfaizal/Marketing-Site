---
layout: post
title: How to build a status page with Jekyll and Uptime robot
header: How to build a Jekyll status page
category: Features
post_image: ''
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: george
---

Public visibility of an apps performance is vital to a the trust placed on that product. Today we announce our [new status page](http://status.cloudcannon.com/) and [twitter account](https://twitter.com/CCAppStatus) focused on greater visibility into our performance and uptime. Our status page was built using Jekyll and [Uptimerobot](https://uptimerobot.com/). This allows us to host the site anywhere at a reduced cost.

This article will break down how each section was created and their purpose. An unbranded version of the status page is available on Github.

### Components

The components section describes the different parts of your application. CloudCannon consists of six different components which we can toggle into different states if there was an outage or reduced performance. Do develop this section we use a Jekyll collection called `components`. The `components` are a set of markdown files under the `_components` folder which look like:

~~~
---
name: File Servers
description: Hosting of CloudCannon websites
state: operational
---
~~~

Once we have the collection we can output the components using a forloop:

~~~{% raw %}
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&lt;ul class="components"&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{% for component in site.components %}
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;li&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;strong&gt;{{ component.name }}&lt;/strong&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;span class="description"&gt;{{ component.description }}&lt;/span&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;span class="badge {{ component.state | slugify }}"&gt;{{ component.state }}&lt;/span&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;/li&gt;
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{% endfor %}
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&lt;/ul&gt;
{% endraw %}~~~

In addition to outputting the components we want the title to change if any component state is not set to `operational`. To do this we loop over the each component again:

~~~{% raw %}
{% assign working = true %}
{% for component in site.components %}
&nbsp;&nbsp; &nbsp;{% if component.state != "operational" %}
&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{% assign working = false %}
&nbsp;&nbsp; &nbsp;{% endif %}
{% endfor %}

{% if working %}
&nbsp;&nbsp; &nbsp;&lt;h2 class="operational-heading"&gt;All Systems Operational&lt;/h2&gt;
{% else %}
&nbsp;&nbsp; &nbsp;&lt;h2 class="issues-heading"&gt;Experiencing Issues&lt;/h2&gt;
{% endif %}
{% endraw %}~~~

With all this put together we have a well formatted components section which we can easily toggle the state of all the different parts.

SCREENSHOT OF COMPONENTS

### Incidents

* Using Jekyll posts
* Some JavaScript to save compiling on off days
* Full History


SCREENSHOT OF INCIDENTS

### Metrics Graphs with Uptime robot

* What is uptime robot
* Using their Javascript API to obtain data (Security note on having a public monitor)
* Using Jekyll Collections to inject javascript components
* Using Flot to graph the data
* Some alternatives to uptime robot


### Using CloudCannon for status page UI

* Components
* Incidents
* Metrics


### A more static alternative

Discuss the idea of having a background script push metric data to a json file to remove reliance on Uptimerobot.

Link to open source project

---

Conclusion

&nbsp;