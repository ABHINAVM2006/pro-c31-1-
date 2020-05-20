var canvas;
var snake;
var foodX, foodY;   
var score = 0;


function setup()    {
    canvas = createCanvas(400,400);
    snake = new Snake();
    foodLocation();
    frameRate(3);    
}

function draw() {
    background(220, 220, 220);
    snake.display();
    snake.update();
    textSize(25);
    stroke(3);
    fill("red");
    textAlign(CENTER);
    text("SCORE: "+ score, 330, 25);
    if(snake.eat(foodX, foodY)) {
        foodLocation();
    }
    snake.display();
    fill("red");
    rect(foodX,foodY,20,20);
    snake.gameOver();
}

function keyPressed()   {
    if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
    }
    else if(keyCode === RIGHT_ARROW){
        snake.xdir = 20;
        snake.ydir = 0;
    }
    else if(keyCode === UP_ARROW){
        snake.xdir = 0;
        snake.ydir = -20;
    }
    else if(keyCode === DOWN_ARROW){
        snake.xdir = 0;
        snake.ydir = 20;
    }
}
function foodLocation() {
    foodX = floor(random(0,20))*20;
    foodY = floor(random(0,20))*20
}

