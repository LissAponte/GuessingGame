"use strict";

//region Const
const containerEL = document.getElementById(".container");
const playAgainEL = document.getElementById(".play-again");
const checkGuessEL = document.getElementById(".check-button");
const hideNumEL = document.getElementById(".hide-num");
const messageEL = document.getElementById(".started-message");
const inputNumEL = document.getElementById(".input-number");
const hScoreEL = document.getElementById(".h-score");
const scoreEL = document.getElementById(".score");

//endregion

let answer = Math.random() * 100 + 1;
let score = 20;
let hScore = 0;


checkGuessEL.addEventListener('click',()=>{
    const guess = Number(inputNumEL.value);

    if(guess){

    }else{
        messageEL.textContent = "Please enter a number. :<"
    }
})