// add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Include the axios npm package 
var axios = require('axios')

// Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
// access keys information
var spotify = new Spotify(keys.spotify);

// set the commands
const nodeArg = process.argv
var commandType = process.argv[2]

var searchObject = ""

// capture everything after the command to be used as the search
nodeArg.splice(0, 3)
var searchObject = nodeArg.join('+')

// // ALTERNATIVE WAY: capture everything after the command to be used as the search
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
  case 'spotify-this-song':
    findSong(searchObject)
    break;
  default:
    console.log('Not a recognized command')
}


// LIRI will search Bands in Town for concerts with command `concert-this` and give 1) Name of venue 2) venue location 3) date of event in MM/DD/YYY


// liri needs to take command `do-what-it-says`

// use moment npm 


// use fs node package to take text from inside random.txt and then use it to call one of LIRI's commands, it should run "I want it that way" but also test it out for movie-this and concert-this

// ----- OMDb -----
// LIRI will search OMDb for movies with command `movie-this` and give 1) Title of the movie, 2) Year movie came out, 3) IMDB rating, 4) Rotten Tomatoes rating, 5) Country where movie was produced, 6) Language of movie, 7) Plot of the movie, 8) Actors of movie, 9) if no movie, program will output data for 'Mr. Nobody'

function findMovie() {
  // if the user does not enter a movie name
  if (searchObject === "") {
    console.log(`*****-----*****\nYou did not enter a movie name.\n*****-----*****\nMight I suggest you watch Mr. Nobody if you haven't seen it already? It's available on Netflix!\n*****-----*****\nHere's more about the movie:`)
    movieTitle = "Mr. Nobody"
    OMDbMovieData()
  } else {
    movieTitle = searchObject
    OMDbMovieData()
  }
}

//run a request with axios to the OMDb API with the movie specified
function OMDbMovieData() {
  axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=d547b268`)
    .then(function (response) {
      console.log(`*****-----*****\nThe movie ${response.data.Title} came out in ${response.data.Year}. It was produced in ${response.data.Country}. It is available in the following language(s): ${response.data.Language}. It has an IMDb Rating of ${response.data.imdbRating} and a ${response.data.Ratings[1].Source} Rating of ${response.data.Ratings[1].Value}. \nThe actors in the movie were: ${response.data.Actors}. The plot of the movie is: ${response.data.Plot}`)
    })
}

// ----- Spotify -----
// LIRI will search Spotify for songs with command `spotify-this-song` and give 1) Artist, 2) song's name, 3) preview link of the song, 4) album that the song is from 5) if no song is provided - default to "The Sign" by Ace of Base

function findSong() {
  if (searchObject === "") {
    console.log(`*****-----*****\nYou did not enter a song.\nHere are some songs for you:`)
    songSearch = "The Sign - Ace of Base"
    spotifyData()
  } else {
    songSearch = searchObject
    spotifyData()
  }
}

function spotifyData() {
  spotify.search({ type: 'track', query: songSearch }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var possibleSongs = data.tracks.items

    for (var i = 0; i < possibleSongs.length; i++) {
      console.log(`*****-----*****\nThe song ${possibleSongs[i].name} by ${possibleSongs[i].artists[0].name} is from the album ${possibleSongs[i].album.name}.\nYou can preview the song at ${possibleSongs[i].preview_url}.`)
    }

  });
}