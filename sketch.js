const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world,ground,box1,box2;
var ground;

function setup(){
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  box1=new Box(200, 100, 50, 50);
  box2=new Box(240, 300, 50, 50);
ground=new Ground(200, 390, 400, 20);
//    var options={
//      isStatic : true
//    }

//   ground = Bodies.rectangle(200,390,200,20,options);
//   World.add(world,ground);

//   var option1={
// restitution:1
//   }

//   ball = Bodies.circle(200,100,20,option1);
//   World.add(world,ball);

}

function draw(){
  background(0);
  Engine.update(engine);

 box1.display();
 box2.display();
 ground.display();
}