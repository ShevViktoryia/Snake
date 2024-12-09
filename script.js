let blockSize = 25;
let rows = 20;
let cols = 20;
let field, context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

const snake = [];

let gameOver = false;

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
  if (gameOver) return;

  context.fillStyle = "darkgreen";
  context.fillRect(0, 0, field.width, field.height);

  for (let i = snake.length - 1; i > 0; i--) {
    snake[i] = snake[i - 1];
  }
  if (snake.length) {
    snake[0] = [snakeX, snakeY];
  }

  context.fillStyle = "yellow";
  snakeX += velX * blockSize;
  snakeY += velY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY) {
    snake.push([foodX, foodY]);
    generateFood();
  }

  for (let i = 0; i < snake.length; i++) {
    context.fillRect(snake[i][0], snake[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX > cols * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
    alert("game over");
  }

  for (let i = 0; i < snake.length; i++) {
    if (snakeX == snake[i][0] && snakeY == snake[i][1]) {
      gameOver = true;
      alert("game over");
    }
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
