const btn = document.getElementById("createCard");
const mainDiv = document.getElementById("mainDiv");

btn.addEventListener("click", () =>{
   createCard();
});

function createCard() {
   
    let card = document.createElement("div");
    card.className = "card"

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement('h5');
    title.innerText = "New Joke";
    title.className = 'card-title';

    let cardText = document.createElement("p");
    cardText.innerText = "Saved Joke"
    cardText.className = "card-text";

    let removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-primary";
    removeBtn.innerText = "Remove";

    

   mainDiv.appendChild(card);
    card.appendChild(cardBody.appendChild(title));
    title.appendChild(cardText.appendChild(removeBtn));

     removeBtn.addEventListener("click", () => {
        $(this).removeClass('.card');
     });
    }
    

