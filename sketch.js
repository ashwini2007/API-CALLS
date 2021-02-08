const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var scooter;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  scooter = createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
}


async function getTime(){
  var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var response = await res.json();
    console.log(response)
    var datetime = response.datetime
    var hour = datetime.slice(11,13)
    if (hour>= 6 && hour<=12){
        scooter.shapecolor = "yellow"
    }
    else{
        scooter.shapecolor = "blue"
    }
   
}

