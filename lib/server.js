'use strict';

var React = require('react');
var AppTemplate = require('./utils/template');

// serialize app markup and initial state for server
module.exports = function bootstrap(appName, Component, data) {
  var component = React.createElement(Component, data);

  var app = React.createElement(AppTemplate, {
    appName: appName,
    appData: data,
    component: component
  });

  return React.renderToStaticMarkup(app);
};
