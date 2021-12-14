var space,spaceImg,spaceSound;
var rocket,rocketImg;
var obstacle1,obstacle2,obstacle3,obstacle4;
var obstaclesGroup,asteroidsGroup;
var asteroid3;
var score;

function preload(){
  spaceImg = loadImage("space.png");
  rocketImg = loadImage("rocket.png");
  spaceSound = loadSound("spacesound.mp3");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  asteroid3 = loadImage("asteroid3.png");

}

function setup() {
  createCanvas(1366,656);

  space = createSprite(640,330);
  space.velocityY = 3;
  space.addImage(spaceImg);
  space.scale = 3;

  rocket = createSprite(700,530);
  rocket.addImage(rocketImg);
  rocket.scale = 0.4;

  obstaclesGroup = new Group();
  
  

}

function draw() {

  

  if(space.y>400){
    space.y = 300;
    spaceSound.play();
  }

  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  if(World.frameCount % 140 === 0){
    var obstacle = createSprite(400,100,30,30);
    obstacle.velocityY = 3;
    var rand = Math.round(random(1,4));

    switch(rand){
      case 1 : obstacle.addImage(obstacle1);
                break;
      case 2 : obstacle.addImage(obstacle2);
                break;
      case 3 : obstacle.addImage(obstacle3);
                break;
      case 3 : obsatcle.addImage(obstacle4);
                break;

      default : break;
    }
    obstacle.scale = 0.3;
    obstaclesGroup.add(obstacle);

  }
}


