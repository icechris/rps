function getHumanChoice(){
   
    let humanChoice= (prompt(
        "enter your choice"
        )).toLowerCase();
        return humanChoice;
}
console.log(getHumanChoice())




function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0){
         return "rock";
    } else if (computerChoice === 1){
         return "paper"
    } else {
         return "scissors"
    }
    
} 

console.log(getComputerChoice())


function playRound(humanSelection, computerSelection){


if (humanSelection === computerSelection){
    console.log("Its a tie");
    return "tie";
} else if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")

)
{console.log("You win");
    return "human"
} else {
    console.log("You lose");
    return "computer"
}


} 

 humanSelection = getHumanChoice();
 computerSelection = getComputerChoice();

console.log(playRound(humanSelection , computerSelection));


let humanScore = 0;
let computerScore = 0;


function playGame(){
  
    for ( let i = 0 ; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();


        console.log("computer chose" + computerSelection);
        console.log("you chose" + humanSelection)

        let  roundResults = playRound(humanSelection , computerSelection);

        if (roundResults === "human"){
            humanScore++;
        } else  if (roundResults === "computer"){
            computerScore++
        }
        console.log(`Score: human ${humanScore}  | computer ${computerScore}`)
    }
    // Final result
if (humanScore > computerScore){
    console.log("You win the game");
} else if (computerScore > humanScore){
    console.log("Computer won the game");

} else {
    console.log("The game is a tie")
}


}


playGame()