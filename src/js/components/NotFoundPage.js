var React = require('react');
var Link = require('react-router').Link;

var NotFoundRoute = React.createClass({
  render: function() {
    return (
      <section id="not-found" className="section not-found">
        <div className="wrapper">

          <header>
            <h1>Not Found</h1>
            <p className="intro-text">This page does not exist.</p>
            <p className="intro-text"><Link to="/">Return Home</Link></p>
          </header>

        </div>
      </section>
    );
  }
});

module.exports = NotFoundRoute;