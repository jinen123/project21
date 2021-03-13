 var bullet,wall,speed,weight,thickness;
 function setup() {
 createCanvas(1000,400);
 bullet = createSprite(100,200,70,10);
 wall = createSprite(800,200,thickness,200);
 wall.shapeColor = "brown"
 speed = Math.round(random(220,320));
 weight = Math.round(random(30,55));
 thickness = Math.round(random(25,85))
}

function draw() {
  background ("black");
  bullet.velocityX = speed;
  //if(bullet.x-wall.x < wall.width/2 +bullet.width/2)
 if(bullet.isTouching(wall))
  {
   bullet.velocityX = 0;
   var damage = 0.5 * speed  * speed * weight / (thickness * thickness * thickness)
   if(damage > 10)
   {
    wall.shapeColor = "red"
   }
   if(damage < 10)
   {
    wall.shapeColor = "green"
   }
  }
  drawSprites();
}
