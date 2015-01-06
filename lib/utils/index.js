'use strict';

module.exports = {
  getScriptId: function scriptId(appName) {
    return appName + '-data-script';
  },

  getContainerId: function containerId(appName) {
    return appName + '-container';
  }
};
