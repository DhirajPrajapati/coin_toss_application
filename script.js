let message = document.querySelector(".message"); 
const buttons = document.querySelectorAll("button");

let score = [0,0];
let coin = ["Heads", "Tails"];

for(let i= 0; i< buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        console.log(buttons[i].innerHTML);
        let player = buttons[i].innerHTML;
        let toss = Math.floor(Math.random()*2);
        let computer = coin[toss];
        console.log(computer);
        message.innerHTML = "Computer selected:"+ computer + "<br> Player selected:" + player;
        let output;
        if(player === computer){
            // win
            output = "Player Wins";
            score[0]++;
        }else{
            // lose
            output = "Computer Wins";
            score[1]++;
        }
        message.innerHTML += "<br>" + output + "<br>Player:" + score[0] + " " + "Computer:" + score[1];
    });
};