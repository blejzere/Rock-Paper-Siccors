function computerPlay(){
    options = ["rock","paper","scissors"]
    choice = options[Math.floor(Math.random() * 3)]
    return choice
}


function validate_choice(){
    let player_choice = prompt("Choose your Move WISLEY").toLowerCase()
    console.log(player_choice)
    if (player_choice !== "rock" && player_choice !== "paper" && player_choice !== "scissors"){
    
        return
        
    }else {
        return player_choice
    }
}
function playRound(playerSelection, computerSelection) {
    let player_choice = playerSelection

    if (player_choice === computerSelection){
         return `Its a draw ${player_choice} vs ${computerSelection}`
    }
    else if (player_choice === "rock" && computerSelection === "scissors"){
        return "You win Rock crusher Scissors"
    }else if (player_choice === "rock" && computerSelection === "paper"){
         return "You lose Paper covers Rock"
    }else if (player_choice === "scissors" && computerSelection === "rock"){
         return "You lose Rock crusher Scissors"
    } else if (player_choice === "scissors" && computerSelection === "paper"){
         return "You win Scissors cut Paper"
    }else if (player_choice === "paper" && computerSelection === "rock"){
         return "You win Paper covers Rock"
    }else {
         return "You lose Scissors cut Paper"
    }
}

function game(){
    
    player_wins = 0;
    comp_wins = 0;
    draws = 0;    
    for (let i = 1; i <=5; i++){
        let playa_choice = validate_choice()
        if (!playa_choice){
            return "INVALID INPUT"
        }
        result = playRound(playa_choice, computerPlay())
        console.log(result)

        if (result.includes("win")){
            player_wins += 1

        }else if (result.includes("lose")){
            comp_wins +=1
        }else {
            draws += 1
        }
    }
    console.group("RESULTS")
    console.log(player_wins)
    console.log(comp_wins)
    console.log(draws)
}
