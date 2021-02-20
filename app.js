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
var jokeList = []
var fetchCheck = false //proves whether or not fetch request was successfull 


//Fetches joke object from api and saves the 3rd joke as a variable
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




   
function displaySetup (){
  
  
  p.innerText = tagline.toUpperCase();

}

function displayPunchline (){
  p2.innerText = punchline.toUpperCase();
  
}

function clearJoke() {
  p.innerText = '';
  p2.innerText = '';
}

 function addButton() {
   var btn = document.createElement("button");
   btn.className = "btn btn-primary me-md-2"
   btn.innerText=("Do you like this joke?");
   document.getElementById("punchline").appendChild(btn);
   btn.addEventListener("click", () =>{
     jokeList.push(tagline);
   });
 }





// Event listeners and unnamed functions for buttons:
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

