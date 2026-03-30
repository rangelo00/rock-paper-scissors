function getComputerChoice() {
    let pili = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * pili.length);
    return pili[randomChoice];
}

function getHumanChoice() {
    let humanAnswer = String(prompt("Rock, Paper, Scissors??"));
    return humanAnswer;
}

console.log("Choice is " + getHumanChoice());
//make an array or choices of rock paper scissors
//make a prompt (textfield)
//variable for player getHumanChoice for prompting
//variable for scoreCount/lap
// if prompt getHumanChoice appears, input will show and
// will activate getComputerChoice