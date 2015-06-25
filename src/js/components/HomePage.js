var React = require('react');
var About = require('./About');
var Work = require('./Work');
var Services = require('./Services');
var Contact = require('./Contact');

var HomeRoute = React.createClass({
  render: function() {
    return (
      <div>
        <About />
        {/*<Services />*/}
        <Work />
        <Contact />
      </div>
    );
  }
});

module.exports = HomeRoute;