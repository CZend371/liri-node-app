// Gets env info
require("dotenv").config();
//Gets keys.js info
var keys = require("./keys.js");

// Retrieves keys for Spotify
var spotify = new Spotify(keys.spotify);

var getSongInfo = function (song) {
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // Artist(s)

        // * The song's name

        // * A preview link of the song from Spotify

        // * The album that the song is from

        console.log(data.tracks.items[1]);
    });
};



// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

var getBandInfo = function () {
    // Gets bands in town information: name of the venue,venue location, date of the event MM/DD/YYYY
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
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
            getBandInfo();
            break;
        case "spotify-this-song":
            getSongInfo();
            break;
        // default can go at the end
        default:
            console.log("LIRI does not know that")
    }
}
var runThis = function () {
    pick(process.argv[2], process.argv[3]);
}
// fs is a core Node package for reading and writing files
var fs = require("fs");

// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }
    // We will then print the contents of data
    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // We will then re-display the content as an array for later use.
    console.log(dataArr);

});

// It will then print "Inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard", function (err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
        return console.log(err);
    }

    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");

});

// Next, we store the text given to us from the command line.
var text = process.argv[2];

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.appendFile("log.txt", text, function (err) {

    // If an error was experienced we will log it.
    if (err) {
        console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
        console.log("Content Added!");
    }

});