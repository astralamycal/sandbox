function getCanvas() {
  const canvas = document.getElementById("monCanvas") as HTMLCanvasElement;
  if (!canvas) {
    throw new Error("Le canvas n'a pas été trouvé");
  }
  return canvas;
}

function getContext() {
  const canvas = getCanvas();
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Le contexte 2D n'a pas été trouvé");
  }
  return ctx;
}

const canvas = document.getElementById("monCanvas") as HTMLCanvasElement;

if (!canvas) {
  throw new Error("Le canvas n'a pas été trouvé");
}

const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("Le contexte 2D n'a pas été trouvé");
}

ctx.fillStyle = "purple";

let squareX = 50;
let squareY = 50;
const squareSize = 50;
const speed = 20;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keysPressed: Record<string, boolean> = {};

function drawSquare() {
  const ctx = getContext();
  ctx.fillStyle = "purple";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

document.addEventListener("keydown", (e: KeyboardEvent) => {
  keysPressed[e.key] = true;
});

document.addEventListener("keyup", (e: KeyboardEvent) => {
  keysPressed[e.key] = false;
});

function moveSquare() {
  if (keysPressed.ArrowUp) squareY -= speed;
  if (keysPressed.ArrowDown) squareY += speed;
  if (keysPressed.ArrowLeft) squareX -= speed;
  if (keysPressed.ArrowRight) squareX += speed;

  squareX = Math.max(0, Math.min(squareX, canvas.width - squareSize));
  squareY = Math.max(0, Math.min(squareY, canvas.height - squareSize));
}

function updateGame() {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Le contexte 2D n'a pas été trouvé");
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSquare();
  moveSquare();
  requestAnimationFrame(updateGame);
}

updateGame();
