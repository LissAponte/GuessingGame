const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("The answer is: " + randomNum);
let numberOfGuesses = 0;

function checkGuess(){
    const guessInput = document.getElementbyId("guessInput");
    const feedBack = document.getElementById("FeedBack!");
    const guess = document.getElementById(guessInput.value);

    numberOfGuesses++;
document.getElementById('button').addEventListener('click', evt => {
    let data = document.getElementById('guessInput').value;
});
document.getElementById('guessInput').value = "";

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = "Invalid input. Please enter a  number between 1 and 100.";
    } else if (guess < randomNum) {
        feedBack.textContent = "Too low!";
    } else if (guess > randomNum){
        feedBack.textcontext = "Too high!";
    } else {
        feedBack.textContext = "Congratulations! You win!";
        guessInput.disabled = true;
    }
}

