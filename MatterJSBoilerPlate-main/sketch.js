
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine 
let world 

var ground 
var dustbin1
var dustbin2
var ball

//var wall1
//var wall2

var btn1 



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	ellipseMode(RADIUS);

	var Ball_options = {
		isStatic:false,
		restitution:0.95,
		frictionAir:0.01,
		density:1.2
	}

	ball= Bodies.circle(100,25,25,Ball_options)

    World.add(world,ball)

	btn1 = createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce);

	//Create the Bodies Here.
	ground = new Ground (780,700,600,20)
	dustbin1 = new Ground (550,770,20,100)
	dustbin2 = new Ground (650,770,20,100)



	Engine.run(engine);
  
}


function draw() {

	 rectMode(CENTER)
	background("orange");


	ellipse(ball.position.x,ball.position.y,25);
  
	ground.show();
	dustbin1.show();
	dustbin2.show();

	//Engine.update(engine);

}




function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
