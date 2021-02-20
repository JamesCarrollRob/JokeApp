const url = "https://official-joke-api.appspot.com/jokes/ten"
const p = document.getElementById('setup');
const p2 = document.getElementById('punchline')
const jokeButton = document.getElementById('getJoke')
const setButton = document.getElementById('getJoke2')
const punchButton = document.getElementById('getJoke3')
const btn = document.getElementById("createCard");
const mainDiv = document.getElementById("mainDiv");
// const randomJoke = Math.floor(Math.random() * jokeList.length);
var jokeList = []
var fetchCheck = false //proves whether or not fetch request was successfull 




function getJokes(){
    fetch(url)
      .then(response => response.json())
      .then(function(data) {
          fetchCheck = true;
        //   let joke = data[3];
          jokeList = data;
          
      })
    
    }


  
  
 

// This function adds and event listener to the button:
// It checks the length of the jokeList (which is an array of ten "joke" objects from an external api)
// If the array is populated with jokes, it extracts a joke object and assigns it to a variable called joke
// Once the array has no joke objects left, it makes another fetch call and reloads the array
jokeButton.addEventListener("click", () => {
  if (jokeList.length === 0) {
    getJokes();
    //  .then(joke = jokeList[Math.floor(Math.random() * jokeList.length)])
    //  .then(console.log(joke))
    //  .then(jokeList.pop(joke))
    //  .then(console.log(jokeList.length))
    //  .then(tagline = joke.setup);
  } else {
  joke = jokeList[Math.floor(Math.random() * jokeList.length)];
      console.log(joke);
      var index = jokeList.indexOf(joke);
      console.log(index);
      jokeList.splice(index, 1);
      jokeList.pop(joke);
      console.log(jokeList.length);
      tagline = joke.setup;
      punchline = joke.punchline;
  }
   clearJoke();
   console.log(jokeList);
});
/**********END OF FUNCTION*****/

function clearJoke() {
  p.innerText = '';
  p2.innerText = '';
}

/****THIS FUNCTION DISPLAYS THE TAGLINE****/
function displaySetup (){
  p.innerText = tagline.toUpperCase();
}
/****END OF FUNCTION****/

/****THIS FUNCTION DISPLAYS THE PUNCHLINE****/
function displayPunchline() {
  p2.innerText = punchline.toUpperCase();
}
/****END OF FUNCTION****/

/****BUTTON EVENT LISTENERS****/
setButton.addEventListener("click", () => {
  if (fetchCheck === false) {
    alert("There are no jokes availiable, push button 1 again")
  } else {
      displaySetup();
  }
})

punchButton.addEventListener("click", () => {
       displayPunchline();
      //  createCard();
       addButton();
})
/****END OF LISTENERS****/


/****THIS FUNCTION CREATES A BUTTON****/
function addButton() {
  var btn = document.createElement("button");
  btn.className = "btn btn-primary me-md-2"
  btn.innerText=("Do you like this joke?");
  document.getElementById("punchline").appendChild(btn);
  btn.addEventListener("click", () =>{
    createCard();
  });
}
/****END OF FUNCTION****/

/****THIS FUNCTION CREATES A "JOKE CARD" AND SAVES THE JOKE****/
function createCard() {

  let card = document.createElement("div");
  card.className = "card"

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let title = document.createElement('h5');
  title.innerText = ("Setup: " + this.tagline);
  title.className = 'card-title';

  let cardText = document.createElement("p");
  cardText.innerText = ("Punchline: " + this.punchline);
  cardText.className = "card-text";

 mainDiv.appendChild(card);
  card.appendChild(cardBody.appendChild(title));
  title.appendChild(cardText);

  // jokeList.pop(joke);

}
/****END OF FUNCTION****/



    