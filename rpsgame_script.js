function playGame() {
    // Score variables moved inside playGame
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice(){
        let randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        }
        else if (randomNumber < 0.66){
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    function getHumanChoice(){
        let choice = prompt('Please pick rock, paper or scissors');
        return choice.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        console.log("You have chosen " + humanChoice);
        console.log("The computer has chosen " + computerChoice);

        if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win this round!");
            humanScore++;
        } else {
            console.log("The computer wins this round!");
            computerScore++;
        }
        console.log("You: " + humanScore + ", Computer: " + computerScore);
        console.log("---");
    }

    // Play 5 rounds
    console.log("=== ROUND 1 ===");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("=== ROUND 2 ===");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("=== ROUND 3 ===");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("=== ROUND 4 ===");
    playRound(getHumanChoice(), getComputerChoice());
    
    console.log("=== ROUND 5 ===");
    playRound(getHumanChoice(), getComputerChoice());

    // Declare the winner
    console.log("=== GAME OVER ===");
    console.log("Final Score - You: " + humanScore + ", Computer: " + computerScore);
    
    if (humanScore > computerScore) {
        console.log("🎉 Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 The computer won the game. Better luck next time!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}

// To start the game, call:
playGame();