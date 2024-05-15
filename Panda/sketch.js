let panda;
let peanut;
let mySound;
let jumpSound;
let bamboo;
let end;

hit1=0;
highscore=0;

function preload(){
  end=loadImage('end.png');
  panda=loadImage('Panda.png');
  peanut=loadImage('peanut.png');
  bamboo=loadImage('bamboo.png');
   soundFormats('mp3');
  mySound = loadSound('song.mp3');
  jumpSound = loadSound('jump.mp3')
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xSpeed = -windowWidth/200;
  yCoordinat = windowHeight/2-200;
  yCoordinatpanda = windowHeight/1.35;
  xCoordinatpanda = 150;
  size=windowHeight/6
  xCoordinat = -size;
  jumpSound.setVolume(0.17);
  mySound.setVolume(0.25);
   mySound.play();
}

function draw() {  
 if (mySound.play==false){
   mySound.loop();}
  
   image(bamboo,0,-175,windowWidth,windowHeight+200)
  image(panda,xCoordinatpanda,yCoordinatpanda,size,size)
 fill(0,50,50)
  
  fill(200,0,0)
  image(peanut,xCoordinat,yCoordinat,size-25,size-25)
  xCoordinat+=xSpeed;
 
    textSize(40);
  let s ='Panda Score:'+hit1;
  fill(255);
  text(s,50,50);
  
  textSize(40);
  let hs ='Panda HighScore:'+highscore;
  fill(255);
  text(hs,50,100);
  
  if(hit1>highscore)
    highscore+=1
  
  if(xCoordinat-xCoordinatpanda<=size-25 && xCoordinat-xCoordinatpanda>=-size+100 && yCoordinat-yCoordinatpanda<=15 && yCoordinat-yCoordinatpanda>=-25){
    noLoop()
    background(250,50,50);
    fill(250,50,50);
    image(end,windowWidth/4.1,0,windowWidth/2,windowHeight)
}
}




function mouseClicked(){
  if(mouseClicked){
     xCoordinat=-windowWidth;
     hit1=0;
  xSpeed= -windowWidth/200
     loop()
}}


 function keyPressed(){
if(keyCode === UP_ARROW){
jumpSound.play();
  yCoordinatpanda=windowHeight/1.35-150} 
if(keyCode===DOWN_ARROW){
yCoordinatpanda=windowHeight/1.35}
if(keyCode===LEFT_ARROW && xCoordinat<0){
yCoordinat=windowHeight/1.35-135;
xCoordinat=windowWidth
  xSpeed-=1;
hit1+=1;}   
if(keyCode===RIGHT_ARROW && xCoordinat<0){
yCoordinat=windowHeight/1.35+15;
xCoordinat=windowWidth
  xSpeed-=1;
hit1+=1;
}          
  }