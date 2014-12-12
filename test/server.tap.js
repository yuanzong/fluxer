'use strict';

var tape = require('tape');

var server = require('../lib/server');
var utils = require('../lib/utils');

var Component = require('./app-component');
var data = require('./app-data');
var appName = 'test-app';

var containerId = utils.getContainerId(appName);
var scriptId = utils.getScriptId(appName);

var escape = require('lodash.escape');

tape('bootstrap on the server side', function test(assert) {
  assert.throws(server, /appName/, 'appName is required');
  assert.throws(server.bind(this, appName));

  var markup = server('react-app', Component, data);
  assert.equal(typeof markup, 'string', 'renders a string');

  assert.ok(markup.indexOf(containerId), 'contains container');
  assert.ok(markup.indexOf(scriptId), 'contains script tag');
  assert.ok(markup.indexOf(escape(JSON.stringify(data))), 'contains serialized data');

  assert.end();
});
