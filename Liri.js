require("dotenv").config();

//Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

//You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
console.log('spotify');



//grab users' main commands and input 
var artist = process.argv[2]; //concert-this, spotify-this-song,movie-this,do-what-it-says
var input = process.argv[3]; //band name, movie name, song name

//get the installed package to get requests
const axios = require('axios')
// node liri.js concert-this <artist/band name here>
// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function(reponse){
        console.log(response)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })








