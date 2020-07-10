
var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 80, 50);
  a.shapeColor = rgb(1,100,200);
  b = createSprite(600,200,50,90);
  b.shapeColor = rgb(1,100,200);
}

function draw() {
  background(rgb(1,2,3));  
  b.x = World.mouseX;
  b.y = World.mouseY;
  if(b.x - a.x < b.width/2 + a.width/2 && a.x - b.x < b.width/2 + a.width/2
    && b.y - a.y < b.height/2 + a.height/2 && a.y - b.y < b.height/2 + a.height/2) {
    a.shapeColor = rgb(200,100,1);
    b.shapeColor = rgb(200,100,1);
  }
  else{
    a.shapeColor = rgb(1,100,200);
    b.shapeColor = rgb(1,100,200);
  }
  drawSprites();
}