// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let star;
let scalar = 1.0;

function preload() {
  star = loadimage("assets/gear.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("red");
  image(star, mouseX, mouseY, scalar*star.width, scalar*star.height);
}

function mouseWheel(event) {
  if (event.delta > 0) {
    scalar *= 1.1;
  }
  else {
    scalar *=0.9;
  }
}
