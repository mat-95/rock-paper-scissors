let humanScore = 0;
let computerScore = 0;

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
    choice = prompt("Please enter a choice between: rock, paper and scissors!");
    // ENDWHILE
  }
  // RETURN choice
  return choice;
}

/**
 * Takes the user's choice and the computer's choice and compares them, increments the winner's score and displays a winner announcement.
 * @param {string} humanChoice The user's choice for the round.
 * @param {string} computerChoice The computer's choice for the round.
 */
function playRound(humanChoice, computerChoice) {
  // INIT a variable "winner" to store the round's winner
  // IF humanChoice is the same as computerChoice THEN
  //    SET winner to "none"
  // ELSE IF humanChoice is "rock" and computerChoice is "scissors", or humanChoice is "paper" and computerChoice is "rock", or humanChoice is "scissors" and computerChoice is "paper" THEN
  //    SET winner to "human"
  // ELSE
  //    SET winner to "computer"
  // ENDIF
  /*
  CASE winner OF
    "none" : PRINT "This is a draw!"
    "human" : PRINT "Congratulations, you won!"
              INCREMENT humanScore
    "computer" : PRINT "Too bad, you lost!"
                 INCREMENT computerScore
  */
 // PRINT scores 
}

console.log(getComputerChoice());
console.log(getHumanChoice());
