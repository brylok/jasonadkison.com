var React = require('react');

var Scroll = require('react-scroll'); 
var Element = Scroll.Element;


var About = React.createClass({

  render: function() {
    return (
      <Element name="about">
        <section id="about" className="section about">
          <div className="wrapper">

            <header>
              <h1>Jason Adkison</h1>
              <p className="intro-text">Full Stack Web Developer</p>
            </header>

          </div>
        </section>
      </Element>
    );
  }

});

module.exports = About;