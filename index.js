
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const points = document.getElementById("points");
const computerGuess = document.getElementById("computerGuess");

const plays = ["rock", "paper", "scissors"];

const winner = {
  rock: (guess) => {
    if (guess === "rock") {
      return "tie";
    } else if (guess === "scissors") {
      return "win";
    } else {
      return "lose";
    }
  },
  scissors: (guess) => {
    if (guess === "rock") {
      return "lose";
    } else if (guess === "scissors") {
      return "tie";
    } else {
      return "win";
    }
  },
  paper: (guess) => {
    if (guess === "rock") {
      return "win";
    } else if (guess === "scissors") {
      return "lose";
    } else {
      return "tie";
    }
  },
};

let userPoints = 0;
let computerPoints = 0;

const resetGame = () => {
  userPoints = 0;
  computerPoints = 0;
  points.textContent = "Player 0 : 0 AI";
  computerGuess.textContent = "AI's guess: ";
};

const playGame = (userGuess) => {
  const compGuess = plays[Math.floor(Math.random() * 3)];
  const text = winner[userGuess](compGuess);
  if (userPoints === 9) {
    alert("The game is over. The player has won.");
    resetGame();
    return;
  } else if (computerPoints === 9) {
    alert("The game is over. The AI won.");

    resetGame();
    return;
  }

  if (text === "win") {
    userPoints++;
    points.textContent = `Player ${userPoints} : ${computerPoints} AI`;
  } else if (text === "lose") {
    computerPoints++;
    points.textContent = `Player ${userPoints} : ${computerPoints} AI`;
  } else {
    points.textContent = `Player ${userPoints} : ${computerPoints} AI`;
  }
  computerGuess.textContent = `AI's guess: ${compGuess}`;
};

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));

