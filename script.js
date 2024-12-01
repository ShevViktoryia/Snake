let blockSize = 25;
let rows = 20;
let cols = 20;
let field, context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let foodX,
  foodY,
  velX = 0,
  velY = 0;

window.onload = () => {
  field = document.querySelector("#game-field");
  field.height = rows * blockSize;
  field.width = cols * blockSize;
  context = field.getContext("2d");
  generateFood();
  updateField();
};

function updateField() {
  context.fillStyle = "darkgreen";
  context.fillRect(0, 0, field.width, field.height);

  context.fillStyle = "yellow";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);
}

function generateFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function mooving(e) {
  if (e.code === "ArrrowUp") {
    velX = 0;
    velY = -1;
  }
}
