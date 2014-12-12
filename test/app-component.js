'use strict';

var React = require('react');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function render() {
    var content = 'Hello ' + this.props.name;
    return React.createElement('h1', null, content);
  }
});
