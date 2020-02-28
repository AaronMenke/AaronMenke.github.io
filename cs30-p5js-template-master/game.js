// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shyguy;
let shyguyX;
let shyguyY;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
}
//Creating Image
function preload() {
  shyguy = loadImage("assets/shyguy.png");
}

function displayshyguy(){
  image(shyguy, shyguyX, shyguyY, 100, 100);
}