---
title: Jekyll Themes with GitHub
author: jordan
category: Tutorial
image:
image_featured: true
---

## Theme Hosting with GitHub

While themes can be [hosted with GemFury](https://cloudcannon.com/tutorial/2019/06/13/private-jekyll-themes-with-gemfury/){: target="_blank"}, they can also be hosted for free with GitHub. GitHub allow both public and private theme hosting.

&nbsp;

### Creating Jekyll Themes

Create a new repository on GitHub and clone it locally - this will be your theme repository. The Jekyll&nbsp;`new-theme`{: .language-console} command builds a basic theme structure that includes the \_layouts, \_includes and \_sass directories. Start building a theme by entering the following into your command line:

~~~shell
$ jekyll new-theme mytheme
~~~

This generates a basic Jekyll site which other sites can inherit from.

### Packaging Themes

Themes need to be packaged as a `.gem` file before being used. It is good practice to add all relevant details to the `.gemspec` file (`mytheme.gemspec`), and the `readme` before packaging. Errors will be displayed when packaging a theme if the `.gemspec` and `readme` files contain “FIXME” and “TODO” entries.

Themes are packaged into a ***gem*** file by using the `gem build` command:

~~~shell
$ gem build mytheme.gemspec
~~~

This packages all files and directories within your theme into a single ***gem*** file (***mytheme.gem***).

Push all of the changes to your theme's repository on GitHub to ensure everything is up to date. Anyone can use your theme if the repository is public.

### Using Themes

To build a themed site the `Gemfile` needs to be adjusted so the theme is downloaded during the build process. Open your new site’s `Gemfile` and add the following line:

~~~ruby
gem 'mytheme', git: 'https://github.com/GITHUB-USERNAME/mytheme.git'
~~~

The above Ruby code searches for the theme repository on build, and uses the current version.

Jekyll also needs to know that the site is using a theme. This is achieved by specifying the theme within your site’s `_config.yml` file.

~~~yaml
theme: mytheme
~~~

&nbsp;

### Private Themes

You can access a private theme/repository using OAuth Tokens instead of using your account's credentials. The following steps are required to create an OAuth Token:

* Open your GitHub account settings
* Select 'Developer Settings' from the left-hand menu
* Select 'Personal Access Tokens' from the left-hand menu
* Select the 'Generate New Token button

You will be prompted to set the relevant permissions the token has access to. Once the token has been generated, note it and keep it private. Keys are not recoverable once they're lost.

To use a private theme the repository URL specified in the site's Gemfile needs to include the token:

~~~ruby
gem 'mytheme', git: 'https://TOKEN:x-oauth-basic@github.com/USERNAME/mytheme.git'
~~~

The theme will also need to be specified in your site's `_config.yml` file to be used.

### Updating Themes

Changes to a theme can be pushed directly to the theme's repository, and any sites using the theme will be updated. If a site's gemfile.lock file is locked to a specific version, changes will not be applied.