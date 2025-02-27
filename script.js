/**
 * Randomly selects the computer's choice for the game and returns it.
 * @return {string} Randomly selected option (rock, paper, scissors).
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

console.log(getComputerChoice());
