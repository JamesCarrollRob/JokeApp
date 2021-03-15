//TO DO:
// 1) Display random joke from jokeList in banner with animation
// 2) Make sure app is responsive to meet requirements
// 3) Complete the Readme file




const url = "https://official-joke-api.appspot.com/jokes/ten"
const p = document.getElementById('setup');
const p2 = document.getElementById('punchline')
const jokeButton = document.getElementById('getJoke')
const setButton = document.getElementById('getSetup')
const punchButton = document.getElementById('getPunch')
const cardContainer = document.getElementById("cards");
var jokeList = []
var fetchCheck = false //proves whether or not the get joke button was pushed first.


//Fetches an array of ten joke objects and saves the object at index 3 as a variable
function getJoke(){
fetch(url)
  .then(response => response.json())
  .catch(error => alert("There was a problem! Cannot retrieve jokes at this time ", error))
  .then(function(data) {
      fetchCheck = true;
      let joke = data[3];
      jokeList.unshift(joke);
      jokeID = joke.id;
      tagline = joke.setup;
      punchline = joke.punchline;
      console.log(data);

      
  })
    if (jokeList.length > 2){
      randomJoke()
      // console.log(randomJoke(jokeList)); 
      
    }
   clearJoke();
}
//****End of function****/

function randomJoke() {
  
   let returnedJoke = jokeList[Math.floor(Math.random()*jokeList.length)];
   console.log(returnedJoke);
   alert(returnedJoke.setup);
   alert(returnedJoke.punchline);

  
}

    





//****Displays the setup for the joke from the joke object****/
function displaySetup (){
  
  p.innerText = tagline.toUpperCase();

}
//****End of function****/

//****Displays the punchline for the joke from the joke object****/
function displayPunchline (){
  p2.innerText = punchline.toUpperCase();
  
}
//****End of function****/

//****Clears the setup and punchline****/
function clearJoke() {
  p.innerText = '';
  p2.innerText = '';
}
//****End of function****/

//****Creates 2 buttons after the punchline and adds event listeners to those buttons****/
 function addButton() {
   var newDiv = document.createElement("div");
   newDiv.className = "btnDiv";
   var btnOption = document.createElement("h6");
   btnOption.innerText = "Do you like this joke? ";
   document.getElementById("punchline").appendChild(newDiv.appendChild(btnOption));
   var btn = document.createElement("button");
   var btn2 = document.createElement("button");
    btn.className = "btn btn-primary me-md-2"
    btn.innerText=("Yes");
    btn2.className = "btn btn-danger me-md-2";
    btn2.innerText = "No";
    btnOption.appendChild(btn);
    btnOption.appendChild(btn2);
  

  btn.addEventListener('click', () => {
     
    createCard();
    getTime();
      
    
  })
  
  btn2.addEventListener('click', () => { //Saves the liked joke to the jokeList array
    clearJoke();
    jokeList.shift([0]);

  });
 }
 //****End of function****/


//****Function logs the time the joke was saved to the console and returns the time so that this function can be called for later use on the createCard function****/
function getTime() {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
var currentMonth = today.getMonth();
var currentDay =  today.getDay();
var nameDay = days[currentDay];
var nameMonth = months[currentMonth];
var date = today.getFullYear() + ', '+ nameMonth +', '+today.getDate();
var fullTime = "This joke was saved on " + nameDay + ", " + date + " at " + time + " ";

 console.log(fullTime);
 return fullTime; // Returns the fullTime variable so that the createCard function can call getTime and log the time on the card
}
//****End of function****/


//****Creates a card with the saved joke****/
function createCard() {

  let card = document.createElement("div");
  card.className = "card"

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement('h5');
  title.innerText = tagline;
  title.className = 'card-title';

  let cardText = document.createElement("p");
  cardText.innerText = punchline;
  cardText.className = "card-text";

  let sndButton = document.createElement("button");
  sndButton.className = "btn btn-primary btn-sm";
  sndButton.type = "submit";
  sndButton.innerText = "Send Joke";

   let timeLog = document.createElement("p");
   var cardTime = getTime()
   timeLog.innerText =cardTime;

 cardContainer.appendChild(card);
  card.appendChild(cardBody.appendChild(title));
  card.appendChild(cardText);
  card.appendChild(sndButton);
  card.appendChild(timeLog);
  
  //****adds event listener to sndButton. Uses fetch to post data to a server****/
  sndButton.addEventListener('click', ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title.innerText,
    body: cardText.innerText,
    
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  })

}
//****End of function****/

//****Event listeners and unnamed functions for buttons:
jokeButton.addEventListener('click', getJoke)

setButton.addEventListener('click', () => {
  if (fetchCheck === false) {
    alert("you must retrieve the joke first");
  } else {
    displaySetup()
}
}); 

punchButton.addEventListener('click', () => {
    if (fetchCheck === false) {
      alert("you must retrieve the joke first");
    } else {
          displayPunchline();
          addButton();
    }
});
//*********/

