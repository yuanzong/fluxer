'use strict';

var React = require('react');
var unescape = require('lodash.unescape');
var utils = require('./utils');

function getMountNode(document, appName) {
  var id = utils.getContainerId(appName);
  return document.getElementById(id);
}

function getInitData(document, appName) {
  var id = utils.getScriptId(appName);
  var scriptNode = document.getElementById(id);
  var scriptContent = unescape(scriptNode.innerHTML);
  return JSON.parse(scriptContent);
}

module.exports = function browser(document) {
  return function bootstrap(appName, Component) {
    var data = getInitData(document, appName);
    var mountNode = getMountNode(document, appName);

    return {
      app: React.createElement(Component, data),
      data: data,
      mountNode: mountNode
    };
  };
};
