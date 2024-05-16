function setup(){
createCanvas(400,400);
}

function draw(){
  for (let i=0;i<8;i+=0.5){
    for (let j=0;j<8;j+=0.5){
      fill(75*(i*j),75*(i-j),75*(i+j),0.1);
      rect(i*100,j*100,100,100);
    }
  }
  noLoop();
}
