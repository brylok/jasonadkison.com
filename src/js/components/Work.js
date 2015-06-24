var React = require('react');

var Scroll = require('react-scroll'); 
var Element = Scroll.Element;

var WorkItems = require('./WorkItems');

var Work = React.createClass({

  render: function() {
    return (
      <Element name="work">
        <section id="work" className="section work">
          <div className="wrapper">

            <header>
              <h1>My Work</h1>
            </header>

            <div className="row">
              <WorkItems />
            </div>

          </div>
        </section>
      </Element>
    );
  }

});

module.exports = Work;