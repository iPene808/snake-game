var canvas;
var canvasContext;
var snakeX = 50

window.onload = function gameCanvas() {
canvas = document.getElementById('snakeGarden');
canvasContext = canvas.getContext('2d');

var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);
}

function moveEverything() {
  snakeX = snakeX + 15;
}

function drawEverything() {
  colorRect(0,0,canvas.width,canvas.height, 'aquamarine');
  colorRect(snakeX,275,50,25, 'white');
}

function colorRect(leftX,topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX,topY, width, height);
}
