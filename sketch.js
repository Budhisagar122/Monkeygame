
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, bananaGroup;
var ground;
var score
varsurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >=200){
    monkey.velocityY=-12;
  } 
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  
   drawSprites();
  food();
  obstacles();
}

function food(){
  if(frameCount%80===0){
    var banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage("bananaImage",bananaImage)
    banana.velocityX=-3;
    banana.lifetime=200;
    banana.scale=0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    var obstacle = createSprite(600,305,10,40);
    obstacle.velocityX=-6;
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    obstacle.addImage("obstacleImage",obstacleImage);
  }
}






