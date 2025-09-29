        let balance = 100;
        const balanceVar = document.querySelector("#balance");
        // shows balance and links info
        const betInput = document.querySelector("#betAmount");
        const rollBtn = document.querySelector("#rollBtn");
        const resetBtn = document.querySelector("#resetBtn");
        const playerDiceVar = document.querySelector("#playerDice");
        const computerDiceEl = document.querySelector("#computerDice");
        const resultEl = document.querySelector("#result");

      const diceImages = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

        rollBtn.addEventListener("click", rollDice);
        resetBtn.addEventListener("click", resetGame);

        function rollDice() {
            const bet = parseInt(betInput.value);
            
            if (bet <= 0 || isNaN(bet)) {
                alert("Enter a valid bet!");
                return;
            }
            // nan means anything thats not a number
            // it will stop users from entering random words as a bet
            
            if (bet > balance) {
                alert("Not enough money!");
                return;
            }
            
            rollBtn.disabled = true;
            resultEl.textContent = "Rolling...";
            resultEl.className = "result";
            
            let count = 0;
            const rollGif = setInterval(() => {
                const randomPlayer = Math.floor(Math.random() * 6);
                const randomComputer = Math.floor(Math.random() * 6);
                playerDiceVar.textContent = diceImages[randomPlayer];
                computerDiceEl.textContent = diceImages[randomComputer];
                count++;
                
                if (count > 10) {
                    clearInterval(rollGif);
                    doRoll(bet);
                }
            }, 100);
        }

        function doRoll(bet) {
            const playerRoll = Math.floor(Math.random() * 6) + 1;
            const computerRoll = Math.floor(Math.random() * 6) + 1;
            
            playerDiceVar.textContent = diceImages[playerRoll - 1];
            computerDiceEl.textContent = diceImages[computerRoll - 1];
            
            if (playerRoll > computerRoll) {
                balance += bet;
                resultEl.textContent = `You Win! +$${bet}`;
                resultEl.className = "result win";
            } else if (playerRoll < computerRoll) {
                balance -= bet;
                resultEl.textContent = `You Lose! -$${bet}`;
                resultEl.className = "result lose";
            } else {
                resultEl.textContent = "Tie! No change";
                resultEl.className = "result tie";
            }
            
            balanceVar.textContent = balance;
            
            if (balance <= 0) {
                resultEl.textContent = "Game Over! Click Reset";
                resultEl.className = "result lose";
               
            } 
        }

        function resetGame() {
            balance = 100;
            balanceVar.textContent = balance;
            betInput.value = 10;
            playerDiceVar.textContent = "?";
            computerDiceEl.textContent = "?";
            resultEl.textContent = "Place your bet and roll!";
            resultEl.className = "result";
            rollBtn.disabled = false;
        }
