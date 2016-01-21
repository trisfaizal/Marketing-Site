---
layout: post
title: Deploy Jekyll sites to S3 using Travis CI
header: Deploy Jekyll sites to S3 using Travis CI
category: Tutorial
post_image: null
post_image_type: image/png
post_image_width: 1600
post_image_height: 1000
author: mike
---

CloudCannon consolidates editing and reliable hosting into a single package. Alternatively, you can use external hosting solutions and keep editing in CloudCannon.

To demonstrate this workflow, we will use [Amazon S3](http://aws.amazon.com/s3/), a great platform to host static and Jekyll websites. The uptime is [99.9% guaranteed](http://aws.amazon.com/s3/sla/), it scales indefinitely and it's cheap.

This tutorial shows you how to automatically deploy changes from CloudCannon/GitHub to S3 using [Travis CI](https://travis-ci.org/).

## Setup

To begin, [sign up for Travis CI](https://travis-ci.org/).

![Travis CI Homepage](https://draftin.com:443/images/35328?token=2xG6KrJXmAhmdxZ3RilwBHrgQIIXJMu8FQMWbxBn9HJpw7TyAOcGlBcUTu9G6Lxfe5xwGMPbOxflXrkuz6frYOE) 

Travis CI requires access to your GitHub account.

![GitHub authentication](https://draftin.com:443/images/35330?token=6oTY4wcf-AjW-LolqkO-nwhba2JJ0NimFsGGXBy0HHKqmfXwKvlZ6znICw5vpouck82z2DsP_aXkFpYgEhDfvJI) 

Click the add button next to My Repositories.

![Travis CI Dashboard](https://draftin.com:443/images/35329?token=7G5ybEvoDtgHdLtnuFpYZ3wsgnbw8iWVBk3FeI3FvJF2L9s-3KmxUl_baIv8wdVDcYJMWaMR8u2yiylJQROafkk) 

Enable the repository with your Jekyll site. 

![Repository list](https://draftin.com:443/images/35338?token=gavnwetHrVwU-3zWdBuJZlDXR2PSh3KeYiuMbCphQ0cPhu3Zqg_7nu0nzJZ87hmej5WWuzjXmDnDezTGaMW7y2s) 

## Scripts

Travis CI needs a [configuration script](https://docs.travis-ci.com/user/customizing-the-build/) in your repository describing how to build and deploy your site. 

The script will set up Ruby:

```
language: ruby
rvm:
- 2.1
```

Install the `jekyll` and `s3_website` gems. `s3_website` copies the website files to S3.

```
install: gem install jekyll -v 2.4.0 && gem install s3_website
```

Build the site using Jekyll:

```
script: jekyll build
```

Then copy the generated site to S3:

```
after_success: s3_website push
```

Copy the script to `.travis.yml` in your repository:

```
language: ruby
rvm:
- 2.1
install: gem install jekyll -v 2.4.0 && gem install s3_website
script: jekyll build
after_success: s3_website push
```

`s3_website` needs a configuration file describing how and where to deploy the site. Your S3 Secret Key is private so it's a bad idea to put it in your public repository. Instead, you can set and use an environment variable in Travis CI.

Copy the script to `s3_website.yml` and change `s3_bucket` to the name of your S3 bucket:

```
s3_id: <%= ENV['S3_ACCESS_KEY_ID'] %>
s3_secret: <%= ENV['S3_SECRET_KEY'] %>
s3_bucket: your.bucket.com
```

## Environment Variables

The final step is to set environment variables for the S3 Access Key and Secret Key.

Go to settings and add your Amazon S3 credentials:

![Travis CI environment variables](https://draftin.com:443/images/35336?token=VuDLV6qeW-mp566F8r4yPFSVGC0FnqcMbz5xzvynEVBZjkt9HUr_XgIxh9YA4eh92YnjR6lcTDWimFSPSKdQDRE) 

Every time you make a change to the repository in GitHub (including edits from [CloudCannon](http://cloudcannon.com)), Travis CI rebuilds the site and deploys it to S3.

## Summary

[Travis CI](https://travis-ci.org/) is flexible enough to keep the easy-to-use editing in CloudCannon and host your site anywhere.