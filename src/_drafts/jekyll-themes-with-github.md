---
title: Jekyll Themes with GitHub
author: jordan
category: Tutorial
image:
image_featured: true
---

## Theme Hosting with GitHub

GitHub is another alternative for hosting themes. GitHub offer methods of hosting themes both privately and publicly.

### Uploading themes to GitHub

Before uploading a theme repository to GitHub, the 'Creating Jekyll Themes' and 'Packaging Themes' steps detailed above must be completed.

### Public Themes

The same steps are required as in the "Using Themes" step above. The theme URL specified in a site's Gemfile should include the git URL of the theme's repository.

```ruby
gem 'mytheme', git: 'https://github.com/GITHUB-USERNAME/mytheme.git'
```

The theme also needs to be specified within your site's `_config.yml` file.

```yaml
theme: mytheme
```

### Private Themes

The following steps are required for hosting a private theme on GitHub:

* Open your GitHub account settings
* Select 'Developer Settings' from the left-hand menu
* Select 'Personal Access Tokens' from the left-hand menu
* Select the 'Generate New Token button

You will be prompted to set the relevant permissions that this token can has access to. Once the token has been generated, note it and keep it private. Keys are not recoverable once they're lost.

The theme URL specified in the site's Gemfile needs to include the token:

```ruby
gem 'mytheme', git: 'https://INSERT-TOKEN:x-oauth-basic@github.com/USERNAME/mytheme.git'
```

The theme will need to be specified in your site's `_config.yml` file to be used.