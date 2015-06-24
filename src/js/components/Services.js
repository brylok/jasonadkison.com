var React = require('react');

var Scroll = require('react-scroll'); 
var Element = Scroll.Element;

var Services = React.createClass({

  render: function() {
    return (
      <Element name="services">
        <section id="services" className="section services">
          <div className="wrapper">
            <h1>Services</h1>
            <div className="row">

              <div className="col-md-3 col-sm-6 item">
                <img src="//placehold.it/82x82" width="82" height="82" />
                <h2>Frontend</h2>
                <p>Vivamus at justo id massa fringilla semper. Praesent ipsum risus, vulputate vitae, lacinia eu, interdum tempus, massa. Integer nec massa nec tellus.</p>
              </div>

              <div className="col-md-3 col-sm-6 item">
                <img src="//placehold.it/82x82" width="82" height="82" />
                <h2>Backend</h2>
                <p>Aliquam erat volutpat. Etiam blandit, mauris vel semper consectetuer, neque odio gravida nisi, vel gravida arcu turpis sit amet justo. Cras nibh.</p>
              </div>

              <div className="col-md-3 col-sm-6 item">
                <img src="//placehold.it/82x82" width="82" height="82" />
                <h2>UI</h2>
                <p>Curabitur lacinia. Suspendisse semper sem sit amet ligula. Cras non lectus. Suspendisse potenti. Nam lobortis fringilla felis. Nullam porta felis.</p>
              </div>

              <div className="col-md-3 col-sm-6 item">
                <img src="//placehold.it/82x82" width="82" height="82" />
                <h2>CMS</h2>
                <p>Duis varius. In erat enim, interdum a, aliquam sed, commodo bibendum, justo. Quisque a dui vitae dolor ultricies commodo. Vivamus a metus.</p>
              </div>

            </div>
          </div>
        </section>
      </Element>
    );
  }

});

module.exports = Services;