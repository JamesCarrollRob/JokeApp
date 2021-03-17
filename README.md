<h1><b>Welcome to the Joke Machine!</b></h1>

<p>This app generates random jokes pulled from an external api and displays them in your browser. It gives the user the  option to like or dislike the joke after
the setup and punchline are displayed via clicking the aforementioned named buttons on the screen. If the joke is liked, a "joke card" is created with the complete joke
and time it was saved. A "send" button is generated on the "joke card". Clicking this button uses Fetch's POST method to post the joke to a server. The "server" in this case is: jsonplaceholder.typicode.com/posts. The post response is proven through a console log message which displays the posted joke and the id: 101. There are 100 posts on the server so the 101 id proves the POST request was successful. The liked joke is also saved to an array assigned to the variable jokeList. Once the jokeList length reaches three or more jokes, a random joke is chosen from the array and displayed in the app banner using some simple jquery animation.</p> 

If the joke is disliked, a "joke card" is not generated and the joke object is not saved to the jokeList variable.

<h2>Instructions:</h2>
<ol type="1">
     <li> open index.html</li>
     <li> Buttons must be clicked in this order each time the user wants a new joke:</li>
     <ol type="1">
          <li>1."New Joke"</li> 
     <li>2."Setup" clicking this button before the joke array retrived from API will result in an alert error.</li>
          <li>3."Punchline"</li> 
     </ol>
</ol>     

Features found in this app:

<h2>1) Retrieve data from an external API</h2> 
<p>The getJoke function is initiated when the "get joke" button is clicked. It uses fetch to retrieve an array of ten joke objects and saves the one at index 3 to a variable to be manipulated for later use in the app. The array retrieved from the API is displayed in the console.</p>

<h2>2) Post to an external API</h2>
<p>Once a "joke card" is created, a button is included on the card called "send joke". This button uses fetch to send a POST requst to jsonplaceholder.typicode.com/posts. The successfull POST request is proven through a console message by giving the posted joke object the id 101.</P>

<h2>3) Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application</h2>
<p> The jokeList variable is an empty array that is populated with liked joke objects. When the length of the array is greater than two, everytime the New Joke button is pushed, in addition to fetching a new joke from an external API, it calls the randomJoke function. This function pulls a random joke object from the array and assigns it to a variable named returnedJoke. The returnedJoke variable then displays the setup and punchline of the joke object in the site banner using some jquery animation methods.</p> 

<h2>4) Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)</h2>
<p>Just in case the user wants to always remember what time, day and year they spit out their coffee and saved their funny joke to a cleverly generated "joke card", the time, date and year is diplayed on the "joke card" and logged in the console so they will never forget! This is accomplished using the getTime function that begins on line 109 in app.js</P>


<p> This app utilizes bootstrap's built in responsiveness features and is functional and viewable through most devices. Code in app.js is heavily commented and should be fairly easy to follow.</p>
