'use strict';

let secnumber=Math.trunc(Math.random()*20)+1;
let score=10;
let highscore=0;
const displaymassage=function(message){
    document.querySelector('.message').textContent=message;
}
const displaynumber=function(number){
    document.querySelector('.number').textContent=number;
}

document.querySelector('.btn-check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        displaymassage('plz type number!');
    }
    else if(guess === secnumber){

        // style when user win game
        document.querySelector('.message').style.fontSize='40px';
        document.querySelector('.btn-again').style.backgroundColor='green';
        document.querySelector('.btn-again').style.color='#fff';
        displaynumber(secnumber);

        displaymassage('correct number');

        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess !==secnumber){
        if(score > 0){
            displaymassage( guess < secnumber ?'Hint : Too low' : 'Hint : Too high');
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.btn-again').style.backgroundColor='green';
            document.querySelector('.message').style.fontSize='40px';

            displaymassage('Game Over!');
        }
    }
});

document.querySelector('.btn-again').addEventListener('click',function(){
    score=10;
    secnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.btn-again').style.backgroundColor='rgb(128, 99, 155)';
    document.querySelector('.message').style.fontSize='25px';
    displaymassage('start guesing...');
    displaynumber('?');
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=score;
});