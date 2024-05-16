let img;
let pixelSize =4;
var x=[];
var y=[];
//tildeler navne og danner lister

function preload(){
  img = loadImage('billeder/Vani.PNG');
}
//loader billedet

function setup(){
  img.loadPixels()
  w = img.width;
  h = img.height;
  createCanvas(2*w,h);
  noStroke();
}
//giver billedet højde, bredde og definere lokation


function draw(){
  ownFilter();
  image(img,w,0);
for (Mads=1;Mads<x.length;Mads++){
  fill(0)
rect(x[Mads],y[Mads],25,25);
}}
//indsætter billedet
//skaber mulighed for at tegne rektangel

function mouseDragged() {
    x.push(mouseX-12.5);
    y.push(mouseY-12.5); 
}
//fastsætter hvor firkanten skal være hvis musen holdes inde

function mousePressed() {
  x.push(mouseX-12.5);
  y.push(mouseY-12.5); 
}
//fastsætter hvor firkanten skal være hvis musen trykkes

function ownFilter(){
  for (let i=0;i<w; i += pixelSize){
    for (let j=0;j<h; j += pixelSize){
      c = [getPixelValue(0,i,j),
          getPixelValue(1,i,j),
          getPixelValue(2,i,j)];
      fill(c[0]*mouseX/100,c[1]*mouseY/100,0);
      rect(i,j,pixelSize,pixelSize);
    }}}
//farveændring i billedet til venstre    

function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
//angiver hvilken pixel der skal placeres hvor