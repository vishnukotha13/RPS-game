let us=0;
let cs=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");   

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame=()=>{
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        us++;
        userScorePara.innerText=us;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else{
        cs++;
        compScorePara.innerText=cs;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice)
        drawGame();
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const cid=choice.getAttribute("id");
        playGame(cid);
    })
    // choice.addEventListener("onmousemove",()=>{
    //     const cid=choice.getAttribute("id");
    //     update(cid);
    // })
})

// const update=(choice)=>{
//     choices.forEach((c)=>{
//         const iid=c.getAttribute("id");
//         if(iid===choice)
//         {
//             document.getElementById("iid").style.backgroundColor="green";
//         }
//     })
// }