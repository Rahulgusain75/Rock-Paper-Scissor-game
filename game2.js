let userscore = 0;
let compscore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () =>{
      const options =["rock","paper","scissor"];
      const randidx = Math.floor(Math.random() *3);
      return options[randidx];
};


const drawgame = () =>{
    console.log("game was draw");
    msg.innerText = " GAME WAS DRAW PLAY AGAIN";
    msg.style.backgroundcolor="white";
}

 const showwinner =(userwin,userchoice,compchoice) =>{
        if(userwin){
            userscore++;
            userscorepara.innerText = userscore;
            console.log("you win")
            msg.innerText = `You Win ! Your ${userchoice} beats computer ${compchoice}`;
            msg.style.backgroundcolor = "green";
        }
        else{
            compscore++;
            compscorepara.innerText = compscore;
            console.log("you lose");
            msg.innerText = ` You Lose ! computer ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundcolor = "tomato";
        }
};

const playgame = (userchoice) => {
          console.log("user choice = ",userchoice);

          const compchoice = gencomputerchoice();
          console.log("computer choice = ",compchoice);

          if(userchoice===compchoice){
               drawgame();
          }
          else{
             let userwin = true;
             if(userchoice === "rock"){
                userwin =  compchoice ==="paper" ? false :true ;
             }
             else if(userchoice ==="paper"){
                userwin = compchoice === "scissor" ? false : true ;
             }
             else{
                 userwin = compchoice === "rock" ?false : true;
             }
             showwinner(userwin,userchoice,compchoice);
          }
};

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id")
       console.log("choices was clicked",userchoice);
       playgame(userchoice);
    });

});
