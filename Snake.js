class Snake {
  constructor(){
    this.snakeXPosition = [];    
    this.snakeYPosition = [];
    this.tailCount = 1;    
    this.xdir = 0;               
    this.ydir = 0;      
    this.x = 200;                  
    this.y = 200;            
  }  
  update(){    
    if(!this.gameOver()){   
      this.x += this.xdir;  
      this.y += this.ydir;  
      if(this.snakeXPosition.length >= this.tailCount){  
        this.snakeXPosition.shift();    
        this.snakeYPosition.shift();    
      }
      this.snakeXPosition.push(this.x); 
      this.snakeYPosition.push(this.y); 
    }
  }
  eat(x,y){       
    if(this.x===x && this.y===y){  
      this.tailCount++;
      score+=1;            
      return true;   
    }
    else{
      return false; 
    }
  }
  gameOver(){   
    if(this.x > 400 || this.x < 0 || this.y > 400 || this.y < 0){
      background(0);
      textSize(50);
      stroke("yellow");
      strokeWeight(3);
      fill("red");
      textAlign(CENTER);
      text("GAME OVER", 200, 200); 
      textSize(30);  
      noStroke();
      text("YOUR SCORE:"+score,200,280);     
      return true;
    }
    else  {
      return false;
    }
  }
  display(){    
    for(var i= 0;i<this.tailCount;i++){
      var y = this.snakeYPosition[i];
      var x = this.snakeXPosition[i];
      fill(255);
      rect(x,y,20,20);      
    } 
  }
}