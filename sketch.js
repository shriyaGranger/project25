var ground1,paper1,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
dustbin1=new dustbin(1200,650);
paper1=new paper(200,450,40);
ground1=new ground(800,670,1600,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  paper1.display();
  dustbin1.display();
  ground1.display();

  
  drawSprites();
 
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}
}




