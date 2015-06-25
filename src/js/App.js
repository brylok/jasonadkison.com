var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var Header = require('./components/Header');
var Footer = require('./components/Footer');

var HomePage = require('./components/HomePage');
var NotFoundPage = require('./components/NotFoundPage');

var App = React.createClass({

  getInitialState: function() {
    return {};
  },

  componentWillMount: function() {},

  componentDidMount: function() {
    
  },

  render: function() {
    return (
      <div>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }

});

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={HomePage} />
    <NotFoundRoute handler={NotFoundPage} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});