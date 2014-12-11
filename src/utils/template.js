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
    appId: React.PropTypes.string.isRequired,
    appData: React.PropTypes.object.isRequired,
    component: React.PropTypes.element.isRequired
  },

  render: function render() {
    var appId = this.props.appId;

    var containerId = utils.getContainerId(appId);
    var dataScriptId = utils.getScriptId(appId);

    var DataScript = React.createElement(template.DataScript, {
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
