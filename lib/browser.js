'use strict';

var global = require('global');
var document = require('global/document');
var React = require('react');

var unescape = require('lodash.unescape');
var utils = require('./utils');

// serialize app markup and initial state for server
module.exports = function bootstrap(appName, Component) {
  // for react debugger
  global.React = React;

  var containerId = utils.getContainerId(appName);
  var scriptId = utils.getScriptId(appName);

  var container = document.getElementById(containerId);
  var scriptContainer = document.getElementById(scriptId);

  var dataScript = unescape(scriptContainer.innerHTML);
  var app = React.createElement(Component, JSON.parse(dataScript));

  React.render(app, container);
};
