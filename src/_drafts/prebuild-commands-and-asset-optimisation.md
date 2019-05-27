---
title: Prebuild commands & asset optimisation
author: ryan
category: Tutorials
image:
image_featured: false
---
We've found that developers using CloudCannon often want the freedom to run their own scripts before each site build. Being able to do this opens up a lot of possibilities, and more closely mirrors the local development process for a lot of people.

On CloudCannon, developers can add any commands they need to run in a `_cloudcannon-prebuild.sh` file at the root of their sites. These commands will be run before each build. You can use Node to install any npm packages you need:

```sh
# _cloudcannon-prebuild.sh

# install gulp
npm install gulp
# run task defined in gulpfile.js
./node_modules/.bin/.gulp my-task
```

So, what can you do with this?

## Optimising assets with prebuild commands

Optimising assets can significantly improve load times for visitors to your site. When you build a site on CloudCannon, any assets referenced in your HTML/CSS are automatically [minified and served from a CDN](https://docs.cloudcannon.com/builds/optimisations/).

In some cases, you may also want to bundle your JavaScript files together, to reduce the number of HTTP requests made when loading a page. A simple solution would be to write all your code in a single file, but this compromises maintainability. Instead, you can use prebuild commands to bundle your files together on build for performance, while keeping them separate during development for sanity.

## Bundling JS with webpack

[webpack](https://webpack.js.org/) is a JavaScript bundler. It searches your code for dependencies (by looking at `import` and `require` statements) and bundles scripts together in a single file. Here's how you can set this up in CloudCannon:

First, create a `_cloudcannon-prebuild.sh` file at the root of your project. In this script, use npm to install webpack. Then, you can run webpack from node_modules. Specify each JavaScript file you want to bundle, then specify the destination for the bundle with `-o path/to/output.js`. For example:

```sh
npm install webpack
npm install webpack-cli

./node_modules/.bin/webpack \
js/file-1.js \
js/file-2.js \
js/file-3.js \
-o js/output.js
```

This will bundle all your scripts into one file on your compiled site. In your `<script>` tags, you can link to `{%raw%}{{ site.baseurl }}{%endraw%}/js/output.js`.

Instead of specifying each input file on the command line, you can create an `entry.js` file. This file should just import all the scripts you want to bundle. Then, you can use this as your input and all of the other imported scripts will be bundled.

```sh
./node_modules/.bin/webpack path/to/entry.js js/output.js
```

See the [webpack docs](https://webpack.js.org/guides/getting-started/#using-a-configuration) for more configuration options.

## Bundling CSS

Similar processes could be used to bundle your CSS into a single file on build. However, this can also be done with plain Jekyll!

Create a `_sass` folder at the root of your site. Put your css files here, with a `.scss` extension. Jekyll doesn't process scss files unless they begin with front matter dashes. Create a `my-main-css.scss` file, which uses `@import` to include all your other scss files. Add front matter dashes to the start of this file, so that Jekyll will process it into plain CSS. Now you can simply link `my-main-css.css` on your site, and it will include all the styles from your `_sass` folder.