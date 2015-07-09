# angular-material-basic
A basic implementation of angular material to play around with flex box and material components

## description

This application uses the basic structure of [Angular Material-Start](https://github.com/angular/material-start) web app and builds upon it by using additional directives and yet undocumented CSS classes. This web application will provide a quick starter into the world of [Material Design](https://www.google.com/design/spec/material-design/introduction.html).

Directives used within the web app : md-sidenav, md-toolbar, md-card, md-list, md-content

Use this as a starter web app for Angular Material over and above the official [Angular Material-Start](https://github.com/angular/material-start) web app.

## install dependencies

It uses configuration which is identical to [Angular Material-Start](https://github.com/angular/material-start) web app.

```
npm install
```

Behind the scenes this will also call `bower install`.  This would install two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the AngularJS framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
material-start changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a web server.*

## running the application

It is pre-configured to use [live-server](https://github.com/tapio/live-server).

```sh
 npm start
```
This will invoke node to execute app.js which will start the application

