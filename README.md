# liri-node-app

##OMDb
I generated an API key from http://www.omdbapi.com/apikey.aspx
To make sure I could make a call to the API, I ran a request to show the rating of a specific movie. 
Once verified that that worked, I wrote the script to display the info that LIRI should show: title, year, IMDb rating, Rotten Tomatoes rating, country, language, plot, and actors. I used Postman to see how to define the info. 
I discovered that not every movie offers a Rotten Tomatoes rating so instead of calling for the second value in the Ratings array and assuming it's a Rotten Tomatoe Rating, I had it show the second Source and the second Value of the Ratings array. If I had more time, I would look into how to only pull the data is if were Rotten Tomatoes.
Once I verified that I was retrieving the correct data. I worked on getting the app to display the movie that someone enters. 
I set a variable for movieTitle and defined it as the process.argv then tested to see if it would still display the info I told it to when I entered a title in my terminal. 
Then I worked on getting it to run the movie search only if someone put in "movie-this".
I did this by setting a variable for the command to = process.argv[2]
I created a switch for the different command types. 
I encapsulatad the call to OMDb into a function. 
I tested it to make sure the app will take in an entry and display the correct info. 
Once I got that to work, I added an if function to show the details for Mr. Nobody if the user doesn't enter any movie name. 
I noticed that if I had a title that has multiple words, it wouldn't query correctly because I had orignally made the search = argv[3] leaving out everything else. I considered using .shift but that only removed the first index, then I tried using splice but that didn't work. In the end, what worked was to run a for loop through the entire argv starting at index 3 and pushing that into an array, then joining the elements in the array with a .join using '+' for the separator. This changed my original conditions for searching Mr. Nobody from 'undefined' to "". UPDATE: turns out splice does work, I just did it wrong. My sister came over and made it work, so now I have 2 options avail with the for loop commented out. 

##Spotify
I followed the instructions on getting a Spotify ID and Secret code.
I added to the switch command spotify-this-song. 
I followed the spotify npm package and was able to pull the data but everything was inside an object. Looking at the object, it looked like I needed to drill down from tracks to items, so I queried for data.tracks.items, but there were a ton of items, so I created a variable called possibleSongs for each item and ran a loop for each item item to pull the data we want. 





What to do when there are multiple countries??


