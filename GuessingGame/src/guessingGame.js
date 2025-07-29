"use strict";

//region Const
const playAgainEL = document.getElementById("play-again");
const checkGuessEL = document.getElementById("check-button");
const hideNumEL = document.getElementById("hide-num");
const messageEL = document.getElementById("starter-message");
const inputNumEL = document.getElementById("input-number");
const hScoreEL = document.getElementById("h-score");
const scoreEL = document.getElementById("score");

//endregion

console.log(messageEL.value)
let answer = Math.random() * 100 + 1;
let score = 20;
let hScore = 0;


checkGuessEL.addEventListener('click',function(){
    const guess = Number(inputNumEL.value);
if(guess > answer) {
    displayMessage("Number is too high! You've lost :<");
    scoreEL.textContent = 0
} else if (guess < answer) {
    displayMessage( "Number is too low! You've lost :<");
    scoreEL.textContent = 0

} else if (guess === answer) {
    hideNumEL.textContent = answer;
    hideNumEL.style.width = "50%";
    hideNumEL.style.transition = "aLL 0.3 ease in";
hScoreEL.textContent = document.getElementById("h-score") + 5;

   displayMessage( "Correct! You win! :3");
} else {
    displayMessage("Please enter a number<3");
}

});

 const displayMessage = function(message) {
    messageEL.textContent = message;
 };