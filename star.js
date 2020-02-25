class star{
constructor(x,y){
  
  this.x=0;
  this.y=0;
}

  move(){
  if(this.x<= width && this.y<=height){
     this.x +=1;
     this.y +=1;
     }else {
       this.x=0
       this.y=0
     }
    
  }
  
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x,this.y,100,100);
    
  }
  
  
  
  
}
