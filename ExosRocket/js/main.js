'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var billboard = document.querySelector('#billboard span');
var rocket = document.querySelector('#rocket');
var click = document.querySelector('#firingButton');


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

/*

var timeLeft = 10;

var onInterval = function(){
    
    timeLeft--;

    
    if (timeLeft <=0) {
        clearInterval(interval);
    }
    
    billboard.textContent = timeLeft;
};

var interval = setInterval(onInterval, 1000);


var onTimeout = function(){
    
    rocket.classList.add("tookOff");
};

    setTimeout(onTimeout, 10000);

*/
var timeLeft = 10;

var onClickButtom = function(){
    
    
        
    timeLeft--;
    
    
    var timer =  setInterval(function(){
        
    billboard.textContent = timeLeft;
    
    if(timeLeft <= 0){
        
    clearInterval(timer);
        
    }
    
    rocket.src = "images/rocket2.gif"
    
    }, 1000);

        

  
    
    
    setTimeout(setTimeout, 10000);

};

click.addEventListener('click', onClickButtom);




/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
