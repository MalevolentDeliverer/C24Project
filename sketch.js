
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,trash,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,100,20);
trash1 = new Dustbin(800,370,100,15);
trash2=new Dustbin(750,360,15,100);
trash3=new Dustbin(850,360,15,100);
ground = new Ground(600,400,1200,50);

	//Engine.run(engine);
  
}


function draw() {
	background("black");
	Engine.update(engine);
  
  trash1.display();
  trash2.display();
  trash3.display();
	paper.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:54,y:-100});

}

}


