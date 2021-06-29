# Blog
My personal blog build on Jekyll and CSS

[![Jekyll](https://img.shields.io/github/workflow/status/igorkowalczyk/blog/Jekyll?style=flat-square&logo=github&color=%2334D058)](https://igorkowalczyk.github.io/blog)
[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/blog?color=%2334D058&logo=github&style=flat-square)](https://igorkowalczyk.github.io/blog/license.txt)
[![Version](https://img.shields.io/github/v/release/igorkowalczyk/blog?color=%2334D058&logo=github&style=flat-square)](https://github.com/igorkowalczyk/blog/releases)
[![Discord](https://img.shields.io/discord/666599184844980224?color=%2334D058&logo=discord&style=flat-square&logoColor=7289da)](https://majoexe.herokuapp.com/server)

### Features
- 🏷️ Custom categories for posts
- 📝 Built-in comments [Github PR]
- 🌃 Light/Dark theme
- 🌐 Custom pathes for posts
- ⛔ Capatcha to fight spam-bots
- 📶 RRS Feed
- ✨ Built-in recommended posts section

### Development
1. Fill `_config.yml` with your values
    * For captcha keys go to [Google ReCaptcha](https://developers.google.com/recaptcha) create new site and get your site key and secret key. Then encrypt the values using `https://api-igorkowalczyk.herokuapp.com/v2/encrypt/[YOUR-TEXT-TO-ENCRYPT]` api. 
    * For site verification token go to [Google Search Console](https://search.google.com/search-console) and get your `html tag` key.
2. Delete all files under `_data/comments` and `_posts` directories.
3. Add first posts by adding new file with `.md` extension to `_posts` directory.
     * Post file syntax:
```
---
layout: post
title: "Post Title"
author: "Post Author"
categories: categories list
comments: true/false
---
Post content (Markdown)
```
5. Set-up the page by running `bundle install`.
6. Host this site locally by running `bundle exec jekyll serve`. Your site will be hosted under http://localhost:4000.

### Issues
If you have any issues with the project or you found a bug please create [new issue here](https://github.com/igorkowalczyk/blog/issues)

### Pull Requests
When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/blog/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## License
This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/blog/blob/master/license.md) file for details
