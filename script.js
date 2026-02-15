let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
let users = document.querySelector("#user-score");
let comps = document.querySelector("#comp-score");

const drawgame = ()=>{
    msg.innerText = "GAME WAS DRAW PLAY AGAIN !";
    msg.style.backgroundColor = "#081b31";
};
const showwin = (userwin,com,user)=>{
    if(userwin){
        userscore++;
        users.innerText = userscore;
        msg.innerText = `YOU WIN ! Your ${user} Beats ${com}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        comps.innerText = compscore;
        msg.innerText = `YOU LOSE ! ${com} Beats Your ${user}`;
        msg.style.backgroundColor = "red";
    }

}

const compchoice = ()=>{
    const option = ["rock" , "paper","scissor"];
   const random =  Math.floor(Math.random()*3);
   return option[random];
};

const palyGame = (user)=>{
    const com = compchoice();
    if(user === com){
        drawgame();
    }else {
        let userwin = true;
        if(user === "rock"){
            userwin = com === "paper"?false:true;
        }else if(user === "paper"){
            userwin = com === "scissor"?false:true;
        }else{
            userwin = com === "rock"?false:true;
        }
        showwin(userwin,com,user);
    }

};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const user = choice.getAttribute("id");
        palyGame(user);
    });

});

