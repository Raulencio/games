const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Canvas dimensions
canvas.width = 800;
canvas.height = 400;

// Game variables
let gameRunning = false;
let player = {
  x: 50,
  y: canvas.height - 50,
  width: 20,
  height: 20,
  dy: 0,
  jumpsLeft: 3, // Allow up to 3 jumps
  rotation: 0, // Variable to store the rotation angle
};
let gravity = 0.42;
let obstacles = [];
let speed = 4;
let spawnRate = 120; // Frames between obstacles
let frameCount = 0;
let saltos = 3;

// Start game on screen touch or key press
function startGame() {
  if (!gameRunning) {
    gameRunning = true;
    obstacles = [];
    player.y = canvas.height - 50;
    player.dy = 0;
    player.jumpsLeft = saltos; // Reset jumps on game start
    player.rotation = 0; // Reset rotation on game start
  }
}

// Handle jump
function jump() {
  if (player.jumpsLeft > 0) {
    player.dy = -10; // Jump velocity
    player.jumpsLeft--; // Decrease the available jumps
    player.rotation += 90; // Increase the rotation angle by 90 degrees each jump
  }
}

// Generate new obstacles
function generateObstacle() {
  let height = Math.random() * (canvas.height / 4) + 42;
  obstacles.push({
    x: canvas.width,
    y: canvas.height - height,
    width: 20,
    height: height,
  });
}

// Update game logic
function update() {
  if (gameRunning) {
    // Move obstacles
    obstacles.forEach((obs) => (obs.x -= speed));
    obstacles = obstacles.filter((obs) => obs.x + obs.width > 0);

    // Gravity effect
    player.dy += gravity;
    player.y += player.dy;

    // Prevent falling through floor
    if (player.y >= canvas.height - player.height) {
      player.y = canvas.height - player.height;
      player.jumpsLeft = saltos; // Reset jumps when touching the ground
    }

    // Check collisions
    for (const obs of obstacles) {
      if (
        player.x < obs.x + obs.width &&
        player.x + player.width > obs.x &&
        player.y < obs.y + obs.height &&
        player.y + player.height > obs.y
      ) {
        gameRunning = false; // Game over
      }
    }

    // Generate new obstacles
    frameCount++;
    if (frameCount % spawnRate === 0) {
      generateObstacle();
    }
  }
}

// Draw game elements
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player (with rotation)
  ctx.save(); // Save the current state of the context
  ctx.translate(player.x + player.width / 2, player.y + player.height / 2); // Move the origin to the center of the player
  ctx.rotate((player.rotation * Math.PI) / 180); // Apply the rotation (convert degrees to radians)
  ctx.fillStyle = "#00f";
  ctx.fillRect(-player.width / 2, -player.height / 2, player.width, player.height); // Draw the player centered on the new origin
  ctx.restore(); // Restore the original state of the context

  // Draw obstacles
  ctx.fillStyle = "#f00";
  obstacles.forEach((obs) => {
    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
  });

  if (!gameRunning) {
    ctx.fillStyle = "#fff";
    ctx.font = "24px Arial";
    ctx.fillText("Press anywhere to start", canvas.width / 2 - 100, canvas.height / 2);
  }
}


// Main game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Event listeners
canvas.addEventListener("mousedown", () => {
  startGame();
  jump();
});
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    startGame();
    jump();
  }
});

// Start the game loop
gameLoop();
