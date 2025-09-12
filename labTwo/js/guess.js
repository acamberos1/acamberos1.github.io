 
  document.querySelector("#guessButton").addEventListener("click", guess);     


let randomNumber = Math.floor(Math.random()*99)+1;
  function guess(){
    let userGuess = document.querySelector("#guessBox").value;
     document.querySelector("#answers").textContent+= ` ${userGuess} `;
    // value only works in text input types
           // alert("guess a number")
     // now linked to guess() from above
        
        // dont use () in the decument selector or it wont work well

       // document.querySelector("#answers").textContent +=userGuess + ","; // adds current value to new value
            
        }
      