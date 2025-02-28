/**
 * Randomly selects the computer's choice for the game and returns it.
 * @returns {string} Randomly selected option (rock, paper, scissors).
 */
function getComputerChoice() {
  // INIT a variable "choice" with a random number between 1 and 3 to represent the computer's choice
  let choice = Math.floor(Math.random() * 3) + 1;
  /*
  CASE choice OF
    1 : RETURN "rock"
    2 : RETURN "paper"
    3 : RETURN "scissors"
  ENDCASE
  */
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

/**
 * Prompts the user to make a choice for the game and returns it.
 * @returns {string} The choice made by the user (rock, paper, scissors).
 */
function getHumanChoice() {
  // INIT a variable "choice" to store the user's choice
  let choice = "";
  // WHILE choice is not rock, paper or scissors
  while (!["rock", "paper", "scissors"].includes(choice)) {
    //  PROMPT user to enter a choice between rock, paper and scissors
    choice = prompt("Please enter a choice between: rock, paper and scissors!").toLowerCase();
    // ENDWHILE
  }
  // RETURN choice
  return choice;
}


function playGame() {
  // INIT humanScore variable to store the score of the user
  let humanScore = 0;
  // INIT computerScore variable to store the score of the computer
  let computerScore = 0;
  /**
   * Takes the user's choice and the computer's choice and compares them, increments the winner's score and displays a winner announcement.
   * @param {string} humanChoice The user's choice for the round.
   * @param {string} computerChoice The computer's choice for the round.
   */
  function playRound(humanChoice, computerChoice) {
    // INIT a variable "winner" to store the round's winner
    let winner = "";
    // IF humanChoice is the same as computerChoice THEN
    if (humanChoice === computerChoice) {
      //    SET winner to "none"
      winner = "none";
    }
    // ELSE IF humanChoice is "rock" and computerChoice is "scissors", or humanChoice is "paper" and computerChoice is "rock", or humanChoice is "scissors" and computerChoice is "paper" THEN
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      //    SET winner to "human" 
      winner = "human";
    }
    // ELSE
    else {
      //    SET winner to "computer"
      winner = "computer";
    }
    // ENDIF
    // DISPLAY the human's and the computer's choices
    console.log(`You chose: ${humanChoice}. The computer chose: ${computerChoice}.`);
    /*
    CASE winner OF
      "none" : PRINT "This is a draw!"
      "human" : PRINT "Congratulations, you won!"
                INCREMENT humanScore
      "computer" : PRINT "Too bad, you lost!"
                   INCREMENT computerScore
    */
    switch (winner) {
      case "none":
        console.log("This is a draw");
        // Play until there is a winner
        playRound(getHumanChoice(), getComputerChoice());
        break;
      case "human":
        console.log("Congratulations, you won!");
        humanScore++;
        break;
      case "computer":
        console.log("Too bad, you lost!");
        computerScore++;
        break;
    }
  }
  // INIT round variable to keep track of the current round
  let round = 1;
  // WHILE round is less then or equal to 5
  while (round <= 5) {
    //    PRINT round
    console.log(`Round: ${round}`);
    //    CALL function playRound() with getHumanChoice() and getComputerChoice() as arguments
    playRound(getHumanChoice(), getComputerChoice());
    // PRINT scores
    console.log(`Your score is: ${humanScore}. The computer's score is: ${computerScore}`);  
    round++;
  }
  // ENDWHILE
  // IF humanScore is greater than computerScore
  if (humanScore > computerScore) {
    //    PRINT winning message
    console.log("Congratulations, you won the game!");    
  }
  // ELSE
  else {
    //    PRINT loosing message
    console.log("You lost! Better luck next time.");        
  }
}

// Play a full game of Rock Paper Scissors
playGame();
