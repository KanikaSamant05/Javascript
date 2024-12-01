let gameSeq=[]
let userSeq=[]
// random btns
let btns=["red","yellow","purple","blue"];
let started=false;
let level=0
let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
    console.log(" game started");
    started=true;
     levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`

// random btn choose
let randIdx=Math.floor(Math.random() *4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
// console.log(randIdx);
// console.log(randColor);
// console.log(randBtn);
gameSeq.push(randColor)
console.log(gameSeq);

gameFlash(randBtn);
}

function checkAns(index){
    // console.log("Current level is: ",level);
    // let index=level-1
    if (userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level} </b> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
        }
        
    }

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id")
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
    // console.log(userColor);
    // console.log(this);
    }

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}