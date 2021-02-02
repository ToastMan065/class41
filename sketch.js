//create background
var canvas, backgroundImage;

//creating game rules
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

//creating refrences to .js files
var form, player, game;

//creating the cars
var cars, car1, car2, car3, car4;

//creating the image refrences
var track, car1_img, car2_img, car3_img, car4_img;

//loading the images
function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

//setting up the game constraints and outside connections
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

//updating game rules
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
