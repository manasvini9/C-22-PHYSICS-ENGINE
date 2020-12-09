//Engine,World,Bodies
//matter.js
//Name Spacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object;
var ball;

/* function setup()
1. Create the physics Engine inside a vble called 'engine' using 'Engine.create()'
2. Create a world for the physics Engine inside a vble called 'world' using 'engine.world'
3. Create a rectangular or circular body using 'Bodies.rectangle()/Bodies.circle()' inside any vble
4. Add the bodies to the world using 'World.add(world,object_name)'
5. Give options to the bodies if necessary

function draw()
6. Inside the function draw, represent the Bodies.rectangle or Bodies.circle using 'rect' or 'ellipse'
7. Update the physics Engine using 'Engine.update(engine')*/


function setup() {
  createCanvas(400,400);

  //1
engine = Engine.create();

//2
world = engine.world;

//5
var objectOptions = {
isStatic:true
}

//3
object = Bodies.rectangle(200,380,400,20,objectOptions);

//4
World.add(world,object);

//to create a ball using phy engine and make it bounce
 var ballOptions = {
   restitution:1
 }
ball = Bodies.circle(200,100,30,ballOptions);
 World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  //for Bodies.rectangle
  rectMode(CENTER);
 rect(object.position.x, object.position.y, 400,20);

 //for Bodies.circle
 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y, 30,30);
  drawSprites();
}

//sprite/ rect => ball.x = 200;
//object from phy eng = object.position.x 