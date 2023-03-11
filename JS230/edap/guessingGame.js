document.addEventListener('DOMContentLoaded', event => {
  let targetNumber = getRandomNumber();
  console.log(targetNumber)
  let guess = document.getElementById('guess');
  let submit = document.querySelector('input[type=submit]');
  let message = document.querySelector('p');
  let newGame = document.querySelector('a');
  let attemps = 0;
  submit.addEventListener('click', event => {
    event.preventDefault();
    attemps += 1;
    message.textContent = checkGuess(Number(guess.value), targetNumber, attemps);
  })

  newGame.addEventListener('click', event => {
    event.preventDefault();
    targetNumber = getRandomNumber();
    message.textContent = 'Please make a guess';
    guess.value = '';
  })
})

function checkGuess(guess, target, attemps) {
  if (guess > target) {
    return `My number is lower than ${guess}`;
  } else if (guess < target) {
    return `My number is higher than ${guess}`;
  } else if (attemps === 1) {
    return `You guessed it. It took you ${attemps} guess`;
  } else {
    return `You guessed it. It took you ${attemps} guesses`;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}
