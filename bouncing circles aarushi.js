let p;
let q;
function setup() {
  createCanvas(400, 400);
  p= new Particle();
  q= new Particle();
}

function draw() {
  background(220);
  p.display();
  q.display();
  p.update();
  q.update(); 
}
class Particle
{
  constructor () {
    this.posX =(random(1,width));
    this.posY =(random(1,height));
    this.rad = (random(0,50));
    this.velX = random();
    this.velY = random();
  }
  display(){
    ellipse (this.posX, this.posY, this.rad)
  }
  
  update(){
    this.posX+= this.velX
    this.posY+= this.velY
    
    if(this.posX>width || this.posX<0)
    {this.velX= -this.velX
    }
    if(this.posy>height || this.posY<0)
    {this.velY= -this.velY
    }
  }
}
  