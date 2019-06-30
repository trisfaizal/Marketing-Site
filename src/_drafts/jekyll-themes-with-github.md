---
title: Jekyll Themes with GitHub
author: jordan
category: Tutorial
image:
image_featured: true
---

## Theme Hosting with GitHub

While themes can be [hosted with GemFury](https://cloudcannon.com/tutorial/2019/06/13/private-jekyll-themes-with-gemfury/){: target="_blank"}, they can also be hosted for free with GitHub. GitHub allow both public and private theme hosting.

### Create a theme repository

A repository must first be created on GitHub. Anyone can use your theme if the repository is public.

![](/images/blog/jekyll-themes-with-github/screen-shot-2019-06-27-at-9-59-17-am.png){: width="1460" height="850"}

Clone the repository to your local machine and open it in the command line. The Jekyll&nbsp;`new-theme`{: .language-console} command builds a basic theme structure that includes the \_layouts, \_includes and \_sass directories. Start building a theme by entering the following into your command line:

~~~shell
$ jekyll new-theme mytheme
~~~

This generates a basic Jekyll site which other sites can inherit from. The Jekyll&nbsp;`new-theme`{: .language-console} command also creates a gemspec file (`mytheme.gemspec`). This holds the version, and any other relevant theme details.

It is good practice to add all relevant details to the `.gemspec` file, and the `readme` file. Errors will be displayed when using the theme if the `.gemspec` and `readme` files contain “FIXME” and “TODO” entries.

Push all of the changes to your theme's repository on GitHub to ensure everything is up to date.

### Using Themes

To build a themed site the `Gemfile` needs to be adjusted so the theme is downloaded during the build process. Open your new site’s `Gemfile` and add the following line:

~~~ruby
gem 'mytheme', '>= 0.1.0', :git => 'https://github.com/GITHUB-USERNAME/mytheme.git'
~~~

Jekyll also needs to know that the site is using a theme. This is achieved by specifying the theme within your site’s `_config.yml` file.

~~~yaml
theme: mytheme
~~~

### **Using Different Versions**

It is also possible to specify a particular theme ref/commit, branch, or tag to use.

~~~ruby
gem 'mytheme', '>= 1.2.4', :git => 'https://github.com/GITHUB-USERNAME/mytheme.git'
:git => 'https://github.com/GITHUB-USERNAME/mytheme.git', :ref => '6afec'
:git => 'https://github.com/GITHUB-USERNAME/mytheme.git', :branch => '1-2-beta'
:git => 'https://github.com/GITHUB-USERNAME/mytheme.git', :tag => 'v1.2.4'
~~~

### Private Themes

You can access a private theme/repository using OAuth Tokens instead of using your account's credentials. The following steps are required to create an OAuth Token:

* Open your GitHub account settings
* Select 'Developer Settings' from the left-hand menu
* Select 'Personal Access Tokens' from the left-hand menu
* Select the 'Generate New Token button

![](/images/blog/jekyll-themes-with-github/screen-shot-2019-06-27-at-9-56-42-am.png){: width="1998" height="646"}

You will be prompted to set the relevant permissions the token has access to. Once the token has been generated, note it and keep it private. Keys are not recoverable once they're lost.

To use a private theme the repository URL specified in the site's Gemfile needs to include the token:

~~~
gem 'mytheme', '>= 0.1.0', :git => 'https://TOKEN:x-oauth-basic@github.com/USERNAME/mytheme.git'
~~~

The theme will also need to be specified in your site's `_config.yml` file to be used.

### Updating Themes

Changes to a theme can be pushed directly to the theme's repository, and any sites using the theme will be updated. If a site's gemfile.lock file is locked to a specific version, changes will not be applied.