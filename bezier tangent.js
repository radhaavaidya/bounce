
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
noFill();
bezier(85, 20, 10, 10, 90, 90, 15, 80);
stroke(255, 102, 0);
let steps = 26;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = bezierPoint(85, 10, 90, 15, t);
  let y = bezierPoint(20, 10, 90, 80, t);
  let tx = bezierTangent(85, 10, 90, 15, t);
  let ty = bezierTangent(20, 10, 90, 80, t);
  let a = atan2(ty, tx);
  a -= HALF_PI;
  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);
}}