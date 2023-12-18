const rockEl = document.getElementById("rock");
const paperEl = document.getElementById("paper");
const scissorsEl = document.getElementById("scissors");
const lizardEl = document.getElementById("lizard");
const spockEl = document.getElementById("spock");
const gameOptionsScreen = document.getElementById("gameOptionsScreen");
const gameResultsScreen = document.getElementById("gameResultsScreen");
const scoreEl = document.getElementById("score");
const scoreTitle = document.getElementById("scoreHeading");
const resultText = document.getElementById("result");
const playAgainBTN = document.getElementById("playAgainBTN");
const rulesBTN = document.getElementById("rulesBTN");
const rulesEl = document.getElementById("rulesContainer");
const closeBTN = document.getElementById("closeBTN");

let userScore = 0;
scoreEl.innerHTML = userScore;

function switchResultsScreen() {
    gameOptionsScreen.style.display = "none";
    gameResultsScreen.style.display = "block";
}
function switchOptionsScreen() {
    gameOptionsScreen.style.display = "flex";
    gameResultsScreen.style.display = "none";
}
function openRules() {
    rulesEl.classList.add("showRules");
    rulesEl.classList.remove("hideRules");
}
function closeRules() {
    rulesEl.classList.add("hideRules");
    rulesEl.classList.remove("showRules");
}
function win() {
    userScore++;
    scoreEl.innerHTML = userScore;
    resultText.innerHTML = "YOU WIN";
}
function lose() {
    if (userScore > 0){
        userScore--;
    }
    scoreEl.innerHTML = userScore;
    resultText.innerHTML = "YOU LOSE";
}
function draw() {
    resultText.innerHTML = "DRAW";
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function userChoiceToken(userToken){
    const userIcon = document.getElementById("userIcon");
    const userColor = document.getElementById("playerChoice");
    const userShadow = document.getElementById("playerShadow");

    if (userToken == "rock"){
        userIcon.src = "../assets/icon-rock.svg";
        userIcon.alt = "rock icon"
        userIcon.width = "32"
        userIcon.height = "31"
        userColor.style.backgroundColor = "#9D1634"
        userShadow.style.borderColor = "#DB2E4D"
    } else if (userToken == "paper"){
        userIcon.src = "../assets/icon-paper.svg";
        userIcon.alt = "paper icon"
        userIcon.width = "33"
        userIcon.height = "39"
        userColor.style.backgroundColor = "#2A45C2"
        userShadow.style.borderColor = "#4664F4"
    } else if (userToken == "scissors"){
        userIcon.src = "../assets/icon-scissors.svg";
        userIcon.alt = "scissors icon"
        userIcon.width = "34"
        userIcon.height = "38"
        userColor.style.backgroundColor = "#C76C1B"
        userShadow.style.borderColor = "#EB9F0E"
    } else if (userToken == "lizard"){
        userIcon.src = "../assets/icon-lizard.svg";
        userIcon.alt = "lizard icon"
        userIcon.width = "42"
        userIcon.height = "40"
        userColor.style.backgroundColor = "#5F37A8"
        userShadow.style.borderColor = "#834EE3"
    } else if (userToken == "spock"){
        userIcon.src = "../assets/icon-spock.svg";
        userIcon.alt = "spock icon"
        userIcon.width = "30"
        userIcon.height = "39"
        userColor.style.backgroundColor = "#2D8DAB"
        userShadow.style.borderColor = "#3FB7CD"
    } 
}

function computerChoiceToken(computerToken){
    const computerIcon = document.getElementById("houseIcon");
    const computerColor = document.getElementById("houseChoice");
    const computerShadow = document.getElementById("houseShadow");

    if (computerToken == "rock"){
        computerIcon.src = "../assets/icon-rock.svg";
        computerIcon.alt = "rock icon"
        computerIcon.width = "32"
        computerIcon.height = "31"
        computerColor.style.backgroundColor = "#9D1634"
        computerShadow.style.borderColor = "#DB2E4D"
    } else if (computerToken == "paper"){
        computerIcon.src = "../assets/icon-paper.svg";
        computerIcon.alt = "paper icon"
        computerIcon.width = "33"
        computerIcon.height = "39"
        computerColor.style.backgroundColor = "#2A45C2"
        computerShadow.style.borderColor = "#4664F4"
    } else if (computerToken == "scissors"){
        computerIcon.src = "../assets/icon-scissors.svg";
        computerIcon.alt = "scissors icon"
        computerIcon.width = "34"
        computerIcon.height = "38"
        computerColor.style.backgroundColor = "#C76C1B"
        computerShadow.style.borderColor = "#EB9F0E"
    } else if (computerToken == "lizard"){
        computerIcon.src = "../assets/icon-lizard.svg";
        computerIcon.alt = "lizard icon"
        computerIcon.width = "42"
        computerIcon.height = "40"
        computerColor.style.backgroundColor = "#5F37A8"
        computerShadow.style.borderColor = "#834EE3"
    } else if (computerToken == "spock"){
        computerIcon.src = "../assets/icon-spock.svg";
        computerIcon.alt = "spock icon"
        computerIcon.width = "30"
        computerIcon.height = "39"
        computerColor.style.backgroundColor = "#2D8DAB"
        computerShadow.style.borderColor = "#3FB7CD"
    } 
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + ' ' + computerChoice){
        // Wins
        case "rock scissors":
        case "rock lizard":
        case "scissors paper":
        case "scissors lizard":
        case "paper rock":
        case "paper spock":
        case "spock rock":
        case "spock scissors":
        case "lizard paper":
        case "lizard spock":
            win();
            break;
        
        // Losses
        case "rock paper":
        case "rock spock":
        case "scissors rock":
        case "scissors spock":
        case "paper lizard":
        case "paper scissors":
        case "spock paper":
        case "spock lizard":
        case "lizard scissors":
        case "lizard rock":
            lose();
            break;
        
        // Draws
        case "rock rock":
        case "paper paper":
        case "scissors scissors":
        case "lizard lizard":
        case "spock spock":
            draw();
            break;
    }
    userChoiceToken(userChoice);
    computerChoiceToken(computerChoice);
}

