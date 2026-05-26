

let size = 30;
let palette = ['#1B120F','#008B3E','#FFF000'];
let bgColor = '#D9D9D9';

function setup() {
  createCanvas(1080, 1080);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(bgColor);
  translate(width/2,height/2);
  rotate(frameCount*-0.35); 
  let r = 240;

  noStroke();
  fill(palette[2]);
  drawFlower(1.5,1,2,frameCount);

  for (let angle = 0; angle < 360; angle += 360/24) {
    let x = cos(angle) * r;
    let y = sin(angle) * r;

    if(angle%2 === 0){
  push();
  rotate(frameCount*-0.3);     
  push();
  translate(x, y);
    rotate(frameCount * 2);  
    drawFlower(1,0,2,-frameCount);//3
  pop();
  pop();
    stroke(palette[0]);
    strokeWeight(3);
    line(x*0.35, y*0.35, x*0.65, y*0.65);//1
    noStroke();
    fill(palette[0]);
    circle(x*0.65, y*0.65, 20);//2
  push();
  rotate(frameCount*0.3);   
  push();
  translate(x*1.43, y*1.43);
  rotate(frameCount * 2);
    drawFlower(0.7,2,0,frameCount);//4
  pop();  
  pop();  
    }else{
  push();
  rotate(frameCount*0.3);    
  push();
  translate(x*1.43, y*1.43);
  rotate(frameCount * -2);    
    drawFlower(0.7,1,2,frameCount); //5
  pop();
  pop();
    }
 
    noStroke();
    fill(palette[0]);
    circle(x*1.74,y*1.74,8); //6
  push();
  rotate(frameCount*0.24); 
  push();
  translate(x*2.05, y*2.05);
  rotate(frameCount * -2);
    drawFlower(0.35,1,2,frameCount); //7
  pop();
  pop();
  }
}


function drawFlower(fs,col1,col2,rot){
 push();
 rotate(rot * 0.2);
 fill(palette[col1]);
 circle(size/2*fs,+size/2*fs,size*fs);
 circle(+size/2*fs,-size/2*fs,size*fs);
 circle(-size/2*fs,+size/2*fs,size*fs);
 circle(-size/2*fs,-size/2*fs,size*fs);
 fill(palette[col2]);
 circle(0,0,size*fs*0.8);
 pop();
}
