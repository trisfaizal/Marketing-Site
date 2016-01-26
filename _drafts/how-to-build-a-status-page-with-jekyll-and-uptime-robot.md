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

Public visibility of an apps performance is vital to a the trust placed on that product. Today we announce our [new status page](http://status.cloudcannon.com/) and [twitter account](https://twitter.com/CCAppStatus) focused on greater visibility into our performance and uptime. Our status page was built using Jekyll and [Uptimerobot](https://uptimerobot.com/). This allows us to host the site anywhere at a reduced cost. Building this site in Jekyll gives the added benefit of being fully customisable with custom css and additional components anywhere.

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

{% raw %}
~~~html
<ul class="components">
  {% for component in site.components %}
    <li>
      <strong>{{ component.name }}</strong>
      <span class="description">{{ component.description }}</span>
      <span class="badge {{ component.state | slugify }}">{{ component.state }}</span>
    </li>
  {% endfor %}
</ul>
~~~
{% endraw %}

In addition to outputting the components we want the title to change if any component state is not set to `operational`. To do this we loop over the each component again:

{% raw %}
~~~html
{% assign working = true %}
{% for component in site.components %}
  {% if component.state != "operational" %}
    {% assign working = false %}
  {% endif %}
{% endfor %}

{% if working %}
  <h2 class="operational-heading">All Systems Operational</h2>
{% else %}
  <h2 class="issues-heading">Experiencing Issues</h2>
{% endif %}
~~~
{% endraw %}

With all this put together we have a well formatted components section which we can easily toggle the state of all the different parts.

SCREENSHOT OF COMPONENTS

### Incidents

Incidents are a perfect use case for jekyll posts. Posts can be written in markdown and are attached to a date. To read more about writing posts see our [documentation on blogging](http://docs.cloudcannon.com/editing/blogging/). 

The easiest step to begin with is the full history of posts. This displays every post grouped by the month that it occurred. The following code uses a for loop to output each post. If the the post being output is not the same month as the last a header will be output for the month and year.

{% raw %}
~~~html
{% for post in site.posts %}
  {% capture month %}{{ post.date | date: '%B' }}{% endcapture %}

  {% if month != prev_month %}
    {% unless forloop.first %}<hr>{% endunless %}
    <h2>{{ post.date | date: "%B %Y" }}</h5>
  {% endif %}

  <h3>{{ post.name }} <small>{{ post.date | date: "%A %e" }}</small></h3>

  {{ post.content }}
  {% capture prev_month %}{{ post.date | date: '%B' }}{% endcapture %}
{% endfor %}
~~~
{% endraw %}

The list of incidents on the main page is slightly more complicated: 

- We want to output every day in the last 10 days
- If a day has no incidents we want to show that as it is quite positive
- We don't want to recompile the site everyday to get the latest day showing 'no incidents'.

The best choice for this was clearly JavaScript. Using liquid we can inject JavaScript into the page to define our incidents: 

{% raw %}
~~~html
<div class="incidents"></div>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min.js"></script>
<script type="text/javascript">
window.incidents = [
{% for post in site.posts | sort: "date" %}
	{
		date: new moment({{ post.date | jsonify }}),
		name: {{ post.name | jsonify }},
		content: {{ post.content | jsonify }}
	}{% unless forloop.last %},{% endunless %}
{% endfor %}
];
</script>
~~~
{% endraw %}

Next we need to output an element for the past 10 days, if there are any incidents we will output the entire contents. We are using [moment.js](http://momentjs.com/) to simplify date formatting and manipulation. As we know the posts come out in order we can save time on each day by only checking the latest post we have.

~~~
(function (window, $, moment) {
	var nextIncidentIndex = 0;

	function formatIncident(date) {
		var html = "<div class='incident-day'><h3>" + date.format("Do MMMM YYYY") + "</h3>",
			incident = window.incidents[nextIncidentIndex];

		if (incident && incident.date.isSame(date, "day")) {
			while(incident.date.isSame(date, "day")) {
				html += "<div class='incident'><h3>" + incident.name + "</h3>" + incident.content + "</div>";
				incident = window.incidents[++nextIncidentIndex];
			}
		} else {
			html += "<p class='no-incidents'>No incidents reported.</p>";
		}

		return html + "</div>";
	}

	var date = moment(),
		end = moment().subtract(10, "days"),
		$incidents = $(".incidents");

	while (date > end) {
		$incidents.append(formatIncident(date));
		date = date.subtract(1, "day");
	}
})(window, window.jQuery, window.moment);
~~~

This will output any incidents in the last 10 days or 'No incidents reported'. Adding/updating a post in git or on CloudCannon will add it to our status page. Alternatively this could be implementing using a Jekyll plugin in combination with a daily compile.

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