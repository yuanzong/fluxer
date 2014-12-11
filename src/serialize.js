'use strict';

var React = require('react');
var AppTemplate = require('./utils/template');
var nodeJsx = require('node-jsx');

// serialize app markup and initial state for server
module.exports = function serialize(appId, Component, data) {
  nodeJsx.install();

  var component = React.createElement(Component, data);

  var app = React.createElement(AppTemplate, {
    appId: appId,
    appData: data,
    component: component
  });

  return React.renderToStaticMarkup(app);
};
