
let detailX;
// slide to see how detailY works
function setup() {
  createCanvas(400,400, WEBGL);
  detailX = createSlider(3, 16, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
}

function draw() {
  background(205, 105, 94);
  rotateX(millis() / 1000);
  sphere(90, 16, detailX.value());
}





