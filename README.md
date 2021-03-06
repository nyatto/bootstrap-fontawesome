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

Move additional `less` files from `bs3-less-button-outline` directory to `less` directory, and remove empty `bs3-less-button-outline` directory.

    $ mv ./bs3-less-button-outline/mixins.less ./less
    $ mv ./bs3-less-button-outline/mixins/button-outline.less ./less/mixins
    $ rm -r ./bs3-less-button-outline

Copy Font Awesome `fonts` directory to the root.

    $ cp -r bower_components/font-awesome/fonts ./

Copy files for development.

    $ cp bower_components/jquery/dist/jquery.min.js ./src/js
    $ cp bower_components/bootstrap/dist/js/bootstrap.min.js ./src/js
    $ cp bower_components/html5shiv/dist/html5shiv.js ./src/js
    $ cp bower_components/respond/dest/respond.min.js ./src/js

### Install Grunt and gruntplugins

    $ npm install

### Run Grunt

    $ grunt

Open up [http://localhost:9000](http://localhost:9000) in the browser.

### Customise design

Create websites with customising `styles.less` file.
