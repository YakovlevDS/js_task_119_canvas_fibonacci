// ? Task:


// Solution 1
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = "destination-over";
let number = 0;
let scale = 30;

function drawFlower() {
  let size = number / 3;

  // Try also 137.3 and 137.6
  let angle = number * 137.5;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  let gradient = ctx.createLinearGradient(
    positionX,
    positionY,
    positionX,
    positionY + size
  );
  gradient.addColorStop(0, "#fff");
  gradient.addColorStop(1, "#b8b8b8");
  ctx.fillStyle = gradient;
  ctx.strokeStyle = "#555";

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number += 0.5;
}

function animate() {
  drawFlower();
  if (number > 150) return;
  requestAnimationFrame(animate);
}

animate();


// ! Explanation: 
