const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20; // Size of each square in the grid
let snake = [{ x: 200, y: 200 }]; // Initial position of the snake
let direction = "RIGHT";
let food = generateFood();
let score = 0;

// Control the snake with arrow keys
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * canvas.width / boxSize) * boxSize,
        y: Math.floor(Math.random() * canvas.height / boxSize) * boxSize
    };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "green" : "lime";
        ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
    });

    // Draw the food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);

    // Move the snake
    let head = { ...snake[0] };

    if (direction === "UP") head.y -= boxSize;
    if (direction === "DOWN") head.y += boxSize;
    if (direction === "LEFT") head.x -= boxSize;
    if (direction === "RIGHT") head.x += boxSize;

    snake.unshift(head);

    // Check if the snake has eaten the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFood();
    } else {
        snake.pop();
    }

    // Check for collision with walls or itself
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        alert("Game Over! Your score was: " + score);
        snake = [{ x: 200, y: 200 }];
        direction = "RIGHT";
        score = 0;
        food = generateFood();
    }
}

// Set the game to run at 100ms intervals
setInterval(draw, 100);
