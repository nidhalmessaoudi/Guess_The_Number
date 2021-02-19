"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = (message) => {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", () => {

    const guess = Number(document.querySelector(".guess").value);
    // No Number
    if (!guess) {
        displayMessage("⛔ No Number!");
    // Player Wins
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 You loose the game!");
        }
    }  
});

document.querySelector(".again").addEventListener("click", () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
  
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

});