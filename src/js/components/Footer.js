var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="main-footer">
        <div className="wrapper">
          <p className="copyright">© {(new Date()).getFullYear()} Jason Adkison. All rights reserved.</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;