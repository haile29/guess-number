//creating the secret number by trunc and random; trunc to get rid of the decimal, random to random decimal numbers.
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//Storing score variable
let score = 20;

//Storing highscore variable
let highscore = 0;
//functions

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

//Adding event listener to the button as users click the "Check" button
document.querySelector(".check").addEventListener("click", function () {
  //get the value of the input, which is always string, so it need to be converted into number
  const guessNumber = Number(document.querySelector(".guess").value);
  // if users didn't guess the number
  if (!guessNumber) {
    displayMessage("Please enter a number");
    // if users guess the correct number
  } else if (guessNumber === secretNumber) {
    displayMessage("Congrats! You got the correct number 🎉");
    //displaying the secret number when players win
    document.querySelector(".number").textContent = secretNumber;
    //changing CSS styles when players win
    document.querySelector("body").style.backgroundColor = "#60b348";
    document.querySelector(".number").style.width = "25rem";
    //implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    //score now is still higher than 1
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? "Lower than that!" : "Higher than that!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //score is lower than 1, so we need to end the game
      displayMessage("You lost! Try again!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Adding event listener to the "Reset" button as users click

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});




