---
title: Scheduled Maintenance
author: george
category: Operations
image:
image_featured: false
---

Today at [5:00pm NZDT](https://everytimezone.com/#2018-11-13,-480,b8jj) CloudCannon will be set to a read-only state for 2 hours. This will mean the following:
{: .present-before-paste}

* **Editing access will be disabled**
* Sites will be served as normal
* Builds and syncs will occur as normal

This is due to an urgent database update. Our aim is to ensure sites are operational and repository updates are still viable. We have chosen [5:00pm NZDT](https://everytimezone.com/#2018-11-13,-480,b8jj) as it is our lowest usage time. The rest of this article will be a detailed description of our plan for visibility. We apologise for inconvenience this will cause. For future updates we have put in place procedures to more effectively communicate these changes.
{: .present-before-paste}

### Our Plan

As we need to update our database we are going to take the following steps:
{: .present-before-paste}

1. Disable sign ups and logins to the app
2. Continue using old database for other applications (Syncing, Builds and File Servers)
3. Create a new Database from a snapshot at the start of the migration time
4. Update references to the new Database and redeploy applications
5. Enable sign ups and logins to the app

Based on trial runs of this earlier today this took approximately 2 hours.
{: .present-before-paste}

### Implications

The following supporting data will not be recorded on updates made during this migration:
{: .present-before-paste}

* Site activity
* References to commit hashes
* Build logs

These items are intended for logging purposes and will not affect the live site or editing process after the migration.
{: .present-before-paste}

 
{: .present-before-paste}