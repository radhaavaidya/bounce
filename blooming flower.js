var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(600, 600);
  //frameRate(60);
 

}

function draw() {
  background(bgcolor);
  flower();
  ground();

}

function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 530, 600, 530);
}


function flower() {
  //drawFlower();
 
  //flower1
  for (var rad = 0; rad < 10; rad++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(400, 550, 400, 400 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(400, 550, 400, 460);
    }
    noStroke();
  }

  push();
  fill(230, 190, 230, 240);
  translate(400, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();

}


