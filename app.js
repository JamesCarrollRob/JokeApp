//TO DO:
//write function that iterates through joke object and chooses a random joke
//when all jokes in fetch object have been used, make another fetch call for new set of ten jokes
//Display time and log what time the joke was displayed
//Give option to save joke. If joke is saved, a card is created with joke info 



const url = "https://official-joke-api.appspot.com/jokes/ten"
const p = document.getElementById('setup');
const p2 = document.getElementById('punchline')
const jokeButton = document.getElementById('getJoke')
const setButton = document.getElementById('getSetup')
const punchButton = document.getElementById('getPunch')
const cardContainer = document.getElementById("cards");
var jokeList = []
var fetchCheck = false //proves whether or not fetch the get joke button was pushed first when page first loads



//Fetches an array of ten joke objects and saves the object at index 3 as a variable
function getJoke(){
fetch(url)
  .then(response => response.json())
  .then(function(data) {
      fetchCheck = true;
      let joke = data[3];
      jokeList = data;
      tagline = joke.setup;
      punchline = joke.punchline;
      console.log(data);

      
  })
   clearJoke();
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
   var btnOption = document.createElement("h5");
   btnOption.innerText = "Do you like this joke?";
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
  })
  
  btn2.addEventListener('click', () => {
    clearJoke();
  });
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

 cardContainer.appendChild(card);
  card.appendChild(cardBody.appendChild(title));
  title.appendChild(cardText);

}
//****End of function****/