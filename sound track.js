let bump;
let a;
let s;

function preload(){
  soundFormats("mp3");
  bump = loadSound("504626__leonelmail__body-fall-v-hvy-dirt-1.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
  
  function mouseClicked(){
  bump.play();
}
function KeyPressed(){
  if (Key== "a") {
    bump.play();
  }
}