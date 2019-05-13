// add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access keys information
var spotify = new Spotify(keys.spotify);

// --------------pseudocode-----------

// LIRI will search Spotify for songs with command `concert-this` and give 1) Artist, 2) song's name, 3) preview link of the song, 4) album that the song is from 5) if no song is provided - default to "The Sign" by Ace of Base

// LIRI will search Bands in Town for concerts with command `concert-this` and give 1) Name of venue 2) venue location 3) date of event in MM/DD/YYY

// LIRI will search OMDB for movies with command `movie-this` and give 1) Title of the movie, 2) Year movie came out, 3) IMDB rating, 4) Rotten Tomatoes rating, 5) Country where movie was produced, 6) Language of movie, 7) Plot of the movie, 8) Actors of movie, 9) if no movie, program will output data for 'Mr. Nobody'

// liri needs to take command `do-what-it-says`

// send request using the axios package

// use moment npm 

// use spotify npm 

// use fs node package to take text from inside random.txt and then use it to call one of LIRI's commands, it should run "I want it that way" but also test it out for movie-this and concert-this

// -------------actual code ---------------

// Include the axios npm package 
var axios = require('axios')

// Then run a request with axios to the OMDB API with the movie specified
axios.get('http://www.omdbapi.com/?t=game+of+thrones&y=&plot=short&apikey=trilogy')
  .then(function (response) {
    console.log(`The movie's rating is: ${response.data.imdbRating}`)
  })