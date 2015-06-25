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

              <div className="intro-text">
                <br/>

                <a href="//www.jasonadkison.com/docs/jason_adkison_cv_2015_07.pdf"><i className="fa fa-file-pdf-o"></i> Curricula Vitae</a>

                <br/><br/>

                Ruby / Ruby on Rails,
                PHP / CakePHP,
                Wordpress,
                HTML5 / CSS3,
                Sass,
                Bootstrap,
                Responsive Design,
                ReactJS,
                NodeJS,
                Grunt,
                Browserify,
                Javascript / jQuery / AJAX,
                Handlebars,
                MVC / REST,
                Agile Development,
                Git, Github & Gitflow,
                Unix-based systems (Mac OS X, Ubuntu),
                MySQL, MongoDB
              </div>
            </header>

          </div>
        </section>
      </Element>
    );
  }

});

module.exports = About;