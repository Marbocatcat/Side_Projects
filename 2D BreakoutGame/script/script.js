var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");




    // define starting point by declaring x and y in the canvas
    // and add it to the arc of the circle.
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    // A small value that will keep adding every frame
    var dx = 2;
    var dy = -2;
    // Defines ballRadius used for calculations
    var ballRadius = 10;
    // Defines the paddle 
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width - paddleWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;
    

function drawBall() {
    
     // Add color and shape to the object
    
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "orangered"
    ctx.fill();
    ctx.closePath();
    
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleHeight, paddleWidth,paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawPaddle();
    drawBall();
    // this will keep adding to x and y so the ball can move
    // every 10 milliseconds 
    x += dx;
    y += dy;
    
    // when y and x value of the ball is lower than 0 reverse the y value
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUphandler, false);
function keyDownHandler(e) {
    if(e.keyCode === 39) {
        rightPressed = true;
    } else if(e.keyCode === 37) {
        leftPressed = true;
    }
}

function keyUphandler(e) {
    if(e.keyCode === 39) {
        rightPressed = false;
    } else if(e.keyCode === 37) {
        leftPressed = false;
    }
}





























setInterval(draw, 10);