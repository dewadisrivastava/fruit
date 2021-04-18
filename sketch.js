var alien,aliensGroup,alienImage
var alien1,aliens1Group,alien1Image
var knife,knifeImage
var fruit,fruitsGroup,fruitImage
var fruit1,fruits1Group,fruit1Image
var fruit2,fruits2Group,fruit2Image
var fruit3,fruits3Group,fruit3Image
var sound1, sound2
var score
var gameOver,gameOverImage
var PLAY=1
var END=0
gameState=PLAY

function preload(){
  knifeImage=loadAnimation("knife.png")
  fruitImage=loadAnimation("fruit1.png")
  fruit1Image=loadAnimation("fruit2.png")
  fruit2Image=loadAnimation("fruit3.png")
  fruit3Image=loadAnimation("fruit4.png")
  alienImage=loadAnimation("alien1.png")
  alien1Image=loadAnimation("alien2.png")
  gameOverImage=loadAnimation("gameover.png")
  sound1=loadSound("knifeSwoosh.mp3")
  sound2=loadSound("gameover.mp3")
}

function setup(){
  createCanvas(500,500)
  knife=createSprite(200,450)
  knife.addAnimation("knife",knifeImage)
  knife.scale=0.5
  
  gameOver=createSprite(200,200)
  gameOver.addAnimation("gameOver",gameOverImage)
  
  fruitsGroup=new Group()
  fruits1Group=new Group()
  fruits2Group=new Group()
  fruits3Group=new Group()
  aliensGroup=new Group()
   aliens1Group=new Group()
  score=0
}

function draw(){
  background("skyblue")
  
  drawSprites()
  if(gameState===PLAY){
    gameOver.visible=false
    if(fruitsGroup.isTouching(knife)){
  fruitsGroup.destroyEach()
  score=score+1
  sound1.play()
}
  if(fruits1Group.isTouching(knife)){
  fruits1Group.destroyEach()
  score=score+1
    sound1.play()
}
  if(fruits2Group.isTouching(knife)){
  fruits2Group.destroyEach()
  score=score+1
    sound1.play()
}
  if(fruits3Group.isTouching(knife)){
  fruits3Group.destroyEach()
  score=score+1
    sound1.play()
    
   
  }
    if(aliensGroup.isTouching(knife)){
      gameState=END
      sound2.play()
    }
      if(aliens1Group.isTouching(knife)){
      gameState=END
      sound2.play()
    
    }
     
    
    
  }else if(gameState===END){
    gameOver.visible=true
    fruit.x=500
    fruit.y=500
    fruit.velocityX=0
    
    fruit1.x=500
    fruit1.y=500
     fruit1.velocityX=0
    
    fruit2.x=500
    fruit2.y=500
     fruit2.velocityX=0
    
    fruit3.x=500
    fruit3.y=500
    fruit3.velocityX=0
    
    
    aliensGroup.destroyEach()
    aliens1Group.destroyEach()
  }
  fruit10()
fruit11()
  fruit12()
  fruit13()
  alien10()
  alien11()
 knife.x=mouseX
  knife.y=mouseY
  text("score:"+score,270,30)
     
    
}

function fruit10(){
  if(frameCount%100===0){
  fruit=createSprite(200,300)
  fruit.addAnimation("fruit",fruitImage)
  fruit.scale=0.3
    fruit.x=Math.round(random(60,300))
    fruitsGroup.add(fruit)
   fruit.velocityX=(8+(score/5))
  
}
}

function fruit11(){
  if(frameCount%200===0){
      fruit1=createSprite(300,0)
fruit1.addAnimation("fruit1",fruit1Image)
  fruit1.scale=0.3
    fruit1.y=Math.round(random(450))
    fruits1Group.add(fruit1)
    fruit1.velocityX=(5+(score/5))
  }
}
function fruit12(){
if(frameCount%100===0){
  fruit2=createSprite(500,150)
  fruit2.addAnimation("fruit2",fruit2Image)
  fruit2.scale=0.3
 fruit2.y= Math.round(random(260,150))
   fruits2Group.add(fruit2)
  fruit2.velocityX=-(8+(score/5))
}
}

function fruit13(){
if(frameCount%100===0){
   fruit3=createSprite(30,500)
  fruit3.addAnimation("fruit3",fruit3Image)
  fruit3.scale=0.2
  fruit3.y=Math.round(random(380,30))
   fruits3Group.add(fruit3)
  fruit3.velocityX=(8+(score/5))
}
}

function alien10(){
  if (frameCount%200===0){
     alien=createSprite(200,0)
  alien.addAnimation("alien",alienImage)
    alien.velocityY=-3
    alien.velocityX=3
    alien.y=Math.round(random(40,500))
    aliensGroup.add(alien)
  }
}
function alien11(){
  if (frameCount%300===0){
     alien1=createSprite(0,200)
  alien1.addAnimation("alien1",alien1Image)
    alien1.velocityY=-3
    alien1.velocityX=3
    alien1.y=Math.round(random(40,500))
    aliens1Group.add(alien1)
  }
}

