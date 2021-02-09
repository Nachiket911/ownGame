var home, gameState = 0;

function preload(){



}

function setup(){

    createCanvas(displayWidth -100, displayHeight -100);

    home = new HomeScreen();

    home.display();

}   

function draw(){

    if(gameState = 1){

        home.hide();

    }

}