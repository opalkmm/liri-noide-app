console.log('this is loaded');

var SPOTIFY_ID= '19939b83c57748ccb421707c4f143503';
var SPOTIFY_SECRET='761f8ac1361e431398ae74d24e820b82';

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// SPOTIFY_ID=19939b83c57748ccb421707c4f143503
// SPOTIFY_SECRET=761f8ac1361e431398ae74d24e820b82