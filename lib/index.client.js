'use strict';

var React = require('react');
var utils = require('./utils');

module.exports = function browser(document) {
  function getMountNode(appName) {
    var id = utils.getContainerId(appName);
    return document.getElementById(id);
  }

  function getInitData(appName) {
    var id = utils.getScriptId(appName);
    var scriptNode = document.getElementById(id);
    return JSON.parse(scriptNode.innerHTML);
  }

  function render(appName, Component) {
    var data = getInitData(appName);
    var app = React.createElement(Component, data);
    var mountNode = getMountNode(appName);
    React.render(app, mountNode);
  }

  return {
    getMountNode: getMountNode,
    getInitData: getInitData,
    render: render
  };
};
