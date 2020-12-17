
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof , roof1;
var rope1 , rope2 ;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

   roof = new Roof(300,100,550,30);
   roof1 = new Roof(400,200,550,30)
   rope1 = new Rope(roof , roof1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  roof1.display()
  rope1.display();
  

  
 
}



