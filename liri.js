// add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Include the axios npm package 
var axios = require('axios')

// set the commands
const nodeArg= process.argv
var commandType = process.argv[2]

var searchObject = ""

nodeArg.splice(0, 3)
var searchObject = nodeArg.join('+')

// // capture everything after the command to be used as the search
// var searchObjectArray = []
// for (let i = 3; i < nodeArg.length; i++) {
//   // We then "push" (add) each of these to our searchObject array
//   searchObjectArray.push(nodeArg[i])
// }
// // join the elements of array into a single string
// searchObject = searchObjectArray.join('+')

// console.log(`searchObject is: ${searchObject}`)


switch (commandType) {
  case 'movie-this':
    findMovie(searchObject)
    break;
  default:
    console.log('Not a recognized command')
}

// // Add the code required to import the `keys.js` file and store it in a variable
// var keys = require("./keys.js");

// // access keys information
// var spotify = new Spotify(keys.spotify);

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

// ----- OMDb -----

// Then run a request with axios to the OMDB API with the movie specified

function findMovie() {
  // if the user does not enter a movie name
  if (searchObject === "") {
    console.log(`You did not enter a movie name.\nMight I suggest you watch Mr. Nobody if you haven't seen it already? It's available on Netflix! Here's more about the movie:`)
    movieTitle = "Mr. Nobody"

    OMDbMovieData()

  } else {
    movieTitle = searchObject
    OMDbMovieData()
  }
}

function OMDbMovieData() {
  axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=d547b268`)
    .then(function (response) {
      console.log(`The movie ${response.data.Title} came out in ${response.data.Year}. It was produced in ${response.data.Country}. It is available in the following language(s): ${response.data.Language}. It has an IMDb Rating of ${response.data.imdbRating} and a ${response.data.Ratings[1].Source} Rating of ${response.data.Ratings[1].Value}. \nThe actors in the movie were: ${response.data.Actors}. The plot of the movie is: ${response.data.Plot}`)
    })
}