---
title: Why CloudCannon?
layout: page
permalink: /overview/
subheading: The benefits of static sites, Jekyll and CloudCannon
icon: emblem-icon
pitch:
  - heading: A better way to manage your marketing sites
    text: Everything you need to build, host and update Jekyll websites. CloudCannon empowers you to take advantage of the many benefits of static sites and enable editors to update content.
    icon: teamwork
  - heading: What is a static site?
    text: A static site is a website made of static files as opposed to a traditional CMS which dynamically generates pages on-the-fly.<br><br>A static site generator such as Jekyll enables you to build sites using many of your favourite features from a dynamic CMS such as templating, includes and content abstraction. But you're still working directly with files and output a purely static website.
    icon: static-assets
  - standalone_heading: Why choose a static website?
  - heading: You want a simpler way
    text: Static sites do not require a large portion of the complexity from traditional backends. There’s no database, backend languages or complex infrastructure to manage. This makes static sites faster to build and require less technical knowledge and upkeep.
    icon: ethereum
  - heading: You want your site to load quickly
    text: A fast site makes visitors more likely to stick around. With static, there’s no database queries or on-the-fly generation. The server just needs to send a static file which is extremely fast in comparison. You can also use a CDN to ensure the website loads quickly for customers around the globe.
    icon: outer-space
  - heading: You value security
    text: If you’re running a popular traditional CMS, you’re a target. All it takes is one out of date plugin or unknown security hole and your whole site is compromised. Static sites do not have the same vulnerabilities as there’s very little for hackers to exploit. 
    icon: safe
  - heading: You want extreme scalability
    text: Scaling a traditional CMS can be tricky, you need to scale up servers when there’s a spike in traffic then scale down afterwards to reduce costs. For static sites, a single server can handle tens of thousands of concurrent requests. There’s also many hosting services for static sites like Amazon S3 and CloudCannon Hosting that will scale to your needs without you having to lift a finger.
    icon: social-growth
  - heading: You want a system you can depend on
    text: A traditional CMS has many points of failure; perhaps your database is down or your carousel plugin doesn’t work with the latest version of the CMS. A static site avoids these problems altogether as the server simply serves files.
    icon: in-progress
  - heading: You want something forgiving
    text: A version control system is an indispensable tool for developers working on software project. It serves as a backup for source code, mistakes can be rolled back and it allows a team to collaborate without stomping on each other's toes. Static sites are a collection of files making them a perfect fit for version control. 
    icon: dog-walking
  - standalone_heading: What is CloudCannon?
    text: CloudCannon is a platform to help your team build and manage Jekyll websites. Editors update content on an easy to use UI without needing any technical knowledge of Jekyll or Git. Developers work locally using the favourite tools and keep in sync using Git.
---

{% assign next_heading_item = nil %}
<div class="feature-wrapper">
    {% assign left = false %}
    {% for item in page.pitch %}
        {% if item.standalone_heading %}
          {% if next_heading_item %}
            <div class="wrapper">
                <h2>{{next_heading_item.standalone_heading}}</h2>
                {% if next_heading_item.text %}
                    <p>{{next_heading_item.text}}</p>
                {% endif %}
            </div>
            {% assign next_heading_item = nil %}
          {% endif %}
          {% assign next_heading_item = item %}
        {% else %}
            <div class="wrapper wrapper-large">
              {% if next_heading_item %}
                <h2>{{next_heading_item.standalone_heading}}</h2>
                {% if next_heading_item.text %}
                    <p>{{next_heading_item.text}}</p>
                {% endif %}
                {% assign next_heading_item = nil %}
              {% endif %}

                <div class="feature-item {%if left%} left {%endif%} {%if forloop.first%} first {%endif%}">
                    <div class="feature-item-text">
                        {% if forloop.first %}
                            <h1>{{item.heading}}</h1>
                        {% else %}
                            <h3>{{item.heading}}</h3>
                        {% endif %}
                        <p>{{item.text}}</p>
                    </div>
                    {% if item.icon %}
                        <img class="feature-svg" src="{{site.baseurl}}/images/features/{{item.icon}}.svg">
                    {% elsif item.image %}
                        <img class="feature-image" src="{{site.baseurl}}/images/features/{{item.image}}">
                    {% elsif item.video %}
                            {% include components/feature-video.html video=item.video %}
                    {% endif %}
                </div>
            </div>
            {% if left %}
                {% assign left = false %}
            {% else %}
                {% assign left = true %}
            {% endif %}
        {% endif %}
    {% endfor %}

    {% if next_heading_item %}
      <div class="wrapper">
          <h2>{{next_heading_item.standalone_heading}}</h2>
          {% if next_heading_item.text %}
              <p>{{next_heading_item.text}}</p>
          {% endif %}
      </div>
      {% assign next_heading_item = nil %}
    {% endif %}
</div>

{% include navigation/feature-nav-bar.html bottom=true %}


