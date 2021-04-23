const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var sherlock, sherlockp
var backp, back
var mart, martp
var ruby, rubyp
var theifp, theif
var w1, w2, w3
var button, buttonp
var theifgrp
var btg, btp
var bull
var bullgrp

function setup() {
  createCanvas(800,400);
  theifp=loadImage("Theif.png");
  backp=loadImage("back.jpeg");
  buttonp=loadImage("butt.png");
  sherlockp=loadImage("Sherlock.png")
  martp=loadImage("Mart.png")
  rubyp=loadImage("ruby.png")
  btp=loadImage("bt.png");

  engine = Engine.create();
	world = engine.world;

  sherlock=createSprite(100, 320, 50, 50);
  mart=createSprite(100, 100, 40, 40);
  ruby=createSprite(400, 360, 40, 40)
  w1=createSprite(320, 370, 20, 180)
  w2=createSprite(460, 370, 20, 180)
  w3=createSprite(390, 290, 160, 20)
  button=createSprite(700, 100, 20, 20)
  back=createSprite(400, 200, 40, 40);
  button.addImage(buttonp);
  mart.addImage(martp);
  mart.scale=0.1;
  sherlock.addImage(sherlockp)
  sherlock.scale=0.3
  ruby.addImage(rubyp)
  ruby.scale=0.3
  button.scale=0.2

theifgrp=new Group();
btg=new Group();
bullgrp=new Group

  back.addImage(backp)
	Engine.run(engine);


}

function draw() {
  background(255, 100, 30); 
  
  if(sherlock.isTouching(w1)||sherlock.isTouching(w2)||sherlock.isTouching(w3)||sherlock.isTouching(theifgrp)||sherlock.isTouching(btg)){
    sherlock.destroy();
  }

  if(sherlock.isTouching(ruby)){
    theifgrp.destroyEach();
   ruby.destroy();
    bt();
  }



  imageMode(CENTER)
  if(mart.isTouching(button)){ 
    w1.destroy();
    w2.destroy();
    w3.destroy();
  }

  if(keyDown("space")){
  
    bull=createSprite(sherlock.x, sherlock.y, 30, 10);
    bull.velocityX=3;
    bull.lifetime=90;
    bullgrp.add(bull);
    
  }

  if(bullgrp.isTouching(btg)){
    btg.destroyEach();
    textSize(40)
    
    text("YOU RETRIVED THE JEWEL!", 400, 200)
  }
 

  theives();

  drawSprites();
  sherlock.x=mouseX
  sherlock.y=mouseY
  mart.x=mouseX;

  sherlock.display();
  mart.display();
  ruby.display();
  w1.display();
  w2.display();
  w3.display();
  button.display();
}

function theives(){
  if(frameCount%100===0){
    theif=createSprite(Math.round(random(200, 700)), 330, 40, 40)
    theif.addImage(theifp)
    theif.scale=0.8
    theif.lifetime=50;
    theifgrp.add(theif)
  }
}

function bt(){
  bosst=createSprite(600, 200, 50, 50);
  bosst.addImage(btp)
  bosst.scale=0.2
  btg.add(bosst);
}