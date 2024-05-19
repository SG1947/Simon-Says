let gameseq=[];
let userseq=[];

let btns= ["red","yellow","green","purple"];

let started=false;
let level=0;
let highestscore=0;

let h2=document.querySelector("h2")
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
}
levelup();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
userseq=[];
level++;
h2.innerText=`level ${level}`;

let randInx=Math.floor(Math.random()*4);
let randColor=btns[randInx];
let randBtn=document.querySelector(`.${randColor}`);
// console.log(randInx);
// console.log(randColor)
// console.log(randBtn)
gameseq.push(randColor);
console.log(gameseq);
btnFlash(randBtn);
}
function checkAns(idx){

if(userseq[idx]==gameseq[idx]){
if(userseq.length==gameseq.length){
    setTimeout(levelup,1000);
}
}
else{
    
    let score=level;
    if(score>highestscore){
        highestscore=score;
    }
    h2.innerHTML=`Game Over! Your score was <b>${level}</b>.Highest score is <b>${highestscore} </b>.Press any key to restart`;
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white" 
    },200);
    reset();
}
}
function btnPress(){
    
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }