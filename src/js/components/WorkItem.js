var React = require('react');

var WorkItem = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    year: React.PropTypes.number.isRequired,
    url: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    img: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <article className="col-md-4 col-sm-6 col-xs-12 item">
        <div className="iwrap">
          <img
            src={this.props.img}
            className="img-responsive"
            alt={this.props.title}
            width="300"
            height="200"
          />
          <a
            href={this.props.href}
            title={'Visit ' + this.props.title}
            target="_blank"
          >
            <span className="window">
              <span className="year">{this.props.year}</span>
              <span className="desc">{this.props.desc}</span>
              <span className="link">{this.props.url}</span>
            </span>
          </a>
        </div>
        <h2>
          <a
            href={this.props.href}
            title={this.props.title}
            target="_blank"
          >
            {this.props.title}
          </a>
        </h2>
      </article>
    );
  }

});

module.exports = WorkItem;