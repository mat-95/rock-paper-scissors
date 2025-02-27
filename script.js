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
  // WHILE choice is not rock, paper or scissors
  //  PROMPT user to enter a choice between rock, paper and scissors
  // ENDWHILE
  // RETURN choice  
}

console.log(getComputerChoice());
