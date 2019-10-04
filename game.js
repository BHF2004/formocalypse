document.addEventListener("DOMContentLoaded", setupCanvas);

function setupCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  ctx.scale(10, 10);

//  background
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

//  right wall
  ctx.fillStyle = "white";
  ctx.fillRect(30,0,2,34);

//  left wall
ctx.fillStyle ="white";
ctx.fillRect(8,0,2,34);
}