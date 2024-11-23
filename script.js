let blockSize = 25;
let rows = 20;
let cols = 20;
let field, context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

window.onload = () => {
  field = document.querySelector("#game-field");
  field.height = rows * blockSize;
  field.width = cols * blockSize;
  context = field.getContext("2d");
  update();
};

function update() {
  context.fillStyle = "darkgreen";
  context.fillRect(0, 0, field.width, field.height);

  context.fillStyle = "yellow";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
}
