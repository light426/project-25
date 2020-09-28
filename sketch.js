
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 20);
	paper = new Paper(10, 100, 650, 10);
	wall1 = new Side(695, 650, 10, 40);
	wall2 = new Side(745, 650, 10, 40);
	wall3 = new Bottom(720, 665, 40, 10);
//	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:50,y:-50});
	}
	
}

