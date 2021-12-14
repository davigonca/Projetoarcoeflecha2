var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage,arrowGroup,gRed,greenGroup,blueGroup;
var JOGAR = 1;
var ENCERRAR = 0;
var gameState = JOGAR;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");   
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  score = 0
  gRed = new Group();
  arrowGroup = new Group();
  greenGroup = new Group();
  blueGroup  = new Group();
  pinkGroup  = new Group(); 
}

function draw() {
  background(0);
  if (gameState === JOGAR){
    
   scene.velocityX = -3 
   if (scene.x < 0){
     scene.x = scene.width/2;
   }
   
   bow.y = World.mouseY

 if (keyDown("space")){
   createArrow();
 }

var select_balloon = Math.round(random(1,4));
    if (World.frameCount % 100 == 0) {
      switch(select_balloon){
       case 1:redBalloon();
       break;
       case 2:blueBalloon();
       break;
       case 3:greenBalloon();
       break;
       case 4:pinkBalloon();
   break;
      }
    }
if (arrowGroup.isTouching(redBalloon)){
  redBalloon.destroyEach();
  arrowGroup.destroyEach();
  //gameState = ENCERRAR;
}
if (gameState ===ENCERRAR){
  bow.destroy();
  scene.velocityX = 0;
}
if (arrowGroup.isTouching(greenGroup)){
  arrowGroup.destroyEach();
  greenGroup.destroyEach();
  pontos = pontos+3;
} 
if(arrowGroup.isTouching(gRed)){
  arrowGroup.destroyEach();
  gRed.destroyEach();
  pontos =  pontos+4;
}
if (arrowGroup.isTouching(pinkGroup)){
  arrowGroup.destroyEach();
  pinkGroup.destroyEach();
  pontos = pontos+1;
}
if (arrowGroup.isTouching(blueGroup)){
arrowGroup.destroyEach();
blueGroup.destroyEach();
pontos = pontos+2;
}

}

 
 
 
  
    drawSprites();
    text("Pontuação: "+ score, 300, 50);
}
  
 



// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(1,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  gRed.add(red);

}

function blueBalloon() {
  var balaoazul = createSprite(2,Math.round(random(20,370),10,10));
  balaoazul.addImage(blue_balloonImage);
  balaoazul.velocityX = 3;
  balaoazul.lifetime = 150;
  balaoazul.scale = 0.1;
  blueGroup.add(blue);
}
function greenBalloon() {
  var balaoverde = createSprite(3,Math.round(random(20,370),10,10));
  balaoverde.addImage(green_balloonImage);
  balaoverde.velocityX = 3;
  balaoverde.lifetime = 150;
  balaoverde.scale = 0.1;
  greenGroup.add(green);
}
function pinkBalloon() {
  var balaoRosa = createSprite(4,Math.round(random(20,370),10,10));
  balaoRosa.addImage(pink_balloonImage);
  balaoRosa.velocityX = 3;
  balaoRosa.lifetime = 150;
  pinkGroup.add(pink);
}
