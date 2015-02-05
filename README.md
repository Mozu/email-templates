# Mozu Email Templates

// THIS IS A WEIRD PROBLEM I'M CURRENTLY WORKING OUT...
```bash
npm install git://github.com/zetlen/swig.git
```


A collection of email templates for use with the Mozu core theme.

## What's Included

* Base Email Template
* Email Templates
	* New User
	* Order Confirmation
	* Order Shipped
	* Password Reset
	* In-Stock Notification
	* RMA Created
	* RMA Rejected
	* RMA Authorized
	* RMA Received
* Grunt-based workflow
* Updated en-US.json

## Prerequisites

This project uses [Node](http://nodejs.org/), which is required for any compilation and parsing of email partials.

## Getting Started

Getting started is simple enough. Download or clone this repo, then integrate its contents into your local working directory. For most files in the repo, an overwrite is okay. However, the contents of `gruntfile.js` and `package.json` will need to be integrated into yours.

To kick things off, run the following from the command line:

``` bash
$ npm install
```

This will install the following dependencies:

* [grunt](https://www.npmjs.org/package/grunt)
* [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch)
* [grunt-jsonlint](https://www.npmjs.org/package/grunt-jsonlint)
* [grunt-juice-email](https://www.npmjs.org/package/grunt-juice-email)

## Editing Templates

To start modifying this email template for your own use, edit the template partials and stylesheets located in `/templates/email/src`. The template were build on top of [Ink](http://zurb.com/ink/), which is fantastic. Most [HyprLive](http://developer.mozu.com/learn/theme-development/key-theme-concepts/mozu-hyprlive) tags are supported out of the box, and any stylistic changes can be made in `email.css`.

Make your changes to your CSS as you normally would. There's no need to write inline styles, as Grunt and Juice will inline them for you.

## Compiling

To compile your changes, run `grunt email` from the command line. This will inline the contents of `email.css` into the partials located in your `src` directory, and then move them to `/templates/email` where they belong.

Once you trust the process, run `grunt watch` from the command line. Grunt will recompile all templates once you save the source files.

## Extras

[JSONLint](http://jsonlint.com/) will also run on any `.json` files located under `/labels`. This will hopefully save you from the headache of manually tracking down JSON syntax errors if your theme fails to compile.

## External Resources

* [How to Install Node.js](http://howtonode.org/how-to-install-nodejs)
* [Getting Started with Grunt](http://gruntjs.com/getting-started)
* [Ink Docs](http://zurb.com/ink/docs.php)
* [Configuring Taks with Grunt](http://gruntjs.com/configuring-tasks)


search fo swig docs = https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=swig%20js%20loaders%20examples

Swig docs on template loaders - 
http://paularmstrong.github.io/swig/docs/loaders/

Help on template loader - 
http://blog.hostilefork.com/express-swig-node-basics-2014/

Swig default extension - 
http://stackoverflow.com/questions/25787086/swig-template-default-extension

docs on swig options - 
https://sourcegraph.com/github.com/paularmstrong/swig/.CommonJSPackage/swig/.def/commonjs/lib/swig.js/-/setExtension
