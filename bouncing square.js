function setup() {
  createCanvas(400, 400);
  position=0; //starting position
  step= +5;
}

function draw() {
  background(0);
  noStroke();
  let h =150;
  let w =150;

  square(position, w, h);
  square(position/2, w, h/2);
ellipse(position, 45, 300, 10)
  
  position= position + step;
  if (position>(width-w) || position<0){
    step=-step
}
}
