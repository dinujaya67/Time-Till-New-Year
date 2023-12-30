// Function to generate a random number between min and max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  document.body.appendChild(snowflake);

  const size = getRandom(3, 10);
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";

  const startPositionX = getRandom(0, window.innerWidth);
  const startPositionY = getRandom(-100, -10);
  const fallSpeed = getRandom(1, 5);
  const rotation = getRandom(0, 360);

  snowflake.style.left = startPositionX + "px";
  snowflake.style.top = startPositionY + "px";
  snowflake.style.transform = "rotate(" + rotation + "deg)";

  // Animation function
  function snowfall() {
    const currentY = parseFloat(snowflake.style.top);
    if (currentY < window.innerHeight) {
      snowflake.style.top = currentY + fallSpeed + "px";
    } else {
      snowflake.style.top = getRandom(-10, -1) + "px";
      snowflake.style.left = getRandom(0, window.innerWidth) + "px";
    }

    requestAnimationFrame(snowfall);
  }

  snowfall();
}

// Create multiple snowflakes
const numSnowflakes = 150;
for (let i = 0; i < numSnowflakes; i++) {
  createSnowflake();
}
