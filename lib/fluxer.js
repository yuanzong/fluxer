'use strict';

require('node-jsx').install();

var React = require('react');
var AppTemplate = require('./utils/template');

// serialize app markup and initial state for server
module.exports = {
  bootstrap: function bootstrap(appId, Component, data) {

    var component = React.createElement(Component, data);

    var app = React.createElement(AppTemplate, {
      appId: appId,
      appData: data,
      component: component
    });

    return React.renderToStaticMarkup(app);
  }
};
