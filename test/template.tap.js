'use strict';

var React = require('react');
var tape = require('tape');

var Template = require('../lib/utils/template');

var Component = require('./app');
var data = require('./data');

tape('Template', function test(assert) {
  var app = React.createElement(Template, {
    appName: 'test',
    appData: data,
    component: React.createElement(Component, data)
  });

  assert.ok(React.isValidElement(app), 'creates a valid Element');
  assert.equal(React.Children.count(app), 1);
  assert.end();
});
