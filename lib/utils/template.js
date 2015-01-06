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
    appName: React.PropTypes.string.isRequired,
    appData: React.PropTypes.object.isRequired,
    component: React.PropTypes.element.isRequired
  },

  render: function render() {
    var appName = this.props.appName;

    var dataScript = React.createElement(DataScriptTemplate, {
      id: utils.getScriptId(appName),
      data: this.props.appData
    });

    var appHtml = React.renderToString(this.props.component);
    var dataScriptHtml = React.renderToStaticMarkup(dataScript);

    return React.DOM.div({
      id: utils.getContainerId(appName),
      dangerouslySetInnerHTML: {
        __html: appHtml + dataScriptHtml
      }
    });
  }
});

module.exports = AppTemplate;
