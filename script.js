let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const attemptCount = document.getElementById("Attempt-count");
const guessHistory = document.getElementById("guess-history");
const resetBtn = document.getElementById("resetBtn");

let attempts = 0;

submitBtn.addEventListener("click", function () {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Enter a valid number between 1 and 100!";
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    const li = document.createElement("li");
    li.textContent = userGuess;
    guessHistory.appendChild(li);

    if (userGuess === randomNumber) {
        feedback.textContent = " Correct! You guessed the number!";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Too high! Try again.";
    }

    guessInput.value = "";
});

resetBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptCount.textContent = 0;
    feedback.textContent = "Choose a number to start!";
    guessHistory.innerHTML = "";
    guessInput.value = "";
});