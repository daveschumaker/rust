var React = require('react');
var InfiniteScroll = require('react-infinite-scroll')(React);

// Shows the most popular (highest number of people having favorited)
// comments across all sites.
//
// TODO: 
//  - Filter by time? e.g. show the most popular for last day or week?
//  - Set a limit on scrolling to load top xxx comments?
var Welcome = React.createClass({
  getInitialState: function() {
    return {};
  },

  initLoadState: function() {
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2 leaderboard">
          <h3>Welcome to Oxidizer!</h3>
          <p>Thanks for downloading Oxidizer, a universal commenting system for the internet.</p>
          <h4>1. Log into Oxidizer by clicking the toolbar icon</h4>
          <p><img src="lib/images/onboarding/1_toolbar.png" width="100%" /></p>
          <h4>2. Use your favorite service (as long as it's Facebook or Google) to log in</h4>
          <p><img src="lib/images/onboarding/2_popup.png" width="100%" /></p>
          <h4>3. Load Oxidizer comments with this trigger</h4>
          <p><img src="lib/images/onboarding/3_trigger.png" width="100%" /></p>
        </div>
      </div>
    );
  }
});

module.exports = Welcome;
