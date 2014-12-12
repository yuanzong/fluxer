'use strict';

var React = require('react');
var tape = require('tape');
var jsdom = require('jsdom').jsdom;

var server = require('../lib/server');
var utils = require('../lib/utils');

var Component = require('./app-component');
var data = require('./app-data');
var appName = 'test-app';

var document = jsdom(server(appName, Component, data));
var bootstrap = require('../lib/browser')(document);

tape('client side bootstrap', function test(assert) {
  var $container = document.getElementById(utils.getContainerId(appName));
  var $script = document.getElementById(utils.getScriptId(appName));

  assert.ok($container, 'has container element');
  assert.ok($script, 'has script element');

  assert.equal($container.tagName, 'DIV');
  assert.equal($script.tagName, 'SCRIPT');

  var ctx = bootstrap(appName, Component);

  assert.deepEqual(ctx.data, data, 'recovers app data');
  assert.equal(ctx.mountNode, $container, 'mountNode is container element');
  assert.ok(React.isValidElement(ctx.app), 'successfully recreate React app');
  assert.end();
});