const mediaQuerie_cons = window.matchMedia("(max-width: 600px)")

function mediaQueries() {
    const playerHeadingEl = document.getElementById("playerHeading");
    const computerHeadingEl = document.getElementById("houseHeading");

    if (mediaQuerie_cons.matches) {                             //Bring back original font sizes
            //Score heading
            scoreTitle.classList.add("heading-s-score");
            scoreTitle.classList.remove("footer-m");
            //Score body
            scoreEl.classList.add("body-s-score");
            scoreEl.classList.remove("body-m-score");
            //Player heading
            playerHeadingEl.classList.add("body-s");
            playerHeadingEl.classList.remove("body-m");
            //Computer heading
            computerHeadingEl.classList.add("body-s");
            computerHeadingEl.classList.remove("body-m");
        } else {                                                 //Substitute font sizes
            //Score heading
            scoreTitle.classList.add("footer-m");
            scoreTitle.classList.remove("heading-s-score");
            //Score body
            scoreEl.classList.add("body-m-score");
            scoreEl.classList.remove("body-s-score");
            //Player heading
            playerHeadingEl.classList.add("body-m");
            playerHeadingEl.classList.remove("body-s");
            //Computer heading
            computerHeadingEl.classList.add("body-m");
            computerHeadingEl.classList.remove("body-s");
        }
    }

mediaQuerie_cons.addEventListener("change", function() {
    mediaQueries();
  });

function main() {
    rockEl.addEventListener("click", function() {
        game("rock");
        switchResultsScreen();
    })
    paperEl.addEventListener("click", function() {
        game("paper");
        switchResultsScreen();
    })
    scissorsEl.addEventListener("click", function() {
        game("scissors");
        switchResultsScreen();
    })
    lizardEl.addEventListener("click", function() {
        game("lizard");
        switchResultsScreen();
    })
    spockEl.addEventListener("click", function() {
        game("spock");
        switchResultsScreen();
    })
    playAgainBTN.addEventListener("click", function() {
        switchOptionsScreen();
    })
    rulesBTN.addEventListener("click", function() {
        openRules();
    })
    closeBTN.addEventListener("click", function() {
        closeRules();
    })
}

main();
mediaQueries();