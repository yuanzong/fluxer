'use strict';

var React = require('react');
var escape = require('lodash.escape');

var utils = require('./index');

var DataScriptTemplate = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired
  },

  render: function render() {
    var dataHtml = JSON.stringify(this.props.data);

    return React.createElement('script', {
      id: this.props.id,
      type: 'application/json',
      dangerouslySetInnerHTML: {
        __html: escape(dataHtml)
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

    var containerId = utils.getContainerId(appName);
    var dataScriptId = utils.getScriptId(appName);

    var DataScript = React.createElement(DataScriptTemplate, {
      id: dataScriptId,
      data: this.props.appData
    });

    var appHtml = React.renderToString(this.props.component);
    var dataScriptHtml = React.renderToStaticMarkup(DataScript);

    return React.createElement('div', {
      id: containerId,
      dangerouslySetInnerHTML: {
        __html: appHtml + dataScriptHtml
      }
    });
  }
});

module.exports = AppTemplate;
