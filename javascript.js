function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  return compChoice;
};


let round = 0;
let computerScore = 0;
let humanScore = 0;

const body = document.querySelector("body");
const choicesDiv = document.createElement("div"); 
choicesDiv.id = "game-choices";


function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  body.appendChild(choicesDiv);

  // Display computer and human choices and results
  choicesPara = createPara();
  choicesPara.textContent = `Your choice: ${humanChoice}, Computer's choice: ${computerChoice}`;
  choicesPara.style.cssText = "color: goldenrod;";
  choicesDiv.appendChild(choicesPara);

  if (humanChoice === computerChoice) {
    roundPara = createPara();
    roundPara.textContent = `It's a tie! You both chose ${humanChoice}.`;
    choicesDiv.appendChild(roundPara);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundPara = createPara();
    roundPara.textContent = "You win this round!";
    roundPara.style.cssText = "color: white;";
    choicesDiv.appendChild(roundPara);
    humanScore++;
  } else {
    roundPara = createPara();
    roundPara.textContent = "You lose this round!";
    choicesDiv.appendChild(roundPara);
    computerScore++;
  }

  //Icrement round and check for end of game
  round++;
  if (round >= 5) {
    endGame();
  }
};


// End game function to display final scores
function endGame() {
  
  const finalDiv = document.createElement("finalDiv");
  finalDiv.id = "game-results"; 
  body.appendChild(finalDiv); 

  para = createPara();
  para.textContent = (`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  para.style.cssText = "color: crimson;";
  finalDiv.appendChild(para);
  if (humanScore > computerScore) {
    winPara = createPara();
    winPara.textContent = "Congratulations, you won the game!";
    winPara.style.cssText = "color: white;";
    finalDiv.appendChild(winPara);
  } else if (humanScore < computerScore) {
    lossPara = createPara();
    lossPara.textContent = "You lost the game. Better luck next time!";
    lossPara.style.cssText = "color: crimson;";
    finalDiv.appendChild(lossPara);
  } else {
    tiePara = createPara();
    tiePara.textContent = "It's a tie game!";
    finalDiv.appendChild(tiePara);
  }

  // Reset scores and rounds for a new game if desired
  resetButton = document.createElement("button");
  resetButton.id = "reset-button";
  resetButton.classList = "button-style";
  resetButton.textContent = "Reset";
  body.appendChild(resetButton);
  gameButtons = document.querySelectorAll(".game-button");
  gameButtons.forEach(button => button.disabled = true);
  resetButton.addEventListener("click", () => {
    round = 0;
    computerScore = 0;
    humanScore = 0;
    choicesDiv.innerText = "";
    body.removeChild(choicesDiv);
    finalDiv.innerText = "";
    body.removeChild(finalDiv);
    body.removeChild(resetButton);
    gameButtons.forEach(button => button.disabled = false);
  });
};


// Add event listeners to buttons
function getHumanChoice() {
  const rockButton = document.querySelector("#rock-button");
  const paperButton = document.querySelector("#paper-button");
  const scissorsButton = document.querySelector("#scissors-button");

  rockButton.addEventListener("click", () => playRound("Rock"));
  paperButton.addEventListener("click", () => playRound("Paper"));
  scissorsButton.addEventListener("click", () => playRound("Scissors"));
};  


function createPara() {
  const para = document.createElement("p");
  para.classList.add("choice", "round", "final");
  return para;
};


// Initialize the game by setting up button listeners
getHumanChoice();