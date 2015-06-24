var React = require('react');
var _ = require('underscore');

var items = require('../data/WorkItems');
var WorkItem = require('./WorkItem');

var WorkItems = React.createClass({
 
  render: function() {
    var workItems = _.map(items, function(item, index) {
      return <WorkItem {...item} key={index} />;
    });

    return (
      <div>
        {workItems}
      </div>
    );
  }

});

module.exports = WorkItems;