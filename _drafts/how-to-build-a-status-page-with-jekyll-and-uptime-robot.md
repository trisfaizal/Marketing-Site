---
layout: post
title: How to build a status page with Jekyll and Uptime robot
header: How to build a Jekyll status page
category: Features
post_image: /img/blog/status-page/banner@2x.png
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: george
---

Public visibility of an apps performance is vital to a the trust placed on that product. Today we announce our [new status page](http://status.cloudcannon.com/) and [twitter account](https://twitter.com/CCAppStatus) focused on greater visibility into our performance and uptime. Our status page was built using Jekyll and [Uptimerobot](https://uptimerobot.com/). This allows us to host the site anywhere at a reduced cost. Building this site in Jekyll gives the added benefit of being fully customisable with custom css and additional components anywhere.

[![COMPONENTS](/img/blog/status-page/banner.png){: .screenshot srcset="/img/blog/status-page/banner.png 800w, /img/blog/status-page/banner@2x.png 1600w"}](http://status.cloudcannon.com/)

This article will break down how each section was created and their purpose. An unbranded version of the status page is available on Github.

### Components

The components section describes the different parts of your application. CloudCannon consists of six different components which we can toggle into different states if there was an outage or reduced performance. Do develop this section we use a Jekyll collection called `components`. The `components` are a set of markdown files under the `_components` folder which look like:

{% highlight html %}
---
name: File Servers
description: Hosting of CloudCannon websites
state: operational
---
{% endhighlight %}

Once we have the collection we can output the components using a forloop:

{% highlight html %}{% raw %}
<ul class="components">
  {% for component in site.components %}
    <li>
      <strong>{{ component.name }}</strong>
      <span class="description">{{ component.description }}</span>
      <span class="badge {{ component.state | slugify }}">{{ component.state }}</span>
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}

In addition to outputting the components we want the title to change if any component state is not set to `operational`. To do this we loop over the each component again:

{% highlight html %}{% raw %}
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
{% endraw %}{% endhighlight %}

With all this put together we have a well formatted components section which we can easily toggle the state of all the different parts.

![Displaying the components](/img/blog/status-page/components.png){: .screenshot srcset="/img/blog/status-page/components.png 800w, /img/blog/status-page/components@2x.png 1600w"}

### Incidents

Incidents are a perfect use case for jekyll posts. Posts can be written in markdown and are attached to a date. To read more about writing posts see our [documentation on blogging](http://docs.cloudcannon.com/editing/blogging/).

The easiest step to begin with is the full history of posts. This displays every post grouped by the month that it occurred. The following code uses a for loop to output each post. If the the post being output is not the same month as the last a header will be output for the month and year.

{% highlight html %}{% raw %}
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
{% endraw %}{% endhighlight %}

The list of incidents on the main page is slightly more complicated:

- We want to output every day in the last 10 days
- If a day has no incidents we want to show that as it is quite positive
- We don't want to recompile the site everyday to get the latest day showing 'no incidents'.

The best choice for this was clearly JavaScript. Using liquid we can inject JavaScript into the page to define our incidents:

{% highlight html %}{% raw %}
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
{% endraw %}{% endhighlight %}

Next we need to output an element for the past 10 days, if there are any incidents we will output the entire contents. We are using [moment.js](http://momentjs.com/) to simplify date formatting and manipulation. As we know the posts come out in order we can save time on each day by only checking the latest post we have.

{% highlight javascript %}
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
{% endhighlight %}

This will output any incidents in the last 10 days or 'No incidents reported'. Adding/updating a post in git or on CloudCannon will add it to our status page. Alternatively this could be implementing using a Jekyll plugin in combination with a daily compile.

![Displaying the incidents](/img/blog/status-page/incidents.png){: .screenshot srcset="/img/blog/status-page/incidents.png 800w, /img/blog/status-page/incidents@2x.png 1600w"}

### Metrics Graphs with Uptime robot

CloudCannon uses Uptimerobot internally for monitoring so it was the obvious choice for our status page. They provide a JavaScript API for obtaining response time and uptime data.

Uptimerobot splits each ping service into a monitor. To use the JavaScript API we need a read key per monitor. There is an option to use a global key but that should be avoided as it gives control of your account. We opted to created new monitors for our status page as the data attached to a monitor was also shared including data on external integrations.

#### Managing monitors with collections

In order to maintain all of the Uptimerobot monitors we will use another Jekyll collection called `monitors`. The following is an example monitor for our App:

{% highlight html %}
---
name: CloudCannon App
monitor_id: 777351721
key: "m777351721-73584e57aa39411cdc76df5b"
max: 1500
threshold: 1000
---
{% endhighlight %}

Using the same technique as we used with incidents we will output the monitors to javascript:

{% highlight html %}{% raw %}
<script type="text/javascript">
window.monitors = [
{% for monitor in site.monitors %}
  {
    id: {{ monitor.name | slugify | jsonify }},
    name: {{ monitor.name | jsonify }},
    monitorID: {{ monitor.monitor_id | jsonify }},
    key: {{ monitor.key | jsonify }},
    threshold: {{ monitor.threshold | jsonify }},
    max: {{ monitor.max | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
</script>
{% endraw %}{% endhighlight %}

#### Requesting the data from Uptimerobot

Now that we have the monitors in `window.monitors` we need to obtain the data per monitor. For this we created a function call getData:

{% highlight javascript %}
function getData(monitor, callback) {
  var now = window.moment(),
    end = now.format("YYYY-MM-DD"),
    startDate = now.subtract(12, "hours"),
    start = startDate.format("YYYY-MM-DD"),
    request = new XMLHttpRequest();

  request.open("GET", "https://api.uptimerobot.com/getMonitors?apiKey=" + monitor.key +
    "&monitors=" + monitor.monitorId +
    "&logs=1" +
    "&customUptimeRatio=1-7-30" +
    "&responseTimes=1" +
    "&responseTimesStartDate=" + start +
    "&responseTimesEndDate=" + end +
    "&format=json&noJsonCallback=1", true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      try {
        var json = JSON.parse(request.responseText);
        callback(null, json.monitors.monitor[0]);
      } catch (err) {
        callback(err);
      }
    } else {
      callback(new Error("status:" + request.status));
    }
  };

  request.onerror = function (err) {
    callback(err);
  };

  request.send();
}
{% endhighlight %}

Using the above function we can obtain the data we need from Uptimerobot. This data includes the response times in the last twelve hours and the `customUptimeRatio` values for the last 1, 7 and 30 days. To fetch all the data for each monitor we can iterate over them:

{% highlight javascript %}
function addMonitor(monitor) {
  getData(monitor, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    // Use the data here
  });
}

// Monitors obtained from jekyll collection
for (var i = 0; i < window.monitors.length; i++) {
  addMonitor(window.monitors[i]);
}
{% endhighlight %}

#### Displaying the metrics

To display the data we will use a combination of Jekyll and JavaScript. On our index page we will output an outline for the graphs to go with Jekyll. This will prevent a shift in window height when the data load and gives an indeterminate state to the viewers.

{% highlight html %}{% raw %}
<h2>System Metrics</h2>
{% for monitor in site.monitors %}
<div class="metric" id="{{ monitor.name | slugify }}">
	<h3>{{ monitor.name }}</h3>
	<p class="response-time">Fetching...</p>
	<div class="graph loading"></div>
	<ul class="uptimes">
		<li class="uptime uptime-24-hour"><span>...</span> <strong>Uptime in the last<br>24 Hours</strong></li>
		<li class="uptime uptime-7-days"><span>...</span> <strong>Uptime in the last<br>7 Days</strong></li>
		<li class="uptime uptime-30-days"><span>...</span> <strong>Uptime in the last<br>30 Days</strong></li>
	</ul>
</div>
{% endfor %}
{% endraw %}{% endhighlight %}

The uptime values are the easiest to begin with:

{% highlight javascript %}
...
var $container = $("#" + monitor.id);
getData(monitor, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  var custom = data.customuptimeratio.split("-");
  $container.find(".uptime-24-hour span").html(custom[0] + "<small>%</small>");
  $container.find(".uptime-7-days span").html(custom[1] + "<small>%</small>");
  $container.find(".uptime-30-days span").html(custom[2] + "<small>%</small>");
});
...
{% endhighlight %}

Before we can show the data from Uptimerobot we need to process the data. We want to make an average of all of the data for the `.response-time` element and we need to change it into a form our graphing library will understand.

{% highlight javascript %}
...
var $container = $("#" + monitor.id);
getData(monitor, function (err, data) {
  ...
  var points = [],
      sum = 0;

  for (var i = 0; i < data.responsetime.length; i++) {
    var responseTime = parseInt(data.responsetime[i].value);
    points.push([new Date(data.responsetime[i].datetime).getTime(), responseTime]);
    sum += responseTime;
  }

  $container.find(".response-time").text(Math.round(sum / data.responsetime.length) + "ms average response time");
});
...
{% endhighlight %}

At this point we have everything except a graph. I have found the most flexible graphing library to be [flot](http://www.flotcharts.org/). For this we need to add the base library and the three plugins we are using.

{% highlight html %}
<script type="text/javascript" src="/js/flot/jquery.flot.min.js"></script>
<script type="text/javascript" src="/js/flot/jquery.flot.time.min.js"></script>
<script type="text/javascript" src="/js/flot/jquery.flot.threshold.min.js"></script>
<script type="text/javascript" src="/js/flot/jquery.flot.resize.min.js"></script>
{% endhighlight %}

{% highlight javascript %}
...
getData(monitor, function (err, data) {
  ...
  var $graph = $container.find(".graph").removeClass("loading");
  $.plot($graph, [{
      data: points,
      color: "#F44336",
      shadowSize: 0,
      threshold: {
        below: monitor.threshold || 700,
        color: "#26ABE2"
      }
    }], {
    grid: {
      backgroundColor: null,
      borderColor: "rgba(0,0,0,0)",
      labelMargin: 10,
      margin: 0
    },
    xaxis: {
      mode: "time",
      min: window.moment().subtract(12, "hours").toDate(),
      max: window.moment().toDate()
    },
    yaxis: {
      max: monitor.max || 1000,
      min: 0
    }
  });
});
...
{% endhighlight %}

This creates a graph for our response time data over the last 12 hours. There are a number of plugins added to the basic flot graph:

* Threshold - This extends flot to set a range that is higher than normal and show a different colour at that range
* Time - This extends flot to handle time series data
* Resize - By default flot does not resize, adding this forces a rerender on resize

Now we have a complete status page with metrics we can manage using a Jekyll collection.

![Displaying the metrics](/img/blog/status-page/metrics.png){: .screenshot srcset="/img/blog/status-page/metrics.png 800w, /img/blog/status-page/metrics@2x.png 1600w"}

### Using CloudCannon for status page UI

* Components
* Incidents
* Metrics

---

Link to open source project

Conclusion
