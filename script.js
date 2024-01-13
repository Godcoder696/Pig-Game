console.log("WELCOME TO THE PIG GAME...")

const diceURL=[
    "./assets/dice-1.png",
    "./assets/dice-2.png",
    "./assets/dice-3.png",
    "./assets/dice-4.png",
    "./assets/dice-5.png",
    "./assets/dice-6.png"
]
let rndmDiceNum= Math.round(Math.random()*(5));
let scorePlayer1= 0, scorePlayer2= 0, current=0, currentPlyr=1;

let newGame= document.querySelector(".newGame")
let diceOpts= document.querySelector(".diceControlls")
let rollDice= diceOpts.firstElementChild;
let switchPass= diceOpts.lastElementChild;

newGame.addEventListener('click',()=>{
    console.log("New Game!");
    scorePlayer1= 0, scorePlayer2= 0, current= 0;

    let plyrs=document.querySelectorAll(".plyrScr")
    plyrs.forEach((item)=>{
        item.innerHTML=0;
    })

    document.querySelector(`.crntScore${currentPlyr}`).innerHTML=0

    document.querySelector(`#ply${currentPlyr}Controls`).style.opacity= 0.5;
    currentPlyr= 1, rndmDiceNum=0;
    document.querySelector(`#ply${currentPlyr}Controls`).style.opacity=0.8

    document.querySelector(".dice").src= diceURL[rndmDiceNum];

})

rollDice.addEventListener('click',()=>{
    console.log('dice is rolled!');

    rndmDiceNum= Math.round(Math.random()*(5));
    let diceImg= document.querySelector(".dice")

    diceImg.src= diceURL[rndmDiceNum];

    let crntScore= document.querySelector(`.crntScore${currentPlyr}`)

    if(rndmDiceNum==0){
        // reset current scores
        current= 0;
        crntScore.innerHTML= 0;

        let plyControls= document.querySelector(`#ply${currentPlyr}Controls`)
        plyControls.style.opacity=0.5;

        currentPlyr= (currentPlyr)%2+1

        plyControls= document.querySelector(`#ply${currentPlyr}Controls`)
        plyControls.style.opacity=0.8;
    }
    else{
        current+= rndmDiceNum+1;
        crntScore.innerHTML= current;
    }
})

switchPass.addEventListener('click',()=>{
    console.log('Next Player!');
    let score=currentPlyr==1?scorePlayer1+=current:scorePlayer2+=current;

    document.querySelector(`.plyr${currentPlyr}Score`).innerHTML= score;

    document.querySelector(`#ply${currentPlyr}Controls`).style.opacity=0.5;

    document.querySelector(`.crntScore${currentPlyr}`).innerHTML=0;
    current=0;

    currentPlyr= (currentPlyr)%2+1

    document.querySelector(`#ply${currentPlyr}Controls`).style.opacity=0.8;
})

