let position;

function setup() {
  createCanvas(400, 400);
  position = 0;                //starting position
  step = +5;                   //step size
}

function draw() {
  background(20, 50, 10);
  let w = 150;
  let h = 150;

  fill(124,12,35,67);
  stroke(random (0, 156),random(100, 50),70);
  //noStroke();
  ellipse(position, height / 10 - h / 2, w, h);
  ellipse(position/3, height / 1.5 - h/5 , w/2, h/2);
  

  
  strokeWeight(random(70,130));
  

  position = position + step;

  //if position reaches end of canvas, or starting edge of canvas, reverse direction
  if (position > (width - w) || position < 0) {      
    step = -step;
  }

}