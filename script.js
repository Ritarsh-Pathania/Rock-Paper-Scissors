let choices= document.querySelectorAll(".choice");
let message=document.querySelector(".message");
let userscore=document.querySelector("#your-score");
let compscore=document.querySelector("#comp-score");
let reset=document.querySelector("#reset");
let userScore=0;
let compScore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});

const playgame=(userChoice)=>{
    const compChoice=computerClick();
    console.log(compChoice,userChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ?false:true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        } else{
            userWin= compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
  
};

const computerClick =()=>{
    let options=["rock","paper","scissors"];
    let i= Math.floor(Math.random()*3);
    return options[i];
};

const drawGame=()=>{
    message.innerText="Game was draw, Play again"
    message.style.color="black";
};
 
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
       message.innerText=`Congratulations,You win ${userChoice} beats ${compChoice}`;
       message.style.color="green";
       userScore++;
       userscore.innerText=userScore;
    }
    else{
        message.innerText=`Sorry, You lose ${compChoice} beats ${userChoice}`;
        message.style.color="red";
        compScore++;
        compscore.innerText=compScore;
    }
};

reset.addEventListener("click", (userScore,compScore)=>
{
userScore=0;
userscore.innerText=userScore;
compScore=0;
compscore.innerText=compScore;
});

