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
  document.addEventListener("keyup", mooving);
  setInterval(updateField, 100);
};

function updateField() {
  context.fillStyle = "darkgreen";
  context.fillRect(0, 0, field.width, field.height);

  context.fillStyle = "yellow";
  snakeX += velX * blockSize;
  snakeY += velY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY) {
    generateFood();
  }
}

function generateFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function mooving(e) {
  switch (e.code) {
    case "KeyW": {
      if (velY != 1) {
        velX = 0;
        velY = -1;
      }
      break;
    }
    case "KeyS": {
      if (velY != -1) {
        velX = 0;
        velY = 1;
      }
      break;
    }
    case "KeyA": {
      if (velX != 1) {
        velX = -1;
        velY = 0;
      }
      break;
    }
    case "KeyD": {
      if (velX != -1) {
        velX = 1;
        velY = 0;
      }
      break;
    }
    default:
      break;
  }
}
