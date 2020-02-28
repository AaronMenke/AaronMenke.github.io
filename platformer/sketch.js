// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let luigi;
let luigiX;
let luigiY;
let luigiDX = 5;
let luigiDY = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;


//Creating Image
function preload() {
  luigi = loadImage("assets/luigi.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  luigiX = width/2;
  luigiY = height/2;
}

function draw() {
  background(220);
  displayLuigi();
  moveLuigi();
}
function keyPressed(){
  if (key === "w"){
    movingUp = true;
  }
  if (key === "a"){
    movingLeft = true;
  }
  if (key === "s"){
    movingDown = true;
  }
  if (key === "d"){
    movingRight = true;
  }
}

function keyReleased(){
  if (key === "w"){
    movingUp = false;
  }
  if (key === "a"){
    movingLeft = false;
  }
  if (key === "s"){
    movingRight = false;
  }
  if (key === "d"){
    movingDown = false;
  }
}
function moveLuigi(){
  if (movingUp){
    luigiY -= luigiDY;
  }
  if (movingLeft){
    luigiX -= luigiDX;
  }
  if (movingDown){
    luigiY += luigiDY;
  }
  if (movingRight){
    luigiX += luigiDX;
  }
}

function displayLuigi(){
  image(luigi, luigiX, luigiY, 100, 100);
}