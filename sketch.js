const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisionHeight = 300;

// Arrays down here.
var divisions = [];
var particles = [];
var plinkos = [];

function preload(){

}
function setup() {
  var canvas = createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,795,800,10);

  for(var x = 0 ; x <= width; x + 80){
  divisions.push(new Ground(x, height - divisionHeight/2, 10, divisionHeight));
}

}

function draw() {
  Engine.update(engine);
  background(0); 

  for(var x = 0; x < divisions.length; x++){
    divisions[x].display();    
  }
 
  ground.display();
  
  drawSprites();
}