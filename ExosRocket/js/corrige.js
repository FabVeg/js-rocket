'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var firingButton, rocket, billboard, countDown, timer;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

// identification des éléments du DOM
firingButton = document.getElementById('firingButton');
rocket = document.getElementById('rocket');
billboard = document.getElementById('billboard').querySelector('span');
// exactement pareil que : document.querySelector('#billboard span')

function countDownDisplay(){
        
    // affichage du compteur
    billboard.textContent = countDown;
    
    // décrémentation
    countDown--;
    
    // quand le compteur atteint zero, on coupe le setInterval
    if(countDown < 0){
        clearInterval(timer);
    }
}


function onClickFiringButton(){
    // on désactive le bouton
    this.removeEventListener('click', onClickFiringButton);
    
    setTimeout(function(){
        rocket.src = "images/rocket3.gif";
        rocket.classList.add('tookOff');
    }, countDown *1000)
    
    // affichage initial du compte à rebours
    countDownDisplay();
    
    // lancement du compte à rebours
    timer = setInterval(countDownDisplay,  1000);
    
    rocket.src = "images/rocket2.gif";
}



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

// initialisation du compteur
countDown = 5;

// écouteur d'evenement "click" sur le bouton de lancement
firingButton.addEventListener('click', onClickFiringButton);












