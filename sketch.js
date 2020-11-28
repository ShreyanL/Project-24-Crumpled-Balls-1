
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperBall;
var b1, b2, b3, b1Sprite, b2Sprite, b3Sprite;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height-10, 800, 20);
	paperBall = new Paper(60, height-40, 20);

	// Create Red Box For Dropping The Package
	b1Sprite = createSprite(580, height - 60, 20, 60);
	b1Sprite.shapeColor = rgb(255, 0, 0);
	b1 = Bodies.rectangle(580, height - 60, 20, 60, {isStatic:true});
	World.add(world, b1);

	b2Sprite = createSprite(640, height - 40, 120, 20);
	b2Sprite.shapeColor = rgb(255, 0, 0);
	b2 = Bodies.rectangle(640, height - 40, 120, 20, {isStatic:true});
	World.add(world, b2);

	b3Sprite = createSprite(690, height - 60, 20, 60);
	b3Sprite.shapeColor = rgb(255, 0, 0);
	b3 = Bodies.rectangle(690, height - 60, 20, 60);
	World.add(world, b3);

	Engine.run(engine);
  
}


function draw() 
{
  	rectMode(CENTER);
  	background(0);
  
	ground.display();
	paperBall.display();
	
	drawSprites();	
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:62, y:-62});
	}

}

