// Gets env info
require("dotenv").config();
//Gets keys.js info
var keys = require("./keys.js");
var moment = require('moment');

// Retrieves keys for Spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var getSongInfo = function (song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        for (var i = 0; i < 5; i++) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log("-----------------------");
            console.log("Artist: " + data.tracks.items[i].album.artists[0].name);
            console.log("Preview link: " + data.tracks.items[i].preview_url);
            console.log("Album: " + data.tracks.items[i].album.name);
            console.log("-----------------------");
        }
    });
};


// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var getBandInfo = function (artist) {
    // Gets bands in town information: name of the venue,venue location, date of the event MM/DD/YYYY
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            for (var i = 0; i < 5; i++) {
                console.log("-----------------------");
                console.log("Venue: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                console.log("Date: " + moment().format("MM/DD/YYYY", response.data[0].datetime));
                console.log("-----------------------");

            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
var getMovieInfo = function (movie) {
    axios.get("http://www.omdbapi.com/?apikey=e447b755&t= " + movie + "").then(
        function (response) {
            for (var i = 0; i < 5; i++) {
                //      Title of the movie.
                //    * Year the movie came out.
                //    * IMDB Rating of the movie.
                //    * Rotten Tomatoes Rating of the movie.
                //    * Country where the movie was produced.
                //    * Language of the movie.
                //    * Plot of the movie.
                //    * Actors in the movie.
                console.log("-----------------------");
                console.log("Title: " + response.data.Title);
                console.log("Year released: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Metascore Rating: " + response.data.Metascore);
                console.log("Country produced in: " + response.data.Country);
                console.log("Languages available: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("-----------------------");

            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}
var pick = function (command, query) {
    // add the rest of commands when functions are done
    switch (command) {
        case "concert-this":
            getBandInfo(query);
            break;
        case "spotify-this-song":
            getSongInfo(query);
            break;
        case "movie-this":
            getMovieInfo(query);
            break;
        case "do-what-it-says":

            break;
        // default can go at the end
        default:
            console.log("LIRI does not know that")
    }
}
var runThis = function () {
    pick(process.argv[2], process.argv[3]);
}
runThis(process.argv[2], process.argv[3]);
// // fs is a core Node package for reading and writing files
// var fs = require("fs");

// // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// // The code will store the contents of the reading inside the variable "data"
// fs.readFile("random.txt", "utf8", function (error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//         return console.log(error);
//     }
//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);

// });

// // It will then print "Inception, Die Hard" in the file
// fs.writeFile("movies.txt", "Inception, Die Hard", function (err) {

//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//         return console.log(err);
//     }

//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("movies.txt was updated!");

// });

// // Next, we store the text given to us from the command line.
// var text = process.argv[2];

// // Next, we append the text into the "sample.txt" file.
// // If the file didn't exist, then it gets created on the fly.
// fs.appendFile("log.txt", text, function (err) {

//     // If an error was experienced we will log it.
//     if (err) {
//         console.log(err);
//     }

//     // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//     else {
//         console.log("Content Added!");
//     }

// });