var React = require('react');

var Scroll = require('react-scroll'); 
var Element = Scroll.Element;

var Contact = React.createClass({

  render: function() {
    return (
      <Element name="contact">
        <aside id="contact" className="section contact">
          <div className="wrapper">
            <h1>Get in touch</h1>
            <div className="row">

              <div className="col-md-3 col-sm-6 item phone">
                <h2>Phone:</h2>
                <p><a href="tel://1-512-808-8673">1-512-808-8673</a></p>
              </div>

              <div className="col-md-3 col-sm-6 item email">
                <h2>E-mail:</h2>
                <p><a href="mailto:hello@jasonadkison.com">hello@jasonadkison.com</a></p>
              </div>

              <div className="col-md-3 col-sm-6 item skype">
                <h2>Github:</h2>
                <p><a href="//github.com/jasonadkison" target="_blank">jasonadkison</a></p>
              </div>

              <div className="col-md-3 col-sm-6 item social">
                <h2>Social:</h2>
                <p>
                  <a
                    href="https://www.linkedin.com/profile/view?id=24127304"
                    className="linkedin"
                    target="_blank"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.facebook.com/jadkison84"
                    className="facebook"
                    target="_blank"
                  >
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com/jason_adkison"
                    className="twitter"
                    target="_blank"
                  >
                    <span>Twitter</span>
                  </a>
                </p>
              </div>

            </div>
          </div>
        </aside>
      </Element>
    );
  }

});

module.exports = Contact;