Instructions to get the website up and running. Note, the guidelines do not cover setting up a web server as this may differ from host to host. If you are on a Mac, you can install the web server and PHP dependencies listed below using homebrew [https://brew.sh](https://brew.sh).

## Dependencies

* Apache 2 with URL rewriting (mod_rewrite) or nginx
* PHP 5.4+
* PHP mbstring extension for proper UTF-8 support
* [Kirby CMS](http://getkirby.com)
* Git

**Download the code.** In a terminal window type:

* `git clone https://github.com/hegyessy/latmospheresf.com.git`

To install the Kirby CMS submodules that the site relies on:

* `cd latmospheresf.com`
* `git submodule update --init --recursive`

To preview the website locally on your machine without setting up a web server you can type the following command if you have PHP installed.

`php -S 0.0.0.0:4000`

Opening a browser and going to [0.0.0.0:4000](0.0.0.0:4000) will load the website locally.

## Fonts
The website will try to look for a font called Quincy. Quincy is a paid for font type that isn't stored in the git repo for copyright reasons. When you’ve acquired them, place the fonts in the **/assets/fonts/** folder. Alternatively, edit the CSS to require a different font.