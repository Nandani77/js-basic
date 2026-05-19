let randomNumber = parseInt(Math.random() * 100) + 1;

const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 0;
let playGame = true;
const maxGuesses = 10;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);

        if (guess === randomNumber) {
            displayMessage('Congratulations! You guessed the number!');
            endGame();
        } else if (numGuess >= maxGuesses) {
            displayMessage('Game Over! The number was ' + randomNumber);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess < randomNumber) {
        displayMessage('Too low! Try again.');
    } else {
        displayMessage('Too high! Try again.');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${maxGuesses - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxGuesses}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

