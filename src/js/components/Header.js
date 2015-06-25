var React = require('react');
var Scroll = require('react-scroll');
var Link = Scroll.Link;

var Header = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false
    };
  },
  onMenuTogglerClick: function(e) {
    e.preventDefault();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  },
  openMenu: function() {
    this.setState({
      menuOpen: true
    });
  },
  closeMenu: function() {
    this.setState({
      menuOpen: false
    });
  },
  render: function() {
    var menuClass;

    if (this.state.menuOpen) {
      menuClass = 'in main-nav navbar-right navbar-collapse';
    } else {
      menuClass = 'collapse main-nav navbar-right navbar-collapse';
    }

    return (
      <header className="main-header">
        <div className="wrapper">
          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.onMenuTogglerClick}>
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h1 className="logo">
                <Link to="about" smooth={true} offset={-70} duration={500} onClick={this.closeMenu} className="link animate active" rel="home" title="Jason Adkison">
                  JA
                </Link>
              </h1>
            </div>
            <div className={menuClass} ref="menu">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="about" smooth={true} offset={-70} duration={500} onClick={this.closeMenu}>
                    About Me
                  </Link>
                </li>
                {/*
                <li>
                  <Link to="services" smooth={true} offset={-70} duration={500}>
                    Services
                  </Link>
                </li>
                */}
                <li>
                  <Link to="work" smooth={true} offset={-70} duration={500} onClick={this.closeMenu}>
                    My Work
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} offset={-70} duration={500} onClick={this.closeMenu}>
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;