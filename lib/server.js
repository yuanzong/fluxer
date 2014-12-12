'use strict';

var React = require('react');
var AppTemplate = require('./utils/template');

// serialize app markup and initial state for server
module.exports = function bootstrap(appName, Component, data) {
  if (typeof appName !== 'string') {
    throw new TypeError('appName is required');
  }

  var appData = data || {};
  var component = React.createElement(Component, appData);

  var app = React.createElement(AppTemplate, {
    appName: appName,
    appData: appData,
    component: component
  });

  return React.renderToStaticMarkup(app);
};
