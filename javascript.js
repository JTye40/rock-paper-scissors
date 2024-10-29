function getComputerChoice() {
  //Generates random number and return value that correlates with that number
  
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return "Rock";
  } else if (compChoice === 1) {
    return "Paper";
  } else { 
    return "Scissors";
  }
}


function getHumanChoice() {
  //Prompts user for input and returns result
  
  let humanChoice = parseInt(prompt("Do you choose Rock - (0), Paper - (1), or Scissors - (2)? (Type your choice: 0, 1 , or 2): "));
  if (humanChoice === 0) {
    return "Rock";
  } else if (humanChoice === 1) {
      return "Paper";
  } else if (humanChoice === 2) {
      return "Scissors";
  } else {
      return `${humanChoice} is not a valid response.`
  }
}


function playGame() {
  /* Establishes a while loop to iterate through 5 rounds 
     and store human and computer scores 
  */
  
  let round = 0;
  let computerScore = 0;
  let humanScore = 0;

  while (round < 5) {
    round++;

    function playRound(humanChoice, computerChoice) {
      /* Compares human and computer choices and establishes 
         a winner of the round
         Adds to either humanScore or computerScore 
      */
      
      const compWin = (`Your opponent chose ${computerChoice}. You lose this round!`);
      const humanWin = (`Your opponent chose ${computerChoice}. You win this round!`);
      
      if (humanChoice === computerChoice) {
        console.log(`You both chose ${humanChoice}. It's a tie!`);
      } else if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
          console.log(compWin);
          computerScore += 1;
        } else {
          console.log(humanWin);
          humanScore += 1
        }
      } else if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
          console.log(compWin);
          computerScore += 1;
        } else {
            console.log(humanWin);
            humanScore += 1;
        }
      } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
          console.log(compWin);
          computerScore += 1;
        } else {
            console.log(humanWin);
            humanScore += 1;
        }
      }
    }

    //Stores human and computer choices (Rock, Paper, Scissors)
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  //This block reviews and prints the human and computer score
  console.log(`Your score: ${humanScore}. Opponent score: ${computerScore}.`);
  if (humanScore === computerScore) {
    console.log("You tied!");
  } else if (humanScore > computerScore) {
    console.log("You won!!!");
  } else {
    console.log("You lost! :( Better luck next time!")
  }
}

playGame();