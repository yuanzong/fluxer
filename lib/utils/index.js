'use strict';

var defaultAppId = 'react-app';

module.exports = {
  getScriptId: function scriptId(appId) {
    return (appId || defaultAppId) + '-data-script';
  },

  getContainerId: function containerId(appId) {
    return (appId || defaultAppId) + '-container';
  }
};
