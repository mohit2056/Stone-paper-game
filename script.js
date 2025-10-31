let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore_span = document.querySelector("#user-score");
const computerscore_span = document.querySelector("#computer-score");



const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomnumber = Math.floor(Math.random() * 3);
    return options[randomnumber];

}

  const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw play again!";
};

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        userscore_span.innerText = userscore;
        console.log("you wins!");
        msg.innerText = "you win! Congratulations!";
    } else {
        computerscore++;
        computerscore_span.innerText = computerscore;
        console.log("Computer wins!");
        msg.innerText = "Computer wins! Better luck next time!";
    }
};


const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const computerchoice = gencomputerchoice();
    console.log("computer choice =", computerchoice);

    const drawn = "It's a tie!";
    const win = "You win!";
    const lose = "You lose!";

    if (userchoice === computerchoice) {
        console.log(drawn);
    } else if (
        (userchoice === 'rock' && computerchoice === 'scissors') ||
        (userchoice === 'paper' && computerchoice === 'rock') ||
        (userchoice === 'scissors' && computerchoice === 'paper')
    ) {
        console.log("You win!");
        userscore++;
        userscore_span.innerText = userscore;
        showwinner(true);
        msg.style.backgroundColor = "green";
    } else {
        console.log("You lose!");
        computerscore++;
        computerscore_span.innerText = computerscore;
        showwinner(false);
        msg.style.backgroundColor = "red";
    }

    console.log("User Score:", userscore);
    console.log("Computer Score:", computerscore);
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
       console.log("choice clicked", userchoice);
        playgame(userchoice);
    });
});
