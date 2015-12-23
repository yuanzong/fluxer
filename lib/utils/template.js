'use strict';

var serialize = require('serialize-javascript');
var React = require('react');

var utils = require('./index');

var DataScriptTemplate = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired
  },

  render: function render() {
    return React.DOM.script({
      id: this.props.id,
      type: 'application/json',
      dangerouslySetInnerHTML: {
        __html: serialize(this.props.data)
      }
    });
  }
});

var AppTemplate = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    component: React.PropTypes.element.isRequired
  },

  render: function render() {
    return React.DOM.div({
      id: this.props.id,
      dangerouslySetInnerHTML: {
        __html: React.renderToString(this.props.component)
      }
    }
    );
  }
});

module.exports = function render(appName, Component, data) {
  var appContainer = React.createElement(AppTemplate, {
    id: utils.getContainerId(appName),
    component: React.createElement(Component, data)
  });

  var dataScript = React.createElement(DataScriptTemplate, {
    id: utils.getScriptId(appName),
    data: data
  });

  return React.renderToStaticMarkup(appContainer) +
    React.renderToStaticMarkup(dataScript);
};
