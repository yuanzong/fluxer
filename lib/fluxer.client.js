'use strict';

var document = require('global/document');
var unescape = require('lodash.unescape');
var utils = require('./utils');

// recreate app data and container for client
module.exports = {
  bootstrap: function bootstrap(appId) {
    var appContainer = document.getElementById(utils.getContainerId(appId));
    var scriptContainer = document.getElementById(utils.getScriptId(appId));
    var scriptData = unescape(scriptContainer.innerHTML);

    return {
      appContainer: appContainer,
      appData: JSON.parse(scriptData)
    };
  }
};
