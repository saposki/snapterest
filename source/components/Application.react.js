var React = require('react');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = React.createClass({
  getInitialState: function() {
    return {
      collectionTweets: {}
    };
  },

  addTweetToCollection: function (tweet) {
    var collectionsTweets = this.state.collectionsTweets;

    collectionsTweets[tweed.id] = tweet;

    this.setState({
      collectionsTweets: collectionsTweets
    });
  },

  removeTweetFromCollection: function (tweet) {
    var collectionsTweets = this.state.collectionsTweets;

    delete collectionsTweets[tweet.id];

    this.setState({
      collectionsTweets: collectionsTweets
    });
  },

  removeAllTweetsFromCollection: function() {
    this.setState({
      collectionsTweets: {}
    });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">

            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div className="col-md-8">
            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
            />
          </div>
        </div>

      </div>
    );
  }
});


module.exports = Application;
