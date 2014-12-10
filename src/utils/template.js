'use strict';

var React = require('react');
var escape = require('lodash.escape');

var utils = require('./index');

var DataScriptTemplate = React.createClass({
  propTypes: {
    appId: React.PropTypes.string.isRequired,
    appData: React.PropTypes.object.isRequired
  },

  render: function render() {
    var dataHtml = JSON.stringify(this.props.appData);
    var scriptId = utils.getScriptId(this.props.appId);

    return React.createElement('script', {
      id: scriptId,
      type: 'application/json',
      dangerouslySetInnerHTML: {
        __html: escape(dataHtml)
      }
    });
  }
});

var AppMarkupTemplate = React.createClass({
  propTypes: {
    appId: React.PropTypes.string.isRequired,
    appComponent: React.PropTypes.element.isRequired,
    dataScript: React.PropTypes.element.isRequired
  },

  render: function render() {
    var appHtml = React.renderToString(this.props.appComponent);
    var scriptHtml = React.renderToStaticMarkup(this.props.dataScript);
    var containerId = utils.getContainerId(this.props.appId);

    return React.createElement('div', {
      id: containerId,
      dangerouslySetInnerHTML: {
        __html: appHtml + scriptHtml
      }
    });
  }
});

module.exports = {
  DataScript: React.createFactory(DataScriptTemplate),
  AppMarkup: React.createFactory(AppMarkupTemplate)
};
