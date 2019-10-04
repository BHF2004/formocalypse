document.addEventListener("DOMContentLoaded", setupCanvas);

function setupCanvas() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  ctx.scale(10, 10);

 background();
  

 rightWall();
  
 leftWall();


 paddle();
}


function background() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function rightWall() {
    ctx.fillStyle = "white";
    ctx.fillRect(30,0,2,34);

}
function leftWall() {
    ctx.fillStyle ="white";
    ctx.fillRect(8,0,2,34);
}
function paddle(){
    ctx.fillStyle ="white";
    ctx.fillRect(19,34,2,7);
}