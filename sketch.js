
var android,androidImage,bgImage;
var die,hit,point,swoosh,wing;
var score=0;

var gameState=1;

function preload(){

androidImage=loadImage("images/android.png")
bgImage=loadImage("images/bg.jpg");
loli1=loadImage("images/lollipop1.png")
loli2=loadImage("images/lollipop2.png")
loli3=loadImage("images/lollipop3.png")
loli4=loadImage("images/lollipop4.png")
loli1flip=loadImage("images/lollipop1 flipped.png")
loli2flip=loadImage("images/lollipop2 flipped.png")
loli3flip=loadImage("images/lollipop3 flipped.png")
loli4flip=loadImage("images/lollipop4 flipped.png")
coinImg=loadImage("images/coin.png")

die=loadSound("audio/die.wav");
hit=loadSound("audio/hit.wav");
point=loadSound("audio/point.wav");
swoosh=loadSound("audio/swoosh.wav");
wing=loadSound("audio/wing.wav");

}



function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(windowWidth-700,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bgImage);
  bg.scale=3;
  bg.velocityX=-1;
  //bg.x=bg.width/2;

  android=createSprite(100, windowHeight/2, 20, 20);
  android.addImage(androidImage);
  android.scale=0.5;

  lollipopGroup=createGroup();

  coinGroup=createGroup();

  android.debug=true;

}

function draw() {
  background("white");  

  if(gameState===1){

    score=score+Math.round(getFrameRate()/60)

  if(bg.x<windowWidth/2-120){
  bg.x=windowWidth-700;
  }

spawnTopLollipop();

spawnBottomLollipop();

spawnCoins();

if(keyDown("space")){

android.velocityY=-12;
wing.play();

}

android.velocityY=android.velocityY+0.5

if(lollipopGroup.isTouching(android)){

 gameState=0;
 die.play();

}
  }
else if(gameState===0){

  android.velocityY=0;
  lollipopGroup.setVelocityXEach(0);
  lollipopGroup.setLifetimeEach(-1);
  coinGroup.setVelocityXEach(0);
  coinGroup.setLifetimeEach(-1);
  bg.velocityX=0;

}

  drawSprites();

  textSize(25)
  fill("black")
  text("Score:"+score,windowWidth-150,50)

}

function spawnTopLollipop(){

if(frameCount%60===0){

var rand=Math.round(random(1,2))

var lollipop=createSprite(windowWidth,windowHeight/4)
lollipop.velocityX=-8;

lollipop.lifetime=windowWidth/8;

lollipop.debug=true;

lollipopGroup.add(lollipop);

lollipop.y=windowHeight/4-50;

var rand2=Math.round(random(1,4))

switch(rand2){

  case 1:lollipop.addImage(loli1flip)
  break;

  case 2:lollipop.addImage(loli2flip)
  break;
  
  case 3:lollipop.addImage(loli3flip)
  break;

  case 4:lollipop.addImage(loli4flip)
  break;

}

  
  }
}


function spawnBottomLollipop(){

  if(frameCount%85===0){
  
  var lollipop=createSprite(windowWidth,windowHeight/4)
  lollipop.velocityX=-8;
  
  lollipop.lifetime=windowWidth/8;
  
  lollipop.debug=true;
  
  lollipopGroup.add(lollipop);
  
    lollipop.y=windowHeight-75;
  
    var rand2=Math.round(random(1,4))
  
    switch(rand2){
  
      case 1:lollipop.addImage(loli1)
      break;
    
      case 2:lollipop.addImage(loli2)
      break;
      
      case 3:lollipop.addImage(loli3)
      break;
    
      case 4:lollipop.addImage(loli4)
      break;
    
    }
  }

  }

  function spawnCoins(){

    if(frameCount % 90===0){

      var coin=createSprite(windowWidth,random(50,windowHeight-50))
       coin.addImage(coinImg);
       coin.velocityX=-5;
      coin.scale=0.2;

      coinGroup.add(coin);

      coin.debug=true;

    }


  }
  