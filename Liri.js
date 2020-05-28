//set environment variables
require("dotenv").config();

//import spotify NPM package
var spotify = require('node-spotify-api');

//import API keys
var keys = require("./keys.js");

//import axios to get users' requests
const axios = require('axios')

// Import the moment npm package.
var moment = require("moment");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);

//grab users' main commands and input 
// var artist = process.argv[2]; //concert-this, spotify-this-song,movie-this,do-what-it-says
// var input = process.argv[3]; //band name, movie name, song name
/*---------------------------------spotify main function------------------------*/ 



// node liri.js concert-this <artist/band name here>
// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

/*--------------------------------------------------BANDINTOWN--------------------------------------------------------------- 
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(reponse){
        console.log(response)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })


*/

/*--------------------------------------------------SPOTIFY--------------------------------------------------------------- */

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });