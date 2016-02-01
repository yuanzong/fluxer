'use strict';

var serialize = require('serialize-javascript');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

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
        __html: ReactDOMServer.renderToString(this.props.component)
      }
    }
    );
  }
});

module.exports = function render(appName, Component, data, options) {
  var appContainer;
  var appContainerId = utils.getContainerId(appName);
  if (options.disableServerRender) {
    appContainer = React.DOM.div({
      id: appContainerId
    });
  } else {
    appContainer = React.createElement(AppTemplate, {
      id: appContainerId,
      component: React.createElement(Component, data)
    });
  }

  var dataScript = React.createElement(DataScriptTemplate, {
    id: utils.getScriptId(appName),
    data: data
  });

  return ReactDOMServer.renderToStaticMarkup(appContainer) +
    ReactDOMServer.renderToStaticMarkup(dataScript);
};
