let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let playGameBtn = document.querySelector(".playGame");
let newUserScore = document.querySelector(".userScore");
let newCompScore = document.querySelector(".compScore");

//after clicking a choice the fuction will run
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    checkWinner(userChoice, compChoice);// passing these value to check who win
}

// this one generates computer choices
const genCompChoice = () => {
    const choiceList = ["Rock", "Paper", "Scissor"];
    const choiceListIdx = Math.floor(Math.random() * 3);
    return choiceList[choiceListIdx];

}

// score update| win msg display
const showWinner = (win, userChoice, compChoice) => {
    if (win) {
        userScore++;
        newUserScore.innerText = userScore;
        playGameBtn.innerText = `You Win.\nYour choice was ${userChoice}, MY choice was ${compChoice}.\n${userChoice} beats ${compChoice} (O_O)`
        playGameBtn.style.background = "green";
        playGameBtn.style.color = "white";
    }
    else {
        compScore++;
        newCompScore.innerText = compScore;
        playGameBtn.innerText = `You Lose.\nMY choice was ${compChoice}, Your choice was ${userChoice}\n${compChoice} beats ${userChoice} (O_O)`
        playGameBtn.style.background = "#f87060";
        playGameBtn.style.color = "Yellow";
    }
}

const gameDraw = () => {
    playGameBtn.innerText = "It's a Draw. Let's Play Again (>_O)"
    playGameBtn.style.background = "#fff";
    playGameBtn.style.color = "black";
    console.log("its a draw");
}

const checkWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let win = true;
        switch (userChoice) {
            case "Rock":
                win = compChoice === "Scissor"
                break;
            case "Scissor":
                win = compChoice === "Paper"
                break;
            case "Paper":
                win = compChoice === "Rock"
                break;

            default:
                break;
        }
        showWinner(win, userChoice, compChoice);
    }
}