# liri-node-app

##OMDb
I generated an API key from http://www.omdbapi.com/apikey.aspx
To make sure I could make a call to the API, I ran a request to show the rating of a specific movie. 
Once verified that that worked, I wrote the script to display the info that LIRI should show: title, year, IMDb rating, Rotten Tomatoes rating, country, language, plot, and actors. I used Postman to see how to define the info. 
I discovered that not every movie offers a Rotten Tomatoes rating so instead of calling for the second value in the Ratings array and assuming it's a Rotten Tomatoe Rating, I had it show the second Source and the second Value of the Ratings array. If I had more time, I would look into how to only pull the data if it were Rotten Tomatoes for the source.
Once I verified that I was retrieving the correct data. I worked on getting the app to display the movie that someone enters. 
I set a variable for movieTitle and defined it as the process.argv then tested to see if it would still display the info I told it to when I entered a title in my terminal. 
Then I worked on getting it to run the movie search only if someone put in "movie-this".
I did this by setting a variable for the command to = process.argv[2]
I created a switch for the different command types. 
I encapsulatad the call to OMDb into a function. 
I tested it to make sure the app will take in an entry and display the correct info. 
Once I got that to work, I added an if function to show the details for Mr. Nobody if the user doesn't enter any movie name. 
I noticed that if I had a title that has multiple words, it wouldn't query correctly because I had orignally made the search = argv[3] leaving out everything else. I considered using .shift but that only removed the first index, then I tried using splice but that didn't work. In the end, what worked was to run a for loop through the entire argv starting at index 3 and pushing that into an array, then joining the elements in the array with a .join using '+' for the separator. This changed my original conditions for searching Mr. Nobody from 'undefined' to "". UPDATE: turns out splice does work, I just did it wrong. My sister came over and made it work, so now I have 2 options available for this step, with the for loop commented out. 

##Spotify
I followed the instructions on getting a Spotify ID and Secret code.
I added to the switch command spotify-this-song. 
I followed the spotify npm package and was able to pull the data but everything was inside an object. Looking at the object, it looked like I needed to drill down from tracks to items, so I queried for data.tracks.items, but there were a ton of items, so I created a variable called possibleSongs for each item and ran a loop for each item item to pull the data we want. I used this documentation to query for each fact about the song https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/. I struggled a bit with getting the artist name. I couldn't figure out why artist.name did not work. Then noticed there were a ton of artist entries, so I just chose the first one: artists[0].name since they seemed to all be the same artist on the documentation. 

##Bands in Town
For Bands in Town, I replicated what I did with OMDb since it also uses axios: I added to the switch state "concert-this" and had that case run a function that would call to rest.bandsintown.com, searching for the same search object that I've been using for the other two portions of the app. I console.logged just the response to see what I was working with. I would have to run a for loop for each concert. This documenation was helpful https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0#/artist%20events/artistEvents. And I ran my test searches through Postman to make sure the info was matching what Postman showed. Based on what was returned, I wrote out how each event should read on my terminal, then got to working on formatting the date and time of the event. 
###moment
Referencing http://momentjs.com/docs/ I made the time localized. To follow the homework instructions, the moment format would be 'L' but I liked how it looks with 'llll' instead, so I kept it 'llll'.

##Do what it says - file system node package
I installed the file system npm, added the required code. Then ran it to see how it retrieved the info in random.text. I split it with a comma to view the index easier. Once I could I could see how it pulled, I tried to reuse the same switch statement but could not figure it out so I created another switch statement. I was able to see that it read the text file but when I tried to run a switch statement, I could tell it read the command but it would display the default song that is supposed to appear when someone does not enter a song. I commented out the switch statement and did an if statement, but same issue. 
Figured it out! For each function I added in the parameter searchObject instead of leaving it blank and that worked. The movie search worked, the song search worked, but the concert did NOT work via do-what-it-says, but it worked with the regular command prompt! Falisse helped me figure it out. After console.logging in multiple areas to show that the search object was carrying through, Falisse console.logged the what was SENT to the API. we could then see that the search object contained some %20 and other stuff noting that the search object captured spaces and such, so I added a .trim and finally got the do-what-it-says concert-this to work. Woot woot! 

Here's a video showing the app: https://drive.google.com/file/d/1lFe_Fdi-GLFMyiL04c8G_QeUTjmO4CdC/view






