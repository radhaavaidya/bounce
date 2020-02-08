let side;
function setup() {
  createCanvas(400, 400);
  fill(10, 126);
  rectMode(CENTER);
  drawSq(width/2, height/2,width);
}

function drawSq(x0, y0,side){
  if (side>=3){
    fill(random(90, 125));
    rect(x0, y0, side, side);
    stroke(60, 70, 90);

  drawSq(x0-side/6,y0-side/3,side/3);
    drawSq(x0+side/6,y0+side/3,side/3);
    drawSq(x0+side/6, y0-side/3,side/3);
    drawSq(x0-side/6,y0+side/3,side/3);
    drawSq(x0,y0-side/6, side/3);
    drawSq(x0,y0+side/6, side/3);
    drawSq(x0-side/6,y0, side/3);
    drawSq(x0+side/2,y0, side/3);
}
}