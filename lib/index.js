'use strict';

var template = require('./utils/template');

// serialize app markup and initial state for server
module.exports = function bootstrap(appName, Component, data, options) {
  if (typeof appName !== 'string') {
    throw new TypeError('appName is required');
  }

  return template(appName, Component, data || {}, options || {});
};
