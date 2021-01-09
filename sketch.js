const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, square, bob;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }
    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    var square_options ={
        density: 5
    }
    square = Bodies.rectangle(200,200,50,50, square_options);
    World.add(world,square);
    
    var bob_options ={
        restitution: 2.0
    }
    bob = Bodies.rectangle(100,300, 90, 90, bob_options);
    World.add(world,bob);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("pink");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    fill("red");
    rectMode(CENTER);
    rect(square.position.x, square.position.y, 50, 50);

    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    fill("green");
    rectMode(RIGHT);
    rect(bob.position.x, bob.position.y, 90, 90);
}