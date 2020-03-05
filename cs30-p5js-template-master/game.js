// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let luigi;
let luigiX, luigiY;
let luigiDX = 10;
let luigiDY = 10;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
let wallX, wallY;
let wallW = 100;
let wallH;
let wallDX = 5;


//Creating Image
function preload() {
  luigi = loadImage("assets/luigi.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  luigiX = width/7;
  luigiY = height - height/7;
  wallX = 0;
  wallH = height;
}

function draw() {
  background(220);
  displayLuigi();
  displayWall();
  moveLuigi();
  hitbox();
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

function moveWall() {
  if (wallX >= 0){
    wallY = random(height/2, height);
    wallX = width;
  }
  wallX -= wallDX;
}
function hitBox(){
  if (luigiY + 100 >= wallY) {
    if (luigiX + 100 >= wallX) {
      textSize(150);
      fill("blue")
      text("LOSE", width/8, height - height/2);
      wallDX = 5;
    }
  }
}
}