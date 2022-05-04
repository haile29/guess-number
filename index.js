//creating the secret number by trunc and random; trunc to get rid of the decimal, random to random decimal numbers.
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//Storing score variable
let score = 20;

//Storing highscore variable
let highscore = 0;

//Adding event listener to the button as users click the "Check" button
document.querySelector(".check").addEventListener("click", function () {
  //get the value of the input, which is always string, so it need to be converted into number
  const guessNumber = Number(document.querySelector(".guess").value);
  // if users didn't guess the number
  if (!guessNumber) {
    document.querySelector(".message").textContent = "Please input a number!";
    // if users guess the correct number
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent =
      "Congrats! You got the correct number 🎉";
    //displaying the secret number when players win
    document.querySelector(".number").textContent = secretNumber;
    //changing CSS styles when players win
    document.querySelector("body").style.backgroundColor = "#60b348";
    document.querySelector(".number").style.width = "25rem";
    //implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber > secretNumber) {
    //score now is still higher than 1
    if (score > 1) {
      document.querySelector(".message").textContent = "Lower than that!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //score is lower than 1, so we need to end the game
      document.querySelector(".message").textContent = "You lost. Try again!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Higher than that!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost. Try again!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Adding event listener to the "Reset" button as users click 

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
});





