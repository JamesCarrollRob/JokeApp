const btn = document.getElementById("createCard");
const mainDiv = document.getElementById("mainDiv");
const animate = document.getElementById("animate");

btn.addEventListener("click", () =>{
   
   $("#animate").css('visibility', 'visible')
      .text("Hello world!")
      .fadeIn(3000)
      .fadeOut(3000);
    
   createCard();
});

function createCard() {
      
   
   // animate.innerText = "Can you see this?"
    
   

   
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
        remove('.card');
     });
    }
    
    
   
  // With the element initially hidden, we can show it slowly:
  $( "btn" ).click(function() {
    $( "#animate" ).fadeIn( "slow", function() {
      // Animation complete
    });
  });
    
//   $("button").click(function(){
//    $("#div1").fadeIn();
//    $("#div2").fadeIn("slow");
//    $("#div3").fadeIn(3000);
//.css('visibility', 'hidden')