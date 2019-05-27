---
title: Private Jekyll Themes With Gemfury
author: jordan
category: Tutorial
image: /uploads/apple-desk-imac-39284.jpg
image_featured: false
---

## Private Jekyll Themes With Gemfury

Jekyll themes allow styles and site structures to be reused across any number of sites. This eliminates the need to duplicate content across sites.

Themes are a necessity when managing more than one site that use the same designs or styles. All sites using a theme are updated whenever changes are made to the theme.

[Gemfury](https://gemfury.com/){: target="_blank"} offer a secure hosting for gems/themes. All interactions to and from Gemfury are completed securely over HTTPS.

### Creating Jekyll Themes

The Jekyll&nbsp;`new-theme`{: .language-console} command creates a basic theme structure which includes the \_layouts, \_includes and \_sass directories. Start building a theme by entering the following into your command line:

```console
$ jekyll new-theme mytheme
```

### Packaging Themes

Themes should be packaged as a **.gem** file before being hosted on Gemfury. It is good practice to add all relevant details to the ***.gemspec*** file (***yourtheme.gemspec***), and the ***readme*** before packaging. Errors will be displayed when packaging a theme if the ***.gemspec*** and ***readme*** files contain "FIXME" and "TODO" entries.

Themes are packaged into a ***gem*** file by using the `gem build` command:

```console
gem build yourtheme.gemspec
```

This packages all files and directories within your theme into a single ***gem*** file (***yourtheme.gem***).

### Uploading Themes

C[reate an account](https://manage.fury.io/users/sign_up){: target="_blank"} with Gemfury and install the [Gemfury CLI ](https://gemfury.com/help/gemfury-cli){: target="_blank"}by entering the following within the command line:

```console
gem install fury
```

Log into Gemfury to enable uploading:

```console
fury login
```

Upload the ***gem*** theme to your account:

```
fury push yourtheme-0.1.0.gem
```

If you're pushing to a shared account you will need to enter the [username parameter](https://gemfury.com/help/gemfury-cli#uploading-packages){: target="_blank"}\:

```console
fury push yourtheme-0.1.0.gem --as USERNAME
```

### Using Themes

To build a themed site the ***gemfile*** needs to be adjusted so the theme is downloaded during the build process. Open the site's ***gemfile*** and add the following:

```ruby
source 'https://gem.fury.io/USERNAME/' do
    gem 'GEMNAME', '~> 0.1.0'
end
```

The above Ruby code searches for the `gem`/theme from the `source` on build, and downloads the latest version.

Jekyll also needs to know that a site uses a theme. This is achieved by specifying the theme within your site's `_config.yml` file.

```yaml
theme: yourtheme
```

### Authentication

A deploy token can be generated on Gemfury's website to provide authentication for theme usage. Log in to Gemfury's website and navigate to *Tokens &gt; Deploy Tokens*. Create a new deploy token and be sure to save it in a secure location. This key provides access to your theme and should not be shared publicly.

![](/images/blog/screen-shot-2019-05-27-at-2-04-02-pm.png){: width="1153" height="521"}

Adding authentication for local builds can be done unsing `bundle config`\:

```console
bundle config https://gem.fury.io/USERNAME/ DEPLOYTOKEN
```

Authentication also needs to be added to your site on CloudCannon, which can be done using [environment variables](https://docs.cloudcannon.com/builds/configuration/?h=environment%20variables){: target="_blank"}. In CloudCannon navigate to *Settings &gt; Configuration &gt; Environment Variables.*

Add the *key* `BUNDLE_GEM__FURY__IO`{: .language-console} and add your deploy token as the *value*. These steps only need to be performed once with each site using a theme.

![](/images/blog/screen-shot-2019-05-27-at-1-46-15-pm.png){: width="1161" height="655"}

Test your theme by building it locally. Note that you need to install your new theme so run `bundle install` before serving your site:

```
bundle install
bundle exec jekyll serve
```

### Updating Themes

Each time a theme is updated you will need to run `bundle update yourtheme` within your site's directory. This updates your site to use the latest theme version.

&nbsp;

&nbsp;