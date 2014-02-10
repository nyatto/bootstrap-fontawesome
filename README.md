Bootstrap + Font Awesome
=============

Customised basic Bootstrap template for using Font Awesome.


- Bootstrap: https://github.com/twbs/bootstrap
- Font Awesome: https://github.com/FortAwesome/Font-Awesome

## Usage

### Install Bower components

From the root of the repository, install packages and dependencies.

    $ bower install

Copy Bootstrap less files to `less` directory.

    $ cp bower_components/bootstrap/less/* ./less

Copy Font Awesome `less` directory into `less` directory, and rename to `font-awesome`.

    $ cp -r bower_components/font-awesome/less ./less
    $ mv ./less/less ./less/font-awesome

Copy Font Awesome `fonts` directory to the root.

    $ cp -r bower_components/font-awesome/fonts ./

### Install Grunt and gruntplugins

    $ npm install

### Copy files for development

    $ cp bower_components/html5shiv/dist/html5shiv.js ./src/js
    $ cp bower_components/bootstrap/dist/js/bootstrap.min.js ./src/js

### Run Grunt

    $ grunt

