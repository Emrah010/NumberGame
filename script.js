'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;
// console.log("Test");

const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
    // console.log("test222");
};

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber,typeof secretNumber);


    //input eger bos yazilarsa
    if(!guess){
        displayMessage('Bir sayı qeyd edin')
    }

   //Reqemler bir biri ile uygunlasarsa

   else if(guess === secretNumber){
    displayMessage('Düzgün Təxmin!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width= '30rem';



    if(score > highscore){
         highscore = score;

         document.querySelector('.hightscore').textContent = 
         hightscore;
    }

   }
   //Reqemler bir birileriyle uygunlasmirsa
   else if (guess !== secretNumber){
       if(score>1){
           displayMessage(guess>secretNumber ? ':Çox Yuxarı Rəqəm': 'Çox Aşağı Rəqəm');
           document.querySelector('.score').textContent = score;
       }
       else{
        displayMessage('.Game Over');
        document.querySelector('.score').textContent = 0;
       }
   }
   
});

document.getElementById('again').addEventListener('click',function(){
    // score = 20;
    // secretNumber = Math.trunc(Math.random() * 20) +1;

    // displayMessage('Rəqəm Təxmin Edilir...');
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.number').textContent = '?';
    // document.querySelector('.guess').value = '';

    // document.querySelector('.body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.width = '15rem';
    window.location.reload();
});


