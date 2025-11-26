// Score variables (outside functions so they persist)
let humanScore = 0;
let computerScore = 0;

// Get DOM elements
const resultsDiv = document.querySelector('#results');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  // Clear previous round (optional)
  // resultsDiv.innerHTML = '';
  
  // Display choices
  resultsDiv.innerHTML = `<p>You chose: ${humanChoice}</p>`;
  resultsDiv.innerHTML += `<p>Computer chose: ${computerChoice}</p>`;
  
  // Determine winner
  if (humanChoice === computerChoice) {
    resultsDiv.innerHTML += "<p>It's a tie!</p>";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultsDiv.innerHTML += "<p>You win this round!</p>";
    humanScore++;
  } else {
    resultsDiv.innerHTML += "<p>Computer wins this round!</p>";
    computerScore++;
  }
  
  // Display score
  resultsDiv.innerHTML += `<p><strong>Score - You: ${humanScore}, Computer: ${computerScore}</strong></p>`;
  
  // Check for game winner
  if (humanScore === 5) {
    resultsDiv.innerHTML += "<h2>🎉 YOU WON THE GAME!</h2>";
    disableButtons();
  } else if (computerScore === 5) {
    resultsDiv.innerHTML += "<h2>💻 COMPUTER WON THE GAME!</h2>";
    disableButtons();
  }
  
  resultsDiv.innerHTML += "<hr>";
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Event listeners
rockBtn.addEventListener('click', function() {
  playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', function() {
  playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', function() {
  playRound('scissors', getComputerChoice());
});