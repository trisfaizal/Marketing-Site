---
title: Maintenance post mortem
author: george
category: Operations
image:
image_featured: false
---

We have successfully completed our Scheduled Maintenance. During this time we allocated 2 hours and completed the migration in just over 3 hours. During the update we had the following successes:

1. Upgraded our Postgres database 4 major versions
2. Added a set of other security improvements
3. Achieved zero downtime on sites

### How we communicated the downtime

To communicate in our app, we use Intercom. Intercom offers us a way to send a message to all active users. The logged in users were sent a message and then again once it was completed.

On our marketing sites we added a banner that linked to our blog. To do this we updated a data file in our jekyll theme called `_data/banner_notification.yml`. This file looks like:

```
enabled: true
text: Scheduled Maintanence today at 5:00pm NZDT
url: https://cloudcannon.com/operations/2018/11/13/scheduled-maintenance/
```

This file tells our default layout to add a clickable banner on the top of all pages:

```
{% if site.data.banner_notification.enabled %}
  <div class="banner-notification">
    <p><a href="{{ site.data.banner_notification.url }}">
       {{ site.data.banner_notification.text }}
    </a></p>
  </div>
{% endif %}
```

Our sites are built using [CloudCannon suite](https://suite.cloudcannon.com), to build our sites locally we run `gulp dev`. Using iterm2 we build all of our sites simultaneously and the suite even watches the local Jekyll Theme repository.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xkZo5d54x5Y?autoplay=1&loop=1&playlist=xkZo5d54x5Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Once built we can see that the banner is live on all sites.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xxJtBYc34g8?autoplay=1&loop=1&playlist=xxJtBYc34g8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To get this live we push the updated `Gemfile.lock` to master and publish to production via CloudCannon.

### Improvements for next time

* Inform earlier
* Build a status page
* Better communication of any change (change log feed in the app)

### Why 3 hours not 2?

Once we completed the database upgrades with 15 minutes to spare. We turned the app back on to point at the new database and the performance was abysmal. We needed to run the SQL command&nbsp;`VACUUM ANALYZE`&nbsp;on our database. This solved all of our issues but took some time. A nasty surprise at the end of a fairly seamless migration.

&nbsp;

&nbsp;