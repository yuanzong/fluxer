'use strict';

var React = require('react');
var dom = require('jsdom');
var escape = require('lodash.escape');
var tape = require('tape');

var App = require('./app');
var data = require('./data');

var server = require('../lib');
var browser = require('../lib/index.client');
var utils = require('../lib/utils');

tape('server validation', function test(assert) {
  assert.throws(server, /appName/, 'appName is required');
  assert.throws(server.bind(this, data.name));
  assert.doesNotThrow(server.bind(this, data.name, 'div'));
  assert.doesNotThrow(server.bind(this, data.name, App, data));
  assert.end();
});

var containerId = utils.getContainerId(data.name);
var dataScriptId = utils.getScriptId(data.name);
var document = dom.jsdom(server(data.name, App, data));
var $container = document.getElementById(containerId);
var $dataScript = document.getElementById(dataScriptId);

tape('server renders react component', function test(assert) {
  assert.ok($container, 'has container element');
  assert.equal($container.tagName, 'DIV');
  assert.ok($container.innerHTML.indexOf(data.name + ', ' + data.email),
    'renders component with passed in data'
  );

  assert.ok($dataScript, 'has data script element');
  assert.equal($dataScript.tagName, 'SCRIPT');
  assert.equal($dataScript.innerHTML, escape(JSON.stringify(data)));

  assert.end();
});

tape('bootstrap app from server rendered html', function test(assert) {
  var ctx = browser(document)(data.name, App);
  assert.deepEqual(ctx.data, data, 'recovers app data');
  assert.equal(ctx.mountNode, $container, 'mountNode is container element');
  assert.ok(React.isValidElement(ctx.app), 'successfully recreate React app');
  assert.end();
});
