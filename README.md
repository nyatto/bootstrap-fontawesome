Bootstrap + Font Awesome
=============

Customised basic Bootstrap + Font Awesome template for using Less.


- [Bootstrap](https://github.com/twbs/bootstrap)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

## Getting started

### Install Bower components

Install packages in a project folder.

    $ bower install

Copy Bootstrap less files to `less` directory.

    $ cp -r bower_components/bootstrap/less/* ./less

Copy Font Awesome `less` directory into the root `less` directory, and rename to `font-awesome`.

    $ cp -r bower_components/font-awesome/less ./less
    $ mv ./less/less ./less/font-awesome

Copy Font Awesome `fonts` directory to the root.

    $ cp -r bower_components/font-awesome/fonts ./

### Install Grunt and gruntplugins

    $ npm install

Copy files for development.

    $ cp bower_components/jquery/dist/jquery.min.js ./src/js
    $ cp bower_components/bootstrap/dist/js/bootstrap.min.js ./src/js
    $ cp bower_components/html5shiv/dist/html5shiv.js ./src/js
    $ cp bower_components/respond/dest/respond.min.js ./src/js

### Run Grunt

    $ grunt

Open up [http://localhost:9000](http://localhost:9000) in the browser.

**Notes**: Need to install the [browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) for using LiveReload.

### Customise design

Create websites with customising `styles.less` file.
