let mic;
let leftHandMove;
let r=0;
let g=0;
let b=255;
let star1;
let star2;

function setup() { 
  createCanvas(600, 600);
mic = new p5.AudioIn();
mic.start();
angleMode(DEGREES);
  star1= new star(0,0);
  star2= new star(150,200);
} 


function draw() { 
  

  
   r= map(mouseX,0,600,0,255);
  b=map(mouseY,0,600,0,255);
  
    background(r,g,b);

eyeMove = map(mic.getLevel(),0,.05,290,310);
  
console.log("mic level is: " + mic.getLevel());

  // leftHandMove =  map(mouseX,0,600,0,0);
  // leftHandMove = mouseX;

  drawHead();
  hands()
  drawEyeBall(eyeMove);
  drawBody();
  
  
    star1.move();
  star1.show(); 
  star2.move();
  star2.show();
} 

function drawHead(){
  push();
  fill(304, 180, 100);
  ellipse(width*0.5, height*.33, width*0.33,height*.33); // head shape
    fill(104, 180, 100);
  ellipse(width*0.416, height*.33, width*0.116,height*.116); // right eye
  fill(104, 180, 100);
  ellipse(width*0.583, height*.33, width*0.116,height*.116); // left eye
  fill(0);
  pop();
}


function drawBody(){
  push();
  fill(304, 180, 100);
  quad(width*0.416, height*0.508, width*0.583, height*0.508, width*0.633, height*0.833, width*0.366, height*0.833); // body
  pop();
}

  function drawEyeBall(xPos){
    push;
  fill(0);
  ellipse(xPos+40, height*.33, width*0.066, height*0.066);
  fill(0);
  ellipse(xPos-40, height*.33, width*0.066, height*0.066);
    pop;
  }

function hands(){
  push();
  translate(width*0.453, height*0.433);
  rotate(30); 
  fill(304, 180, 100);
  rect(0,0, width*0.033, height*0.341,width*0.016,height*0.016);
  pop();

  
  //
  push();
  rotate(PI / -20); 
  fill(304, 180, 100);
  rect(width*0.5, height*0.583, width*0.033, height*0.341,width*0.016,height*0.016);
  pop();
   
}