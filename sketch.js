var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var DropZoneBody1, DropZoneBody2, DropZoneBody3
var DropZoneSprite1, DropZoneSprite2, DropZoneSprite3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER);
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2
helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255)
DropZoneSprite1 = createSprite(width/2,650,200,20)
DropZoneSprite1.shapeColor = 'red'
DropZoneSprite2 = createSprite(290,610,20,100)
DropZoneSprite2.shapeColor = 'red'
DropZoneSprite3 = createSprite(510,610,20,100)
DropZoneSprite3.shapeColor = 'red'
engine = Engine.create();
world = engine.world;
packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
DropZoneBody1 = Bodies.rectangle(width/2,650,200,20,{isStatic:true})
DropZoneBody2 = Bodies.rectangle(290,610,20,100,{isStatic:true})
DropZoneBody3 = Bodies.rectangle(510,610,20,100,{isStatic:true})
World.add(world, packageBody);
World.add(world,DropZoneBody1)
World.add(world,DropZoneBody2)
World.add(world,DropZoneBody3)
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);
Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false)
}
}
