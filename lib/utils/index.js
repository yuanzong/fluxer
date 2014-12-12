'use strict';

module.exports = {
  getScriptId: function scriptId(appId) {
    return appId + '-data-script';
  },

  getContainerId: function containerId(appId) {
    return appId + '-container';
  }
};
