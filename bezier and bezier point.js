function setup() {
  createCanvas(400, 400,);
}

function draw() {
  background(0);


  noFill()
  stroke(255)
  let x1 = 85
      x2 = 20
      x3 = 30
      x4 = 10
  let y1 = 90
      y2 = 90
      y3 = 15
      y4 = 80 
      
bezier(x1, y1, x2, y2, x3, y3, x4, y4);
let steps = 10; 
 for (let i = 0; i <= steps; i++){
 let  t=i/steps;
  let x= bezierPoint(x1, x2, x3, x4, t);
   let y = bezierPoint(y1, y2, y3, y4, t);
     ellipse(x, y, 5, 5);
 }
  

  
}