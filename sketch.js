var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

var car1, car2, car3, car4;
var cars;

var c1,c2,c3,c4,r1,g;

function preload(){
 
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
  c3 = loadImage("images/car3.png");
  c4 = loadImage("images/car4.png");
  
  r1 = loadImage("images/track.jpg");
  g = loadImage("images/ground.png");


  
}

function setup(){
  canvas = createCanvas(displayWidth - 48, displayHeight - 160);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){

    clear();
    game.play();
    
  }




}


