"use strict";

//region Const
const container = document.getElementById(".container");
const playAgain = document.getElementById(".play-again");
const checkGuess = document.getElementById(".check-button");
const hideNum = document.getElementById(".hide-num");
const message = document.getElementById(".started-message");
const inputNum = document.getElementById(".input-number");
const hScore = document.getElementById(".h-score");
const score = document.getElementById(".score");

//endregion

let answer = Math.random() * 100 + 1;
console.log(answer);