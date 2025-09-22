 
  document.querySelector("#guessBtn").addEventListener("click", checkGuess); 
  document.querySelector("#resetBtn").addEventListener("click", initializeGame);  
  // guess button must be in the button tag, linkes to guess function
//  document.querySelector("#resetBtn").addEventListener("click", initializeGame);
  // runs the guess function when the button is clicked to restart i think


let randomNumber;
console.log(randomNumber); 
let attempts = 0;
let win = 0;
let loss = 0;
let clickCount = 0;
 // dont use () in the decument selector or it wont work well
 initializeGame();



 function initializeGame()
 {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("randomNumber " + randomNumber);
  
  //hide reset button
  document.querySelector("#resetBtn").style.display = "none";
  //show guess button

// show guess button
  document.querySelector("#guessBtn").style.display = "inline";
let userGuess = document.querySelector("#userGuess");
userGuess.focus(); // add focus to the input field
userGuess.value = ""; //. clear textbox
let feedback = document.querySelector("#feedback");
feedback.textContent = "";

  document.querySelector("#guesses").textContent = "";
 }
       

       function checkGuess()
      {

        let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
          // clears the feedback text each time the button is clicked


        let userGuess = document.querySelector("#userGuess").value
          console.log("userGuess " + userGuess);

          if (userGuess < 1 || userGuess > 99)
            {
            feedback = document.querySelector("#feedback");
            feedback.textContent = "Your guess is out of range!";
              feedback.style.color = "red";
      // this would also work i think document.querySelector("#feedback").textContent = "Enter a number between 1 and 99";
     //.  document.querySelector("#feedback").style.color = "red";
              return;
             }

             attempts++;
             console.log("attempts " + attempts);
             feedback.style.color = "grey";
               if(userGuess == randomNumber) 
                {
                    feedback.textContent = "Congratulations! You guessed the number!";
                    feedback.style.color = "green";
                    gameOver();
                }
              else
              {
                document.querySelector("#guesses").textContent += userGuess + " ";
                if(attempts == 7) 
                {
                  feedback.textContent = "Sorry, you lose. The number was " + randomNumber;
                  feedback.style.color = "red";
                  gameOver();
                } 
                    else if(userGuess> randomNumber)
                    {
                      feedback.textContent = "Your guess is too high!";
                      feedback.style.color = "orange";
                    } 
                       else
                      {
                        feedback.textContent = "Your guess is too low!";

                      }

              }

        }

       function gameOver()
       {
        let guessBtn = document.querySelector("#guessBtn");
        let resetBtn = document.querySelector("#resetBtn");
        guessBtn.style.display = "none";
        // hides the guess button after game ends
        resetBtn.style.display = "inline";
        // shows the reset button after game ends
       }

            
  







     // document.querySelector("h1").style.color = "red"; will make the h1 red , use css instead