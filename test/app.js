'use strict';

var React = require('react');

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render: function render() {
    var content = this.props.name + ', ' + this.props.email;
    return React.createElement('h1', null, content);
  }
});
